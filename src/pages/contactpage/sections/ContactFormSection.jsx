import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const ContactFormSection = () => {
    const formRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
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
                    _subject: `New Contact Inquiry: ${formData.subject}`,
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    _template: 'table', // FormSubmit formats it nicely in a table
                    _captcha: "false", // Disable captcha for easier testing
                    _autoresponse: "Thank you for contacting Infolexus. We have received your message and will get back to you shortly."
                })
            });

            if (response.ok) {
                setSubmitStatus('success');
                setIsSubmitting(false);
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
                // Reset status after 5 seconds
                setTimeout(() => setSubmitStatus(null), 5000);
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            console.log('Failed to send email:', error);
            setSubmitStatus('error');
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container mx-auto px-4 md:px-6 py-16 -mt-10">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                {/* Contact Info */}
                <div className="bg-slate-900 text-white p-10 md:p-12 md:w-2/5 flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center shrink-0 text-secondary">
                                    <MapPin size={24} className="text-cyan-400" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Our Office</h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        63/54-55, Dhamu Nagar, Puliyakulam Road,<br />
                                        Coimbatore- 641045
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center shrink-0 text-secondary">
                                    <Phone size={24} className="text-cyan-400" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Phone Number</h3>
                                    <p className="text-slate-400">+91 90439 19570</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center shrink-0 text-secondary">
                                    <Mail size={24} className="text-cyan-400" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Email Address</h3>
                                    <p className="text-slate-400">sales@infolexus.com<br />
                                        support@infolexus.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <div className="w-20 h-1 bg-cyan-500 rounded-full mb-6"></div>
                        <p className="text-slate-400 italic">"Technology is best when it brings people together."</p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="p-10 md:p-12 md:w-3/5 bg-white">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>

                    {submitStatus === 'success' && (
                        <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-xl flex items-center gap-3 border border-green-200">
                            <CheckCircle size={20} />
                            <div>
                                <p className="font-bold">Message Sent!</p>
                                <p className="text-sm">We've received your inquiry and will contact you soon.</p>
                            </div>
                        </div>
                    )}

                    {submitStatus === 'error' && (
                        <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-xl flex items-center gap-3 border border-red-200">
                            <AlertCircle size={20} />
                            <div>
                                <p className="font-bold">Submission Failed</p>
                                <p className="text-sm">Please check your internet connection or try again later.</p>
                            </div>
                        </div>
                    )}

                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium text-slate-700">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                required
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                                placeholder="How can we help?"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                required
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-slate-900 placeholder:text-slate-400 resize-none"
                                placeholder="Tell us more about your project..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] hover:shadow-lg hover:shadow-cyan-500/30 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                        >
                            {isSubmitting ? (
                                <>Sending... <Loader2 size={18} className="animate-spin" /></>
                            ) : (
                                <>Send Message <Send size={18} /></>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactFormSection;
