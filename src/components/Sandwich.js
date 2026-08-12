"use client";

import React from "react";
import { motion } from "framer-motion";

const menuData = [
  {
    id: "01",
    name: "Spicy chicken sandwich",
    category: "Sandwich",
    desc: "chicken Pari Pari, cabbage, Onion, cheddar cheese with special sauce",
    regular: "1.200",
    whole: "2.000",
    image: "Spicy chicken sandwich.jpg",
  },
  {
    id: "02",
    name: "Teriyaki chicken sandwich",
    category: "Sandwich",
    desc: "chicken Teriyaki, cabbage, onion, cheddar cheese with special sauce",
    regular: "1.200",
    whole: "2.000",
    image: "tcs.jpeg",
  },
  {
    id: "03",
    name: "Tendor Chicken Sandwich",
    category: "Sandwich",
    desc: "Grill chicken, cabbage, cheddar cheese with special sauce",
    regular: "1.200",
    whole: "2.000",
    image: "Grill Chicken Sandwich.jpeg",
  },
  {
    id: "04",
    name: "Tuna Sandwich",
    category: "Sandwich",
    desc: "tuna mix, pickle onion , cheddar cheese with special sauce",
    regular: "1.200",
    whole: "2.000",
    image: "Tuna Sandwich.jpeg",
  },
  {
    id: "05",
    name: "Egg Sandwich",
    category: "Sandwich",
    desc: "Egg mix, cheese cheddar with special sauce.",
    regular: "1.000",
    whole: "1.500",
    image: "Egg Mix Sandwich.jpeg",
  },
];

export default function SandwichMenu() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50/50 to-white pb-24">

      {/* HEADER */}
      <div className="bg-[#80A852] py-20 md:py-28 px-4 text-center relative overflow-hidden shadow-md">
        <div className="absolute top-0 left-0 w-full h-full opacity-15 pointer-events-none">
          <div className="absolute bottom-[-20%] right-[-10%] w-96 h-96 bg-black rounded-full blur-3xl"></div>
          <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter relative z-10 drop-shadow-sm"
        >
          Sandwich <span className="text-black/80 font-black">Menu</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white font-extrabold uppercase tracking-[0.4em] text-xs md:text-sm mt-4 relative z-10"
        >
          Toasted • Fresh • Handmade
        </motion.p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-10 md:-mt-12 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

          {menuData.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* IMAGE */}
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md text-white font-black text-[10px] tracking-wider px-2.5 py-1 rounded-full uppercase">
                    #{item.id}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-5 text-left">
                  <span className="text-[10px] font-black text-[#80A852] uppercase tracking-wider">
                    {item.category}
                  </span>

                  <h3 className="text-lg md:text-xl font-black text-black mt-1 group-hover:text-[#80A852] transition-colors line-clamp-1">
                    {item.name}
                  </h3>

                  <p className="text-xs md:text-sm text-black/80 font-medium mt-2.5 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* PRICES (REGULAR + WHOLE MEAL) */}
              <div className="p-5 pt-0">
                <div className="bg-gray-50 rounded-2xl p-3.5 border border-gray-100 grid grid-cols-2 gap-3 divide-x divide-gray-200">
                  <div className="pr-2">
                    <span className="block text-[9px] text-[#80A852] font-black uppercase tracking-wider">
                      Regular
                    </span>
                    <span className="text-sm md:text-base font-black text-black">
                      BD {item.regular}
                    </span>
                  </div>

                  <div className="pl-3">
                    <span className="block text-[9px] text-[#80A852] font-black uppercase tracking-wider">
                      Whole Meal
                    </span>
                    <span className="text-sm md:text-base font-black text-black">
                      BD {item.whole}
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
