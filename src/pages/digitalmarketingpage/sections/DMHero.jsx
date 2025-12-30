import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '../../../assets/digitalmarketing1.jpeg'; // Reusing related image

const DMHero = () => {
    return (
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBg}
                    alt="Digital Marketing Excellence"
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-900/90" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Dominate the <span className="text-blue-500">Digital Landscape</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Data-driven strategies, creative storytelling, and technical expertise to elevate your brand and drive measurable growth.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default DMHero;
