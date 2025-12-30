import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ServiceHero = ({ service, id }) => {
    return (
        <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-slate-900 text-white pt-28">

            {/* Full Background Image Layer */}
            <div className="absolute inset-0 z-0">
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover opacity-70 scale-105 animate-pulse-slow"
                    style={{ animationDuration: '10s' }}
                />
                {/* Dark Gradients for Readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/40 to-slate-900" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 via-transparent to-slate-900/50" />

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.03]"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-left max-w-5xl">
                <Link to="/services" className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-8 transition-colors group backdrop-blur-md bg-white/5 py-2 px-4 rounded-full border border-white/10 hover:bg-white/10">
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to All Services
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >


                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-snug tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 pb-2">
                        {service.title}
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed font-light mb-12">
                        {service.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-start gap-6">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('details').scrollIntoView({ behavior: 'smooth' })}
                            className="px-10 py-5 bg-white text-slate-900 font-bold rounded-2xl shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.5)] transition-all flex items-center gap-3"
                        >
                            Technology Stack <ArrowRight size={20} />
                        </motion.button>
                    </div>

                    {/* Floating Status Cards (Decorative) */}
                    <div className="absolute top-1/2 -right-20 hidden xl:block animate-float-slow">
                        <div className="p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl w-48 text-left">
                            <div className="text-xs text-slate-400 mb-1">Architecture</div>
                            <div className="text-sm font-mono text-emerald-400">Scalable & Secure</div>
                        </div>
                    </div>
                    <div className="absolute top-2/3 right-10 hidden xl:block animate-float-slower">
                        <div className="p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl w-48 text-left">
                            <div className="text-xs text-slate-400 mb-1">Availability</div>
                            <div className="text-sm font-mono text-violet-400">99.9% Uptime</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceHero;
