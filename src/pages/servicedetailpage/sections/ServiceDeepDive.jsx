import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Cpu, Globe, Shield, BarChart } from 'lucide-react';
import {
    SiJavascript, SiTypescript, SiKotlin, SiPython, SiSwift,
    SiSpring, SiFlask, SiDjango, SiScala,
    SiReact, SiRedux, SiAndroid, SiApple,
    SiGooglecloud, SiTerraform, SiDocker, SiKubernetes,
    SiGitlab, SiGithub, SiJenkins,
    SiTensorflow, SiKeras, SiPytorch, SiOpencv, SiSpacy,
    SiApachespark, SiApachehadoop, SiTalend,
    SiPostgresql, SiMysql, SiMongodb, SiApachesolr, SiAmazonredshift, SiRedis,
    // Additions
    SiFlutter, SiFirebase, SiNodedotjs, SiGraphql, SiSqlite,
    SiExpress, SiNextdotjs, SiWordpress, SiShopify, SiHtml5, SiCss3,
    SiSap, SiOracle, SiDotnet,
    SiOpenai, SiScikitlearn, SiHuggingface,
    SiFigma, SiAdobexd, SiSketch, SiMiro,
    SiTableau, SiLooker, SiSnowflake, SiPandas,
    SiSelenium, SiCypress, SiJest, SiPostman, SiApachejmeter,
    SiJira, SiCisco,
    SiGoogleanalytics, SiSemrush, SiHubspot, SiMeta, SiGoogleads, SiMailchimp,
    SiSplunk, SiWireshark, SiBurpsuite
} from 'react-icons/si';
import { FaAws, FaJava, FaWindows } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';

const techMap = {
    // Mobile
    "Flutter": { icon: SiFlutter, color: "text-[#02569B]" },
    "React Native": { icon: SiReact, color: "text-[#61DAFB]" },
    "Swift": { icon: SiSwift, color: "text-[#F05138]" },
    "Kotlin": { icon: SiKotlin, color: "text-[#7F52FF]" },
    "Firebase": { icon: SiFirebase, color: "text-[#FFCA28]" },
    "Node.js": { icon: SiNodedotjs, color: "text-[#339933]" },
    "GraphQL": { icon: SiGraphql, color: "text-[#E10098]" },
    "SQLite": { icon: SiSqlite, color: "text-[#003B57]" },

    // Web
    "React": { icon: SiReact, color: "text-[#61DAFB]" },
    "Express": { icon: SiExpress, color: "text-[#000000]" },
    "MongoDB": { icon: SiMongodb, color: "text-[#47A248]" },
    "Redux": { icon: SiRedux, color: "text-[#764ABC]" },
    "Next.js": { icon: SiNextdotjs, color: "text-[#000000]" },
    "Redis": { icon: SiRedis, color: "text-[#DC382D]" },
    "Docker": { icon: SiDocker, color: "text-[#2496ED]" },
    "HTML5": { icon: SiHtml5, color: "text-[#E34F26]" },
    "CSS3": { icon: SiCss3, color: "text-[#1572B6]" },
    "JavaScript": { icon: SiJavascript, color: "text-[#F7DF1E]" },
    "WordPress": { icon: SiWordpress, color: "text-[#21759B]" },
    "Shopify": { icon: SiShopify, color: "text-[#7AB55C]" },

    // Enterprise
    "SAP": { icon: SiSap, color: "text-[#0FAAFF]" },
    "Oracle": { icon: SiOracle, color: "text-[#F80000]" },
    "Microsoft Dynamics": { icon: FaWindows, color: "text-[#0078D4]" },
    "Java": { icon: FaJava, color: "text-[#007396]" },
    ".NET": { icon: SiDotnet, color: "text-[#512BD4]" },
    "Python": { icon: SiPython, color: "text-[#3776AB]" },

    // AI
    "TensorFlow": { icon: SiTensorflow, color: "text-[#FF6F00]" },
    "PyTorch": { icon: SiPytorch, color: "text-[#EE4C2C]" },
    "OpenAI API": { icon: SiOpenai, color: "text-[#412991]" },
    "Scikit-learn": { icon: SiScikitlearn, color: "text-[#F7931E]" },
    "Hugging Face": { icon: SiHuggingface, color: "text-[#FFD21E]" },

    // Design
    "Figma": { icon: SiFigma, color: "text-[#F24E1E]" },
    "Adobe XD": { icon: SiAdobexd, color: "text-[#FF26BE]" },
    "Sketch": { icon: SiSketch, color: "text-[#F7B500]" },
    "Protopie": { icon: SiMiro, color: "text-[#FF4A3D]" }, // Fallback/proxy
    "After Effects": { icon: SiMiro, color: "text-[#9999FF]" }, // Fallback
    "Miro": { icon: SiMiro, color: "text-[#050038]" },

    // Data
    "Tableau": { icon: SiTableau, color: "text-[#E97627]" },
    "PowerBI": { icon: BarChart, color: "text-[#F2C811]" },
    "Looker": { icon: SiLooker, color: "text-[#4285F4]" },
    "Apache Spark": { icon: SiApachespark, color: "text-[#E25A1C]" },
    "Snowflake": { icon: SiSnowflake, color: "text-[#29B5E8]" },
    "Python (Pandas)": { icon: SiPandas, color: "text-[#150458]" },

    // Cloud
    "AWS": { icon: FaAws, color: "text-[#FF9900]" },
    "Azure": { icon: VscAzure, color: "text-[#0078D4]" },
    "Google Cloud": { icon: SiGooglecloud, color: "text-[#4285F4]" },
    "Kubernetes": { icon: SiKubernetes, color: "text-[#326CE5]" },
    "Terraform": { icon: SiTerraform, color: "text-[#7B42BC]" },

    // QA
    "Selenium": { icon: SiSelenium, color: "text-[#43B02A]" },
    "Cypress": { icon: SiCypress, color: "text-[#17202C]" },
    "Jest": { icon: SiJest, color: "text-[#C21325]" },
    "Appium": { icon: SiSelenium, color: "text-[#41BDF5]" }, // Fallback to Selenium to prevent error
    "JMeter": { icon: SiApachejmeter, color: "text-[#D22128]" },
    "Postman": { icon: SiPostman, color: "text-[#FF6C37]" },

    // IT
    "Jira Service Desk": { icon: SiJira, color: "text-[#0052CC]" },
    "TeamViewer": { icon: Globe, color: "text-[#0E80C8]" }, // Fallback to Globe to prevent error
    "Active Directory": { icon: FaWindows, color: "text-[#0078D4]" },
    "Cisco": { icon: SiCisco, color: "text-[#1BA0D7]" },
    "Sophos": { icon: Shield, color: "text-[#0078D4]" }, // Lucide fallback
    "Office 365": { icon: FaWindows, color: "text-[#EB3C00]" },

    // Marketing
    "Google Analytics": { icon: SiGoogleanalytics, color: "text-[#E37400]" },
    "SEMrush": { icon: SiSemrush, color: "text-[#EC6613]" },
    "HubSpot": { icon: SiHubspot, color: "text-[#FF7A59]" },
    "Meta Ads": { icon: SiMeta, color: "text-[#0668E1]" },
    "Google Ads": { icon: SiGoogleads, color: "text-[#4285F4]" },
    "Mailchimp": { icon: SiMailchimp, color: "text-[#FFE01B]" },

    // Security (Added)
    "Splunk": { icon: SiSplunk, color: "text-[#000000]" },
    "CrowdStrike": { icon: Shield, color: "text-[#FC0000]" }, // Fallback to Shield
    "Wireshark": { icon: SiWireshark, color: "text-[#1679A7]" },
    "Nessus": { icon: Shield, color: "text-[#0078D4]" }, // Using Shield as generic secure icon
    "Burp Suite": { icon: SiBurpsuite, color: "text-[#FF6633]" },
    "AWS Security Hub": { icon: FaAws, color: "text-[#FF9900]" }
};

