import React, { useState } from 'react';
import { Send, Loader2, Info } from 'lucide-react';

const ServiceInquiryForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        role: '',
        location: '',
        orgType: '',
        assistance: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // Using FormSubmit.co
        const endpoint = "https://formsubmit.co/ajax/kumarsasi9081@gmail.com";

        try {
            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    _subject: `Service Inquiry: ${formData.company}`,
                    ...formData,
                    _template: 'table',
                    _captcha: "false",
                    _autoresponse: "Thanks for your inquiry! We'll be in touch soon."
                })
            });

            if (response.ok) {
                setSubmitStatus('success');
                setIsSubmitting(false);
                setFormData({
                    name: '', email: '', company: '', phone: '',
                    role: '', location: '', orgType: '', assistance: ''
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

    return (
        <section className="py-20 bg-[#0F265C] text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-black mb-4">Start Your Digital Transformation</h2>
                    <p className="text-slate-300 text-lg">
                        Follow us on social media for latest updates. You can find us on
                    </p>
                    {/* Social icons are usually global or in footer, keeping simple here per request */}
                    <div className="flex justify-center gap-4 mt-4">
                        {/* Placeholder for social icons if needed, or rely on footer */}
                    </div>
                </div>

                <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-12 text-slate-900 shadow-2xl">
                    {submitStatus === 'success' && (
                        <div className="mb-8 p-4 bg-green-50 text-green-700 rounded-xl text-center font-bold border border-green-200">
                            Inquiry Sent Successfully! We'll contact you shortly.
                        </div>
                    )}
                    {submitStatus === 'error' && (
                        <div className="mb-8 p-4 bg-red-50 text-red-700 rounded-xl text-center font-bold border border-red-200">
                            Something went wrong. Please try again.
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        {/* Left Col */}
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Name <span className="text-red-500">*</span></label>
                                <input
                                    type="text" name="name" required
                                    placeholder="Enter Your Name"
                                    value={formData.name} onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Contact Number <span className="text-red-500">*</span></label>
                                <div className="flex">
                                    <span className="inline-flex items-center px-3 bg-slate-100 border border-r-0 border-slate-200 rounded-l-lg text-slate-500 text-sm">🇮🇳 +91</span>
                                    <input
                                        type="tel" name="phone" required
                                        placeholder="98765 43210"
                                        value={formData.phone} onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-r-lg focus:border-blue-500 outline-none"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Choose your organization type <span className="text-red-500">*</span></label>
                                <select
                                    name="orgType" required
                                    value={formData.orgType} onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none appearance-none"
                                >
                                    <option value="">- Select -</option>
                                    <option value="Startup">Startup</option>
                                    <option value="SME">SME</option>
                                    <option value="Enterprise">Enterprise</option>
                                    <option value="Non-Profit">Non-Profit</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">How did you hear about us? <span className="text-red-500">*</span></label>
                                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none appearance-none">
                                    <option>- Select -</option>
                                    <option>Social Media</option>
                                    <option>Google Search</option>
                                    <option>Referral</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>

                        {/* Right Col */}
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Email <span className="text-red-500">*</span></label>
                                <input
                                    type="email" name="email" required
                                    placeholder="Email Address"
                                    value={formData.email} onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1">Company Name <span className="text-red-500">*</span></label>
                                    <input
                                        type="text" name="company" required
                                        placeholder="Company Name"
                                        value={formData.company} onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1">Role / Designation <span className="text-red-500">*</span></label>
                                    <input
                                        type="text" name="role" required
                                        placeholder="Your Role"
                                        value={formData.role} onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Location <span className="text-red-500">*</span></label>
                                <input
                                    type="text" name="location" required
                                    placeholder="City, Country"
                                    value={formData.location} onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Assistance required for <span className="text-red-500">*</span></label>
                                <select
                                    name="assistance" required
                                    value={formData.assistance} onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 outline-none appearance-none"
                                >
                                    <option value="">- Select -</option>
                                    <option value="Mobile App Dev">Mobile App Development</option>
                                    <option value="Web Development">Web Development</option>
                                    <option value="Cyber Security">Cyber Security</option>
                                    <option value="Staffing">Staffing</option>
                                    <option value="IT Support">IT Support</option>
                                </select>
                            </div>
                        </div>

                        <div className="md:col-span-2 pt-6 flex justify-center">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-3 text-lg disabled:opacity-75 disabled:hover:scale-100"
                            >
                                {isSubmitting ? (
                                    <>Processing... <Loader2 className="animate-spin" /></>
                                ) : (
                                    <>Request Consultation <Send size={20} /></>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ServiceInquiryForm;
