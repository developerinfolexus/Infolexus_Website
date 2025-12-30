import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Menu, X, ChevronDown, Instagram, Facebook
} from 'lucide-react';
import {
    RiCodeBoxFill, RiSmartphoneFill, RiPaletteFill, RiCloudWindyFill,
    RiShieldKeyholeFill, RiBrainFill, RiBriefcase4Fill, RiBarChartBoxFill,
    RiCheckboxCircleFill, RiCustomerService2Fill, RiMegaphoneFill,
    RiLineChartFill, RiUserStarFill, RiHandCoinFill, RiArrowRightUpLine,
    RiShareForwardFill, RiMailSendFill, RiAdvertisementFill, RiArticleFill,
    RiPresentationFill, RiTeamFill, RiChatSmileFill,
    RiUserAddFill, RiSearchFill, RiLayoutGridFill, RiMovieFill, RiBarChartGroupedFill,
    RiTwitterXFill
} from 'react-icons/ri';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/lnfolexus_4k_WALLPAPER_WITHOUT_CAPTION___1_-removebg-preview.png';

const MotionLink = motion.create(Link);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(false);
    const leaveTimeout = React.useRef(null);
    const location = useLocation();

    // Clear timeout on unmount
    useEffect(() => {
        return () => {
            if (leaveTimeout.current) clearTimeout(leaveTimeout.current);
        };
    }, []);

    // Close menus on route change
    useEffect(() => {
        setActiveDropdown(null);
        setMobileSubMenuOpen(false);
        setIsOpen(false);
    }, [location]);

    // Prevent Background Scroll when Mobile Menu is Open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const handleMouseEnter = (name) => {
        if (leaveTimeout.current) clearTimeout(leaveTimeout.current);
        setActiveDropdown(name);
    };

    const handleMouseLeave = () => {
        leaveTimeout.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 200);
    };

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const megaMenuData = {
        'OUR SERVICES': [
            {
                title: 'IT Services',
                items: [
                    { name: 'Web Development', icon: RiCodeBoxFill, path: '/services/wd-09' },
                    { name: 'App Development', icon: RiSmartphoneFill, path: '/services/ma-01' },
                    { name: 'UI/UX Design', icon: RiPaletteFill, path: '/services/ui-05' },
                    { name: 'Cloud Solutions', icon: RiCloudWindyFill, path: '/services/ic-07' },
                    { name: 'Cyber Security', icon: RiShieldKeyholeFill, path: '/services/security' },
                    { name: 'AI & ML', icon: RiBrainFill, path: '/services/ai-04' },
                    { name: 'Enterprise (ERP)', icon: RiBriefcase4Fill, path: '/services/es-03' },
                    { name: 'Data Analytics', icon: RiBarChartBoxFill, path: '/services/da-06' },
                    { name: 'Testing & QA', icon: RiCheckboxCircleFill, path: '/services/qa-08' },
                    { name: 'IT Support', icon: RiCustomerService2Fill, path: '/services/it-10' },
                ]
            },
            {
                title: 'Digital Marketing',
                items: [
                    { name: 'Social Media Marketing', icon: RiShareForwardFill, path: '/dm-services#smm' },
                    { name: 'SEO', icon: RiSearchFill, path: '/dm-services#seo' },
                    { name: 'Google & Social Ads', icon: RiAdvertisementFill, path: '/dm-services#ppc' },
                    { name: 'Content Marketing', icon: RiArticleFill, path: '/dm-services#content' },
                    { name: 'Email Marketing', icon: RiMailSendFill, path: '/dm-services#email' },
                    { name: 'Web Optimization', icon: RiLayoutGridFill, path: '/dm-services#web-optimization' },
                    { name: 'Analytics & Reporting', icon: RiLineChartFill, path: '/dm-services#analytics' },
                    { name: 'Video Shoots & Editing', icon: RiMovieFill, path: '/dm-services#video' },
                ]
            },
            {
                title: 'HR Services',
                items: [
                    { name: 'Recruitment & Talent', icon: RiUserStarFill, path: '/hr-services' },
                    { name: 'Staffing Solutions', icon: RiTeamFill, path: '/hr-services' },
                    { name: 'HR Consulting', icon: RiChatSmileFill, path: '/hr-services' },
                    { name: 'Onboarding Support', icon: RiUserAddFill, path: '/hr-services' },
                    { name: 'Payroll & Admin', icon: RiHandCoinFill, path: '/hr-services' },
                    { name: 'Training & Skills', icon: RiPresentationFill, path: '/hr-services' },
                    { name: 'Performance Mgmt', icon: RiBarChartGroupedFill, path: '/hr-services' },
                ]
            }
        ]
    };

    const navLinks = [
        { name: 'HOME', path: '/' },
        { name: 'ABOUT', path: '/about' },
        { name: 'OUR SERVICES', path: '/services', isMega: true },
        { name: 'TECHNOLOGIES', path: '/technologies' },
        { name: 'CLIENTS', path: '/clients' },
        { name: 'CAREER', path: '/careers' },
    ];

    return (
        <nav
            style={
                (scrolled || activeDropdown)
                    ? { backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }
                    : {}
            }
            className={cn(
                "fixed w-full z-50 transition-all duration-300 border-b border-transparent",
                (scrolled || activeDropdown)
                    ? "bg-[#081A4A]/95 border-white/10 py-4 shadow-lg"
                    : "bg-transparent py-5"
            )}>

            {/* Navbar Content */}
            <div className="relative z-[80] w-full px-6 md:px-12 flex flex-row justify-between items-center h-full max-w-[1440px] mx-auto">

                {/* Logo */}
                <Link to="/" className="flex items-center shrink-0 z-[90]">
                    <img src={logo} alt="Infolexus" className="h-8 md:h-10 w-auto transition-all duration-300 object-contain object-left" />
                </Link>

                {/* Desktop Nav - Centered Absolute */}
                <div className="hidden lg:flex items-center justify-center gap-8 lg:gap-10 absolute left-0 top-0 w-full h-full pointer-events-none">
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            className="relative group pointer-events-auto"
                            onMouseEnter={() => handleMouseEnter(link.name)}
                            onMouseLeave={handleMouseLeave}
                        >
                            {link.isMega ? (
                                <span
                                    className={cn(
                                        "flex items-center gap-1 text-[13px] lg:text-sm font-bold tracking-widest uppercase transition-colors duration-300 text-white hover:text-cyan-400 cursor-pointer",
                                        (activeDropdown === link.name) && "text-cyan-400"
                                    )}
                                >
                                    {link.name}
                                    <ChevronDown size={14} className={cn("transition", activeDropdown === link.name ? "rotate-180" : "group-hover:rotate-180")} />
                                </span>
                            ) : (
                                <Link
                                    to={link.path}
                                    className={cn(
                                        "flex items-center gap-1 text-[13px] lg:text-sm font-bold tracking-widest uppercase transition-colors duration-300 text-white hover:text-cyan-400",
                                        (location.pathname === link.path) && "text-cyan-400"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            )}

                            {/* 🔥 FULL WIDTH MEGA MENU */}
                            {link.isMega && (
                                <div className={cn(
                                    "fixed top-[70px] lg:top-[85px] left-[10px] right-[10px] transition-all duration-300 z-50",
                                    activeDropdown === link.name
                                        ? "opacity-100 translate-y-0 pointer-events-auto"
                                        : "opacity-0 translate-y-2 pointer-events-none"
                                )}
                                    onMouseEnter={() => handleMouseEnter(link.name)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div
                                        style={{ backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
                                        className="bg-[#081A4A]/95 border border-white/10 rounded-xl shadow-2xl p-6 space-y-6"
                                    >
                                        <div className="grid grid-cols-3 gap-8">
                                            {/* IT SERVICES */}
                                            <div className="border-r border-white/10 pr-4">
                                                <h3 className="text-cyan-400 font-extrabold uppercase flex items-center justify-center gap-2 text-base tracking-widest mb-6">
                                                    <RiCodeBoxFill size={20} /> IT Services
                                                </h3>
                                                <div className="flex flex-wrap justify-center gap-4">
                                                    {megaMenuData['OUR SERVICES'][0].items.map((item, i) => (
                                                        <MegaMenuCard key={i} item={item} />
                                                    ))}
                                                </div>
                                            </div>

                                            {/* DIGITAL MARKETING */}
                                            <div className="border-r border-white/10 px-4">
                                                <h3 className="text-cyan-400 font-extrabold uppercase flex items-center justify-center gap-2 text-base tracking-widest mb-6">
                                                    <RiMegaphoneFill size={20} /> Digital Marketing
                                                </h3>
                                                <div className="flex flex-wrap justify-center gap-4">
                                                    {megaMenuData['OUR SERVICES'][1].items.map((item, i) => (
                                                        <MegaMenuCard key={i} item={item} />
                                                    ))}
                                                </div>
                                            </div>

                                            {/* HR SERVICES */}
                                            <div className="pl-4">
                                                <h3 className="text-cyan-400 font-extrabold uppercase flex items-center justify-center gap-2 text-base tracking-widest mb-6">
                                                    <RiUserStarFill size={20} /> HR Services
                                                </h3>
                                                <div className="flex flex-wrap justify-center gap-4">
                                                    {megaMenuData['OUR SERVICES'][2].items.map((item, i) => (
                                                        <MegaMenuCard key={i} item={item} />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Right CTA */}
                <div className="hidden lg:flex items-center gap-6">
                    <SocialIcons />
                    <Link to="/contact"
                        className="px-6 py-2 border border-white rounded-full text-xs font-bold text-white hover:bg-white hover:text-black transition-all duration-300">
                        CONTACT US
                    </Link>
                </div>

                {/* Mobile Button - NOW INSIDE FLEX CONTAINER */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden text-white p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 shadow-lg hover:bg-white/20 transition-all"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Backdrop & Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 z-[90] lg:hidden backdrop-blur-sm"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="fixed top-0 right-0 h-full w-[85%] max-w-[320px] bg-[#030B25] z-[100] flex flex-col lg:hidden shadow-2xl border-l border-white/10 overflow-y-auto"
                        >
                            {/* Mobile Header */}
                            <div className="flex justify-between items-center p-6 bg-[#030B25] sticky top-0 z-20">
                                <span className="text-white font-extrabold text-xl tracking-widest uppercase">Menu</span>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 -mr-2 text-slate-400 hover:text-white transition-colors border border-white/10 rounded-full hover:bg-white/5"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Mobile Links */}
                            <div className="flex flex-col px-6 space-y-2">
                                {navLinks.map((link) => (
                                    <div key={link.name} className="flex flex-col">
                                        {link.isMega ? (
                                            <>
                                                <button
                                                    onClick={() => setMobileSubMenuOpen(!mobileSubMenuOpen)}
                                                    className={cn(
                                                        "w-full flex items-center justify-between text-sm font-bold text-white hover:text-cyan-400 transition-colors uppercase tracking-widest py-4 text-left border-b border-white/5",
                                                        mobileSubMenuOpen ? "text-cyan-400" : ""
                                                    )}
                                                >
                                                    {link.name}
                                                    <ChevronDown
                                                        size={16}
                                                        className={cn("transition-transform duration-300", mobileSubMenuOpen ? "rotate-180 text-cyan-400" : "text-slate-500")}
                                                    />
                                                </button>

                                                {/* Mobile Mega Menu Accordion */}
                                                <AnimatePresence>
                                                    {mobileSubMenuOpen && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="pl-4 py-2 space-y-4">
                                                                {megaMenuData['OUR SERVICES'].map((category, idx) => (
                                                                    <div key={idx} className="space-y-2">
                                                                        <h4 className="text-cyan-500 font-bold text-[10px] uppercase tracking-widest mb-1 opacity-80">
                                                                            {category.title}
                                                                        </h4>
                                                                        <div className="flex flex-col gap-1 border-l border-white/10 pl-3">
                                                                            {category.items.map((item, itemIdx) => (
                                                                                <Link
                                                                                    key={itemIdx}
                                                                                    to={item.path}
                                                                                    onClick={() => setIsOpen(false)}
                                                                                    className="text-slate-300 hover:text-white text-xs font-medium py-1 transition-colors block"
                                                                                >
                                                                                    {item.name}
                                                                                </Link>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </>
                                        ) : (
                                            <Link
                                                to={link.path}
                                                onClick={() => setIsOpen(false)}
                                                className="block w-full text-sm font-bold text-white hover:text-cyan-400 transition-colors uppercase tracking-widest py-4 border-b border-white/5"
                                            >
                                                {link.name}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Mobile CTA */}
                            <div className="p-6 mt-auto bg-[#030B25] sticky bottom-0 z-20">
                                <div className="flex justify-center gap-8 mb-6">
                                    <SocialIcons mobile />
                                </div>
                                <Link
                                    to="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-center w-full py-3.5 bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] text-white font-bold rounded-lg uppercase tracking-wider text-sm shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav >
    );
};

// Helper Component for Mega Menu Cards (to clean up main code)
const MegaMenuCard = ({ item }) => (
    <MotionLink
        to={item.path}
        whileHover={{ scale: 1.05, y: -2 }}
        className="relative flex flex-col items-center justify-center gap-3 p-3 rounded-2xl bg-white shadow-xl border border-slate-100/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:border-cyan-400 transition-all duration-300 group/card w-28 h-28"
    >
        <div className="relative z-10 p-2 rounded-xl bg-slate-50/80 group-hover/card:bg-cyan-500 transition-all duration-300">
            <item.icon size={24} className="text-cyan-600 group-hover/card:text-white transition-colors duration-300" />
        </div>
        <span className="relative z-10 text-[10px] font-bold text-slate-600 uppercase tracking-wide group-hover/card:text-cyan-700 transition-colors text-center leading-tight">
            {item.name}
        </span>
    </MotionLink>
);

const SocialIcons = ({ mobile }) => (
    <>
        <a href="https://www.instagram.com/infolexus_solutions?igsh=MWxmOXFpanBseTJ2bA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors"><Instagram size={mobile ? 20 : 18} /></a>
        <a href="https://www.facebook.com/share/1DZN16dGP2/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors"><Facebook size={mobile ? 20 : 18} /></a>
        <a href="https://x.com/InfolexusOff" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors"><RiTwitterXFill size={mobile ? 20 : 18} /></a>
    </>
);

export default Navbar;