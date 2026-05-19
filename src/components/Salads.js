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
    image:
      "https://avatars.mds.yandex.net/i?id=bff7989db6d2d2ec8e24084048d7f16140476936-4439117-images-thumbs&n=13",
  },
];

export default function SaladMenu() {
  return (
    <main className="min-h-screen bg-white pb-20">
      {/* HEADER */}
      <div className="bg-[#80A852] py-16 md:py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-64 h-64 bg-black rounded-full blur-3xl"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter relative z-10"
        >
          Salad <span className="text-white/80">Menu</span>
        </motion.h1>

        <p className="text-white/80 font-bold uppercase tracking-[0.4em] text-xs mt-4 relative z-10">
          Organic • Hand-Tossed • Nutritious
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
                <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-md text-[#80A852] font-bold text-[10px] px-2 py-1 rounded-full">
                  {item.category}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-3 md:p-6">
                <h3 className="text-sm md:text-xl font-black text-gray-900 group-hover:text-[#80A852] transition-colors">
                  {item.name}
                </h3>

                <p className="text-[10px] md:text-sm text-gray-400 mt-2 line-clamp-3 leading-relaxed h-12 md:h-16">
                  {item.desc}
                </p>

                {/* PRICES */}
                <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                  <div>
                    <span className="block text-[8px] md:text-[10px] text-[#80A852] font-black uppercase tracking-widest">
                      Regular
                    </span>
                    <span className="text-sm md:text-xl font-black text-gray-900">
                      {item.regular}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="block text-[8px] md:text-[10px] text-[#80A852] font-black uppercase tracking-widest">
                      Large
                    </span>
                    <span className="text-sm md:text-xl font-black text-gray-900">
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