const ServiceDeepDive = ({ service }) => {
    return (
        <div className="flex flex-col lg:flex-row gap-20 mb-32">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2"
            >
                <h2 className="text-4xl font-black mb-8 text-slate-900 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-lg bg-violet-600 flex items-center justify-center text-white"><Cpu size={24} /></span>
                    Strategic Overview
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed font-light mb-8">
                    {service.description}
                </p>
                <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50">
                    <h4 className="font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Business Value
                    </h4>
                    <ul className="space-y-3">
                        {service.benefits && service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm font-medium">
                                <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                                {benefit}
                            </li>
                        ))}
                        {!service.benefits && (
                            <>
                                <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 size={18} className="text-emerald-500" /> scalable architecture for future growth</li>
                                <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 size={18} className="text-emerald-500" /> Enhanced user engagement and retention</li>
                                <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 size={18} className="text-emerald-500" /> Streamlined operational efficiency</li>
                            </>
                        )}
                    </ul>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2"
            >
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8 border-b border-slate-200 pb-2 inline-block">Technology Stack</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {service.technologies.map((tech, index) => {
                        const techData = techMap[tech];
                        const Icon = techData ? techData.icon : null;
                        const iconColor = techData ? techData.color : "text-slate-400";

                        return (
                            <motion.div
                                key={index}
                                whileHover={{ y: -3 }}
                                className="flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-slate-100 shadow-sm transition-all h-28 hover:shadow-md"
                            >
                                {Icon ? (
                                    <Icon size={32} className={`mb-3 ${iconColor}`} />
                                ) : (
                                    <div className="w-8 h-8 rounded-full bg-slate-100 mb-3 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-slate-300" />
                                    </div>
                                )}
                                <span className="font-bold text-slate-700 text-sm text-center">{tech}</span>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </div>
    );
};

export default ServiceDeepDive;
