"use client";

import React from "react";
import { motion } from "framer-motion";

const menuData = [
  {
    id: "01",
    name: "Chicken strognoff W/Rice",
    category: "Rice",
    desc: "chicken Strognoff served with white rice and grilled vegetables",
    price: "1.900",
    image: "1.jpeg",
  },
  {
    id: "02",
    name: "Mexican Chicken w/Rice",
    category: "Rice",
    desc: "Mexican Chicken served with white rice and grilled vegetables",
    price: "1.900",
    image: "mexican chicken.jpeg",
  },
  {
    id: "03",
    name: "Tandoori chicken w/Rice",
    category: "Rice",
    desc: "Tandoori chicken served with white rice and grilled vegetables",
    price: "1.900",
    image: "tandori chicken.jpeg",
  },
  {
    id: "04",
    name: "Grill Chicken with Rice",
    category: "Rice",
    desc: "Grill chicken, herb rice, pickle onion, fried onion, lettuce, sesame seeds serve with special sauce",
    price: "2.000",
    image: "grill chk rice.jpeg",
  },
  {
    id: "05",
    name: "Crab Rice",
    category: "Rice",
    desc: "Crab mix, herb rice, pickle onion, cabbage, carrot, fried onion, sesame seeds serve with asian sauce",
    price: "2.500",
    image: "crab eice.jpeg",
  },
  {
    id: "06",
    name: "Teriyaki chicken w/Rice",
    category: "Rice",
    desc: "Teriyaki chicken, herb rice, fresh vegetables sesame seeds serve with special sauce",
    price: "2.500",
    image: "https://www.mashed.com/img/gallery/classic-teriyaki-chicken-recipe/l-intro-1651603430.jpg",
  },
];

export default function RiceMenu() {
  return (
    <main className="min-h-screen bg-white pb-20">

      {/* HEADER */}
      <div className="bg-[#80A852] py-16 md:py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-black rounded-full blur-3xl"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter relative z-10"
        >
          Rice <span className="text-white/80">Menu</span>
        </motion.h1>

        <p className="text-white/80 font-bold uppercase tracking-[0.4em] text-xs mt-4 relative z-10">
          Nourishing • Hearty • Freshly Cooked
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
          {menuData.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group bg-white rounded-2xl md:rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500"
            >

              {/* IMAGE */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-black/50 text-white text-[10px] px-2 py-1 rounded-full backdrop-blur-md">
                  #{item.id}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-3 md:p-6">
                <span className="text-[8px] md:text-xs font-black text-[#80A852] uppercase tracking-widest">
                  {item.category}
                </span>

                <h3 className="text-sm md:text-xl font-black text-gray-900 mt-1 group-hover:text-[#80A852] transition-colors">
                  {item.name}
                </h3>

                <p className="text-[10px] md:text-sm text-gray-500 mt-2 line-clamp-3 leading-relaxed">
                  {item.desc}
                </p>

                {/* PRICE ONLY (NO PLUS ICON) */}
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="block text-[8px] md:text-[10px] text-[#80A852] font-black uppercase tracking-widest">
                      Price BD
                    </span>
                    <span className="text-sm md:text-2xl font-black text-gray-900">
                      {item.price}
                    </span>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </main>
  );
}
