"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// COMPONENTS
import Salads from "@/components/Salads";
import Pizza from "@/components/Pizza";
import Pasta from "@/components/Pasta";
import Rice from "@/components/Rice";
import Sandwich from "@/components/Sandwich";
import Wraps from "@/components/Wraps";
import Drinks from "@/components/Drinks";

const BRAND = "#80A852";
const MAP_LINK = "https://www.google.com/maps/place/26%C2%B008'25.5%22N+50%C2%B029'33.2%22E/@26.1404364,50.4898783,16.94z/data=!4m4!3m3!8m2!3d26.1404154!4d50.4925658?hl=en&entry=ttu&g_ep=EgoyMDI2MDUxNy4wIKXMDSoASAFQAw%3D%3D";

const categories = [
  {
    id: "salads",
    name: "Salads",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "pizza",
    name: "Pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "pasta",
    name: "Pasta",
    image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "rice",
    name: "Rice",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "sandwich",
    name: "Sandwich",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "wraps",
    name: "Wraps",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "drinks",
    name: "Drinks",
    image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=400&q=80",
  },
];

export default function FreshSourceLanding() {
  const [showTopButton, setShowTopButton] = useState(false);

  const sectionRefs = {
    salads: useRef(null),
    pizza: useRef(null),
    pasta: useRef(null),
    rice: useRef(null),
    sandwich: useRef(null),
    wraps: useRef(null),
    drinks: useRef(null),
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCategoryClick = (id) => {
    sectionRefs[id]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-white min-h-screen overflow-hidden text-gray-800 antialiased">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">

          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2.5"
          >
            <img
              src="/logo-img.png"
              alt="Fresh Source"
              className="h-9 w-9 object-contain"
            />
            <div>
              <h1 className="font-bold text-gray-900 uppercase tracking-wider text-sm leading-none mb-0.5">
                Fresh Source
              </h1>
              <p className="text-[10px] text-gray-400 uppercase tracking-[2px] leading-none">
                Restaurant
              </p>
            </div>
          </motion.div>

          {/* LOCATION */}
          <motion.a
            href={MAP_LINK}
            target="_blank"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden sm:flex items-center gap-1.5 text-xs font-semibold hover:opacity-80 transition tracking-wide"
            style={{ color: BRAND }}
          >
            📍 Souq Waqif, Hamad Town
          </motion.a>

        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-[90dvh] flex items-center justify-center py-12">

        {/* HERO BACKGROUND */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/66791c26-a1df-4bee-ac44-060f398cd332.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-10 max-w-3xl px-4 text-center">

          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            src="/logo-img.png"
            alt="logo"
            className="h-16 md:h-20 mx-auto mb-6"
          />

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight leading-none"
          >
            Fresh <span style={{ color: BRAND }}>Source</span>
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl font-light block mt-1 tracking-wide">Restaurant</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-3 text-sm md:text-lg font-medium text-white/90 tracking-wide"
          >
            Source Fresh Serve Delicious
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-5 max-w-xl mx-auto text-xs md:text-sm leading-relaxed text-white/70 font-normal"
          >
            Welcome to Fresh Source Restaurant, where we serve transparent,
            real food at the speed of your life. Our menu features vibrant,
            chef crafted salads tossed with house-made dressings, thin crust
            pizzas topped with seasonal veggies and pastas made with nutrient
            rich ingredients.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-3 text-xs md:text-sm font-medium tracking-wide text-[#cbd5e1]"
          >
            🕒 Timing: 11:00 AM to 2:00 AM
          </motion.p>

          {/* HERO ACTIONS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3.5"
          >
            <button
              onClick={() => handleCategoryClick("salads")}
              className="px-6 py-3 rounded-full text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-102"
              style={{ backgroundColor: BRAND }}
            >
              Explore Menu
            </button>

            <a
              href="tel:32309699"
              className="px-6 py-3 rounded-full border border-white/40 text-white font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
            >
              📞 Call: 32309699
            </a>
          </motion.div>

        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p
              className="font-bold uppercase tracking-[3px] text-[10px] mb-2"
              style={{ color: BRAND }}
            >
              Explore Categories
            </p>
            <h2 className="text-2xl md:text-4xl font-black text-gray-900 uppercase tracking-tight">
              What Would You <span style={{ color: BRAND }}>Like?</span>
            </h2>
          </motion.div>

          {/* REDUCED CARDS GRID TEXT */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {categories.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                transition={{ delay: index * 0.04 }}
                viewport={{ once: true }}
                onClick={() => handleCategoryClick(item.id)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-[24px] bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 p-4">
                  <div
                    className="w-24 h-24 aspect-square rounded-full overflow-hidden border-2 mx-auto"
                    style={{ borderColor: BRAND }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-center mt-3.5">
                    <h3
                      className="font-bold uppercase text-sm tracking-wide"
                      style={{ color: BRAND }}
                    >
                      {item.name}
                    </h3>
                    <p className="text-[11px] text-gray-400 mt-1">
                      Fresh & delicious meals
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* MENU COMPONENTS ENGINE */}
      <section className="space-y-12 pb-6">
        <div ref={sectionRefs.salads}><Salads /></div>
        <div ref={sectionRefs.pizza}><Pizza /></div>
        <div ref={sectionRefs.pasta}><Pasta /></div>
        <div ref={sectionRefs.rice}><Rice /></div>
        <div ref={sectionRefs.sandwich}><Sandwich /></div>
        <div ref={sectionRefs.wraps}><Wraps /></div>
        <div ref={sectionRefs.drinks}><Drinks /></div>
      </section>

      {/* FOOTER */}
      <footer className="relative overflow-hidden bg-[#80A852] py-14 px-4">
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-black uppercase tracking-wider"
          >
            Contact Us
          </motion.h2>

          <p className="mt-4 text-sm font-semibold tracking-wide">
            Fresh Source Restaurant
          </p>

          <div className="mt-6 space-y-2 text-xs text-white/80 font-normal tracking-wide">
            <a
              href={MAP_LINK}
              target="_blank"
              className="block hover:underline"
            >
              📍 Souq Waqif, Hamad Town
            </a>
            <a
              href="tel:32309699"
              className="block hover:underline"
            >
              📞 32309699
            </a>
            <div className="block text-white/70">
              🕒 Open Daily: 11:00 AM to 2:00 AM
            </div>
          </div>

          {/* MAP CONTAINER EXTRA ACCENT */}
          <div className="mt-8 max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-white/10">
            <iframe
              src={MAP_LINK}
              width="100%"
              height="280"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full border-none opacity-90"
            ></iframe>
          </div>

          <div className="mt-8 border-t border-white/10 pt-5 text-[11px] text-white/60 tracking-wider">
            © 2026 Fresh Source Restaurant. All rights reserved.
          </div>

        </div>
      </footer>

      {/* SCROLL TOP BUTTON COMPACT */}
      <AnimatePresence>
        {showTopButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollTop}
            className="fixed bottom-5 right-5 z-50 w-11 h-11 rounded-full text-white shadow-lg font-bold text-base flex items-center justify-center transition-transform active:scale-95"
            style={{ backgroundColor: BRAND }}
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
