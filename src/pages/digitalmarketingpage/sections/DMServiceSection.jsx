import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const DMServiceSection = ({ title, subtitle, items, id, bgColor = "bg-white" }) => (
    <section id={id} className={`py-24 ${bgColor} overflow-hidden`}>
        <div className="container mx-auto px-6 md:px-12">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 uppercase tracking-wider">{title}</h2>
                {subtitle && <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">{subtitle}</p>}
                <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full mt-8"></div>
            </motion.div>

            <div className="space-y-32">
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                        className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}
                    >
                        <div className="lg:w-1/2 w-full flex justify-center">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="relative"
                            >
                                {/* Decorative blob behind image */}
                                <div className={`absolute -top-10 -left-10 w-full h-full ${index % 2 === 0 ? 'bg-blue-50' : 'bg-cyan-50'} rounded-full blur-3xl -z-10 opacity-70`}></div>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-auto max-w-md md:max-w-lg object-contain relative z-10 rounded-xl shadow-lg"
                                />
                            </motion.div>
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <h3 className="text-3xl md:text-3xl font-bold text-slate-800 mb-4">{item.title}</h3>
                            <p className="text-lg text-slate-600 leading-relaxed whitespace-pre-line text-justify mb-6">{item.description}</p>

                            {/* Features List */}
                            {item.features && (
                                <ul className="space-y-3 mb-8">
                                    {item.features.slice(0, 5).map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-slate-700">
                                            <span className="mr-3 text-blue-500 mt-1">✔</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            <Link
                                to={`/dm-services/${item.id}`}
                                className="inline-flex items-center text-white bg-blue-600 px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors uppercase tracking-wider text-sm group shadow-lg hover:shadow-blue-500/30"
                            >
                                Explore Service <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default DMServiceSection;
