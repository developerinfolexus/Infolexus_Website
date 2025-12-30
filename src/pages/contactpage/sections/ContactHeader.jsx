import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Phone, Mail, MapPin } from 'lucide-react';
import heroBg from '../../../assets/hero-new-wave.jpg'; // Using one of the available assets

const ContactHeader = () => {
    return (
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#081A4A] text-white">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 select-none">
                <img
                    src={heroBg}
                    alt="Contact Us Background"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#081A4A]/80 via-[#081A4A]/60 to-[#081A4A]" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-flex items-center gap-2 py-1.5 px-5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase mb-8 hover:bg-white/10 transition-colors cursor-default shadow-lg shadow-cyan-500/10">
                            <MessageSquare size={14} />
                            Get in Touch
                        </span>

                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] mb-8 text-white drop-shadow-2xl">
                            Let’s Build Something <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Extraordinary</span> Together.
                        </h1>

                        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-16 font-medium leading-relaxed">
                            Whether you have a groundbreaking idea, a technical challenge, or just want to say hello, our team is ready to listen and collaborate.
                        </p>

                        {/* Contact Details Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

                            {/* Card 1: Email */}
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 transition-all group text-center min-h-[160px] shadow-lg"
                            >
                                <div className="relative mb-4">
                                    <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
                                    <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                                        <Mail size={20} />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <a href="mailto:sales@infolexus.com" className="block text-slate-200 hover:text-cyan-400 text-sm font-medium transition-colors">sales@infolexus.com</a>
                                    <a href="mailto:support@infolexus.com" className="block text-slate-200 hover:text-cyan-400 text-sm font-medium transition-colors">support@infolexus.com</a>
                                </div>
                            </motion.div>

                            {/* Card 2: Phone */}
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 transition-all group text-center min-h-[160px] shadow-lg"
                            >
                                <div className="relative mb-4">
                                    <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
                                    <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                                        <Phone size={20} />
                                    </div>
                                </div>
                                <a href="tel:+919043919570" className="text-lg font-bold text-white hover:text-cyan-400 transition-colors">
                                    +91 90439 19570
                                </a>
                            </motion.div>

                            {/* Card 3: Location */}
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 transition-all group text-center min-h-[160px] shadow-lg"
                            >
                                <div className="relative mb-4">
                                    <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
                                    <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                                        <MapPin size={20} />
                                    </div>
                                </div>
                                <p className="text-slate-300 leading-relaxed max-w-[220px] text-sm">
                                    63/54-55, Dhamu Nagar, Puliyakulam Road,<br /> Coimbatore- 641045
                                </p>
                            </motion.div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactHeader;
