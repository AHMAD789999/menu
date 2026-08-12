"use client";

import React from "react";
import { motion } from "framer-motion";

const menuData = [
  {
    id: "01",
    name: "Hibiscus Iced Tea",
    category: "Drinks",
    price: "1.200",
    image: "hibicus drinks.jpeg",
  },
  {
    id: "02",
    name: "Pure Orange Juice",
    category: "Drinks",
    price: "1.200",
    image: "orange Juice.jpeg",
  },
  {
    id: "03",
    name: "Lemon Mint Juice",
    category: "Drinks",
    price: "1.000",
    image: "lemon mint.jpeg",
  },
  {
    id: "04",
    name: "Mineral Water 500ml",
    category: "Drinks",
    price: "0.200",
    image: "https://avatars.mds.yandex.net/i?id=7a228ffcd8d2c25c1e2c0886d61f4a2b2aab3440-7058209-images-thumbs&n=13",
  },
  {
    id: "05",
    name: "Coca Cola",
    category: "Drinks",
    price: "0.300",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "06",
    name: "Coca Cola Light",
    category: "Drinks",
    price: "0.300",
    image: "cola light.jpg",
  },
  {
    id: "07",
    name: "Coca Cola Zero",
    category: "Drinks",
    price: "0.300",
    image: "cola zero.jpg",
  },
  {
    id: "08",
    name: "Fanta Citrus",
    category: "Drinks",
    price: "0.300",
    image: "fantaciturs.jpg",
  },
  {
    id: "09",
    name: "Fanta Strawberry",
    category: "Drinks",
    price: "0.300",
    image: "fantastraw.jpg",
  },
];

export default function DrinksMenu() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50/50 to-white pb-24">

      {/* HEADER */}
      <div className="bg-[#80A852] py-20 md:py-28 px-4 text-center relative overflow-hidden shadow-md">
        <div className="absolute top-0 left-0 w-full h-full opacity-15 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-black rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter relative z-10 drop-shadow-sm"
        >
          Cold <span className="text-black/80 font-black">Drinks</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white font-extrabold uppercase tracking-[0.4em] text-xs md:text-sm mt-4 relative z-10"
        >
          Chilled • Refreshing • Pure
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
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-white font-black text-[10px] tracking-wider px-2.5 py-1 rounded-full uppercase">
                    #{item.id}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-[#80A852] font-black text-[11px] px-3 py-1 rounded-full shadow-sm">
                    {item.category}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-5 text-center">
                  <h3 className="text-lg md:text-xl font-black text-black mt-1 group-hover:text-[#80A852] transition-colors line-clamp-1">
                    {item.name}
                  </h3>
                </div>
              </div>

              {/* PRICE ONLY */}
              <div className="p-5 pt-0">
                <div className="bg-gray-50 rounded-2xl p-3.5 border border-gray-100 flex items-center justify-between">
                  <span className="text-[10px] text-[#80A852] font-black uppercase tracking-wider">
                    Price BD
                  </span>
                  <span className="text-lg md:text-xl font-black text-black">
                    {item.price}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}

        </div>
      </div>

    </main>
  );
}
