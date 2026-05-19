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
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "02",
    name: "Teriyaki chicken sandwich",
    category: "Sandwich",
    desc: "chicken Teriyaki, cabbage, onion, cheddar cheese with special sauce",
    regular: "1.200",
    whole: "2.000",
    image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=500&q=80",
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
    <main className="min-h-screen bg-white pb-20">

      {/* HEADER */}
      <div className="bg-[#80A852] py-16 md:py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute bottom-[-10%] right-[-5%] w-64 h-64 bg-black rounded-full blur-3xl"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter relative z-10"
        >
          Sandwich <span className="text-white/80">Menu</span>
        </motion.h1>

        <p className="text-white/80 font-bold uppercase tracking-[0.4em] text-xs mt-4 relative z-10">
          Toasted • Fresh • Handmade
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
                <div className="absolute top-2 right-2 bg-black/40 text-white text-[10px] px-2 py-1 rounded-full backdrop-blur-md">
                  #{item.id}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-3 md:p-6 text-center">

                <span className="text-[8px] md:text-xs font-black text-[#80A852] uppercase tracking-widest">
                  {item.category}
                </span>

                <h3 className="text-sm md:text-xl font-black text-gray-900 mt-1 group-hover:text-[#80A852] transition-colors">
                  {item.name}
                </h3>

                <p className="text-[10px] md:text-sm text-gray-400 mt-2 line-clamp-2 leading-relaxed">
                  {item.desc}
                </p>

                {/* PRICES (REGULAR + WHOLE MEAL) */}
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between">

                  <div>
                    <span className="block text-[8px] md:text-[10px] text-[#80A852] font-black uppercase tracking-widest">
                      Regular
                    </span>
                    <span className="text-sm md:text-xl font-black text-gray-900">
                      BD {item.regular}
                    </span>
                  </div>

                  <div>
                    <span className="block text-[8px] md:text-[10px] text-[#80A852] font-black uppercase tracking-widest">
                      Whole Meal
                    </span>
                    <span className="text-sm md:text-xl font-black text-gray-900">
                      KD {item.whole}
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
