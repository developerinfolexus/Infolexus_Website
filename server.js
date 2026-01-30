import express from 'express';
import nodemailer from 'nodemailer';
import multer from 'multer';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;

// Middleware
app.use(cors());
app.use(express.json());

// Configure Multer for file uploads (Disk Storage)
import fs from 'fs';

const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        // Sanitize filename to prevent issues
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname.replace(/\s+/g, '_'));
    }
});

const upload = multer({ storage: storage });

// Serve uploaded files statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Helper to save application data
const saveApplication = (data) => {
    const dbPath = path.join(__dirname, 'applications.json');
    let applications = [];
    if (fs.existsSync(dbPath)) {
        try {
            const fileData = fs.readFileSync(dbPath, 'utf8');
            applications = JSON.parse(fileData);
        } catch (e) {
            console.error("Error reading db", e);
        }
    }
    applications.push(data);
    fs.writeFileSync(dbPath, JSON.stringify(applications, null, 2));
};

// Application Submission Endpoint
app.post('/send-application', upload.single('attachment'), async (req, res) => {
    try {
        // Extract common fields, keep the rest in otherFields
        const { name, email, phone, position, message, ...otherFields } = req.body;
        const file = req.file;



        // Format date in IST (Indian Standard Time)
        const istDate = new Date().toLocaleString('en-IN', {
            timeZone: 'Asia/Kolkata',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });

        const applicationData = {
            id: Date.now(),
            name,
            email,
            phone,
            position: position || 'N/A',
            message,
            ...otherFields, // Save all other fields (college, degree, etc.)
            resumePath: file ? `/uploads/${file.filename}` : null,
            originalResumeName: file ? file.originalname : null,
            date: istDate,
            dateISO: new Date().toISOString()
        };

        // Save to local JSON "database"
        saveApplication(applicationData);

        // Determine recipient based on recipientType
        const recipientType = req.body.recipientType || 'support'; // Default to support
        const emailUser = recipientType === 'mani' ? process.env.MANI_EMAIL : process.env.SUPPORT_EMAIL;
        const emailPass = recipientType === 'mani' ? process.env.MANI_EMAIL_PASS : process.env.SUPPORT_EMAIL_PASS;



        // Determine SMTP host - Use .env value or auto-detect
        // If MANI_EMAIL is a Google Workspace email, we must use smtp.gmail.com
        const smtpHost = process.env.SMTP_HOST || (emailUser && emailUser.includes('@gmail.com') ? 'smtp.gmail.com' : 'mail.infolexus.com');
        const smtpPort = parseInt(process.env.SMTP_PORT) || 465;

        // Attempt to send email
        if (process.env.DISABLE_EMAIL === 'true') {

        } else {


            try {
                if (!emailUser || !emailPass) {
                    throw new Error('Missing email credentials for ' + (recipientType === 'mani' ? 'Mani' : 'Support'));
                }
                const transporter = nodemailer.createTransport({
                    host: smtpHost,
                    port: smtpPort,
                    secure: smtpPort === 465, // true for 465 (SSL), false for 587 (STARTTLS)
                    auth: {
                        user: emailUser,
                        pass: emailPass
                    }
                });

                // Construct dynamic field list for email
                const otherFieldsHtml = Object.entries(otherFields)
                    .map(([key, value]) => `<p><strong>${key.replace(/([A-Z])/g, ' $1').trim()}:</strong> ${value}</p>`)
                    .join('');

                // Sanitize filename for email attachment (remove non-standard chars)
                // Sanitize filename if exists
                const sanitizedFilename = file ? file.originalname.replace(/[^a-zA-Z0-9._-]/g, '_') : null;

                const mailOptions = {
                    from: `"Infolexus Application" <${emailUser}>`,
                    replyTo: email,
                    to: emailUser,
                    subject: `New Application: ${position || 'Placement Support'} - ${name}`,
                    headers: {
                        'X-Priority': '1',
                        'X-MSMail-Priority': 'High',
                        'Importance': 'high'
                    },
                    html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">New Application Received</h2>
                        <p><strong>Submitted on:</strong> ${istDate}</p>
                        <hr style="border: 1px solid #e5e7eb; margin: 20px 0;" />
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                        <p><strong>Phone:</strong> ${phone}</p>
                        <p><strong>Position/Type:</strong> ${position || 'Student/Job Seeker'}</p>
                        ${otherFieldsHtml}
                        <p><strong>Message:</strong><br>${message || 'No message provided'}</p>
                        ${applicationData.resumePath ? `<p><strong>Resume:</strong> <a href="${BASE_URL}${applicationData.resumePath}" style="color: #2563eb;">Download Resume (Server must be running)</a></p>` : ''}
                        <hr style="border: 1px solid #e5e7eb; margin: 20px 0;" />
                        <p style="color: #6b7280; font-size: 12px;">This email was sent from Infolexus website contact form.</p>
                    </div>
                `,
                    attachments: file ? [
                        {
                            filename: sanitizedFilename,
                            path: path.join(__dirname, file.path)
                        }
                    ] : []
                };

                await transporter.sendMail(mailOptions);

            } catch (emailError) {
                console.error('Email sending failed, but application saved:', emailError);
            }
        }

        res.status(200).json({ success: true, message: 'Application submitted successfully' });
    } catch (error) {
        console.error('Error processing application:', error);
        res.status(500).json({ success: false, message: 'Failed to process application', error: error.message });
    }
});

// Admin Enpoint to get applications
app.get('/api/applications', (req, res) => {
    const dbPath = path.join(__dirname, 'applications.json');
    if (fs.existsSync(dbPath)) {
        res.json(JSON.parse(fs.readFileSync(dbPath, 'utf8')));
    } else {
        res.json([]);
    }
});

// Serve React App (Production) - Commented out for local dev stability if needed
// This strictly serves the build folder for cPanel/Production deployments
// app.use(express.static(path.join(__dirname, 'dist')));

// Catch-all handler for React Routing
// app.get('*', (req, res) => {
//     const indexPath = path.join(__dirname, 'dist', 'index.html');
//     if (fs.existsSync(indexPath)) {
//         res.sendFile(indexPath);
//     } else {
//         res.status(404).send('Build not found. Please run "npm run build" first.');
//     }
// });

app.listen(PORT, () => {

});
