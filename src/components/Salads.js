"use client";

import React from "react";
import { motion } from "framer-motion";

const menuData = [
  {
    id: "01",
    name: "Fresh Source Salad",
    category: "Salad",
    desc: "Lettuce iceberg, grill chicken, crispy onion, grill corn, cripy potato, feta cheese serve with Fresh source dressing",
    regular: "2.000",
    large: "2.900",
    image: "fresh source salad.jpeg",
  },
  {
    id: "02",
    name: "Crab Salad",
    category: "Salad",
    desc: "Lettuce iceberg, carrot, cabbage, crab mix, crispy potato, sesame seeds, parsley, almond sprinkle serve with asian dressing",
    regular: "2.300",
    large: "2.900",
    image: "crab salad.jpeg",
  },
  {
    id: "03",
    name: "Tuna Crunch Salad",
    category: "Salad",
    desc: "Lettuce iceberg, pasta, parsley, grill corn, olive sliced, tuna mix, crispy potato, sprinkle with puff rice & Pomegranate with italian dressing",
    regular: "2.300",
    large: "3.000",
    image: "Tuna Crunch salad.jpeg",
  },
  {
    id: "04",
    name: "Nature salad",
    category: "Salad",
    desc: "Lettuce iceberg, burgul, parsley, olives sliced, capcicum, pomegranate, wallnuts with",
    regular: "1.900",
    large: "3.000",
    image: "Nature Salad.jpeg",
  },
  {
    id: "05",
    name: "Date Balsamic salad",
    category: "Salad",
    desc: "Lettuce ieberg, grilled chicken, walnuts, dates, pickled onion, flaxseed, parmesan cheese, serve with balsamic dressing",
    regular: "2.500",
    large: "3.200",
    image: "date balsamic salad.jpeg",
  },
  {
    id: "06",
    name: "Taco Beef Salad",
    category: "Salad",
    desc: "Lettuce iceberg, ground beef, jallapino, onions, capsicum, tomatoes, crispy onion, tortilla chips, with ranch salsa dressing",
    regular: "2.300",
    large: "2.900",
    image: "Taco Beef salad.jpeg",
  },
  {
    id: "07",
    name: "Quinua Avacado salad",
    category: "Salad",
    desc: "Quoinua mix, avocado, lettuce, pomegranate, wallnuts",
    regular: "2.200",
    large: "3.000",
    image: "Quinua Avacado salad.jpg",
  },
];

export default function SaladMenu() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50/50 to-white pb-24">
      {/* HEADER */}
      <div className="bg-[#80A852] py-20 md:py-28 px-4 text-center relative overflow-hidden shadow-md">
        <div className="absolute top-0 left-0 w-full h-full opacity-15 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-black rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter relative z-10 drop-shadow-sm"
        >
          Salad <span className="text-black/80 font-black">Menu</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white font-extrabold uppercase tracking-[0.4em] text-xs md:text-sm mt-4 relative z-10"
        >
          Organic • Hand-Tossed • Nutritious
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
                <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-white font-black text-[10px] tracking-wider px-2.5 py-1 rounded-full uppercase">
                    #{item.id}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-[#80A852] font-black text-[11px] px-3 py-1 rounded-full shadow-sm">
                    {item.category}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <h3 className="text-lg md:text-xl font-black text-black group-hover:text-[#80A852] transition-colors line-clamp-1">
                    {item.name}
                  </h3>

                  <p className="text-xs md:text-sm text-black/80 font-medium mt-2.5 leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* PRICES */}
              <div className="p-5 pt-0">
                <div className="bg-gray-50 rounded-2xl p-3.5 border border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] text-[#80A852] font-black uppercase tracking-wider">
                      Regular
                    </span>
                    <span className="text-base md:text-lg font-black text-black">
                      {item.regular}
                    </span>
                  </div>

                  <div className="h-8 w-[1px] bg-gray-200"></div>

                  <div className="text-right">
                    <span className="block text-[10px] text-[#80A852] font-black uppercase tracking-wider">
                      Large
                    </span>
                    <span className="text-base md:text-lg font-black text-black">
                      {item.large}
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
