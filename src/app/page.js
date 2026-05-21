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
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "pizza",
    name: "Pizza",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "pasta",
    name: "Pasta",
    image:
      "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "rice",
    name: "Rice",
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "sandwich",
    name: "Sandwich",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "wraps",
    name: "Wraps",
    image:
      "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "drinks",
    name: "Drinks",
    image:
      "https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=400&q=80",
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
    <div className="bg-white min-h-screen overflow-hidden">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-2xl border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-4">

          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <img
              src="/logo-img.png"
              alt="Fresh Source"
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className="font-black text-gray-900 uppercase tracking-wider text-lg">
                Fresh Source
              </h1>
              <p className="text-xs text-gray-500 uppercase tracking-[3px]">
                Restaurant
              </p>
            </div>
          </motion.div>

          {/* LOCATION HEADER ASSIGNMENT */}
          <motion.a
            href={MAP_LINK}
            target="_blank"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center gap-2 text-sm font-bold hover:opacity-80 transition"
            style={{ color: BRAND }}
          >
            📍 Souq Waqif, Hamad Town
          </motion.a>

        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-[100dvh] flex items-center justify-center">

        {/* BACKGROUND ACCORDING TO SPECIFIED ID */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/66791c26-a1df-4bee-ac44-060f398cd332.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/75" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-6xl px-4 text-center">

          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            src="/logo-img.png"
            alt="logo"
            className="h-24 md:h-32 mx-auto mb-8"
          />

          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-8xl font-black uppercase text-white leading-[0.95]"
          >
            Fresh{" "}
            <span style={{ color: BRAND }}>
              Source
            </span>
            <br />
            Restaurant
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-lg md:text-3xl font-semibold text-white"
          >
            Source Fresh Serve Delicious
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8 max-w-4xl mx-auto text-sm md:text-xl leading-relaxed text-white/80"
          >
            Welcome to Fresh Source Restaurant, where we serve transparent,
            real food at the speed of your life. Our menu features vibrant,
            chef crafted salads tossed with house-made dressings, thin crust
            pizzas topped with seasonal veggies and pastas made with nutrient
            rich ingredients.
          </motion.p>

          {/* INTRO TIMINGS AND SPECS DISPLAY IN HERO BOX */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-3 text-sm md:text-lg font-medium text-white/90"
          >
            🕒 Timing: 11:00 AM to 2:00 AM
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <button
              onClick={() => handleCategoryClick("salads")}
              className="px-8 py-4 rounded-full text-white font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: BRAND }}
            >
              Explore Menu
            </button>

            <a
              href={`tel:32309699`}
              className="px-8 py-4 rounded-full border border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
            >
              📞 Call: 32309699
            </a>
          </motion.div>

        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p
              className="font-bold uppercase tracking-[4px] mb-3"
              style={{ color: BRAND }}
            >
              Explore Categories
            </p>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 uppercase">
              What Would You
              <span style={{ color: BRAND }}> Like?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {categories.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -12 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                onClick={() => handleCategoryClick(item.id)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-[35px] bg-white shadow-lg hover:shadow-2xl transition-all duration-500 p-5">
                  <div
                    className="w-full aspect-square rounded-full overflow-hidden border-4 mx-auto"
                    style={{ borderColor: BRAND }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="text-center mt-5">
                    <h3
                      className="font-black uppercase text-lg md:text-xl"
                      style={{ color: BRAND }}
                    >
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-2">
                      Fresh & delicious meals
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* MENU COMPONENTS */}
      <section className="space-y-16 pb-10">
        <div ref={sectionRefs.salads}><Salads /></div>
        <div ref={sectionRefs.pizza}><Pizza /></div>
        <div ref={sectionRefs.pasta}><Pasta /></div>
        <div ref={sectionRefs.rice}><Rice /></div>
        <div ref={sectionRefs.sandwich}><Sandwich /></div>
        <div ref={sectionRefs.wraps}><Wraps /></div>
        <div ref={sectionRefs.drinks}><Drinks /></div>
      </section>

      {/* FOOTER */}
      <footer className="relative overflow-hidden bg-[#80A852] py-20 px-4">
        <div className="relative z-10 max-w-6xl mx-auto text-center text-white">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black uppercase"
          >
            Contact Us
          </motion.h2>

          <p className="mt-8 text-xl font-semibold">
            Fresh Source Restaurant
          </p>

          {/* CONTACT DETAILS UPDATED */}
          <div className="mt-8 space-y-4 text-white/90">
            <a
              href={MAP_LINK}
              target="_blank"
              className="block hover:underline"
            >
              📍 Souq Waqif, Hamad Town
            </a>

            <a
              href={`tel:32309699`}
              className="block hover:underline"
            >
              📞 32309699
            </a>

            <div className="block text-white/80">
              🕒 Open Daily: 11:00 AM to 2:00 AM
            </div>
          </div>

          {/* LIVE GOOGLE MAP FRAME LINK */}
          <div className="mt-12 rounded-3xl overflow-hidden shadow-2xl border border-white/20">
            <iframe
              src={MAP_LINK}
              width="100%"
              height="350"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full border-none"
            ></iframe>
          </div>

          {/* COPYRIGHT */}
          <div className="mt-10 border-t border-white/20 pt-6 text-sm text-white/70">
            © 2026 Fresh Source Restaurant. All rights reserved.
          </div>

        </div>
      </footer>

      {/* SCROLL TOP BUTTON */}
      <AnimatePresence>
        {showTopButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            onClick={scrollTop}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full text-white shadow-2xl font-black text-xl"
            style={{ backgroundColor: BRAND }}
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
