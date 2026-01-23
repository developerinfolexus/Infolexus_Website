import React, { useState, useRef } from 'react';
import { Send, Upload, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const ApplicationForm = () => {
    const formRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
    const [fileName, setFileName] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        position: '',
        message: '',
        experienceLevel: 'Fresher',
        yearsOfExperience: '',
        isCustomPosition: false
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // Using FormSubmit.co for free, simulated unlimited emails
        // No API key required, just the destination email
        // We use the /ajax endpoint to keep the user on our page (no redirect)
        const endpoint = "https://formsubmit.co/ajax/mani@infolexus.com";

        try {
            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    _subject: `New Job Application: ${formData.position}`,
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    position: formData.position,
                    message: formData.message,
                    // Sending only the filename as this is a "demo" upload
                    resume_status: fileName ? `Attached: ${fileName}` : 'No resume attached',
                    _template: 'table', // FormSubmit formats it nicely in a table
                    _captcha: "false", // Disable captcha for easier testing
                    _autoresponse: "Thank you for your application. We will review it shortly." // Auto-reply to user
                })
            });

            if (response.ok) {
                setSubmitStatus('success');
                setIsSubmitting(false);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    position: '',
                    message: ''
                });
                setFileName('');
                // Reset status after 5 seconds
                setTimeout(() => setSubmitStatus(null), 5000);
            } else {
                throw new Error('Submission failed');
            }
        } catch {
            // console.error('Failed to send email:');
            setSubmitStatus('error');
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 sticky top-24">
            <h3 className="text-3xl font-black text-slate-900 mb-2 text-center">Apply Now</h3>
            <p className="text-slate-500 mb-8 text-center font-medium">Join our team of innovators.</p>

            {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-xl flex items-center gap-3 border border-green-200">
                    <CheckCircle size={20} />
                    <div>
                        <p className="font-bold">Application Sent!</p>
                        <p className="text-sm">We&apos;ve received your details and will contact you soon.</p>
                    </div>
                </div>
            )}

            {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-xl flex items-center gap-3 border border-red-200">
                    <AlertCircle size={20} />
                    <div>
                        <p className="font-bold">Submission Failed</p>
                        <p className="text-sm">Please check your configuration or try again later.</p>
                    </div>
                </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 text-sm font-medium"
                        placeholder="John Doe"
                    />
                </div>

                <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 text-sm font-medium"
                        placeholder="john@example.com"
                    />
                </div>

                <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 text-sm font-medium"
                        placeholder="+91 98765 43210"
                    />
                </div>

                {/* Experience Level */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Experience Level</label>
                        <select
                            name="experienceLevel"
                            value={formData.experienceLevel}
                            onChange={(e) => {
                                setFormData(prev => ({
                                    ...prev,
                                    experienceLevel: e.target.value,
                                    yearsOfExperience: e.target.value === 'Fresher' ? '' : prev.yearsOfExperience
                                }));
                            }}
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 text-sm font-medium"
                        >
                            <option value="Fresher">Fresher</option>
                            <option value="Experienced">Experienced</option>
                        </select>
                    </div>

                    {formData.experienceLevel === 'Experienced' && (
                        <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Years of Exp</label>
                            <input
                                type="number"
                                name="yearsOfExperience"
                                placeholder="e.g. 2.5"
                                value={formData.yearsOfExperience}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 text-sm font-medium"
                            />
                        </div>
                    )}
                </div>

                {/* Position */}
                <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Position Applied For</label>
                    {formData.isCustomPosition ? (
                        <div className="flex gap-2">
                            <input
                                type="text"
                                name="position"
                                required
                                value={formData.position}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 text-sm font-medium"
                                placeholder="Type your position..."
                                autoFocus
                            />
                            <button
                                type="button"
                                onClick={() => setFormData({ ...formData, isCustomPosition: false, position: '' })}
                                className="px-3 py-2 bg-slate-200 hover:bg-slate-300 rounded-xl text-slate-600 font-bold text-xs"
                            >
                                Back
                            </button>
                        </div>
                    ) : (
                        <select
                            name="position"
                            required
                            value={formData.position}
                            onChange={(e) => {
                                if (e.target.value === 'Other') {
                                    setFormData({ ...formData, isCustomPosition: true, position: '' });
                                } else {
                                    handleChange(e);
                                }
                            }}
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 text-sm font-medium"
                        >
                            <option value="">Select a Role</option>
                            <option value="Digital Marketing Executive">Digital Marketing Executive</option>
                            <option value="HR Recruiter">HR Recruiter</option>
                            <option value="Placement Coordinator">Placement Coordinator</option>
                            <option value="Business Development Executive">Business Development Executive</option>
                            <option value="UI/UX Designer">UI/UX Designer</option>
                            <option value="Python Developer">Python Developer</option>
                            <option value="Other">Other (Type Manually)</option>
                        </select>
                    )}
                </div>

                <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Brief Introduction</label>
                    <textarea
                        name="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 text-sm font-medium"
                        placeholder="Tell us a bit about yourself..."
                    ></textarea>
                </div>

                <div className="p-4 border border-dashed border-slate-300 rounded-xl bg-slate-50 text-center relative group hover:border-blue-400 transition-colors">
                    <p className="text-xs text-slate-500 mb-2">Resume Upload (PDF)</p>
                    <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="flex flex-col items-center justify-center gap-1">
                        <Upload size={16} className={`text-slate-400 ${fileName ? 'text-blue-500' : ''}`} />
                        {fileName ? (
                            <span className="text-xs font-bold text-blue-600 truncate max-w-[200px]">{fileName}</span>
                        ) : (
                            <span className="text-slate-400 text-xs font-medium">Click or drag file to upload</span>
                        )}
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:scale-100"
                >
                    {isSubmitting ? (
                        <>Sending... <Loader2 size={18} className="animate-spin" /></>
                    ) : (
                        <>Submit Application <Send size={18} /></>
                    )}
                </button>
            </form>
        </div>
    );
};

export default ApplicationForm;