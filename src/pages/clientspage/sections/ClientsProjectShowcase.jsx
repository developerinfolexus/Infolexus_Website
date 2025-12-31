import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Code2 } from 'lucide-react';
import deplonoixImg from '../../../assets/DEPLONOIX.png';
import dpImg from '../../../assets/DEPLONOIX.png';
import botiqueImg from '../../../assets/botique.jpeg';
import crmImg from '../../../assets/CRM LANDING.png';
import mobileImg from '../../../assets/mobile 2.png';
import hrImg from '../../../assets/HRM.png';

const projects = [
    {
        id: 5,
        title: 'Deploynix',
        category: 'HR Tech / Job Portal',
        description: 'Revolutionizing recruitment with intelligent matchmaking. Deploynix connects top talent with premier employers through an AI-driven job portal, featuring real-time application tracking and seamless hiring workflows.',
        stack: ['React', 'Tailwind', 'Python', 'Django', 'SQL'],
        image: { desktop: dpImg, mobile: mobileImg },
        accent: 'text-indigo-500',
        bgAccent: 'bg-indigo-500/10',
        link: '#'
    },
    {
        id: 1,
        title: 'Custom CRM Solution',
        category: 'Business Automation / SaaS',
        description: 'Optimizing customer relationship management with a tailored CRM platform. Designed to stream sales pipelines, automate follow-ups, and provide actionable insights for data-driven decision making.',
        stack: ['React', 'Node.js', 'MongoDB', 'AWS'],
        image: crmImg,
        accent: 'text-teal-500',
        bgAccent: 'bg-teal-500/10',
        link: '#'
    },
    {
        id: 2,
        title: 'Nexus HR',
        category: 'Enterprise / HRM',
        description: 'Managing a distributed workforce requires precision. Nexus HR provides a centralized hub for payroll, attendance, and performance tracking with predictive analytics for seamless workforce management.',
        stack: ['React', 'Node.js', 'MongoDB', 'AWS'],
        image: hrImg,
        accent: 'text-blue-500',
        bgAccent: 'bg-blue-500/10',
        link: '#'
    },
    {
        id: 4,
        title: 'HeShe Style Wear',
        category: 'E-commerce / Retail',
        description: 'We developed a premium, performance-driven eCommerce platform for HeShe Style Wear, creating a seamless and visually engaging shopping experience that drives customer engagement and growth.',
        stack: ['Html', 'css', 'js', 'Django', 'SQL'],
        image: botiqueImg,
        accent: 'text-amber-500',
        bgAccent: 'bg-amber-500/10',
        link: '#'
    }
];

