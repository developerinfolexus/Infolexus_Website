import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

const ServiceInquiryForm = ({ id, variant = 'default' }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const [formData, setFormData] = useState({
        // Common
        name: '',
        email: '',
        phone: '',
        location: '',

        // Business / Default
        company: '',
        role: '',
        orgType: '',
        assistance: '',
        orgTypeOther: '',
        assistanceOther: '',
        howDidYouHear: '',
        howDidYouHearOther: '',

        // Job Seeker / Upskilling
        collegeName: '',
        degree: '',
        yearOfPassing: '',
        interest: '',
        learningMode: '',
        currentStatus: '',
        experienceDetails: '',
        preferredTime: '',

        // College
        instituteName: '',
        studentCount: '',
        programType: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // Using FormSubmit.co
        const endpoint = "https://formsubmit.co/ajax/support@infolexus.com";

        // Construct Subject based on variant
        let emailSubject = 'New Inquiry';
        if (variant === 'job-seeker') emailSubject = `Course Registration: ${formData.name}`;
        else if (variant === 'college') emailSubject = `College Partnership Inquiry: ${formData.instituteName}`;
        else emailSubject = `Service Inquiry: ${formData.company}`;

        try {
            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    _subject: emailSubject,
                    ...formData,
                    // Handle 'Other' fields logic if mostly for Default
                    orgType: formData.orgType === 'Other' ? formData.orgTypeOther : formData.orgType,
                    howDidYouHear: formData.howDidYouHear === 'Other' ? formData.howDidYouHearOther : formData.howDidYouHear,
                    assistance: formData.assistance === 'Other' ? formData.assistanceOther : formData.assistance,

                    // Metadata
                    _template: 'table',
                    _captcha: "false",
                    _autoresponse: "Thank you for contacting Infolexus. We have received your inquiry and will get back to you shortly."
                })
            });

            if (response.ok) {
                setSubmitStatus('success');
                setIsSubmitting(false);
                setFormData({
                    name: '', email: '', phone: '', location: '', company: '', role: '',
                    orgType: '', assistance: '', orgTypeOther: '', assistanceOther: '',
                    howDidYouHear: '', howDidYouHearOther: '', collegeName: '', degree: '',
                    yearOfPassing: '', interest: '', learningMode: '', currentStatus: '',
                    experienceDetails: '', preferredTime: '', instituteName: '',
                    studentCount: '', programType: ''
                });
                setTimeout(() => setSubmitStatus(null), 5000);
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            console.error(error);
            setSubmitStatus('error');
            setIsSubmitting(false);
        }
    };

    // --- RENDER CONTENT BASED ON VARIANT ---
    const renderHeading = () => {
        if (variant === 'job-seeker') return { title: "Register for Upskilling Course", subtitle: "Take the first step towards your dream career." };
        if (variant === 'college') return { title: "Empower Your Institution", subtitle: "Partner with us for industry-leading campus training and placement solutions." };
        return { title: "Start Your Digital Transformation", subtitle: "Follow us on social media for latest updates." };
    };

    const { title, subtitle } = renderHeading();

    return (
        <section id={id} className="py-20 bg-[#081A4A] text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-black mb-4">{title}</h2>
                    <p className="text-slate-300 text-lg">{subtitle}</p>
                </div>

                <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-12 text-slate-900 shadow-2xl">
                    {submitStatus === 'success' && (
                        <div className="mb-8 p-4 bg-green-50 text-green-700 rounded-xl text-center font-bold border border-green-200">
                            Registration Successful! We&apos;ll contact you shortly.
                        </div>
                    )}
                    {submitStatus === 'error' && (
                        <div className="mb-8 p-4 bg-red-50 text-red-700 rounded-xl text-center font-bold border border-red-200">
                            Something went wrong. Please try again.
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className={variant === 'job-seeker' ? "grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6" : "grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"}>

                        {/* ================= JOB SEEKER FORM ================= */}
                        {variant === 'job-seeker' && (
                            <>
                                {/* Row 1 */}
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1">Full Name <span className="text-red-500">*</span></label>
                                    <input type="text" name="name" required placeholder="Enter Your Name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1">Mobile Number <span className="text-red-500">*</span></label>
                                    <div className="flex">
                                        <span className="inline-flex items-center px-3 bg-slate-100 border border-r-0 border-slate-200 rounded-l-lg text-slate-500 text-sm">🇮🇳 +91</span>
                                        <input type="tel" name="phone" required placeholder="98765 43210" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-r-lg focus:border-blue-500 outline-none" />
                                    </div>
                                </div>

                                {/* Row 2 */}
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1">Email ID <span className="text-red-500">*</span></label>
                                    <input type="email" name="email" required placeholder="email@example.com" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1">College Name <span className="text-red-500">*</span></label>
                                    <input type="text" name="collegeName" required placeholder="Enter College Name" value={formData.collegeName} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none" />
                                </div>

                                {/* Row 3 */}
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1">Degree <span className="text-red-500">*</span></label>
                                    <select name="degree" required value={formData.degree} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none appearance-none">
                                        <option value="">- Select -</option>
                                        <option value="BE / BTech">BE / BTech</option>
                                        <option value="BSc">BSc</option>
                                        <option value="BCA">BCA</option>
                                        <option value="MCA">MCA</option>
                                        <option value="MSc">MSc</option>
                                        <option value="MBA">MBA</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1">Year of Passing <span className="text-red-500">*</span></label>
                                    <select name="yearOfPassing" required value={formData.yearOfPassing} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none appearance-none">
                                        <option value="">- Select -</option>
                                        <option value="2023">2023</option>
                                        <option value="2024">2024</option>
                                        <option value="2025">2025</option>
                                        <option value="2026">2026</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                {/* Row 4 */}
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-bold text-slate-700 mb-1">Interested Course / Domain <span className="text-red-500">*</span></label>
                                    <select name="interest" required value={formData.interest} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none appearance-none">
                                        <option value="">- Select Course -</option>
                                        <option value="Full Stack Development">Full Stack Development</option>
                                        <option value="Python">Python</option>
                                        <option value="Java">Java</option>
                                        <option value="Frontend (React)">Frontend (React)</option>
                                        <option value="Data Science">Data Science</option>
                                        <option value="AI / Machine Learning">AI / Machine Learning</option>
                                        <option value="Cloud / DevOps">Cloud / DevOps</option>
                                    </select>
                                </div>

                                {/* Row 5 - Radios */}
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Learning Mode <span className="text-red-500">*</span></label>
                                    <div className="flex gap-4">
                                        <label className="flex items-center gap-2 cursor-pointer text-slate-700">
                                            <input type="radio" name="learningMode" value="Online" checked={formData.learningMode === 'Online'} onChange={handleChange} className="w-4 h-4 text-blue-600" required /> Online
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer text-slate-700">
                                            <input type="radio" name="learningMode" value="Offline" checked={formData.learningMode === 'Offline'} onChange={handleChange} className="w-4 h-4 text-blue-600" /> Offline
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Current Status <span className="text-red-500">*</span></label>
                                    <div className="flex gap-4 flex-wrap">
                                        <label className="flex items-center gap-2 cursor-pointer text-slate-700">
                                            <input type="radio" name="currentStatus" value="Fresher" checked={formData.currentStatus === 'Fresher'} onChange={handleChange} className="w-4 h-4 text-blue-600" required /> Fresher
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer text-slate-700">
                                            <input type="radio" name="currentStatus" value="Job Seeker" checked={formData.currentStatus === 'Job Seeker'} onChange={handleChange} className="w-4 h-4 text-blue-600" /> Job Seeker
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer text-slate-700">
                                            <input type="radio" name="currentStatus" value="Working Professional" checked={formData.currentStatus === 'Working Professional'} onChange={handleChange} className="w-4 h-4 text-blue-600" /> Professional
                                        </label>
                                    </div>
                                </div>

                                {/* Row 6 */}
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-bold text-slate-700 mb-1">Any Experience or Project? (Optional)</label>
                                    <input type="text" name="experienceDetails" placeholder="Briefly describe any experience or project" value={formData.experienceDetails} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none" />
                                </div>

                                {/* Row 7 */}
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1">Preferred Contact Time <span className="text-red-500">*</span></label>
                                    <select name="preferredTime" required value={formData.preferredTime} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none appearance-none">
                                        <option value="">- Select -</option>
                                        <option value="Morning">Morning</option>
                                        <option value="Afternoon">Afternoon</option>
                                        <option value="Evening">Evening</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1">How did you hear about us? <span className="text-red-500">*</span></label>
                                    <select name="howDidYouHear" required value={formData.howDidYouHear} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none appearance-none">
                                        <option value="">- Select -</option>
                                        <option value="Friend">Friend</option>
                                        <option value="Instagram">Instagram</option>
                                        <option value="LinkedIn">LinkedIn</option>
                                        <option value="College">College</option>
                                        <option value="Website">Website</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </>
                        )}

                        {/* ================= COLLEGE FORM ================= */}
                        {variant === 'college' && (
                            <>
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1">Institute Name <span className="text-red-500">*</span></label>
                                        <input type="text" name="instituteName" required placeholder="Name of College/Institute" value={formData.instituteName} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1">Contact Person Name <span className="text-red-500">*</span></label>
                                        <input type="text" name="name" required placeholder="Enter Name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1">Contact Number <span className="text-red-500">*</span></label>
                                        <div className="flex">
                                            <span className="inline-flex items-center px-3 bg-slate-100 border border-r-0 border-slate-200 rounded-l-lg text-slate-500 text-sm">🇮🇳 +91</span>
                                            <input type="tel" name="phone" required placeholder="98765 43210" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-r-lg focus:border-blue-500 outline-none" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1">Email <span className="text-red-500">*</span></label>
                                        <input type="email" name="email" required placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none" />
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1">Designation <span className="text-red-500">*</span></label>
                                        <input type="text" name="role" required placeholder="e.g. Placement Officer, HOD" value={formData.role} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1">Requirement Type <span className="text-red-500">*</span></label>
                                        <select name="programType" required value={formData.programType} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none appearance-none">
                                            <option value="">- Select -</option>
                                            <option value="Technical Training">Technical Training (Workshops/Bootcamps)</option>
                                            <option value="Placement Drive">Campus Placement Drive</option>
                                            <option value="Soft Skills">Soft Skills & Aptitude</option>
                                            <option value="Faculty Development">Faculty Development Program</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1">Location <span className="text-red-500">*</span></label>
                                        <input type="text" name="location" required placeholder="City/State" value={formData.location} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none" />
                                    </div>
                                </div>
                            </>
                        )}

                        {/* ================= DEFAULT FORM (B2B) ================= */}
                        {variant === 'default' && (
                            <>
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1">Name <span className="text-red-500">*</span></label>
                                        <input type="text" name="name" required placeholder="Enter Your Name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1">Contact Number <span className="text-red-500">*</span></label>
                                        <div className="flex">
                                            <span className="inline-flex items-center px-3 bg-slate-100 border border-r-0 border-slate-200 rounded-l-lg text-slate-500 text-sm">🇮🇳 +91</span>
                                            <input type="tel" name="phone" required placeholder="98765 43210" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-r-lg focus:border-blue-500 outline-none" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1">Choose your organization type <span className="text-red-500">*</span></label>
                                        <select name="orgType" required value={formData.orgType} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none appearance-none">
                                            <option value="">- Select -</option>
                                            <option value="Startup">Startup</option>
                                            <option value="SME">SME</option>
                                            <option value="Enterprise">Enterprise</option>
                                            <option value="Non-Profit">Non-Profit</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1">How did you hear about us? <span className="text-red-500">*</span></label>
                                        <select name="howDidYouHear" value={formData.howDidYouHear} onChange={handleChange} required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none appearance-none">
                                            <option value="">- Select -</option>
                                            <option value="Social Media">Social Media</option>
                                            <option value="Google Search">Google Search</option>
                                            <option value="Referral">Referral</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1">Email <span className="text-red-500">*</span></label>
                                        <input type="email" name="email" required placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-1">Company Name <span className="text-red-500">*</span></label>
                                            <input type="text" name="company" required placeholder="Company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-1">Role <span className="text-red-500">*</span></label>
                                            <input type="text" name="role" required placeholder="Designation" value={formData.role} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1">Assistance required for <span className="text-red-500">*</span></label>
                                        <select name="assistance" required value={formData.assistance} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none appearance-none">
                                            <option value="">- Select -</option>
                                            <option value="Mobile App Dev">Mobile App Development</option>
                                            <option value="Web Development">Web Development</option>
                                            <option value="Cyber Security">Cyber Security</option>
                                            <option value="Staffing">Staffing</option>
                                            <option value="IT Support">IT Support</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-1">Location <span className="text-red-500">*</span></label>
                                        <input type="text" name="location" required placeholder="City/State" value={formData.location} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none" />
                                    </div>
                                </div>
                            </>
                        )}


                        <div className="md:col-span-2 pt-6 flex justify-center">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-3 text-lg disabled:opacity-75 disabled:hover:scale-100"
                            >
                                {isSubmitting ? (
                                    <>Processing... <Loader2 className="animate-spin" /></>
                                ) : (
                                    <>
                                        {variant === 'job-seeker' ? 'Register' : variant === 'college' ? 'Request Proposal' : 'Request Consultation'}
                                        <Send size={20} />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div >
        </section >
    );
};

export default ServiceInquiryForm;
