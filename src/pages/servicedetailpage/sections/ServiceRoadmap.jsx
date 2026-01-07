import React from 'react';
import { motion } from 'framer-motion';

const themes = {
    it: {
        label: "Workflow",
        labelColor: "text-violet-600",
        numberBg: "bg-slate-900 border-white",
        lineColor: "bg-slate-100"
    },
    dm: {
        label: "Strategic Process",
        labelColor: "text-orange-500",
        numberBg: "bg-gradient-to-r from-orange-500 to-pink-500 border-white",
        lineColor: "bg-orange-100"
    },
    hr: {
        label: "Recruitment Cycle",
        labelColor: "text-emerald-600",
        numberBg: "bg-emerald-600 border-white",
        lineColor: "bg-emerald-50"
    },
    training: {
        label: "Learning Path",
        labelColor: "text-blue-600",
        numberBg: "bg-blue-600 border-white",
        lineColor: "bg-blue-100"
    }
};

const ServiceRoadmap = ({ service, variant = 'it' }) => {
    const theme = themes[variant] || themes.it;
    const steps = service.process || service.roadmap || [];

    if (steps.length === 0) return null;

    return (
        <div>
            <div className="text-center mb-16">
                <span className={`${theme.labelColor} font-bold tracking-widest uppercase text-xs mb-2 block`}>{theme.label}</span>
                <h2 className="text-4xl font-black text-slate-900">Execution Roadmap</h2>
            </div>
            <div className="relative">
                {/* Connecting Line */}
                <div className={`absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 hidden md:block ${theme.lineColor}`}></div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative bg-white p-8 rounded-3xl border border-slate-100 shadow-lg text-center group hover:-translate-y-2 transition-transform"
                        >
                            <div className={`w-10 h-10 mx-auto text-white rounded-full flex items-center justify-center font-bold mb-6 border-4 shadow-xl ${theme.numberBg}`}>
                                {index + 1}
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceRoadmap;