const MultiDeviceMockup = ({ image }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const isMultiImage = typeof image === 'object';
    const desktopSrc = isMultiImage ? image.desktop : image;
    const mobileSrc = isMultiImage ? image.mobile : image;

    // Parallax effect for screens
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

    return (
        <div ref={ref} className="relative w-full max-w-[700px] mx-auto h-[400px] md:h-[500px] flex items-end justify-center perspective-[1000px] group">

            {/* --- 1. DESKTOP MONITOR (Back Center) --- */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[120px] md:bottom-[140px] w-[60%] md:w-[65%] z-10 transition-transform duration-700 group-hover:scale-[1.02]">
                {/* Screen Frame */}
                <div className="bg-slate-900 rounded-t-xl p-[1px] md:p-[2px] shadow-2xl border border-slate-700 relative">
                    <div className="aspect-[16/9] bg-slate-950 rounded overflow-hidden relative group-hover:ring-2 ring-blue-500/20 transition-all">
                        <motion.div className="w-full h-full relative">
                            <img src={desktopSrc} alt="Desktop" className="w-full h-full object-cover object-top" />
                        </motion.div>
                        {/* Glare */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                    </div>
                    {/* Chin */}
                    <div className="absolute bottom-0 left-0 right-0 h-4 bg-slate-800 rounded-b-xl flex items-center justify-center">
                        <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                    </div>
                </div>
                {/* Stand */}
                <div className="flex flex-col items-center">
                    <div className="w-1/4 h-12 bg-gradient-to-b from-slate-700 to-slate-600 shadow-inner" />
                    <div className="w-1/2 h-2 bg-slate-300 rounded-t shadow-lg" />
                </div>
            </div>


            {/* --- 2. LAPTOP (Left Front) --- */}
            <div className="absolute left-[0%] md:left-[5%] bottom-[40px] md:bottom-[60px] w-[45%] md:w-[48%] z-20 transition-transform duration-700 group-hover:-translate-x-4 hover:z-30">
                {/* Lid */}
                <div className="bg-[#1a1a1a] rounded-t-lg p-[1px] shadow-2xl ring-1 ring-white/10">
                    <div className="aspect-[16/10] bg-black rounded-[2px] overflow-hidden relative">
                        <motion.div className="w-full h-full relative">
                            <img src={desktopSrc} alt="Laptop" className="w-full h-full object-cover object-top" />
                        </motion.div>
                        <div className="absolute inset-0 bg-gradient-to-bl from-white/5 to-transparent pointer-events-none" />
                    </div>
                </div>
                {/* Base */}
                <div className="bg-[#d1d5db] h-2.5 rounded-b-lg shadow-xl relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gray-400 rounded-b"></div>
                </div>
            </div>


            {/* --- 3. TABLET (Right Front) --- */}
            <div className="absolute right-[12%] md:right-[18%] bottom-[40px] md:bottom-[60px] w-[18%] md:w-[20%] z-20 transition-transform duration-700 group-hover:translate-x-4 group-hover:rotate-3 hover:z-30">
                <div className="bg-slate-800 rounded-[10%] p-[1px] shadow-xl border border-slate-600">
                    <div className="aspect-[3/4] bg-black rounded-[8%] overflow-hidden relative">
                        <motion.div style={{ y: 0 }} className="w-full h-full relative">
                            <img src={mobileSrc} alt="Tablet" className="w-full h-full object-cover object-top" />
                        </motion.div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </div>
                </div>
            </div>


            {/* --- 4. SMARTPHONE (Far Right) --- */}
            <div className="absolute right-[2%] md:right-[5%] bottom-[40px] md:bottom-[60px] w-[8%] md:w-[10%] z-30 transition-transform duration-700 group-hover:translate-x-6 group-hover:-rotate-3 hover:z-40">
                <div className="bg-slate-900 rounded-[14%] p-[1px] shadow-lg border border-slate-700">
                    <div className="aspect-[9/19] bg-black rounded-[12%] overflow-hidden relative">
                        <motion.div style={{ y: 0 }} className="w-full h-full relative">
                            <img src={mobileSrc} alt="Phone" className="w-full h-full object-cover object-top" />
                        </motion.div>
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-black rounded-b-sm"></div>
                    </div>
                </div>
            </div>

            {/* Reflections/Shadows */}
            <div className="absolute bottom-0 w-3/4 h-8 bg-black/20 blur-[40px] rounded-full" />
        </div>
    );
};

const ProjectCard = ({ project, index }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, x: isEven ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }} // trigger later when more visible
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`flex flex - col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items - center gap - 12 lg: gap - 20 mb - 12 last: mb - 0`}
        >
            {/* Visual Side */}
            <div className="w-full lg:w-1/2">
                <MultiDeviceMockup image={project.image} />
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 text-left">
                <div className="flex items-center gap-3 mb-6">
                    <span className={`px - 3 py - 1 rounded - full text - [11px] font - bold uppercase tracking - widest ${project.bgAccent} ${project.accent} `}>
                        {project.category}
                    </span>
                    <div className="h-px bg-slate-200 flex-grow max-w-[100px]" />
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                    {project.title}
                </h3>

                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    {project.description}
                </p>

                <div className="mb-8">
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Code2 size={14} /> Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1.5 bg-slate-100 text-slate-600 text-xs font-semibold rounded-lg border border-slate-200"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-brand-blue font-bold text-sm tracking-wide group hover:text-blue-700 transition-colors"
                >
                    VIEW CASE STUDY
                    <ArrowRight size={16} className="transform transition-transform group-hover:translate-x-1" />
                </a>
            </div>
        </motion.div>
    );
};

const ClientsProjectShowcase = () => {
    return (
        <section className="py-32 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">
                            Featured <span className="text-brand-blue">Projects.</span>
                        </h2>
                        <div className="w-24 h-1.5 bg-brand-blue mx-auto rounded-full mb-8" />
                        <p className="text-lg text-slate-500 font-medium leading-relaxed">
                            A showcase of digital excellence. We deliver enterprise-grade solutions that solve complex challenges and drive real business value.
                        </p>
                    </motion.div>
                </div>

                {/* Projects List */}
                <div className="max-w-[1400px] mx-auto">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientsProjectShowcase;
