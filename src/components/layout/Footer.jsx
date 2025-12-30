import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { RiTwitterXFill } from 'react-icons/ri';
import footerLogo from '../../assets/lnfolexus_4k_WALLPAPER_WITHOUT_CAPTION___1_-removebg-preview.png';

const Footer = () => {
    return (
        <footer className="relative bg-[#081A4A]/95 text-slate-300 pt-20 pb-10 overflow-hidden font-sans border-t border-slate-800">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-8 mb-16">

                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link to="/" className="inline-block">
                            {/* Using text fallback if image is missing, but prefer image if available */}
                            <img src={footerLogo} alt="Infolexus" className="h-8 md:h-10 w-auto brightness-200 object-contain object-left" />
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                            Empowering businesses through cutting-edge technology and strategic human capital solutions. Your partner in digital transformation and workforce excellence.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: Linkedin, href: "https://www.linkedin.com/company/infolexus-solutions/", color: "bg-[#0077b5]", hoverColor: "hover:bg-[#0077b5]" },
                                { icon: RiTwitterXFill, href: "https://x.com/InfolexusOff", color: "bg-black", hoverColor: "hover:bg-black" },
                                { icon: Facebook, href: "https://www.facebook.com/share/1DZN16dGP2/?mibextid=wwXIfr", color: "bg-[#1877F2]", hoverColor: "hover:bg-[#1877F2]" },
                                { icon: Instagram, href: "https://www.instagram.com/infolexus_solutions?igsh=MWxmOXFpanBseTJ2bA%3D%3D&utm_source=qr", color: "bg-gradient-to-br from-[#f09433] to-[#bc1888]", hoverColor: "hover:from-[#f09433] hover:to-[#bc1888]" }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg ${social.color} border border-white/10`}
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links (Company) */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Company</h4>
                        <ul className="space-y-3">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About', path: '/about' },
                                { name: 'Technologies', path: '/technologies' },
                                { name: 'Clients', path: '/clients' },
                                { name: 'Career', path: '/careers' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1 group">
                                        <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter & Contact (Stay Connected) */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Stay Connected</h4>
                        <p className="text-slate-400 text-sm mb-4">Subscribe to our newsletter for the latest tech trends and insights.</p>
                        <form className="flex gap-2 mb-8">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="bg-slate-800/50 border border-slate-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-cyan-500 w-full text-sm"
                            />
                            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 rounded-lg text-white font-bold hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
                                <ArrowRight size={18} />
                            </button>
                        </form>

                        <div className="space-y-3">
                            <div className="flex items-start gap-3 text-slate-400 text-sm group">
                                <MapPin size={18} className="text-cyan-500 mt-0.5 group-hover:text-cyan-400" />
                                <span className="group-hover:text-slate-200 transition-colors">Infolexus Solutions,<br />Coimbatore, Tamil Nadu</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-400 text-sm group">
                                <Mail size={18} className="text-cyan-500 group-hover:text-cyan-400" />
                                <span className="group-hover:text-slate-200 transition-colors">info@infolexus.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Map Integration (Our Location) */}
                    <div className="lg:col-span-1">
                        <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Our Location</h4>
                        <div className="w-full h-64 md:h-48 rounded-lg overflow-hidden border border-slate-800 relative group shadow-lg shadow-cyan-900/20">
                            <iframe
                                title="Office Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.347263595567!2d76.9889976757065!3d11.006997092116035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859eb03584a43!2sInfolexus%20Solutions!5e0!3m2!1sen!2sin!4v1713437292323!5m2!1sen!2sin"
                                className="w-full h-full hover:scale-105 transition-transform duration-700"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Infolexus. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link to="#" className="hover:text-white transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
