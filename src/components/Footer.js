"use client";
import React from "react";
import { Mail, Phone, MapPin, ArrowUpRight, BarChart, Layout, Palette, MessageSquare } from "lucide-react";
// import Link from 'next/link'; // Agar Next.js use kar rahe hain toh ise uncomment karein

const Footer = () => {
  const brandColor = "#41BDB5";
  const whatsappNumber = "+1 (289) 534-4637";
  const officialEmail = "info@growvixdigitalagency.com";

  return (
    <footer className="relative bg-black text-white pt-24 pb-12 px-6 overflow-hidden">
      
      {/* --- BACKGROUND GRID --- */}
      <div 
        className="absolute inset-0 opacity-[0.04]" 
        style={{ 
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: '100px 100px' 
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-white/5 pb-20">
          
          {/* --- BRAND COLUMN --- */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex flex-col gap-2">
              <span className="text-3xl font-black tracking-tighter uppercase italic leading-none">
                Growvix <br />
                <span style={{ color: brandColor }}>Digital Agency</span>
              </span>
              <div className="h-1 w-12" style={{ backgroundColor: brandColor }}></div>
            </div>
            <p className="text-gray-500 text-sm font-bold italic leading-relaxed max-w-sm">
              Turning your ideas into reality through high-performance digital solutions, creative branding, and results-driven marketing strategies.
            </p>
            <div className="flex gap-6 items-center">
              {['FB', 'IG', 'LI', 'TW'].map((social) => (
                <a key={social} href="#" className="text-[10px] font-black tracking-widest text-gray-600 hover:text-[#41BDB5] transition-all hover:-translate-y-1 cursor-pointer">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* --- SERVICES & LINKS --- */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* Services Column */}
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 italic">Expertise</h4>
              <ul className="space-y-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
                {[
                  { name: 'Graphic Design', icon: <Palette size={14} />, path: '/services/graphic-design' },
                  { name: 'SEO Solutions', icon: <BarChart size={14} />, path: '/services/seo' },
                  { name: 'Digital Marketing', icon: <MessageSquare size={14} />, path: '/services/digital-marketing' },
                  { name: 'Web Development', icon: <Layout size={14} />, path: '/services/web-development' }
                ].map((service) => (
                  <li key={service.name} className="hover:text-white transition-all cursor-pointer flex items-center gap-2 group">
                    <a href={service.path} className="flex items-center gap-2">
                      <span style={{ color: brandColor }} className="opacity-40 group-hover:opacity-100 transition-opacity">
                        {service.icon}
                      </span>
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links Column */}
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 italic">Company</h4>
              <ul className="space-y-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'About Us', path: '/about' },
                  { name: 'Portfolio', path: '/portfolio' },
                  { name: 'Contact', path: '/contact' }
                ].map((link) => (
                  <li key={link.name} className="hover:text-white transition-colors cursor-pointer flex items-center group">
                    <a href={link.path} className="flex items-center">
                      <span className="w-0 group-hover:w-3 h-[1px] transition-all mr-0 group-hover:mr-2" style={{ backgroundColor: brandColor }}></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column (Updated) */}
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 italic">Get in Touch</h4>
              <div className="space-y-5">
                <a href={`mailto:${officialEmail}`} className="block group cursor-pointer">
                  <p className="text-[9px] font-black uppercase tracking-widest text-gray-600 mb-1">Email Us</p>
                  <p className="text-xs font-black text-white group-hover:text-[#41BDB5] transition-colors italic">{officialEmail}</p>
                </a>
                <a href={`tel:${whatsappNumber}`} className="block group cursor-pointer">
                  <p className="text-[9px] font-black uppercase tracking-widest text-gray-600 mb-1">Call / WhatsApp</p>
                  <p className="text-xs font-black text-white group-hover:text-[#41BDB5] transition-colors">{whatsappNumber}</p>
                </a>
               
              </div>
            </div>

          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
             <div className="w-2 h-2 rounded-full animate-pulse shadow-[0_0_100px_#41BDB5]" style={{ backgroundColor: brandColor }}></div>
             <p className="text-[10px] text-gray-700 uppercase tracking-[0.2em] font-black">
               © 2026 Growvix Digital Agency. All rights reserved.
             </p>
          </div>
          
       
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-3 px-8 py-3 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md text-[10px] font-black uppercase tracking-[0.2em] hover:border-[#41BDB5]/40 transition-all hover:bg-white/[0.05]"
          >
            Back to top 
            <ArrowUpRight size={14} style={{ color: brandColor }} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Decorative Brand Glow */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 blur-[150px] opacity-[0.07] rounded-full pointer-events-none" style={{ backgroundColor: brandColor }}></div>
    </footer>
  );
};

export default Footer;