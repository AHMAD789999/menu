"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react"; // Dropdown arrow ke liye

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const brandColor = "#41BDB5";
  const whatsappNumber = "923046805704";

  const serviceLinks = [
    { name: "Website Development", href: "/website" },
    { name: "SEO Optimization", href: "/seo" },
    { name: "Digital Marketing", href: "/digital-marketing" },
    { name: "Graphic Designing", href: "/graphic-design" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 py-6">
      <div className="max-w-7xl mx-auto bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 rounded-3xl px-6 py-3 flex items-center justify-between shadow-2xl font-sans">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-10 h-10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
            <img 
              src="https://growvixdigital.page.gd/wp-content/uploads/2026/03/clickjoy-1774890110845.png" 
              alt="Growvix Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-black tracking-tighter text-xl leading-none italic uppercase">GROWVIX</span>
            <span className="text-[7px] text-gray-500 tracking-[0.4em] uppercase font-black">Digital Agency</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <Link href="/" className="text-gray-400 hover:text-[#41BDB5] transition-all text-[11px] uppercase font-black tracking-widest">Home</Link>
          <Link href="/about" className="text-gray-400 hover:text-[#41BDB5] transition-all text-[11px] uppercase font-black tracking-widest">About Us</Link>
          
          {/* --- SERVICES DROPDOWN --- */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-gray-400 group-hover:text-[#41BDB5] transition-all text-[11px] uppercase font-black tracking-widest">
              Services <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Dropdown Menu */}
            <div className={`absolute top-full left-0 mt-4 w-64 bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ${isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
              <div className="py-2">
                {serviceLinks.map((service) => (
                  <Link 
                    key={service.name} 
                    href={service.href}
                    className="block px-6 py-4 text-gray-400 hover:text-black hover:bg-[#41BDB5] text-[10px] uppercase font-black tracking-widest transition-all"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/contact" className="text-gray-400 hover:text-[#41BDB5] transition-all text-[11px] uppercase font-black tracking-widest">Contact Us</Link>
        </nav>

        {/* WhatsApp Button */}
        <a 
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          className="hidden md:flex items-center gap-4 bg-white/5 border border-white/10 pl-1.5 pr-6 py-1.5 rounded-full group hover:border-[#41BDB5]/50 transition-all"
        >
          <div className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 group-hover:bg-white" style={{ backgroundColor: brandColor }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          </div>
          <span className="text-white font-black text-[10px] tracking-widest uppercase">Chat Now</span>
        </a>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2" onClick={() => setIsOpen(true)}>
          <div className="flex flex-col gap-1.5 items-end">
            <span className="w-8 h-0.5 bg-white rounded-full"></span>
            <span className="w-5 h-0.5 bg-[#41BDB5] rounded-full"></span>
          </div>
        </button>
      </div>

      {/* --- Mobile Menu --- */}
      <div className={`fixed inset-0 bg-[#0a0a0a] z-[100] flex flex-col items-center justify-center transition-all duration-500 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <button className="absolute top-10 right-10 text-white" onClick={() => setIsOpen(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <div className="flex flex-col items-center gap-6">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-3xl font-black text-white uppercase italic">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-3xl font-black text-white uppercase italic">About</Link>
          
          <div className="flex flex-col items-center gap-3 bg-white/5 p-6 rounded-3xl">
            <span className="text-[#41BDB5] text-[10px] font-black uppercase tracking-widest">Our Services</span>
            {serviceLinks.map(s => (
              <Link key={s.name} href={s.href} onClick={() => setIsOpen(false)} className="text-xl font-bold text-gray-400 hover:text-white uppercase">{s.name}</Link>
            ))}
          </div>

          <Link href="/contact" onClick={() => setIsOpen(false)} className="text-3xl font-black text-white uppercase italic">Contact</Link>
          <a href={`https://wa.me/${whatsappNumber}`} className="mt-6 py-4 px-10 rounded-full border-2 border-[#41BDB5] text-[#41BDB5] font-black uppercase">WhatsApp Us</a>
        </div>
      </div>
    </header>
  );
};

export default Header;