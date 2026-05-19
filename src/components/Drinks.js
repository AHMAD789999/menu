"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

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
          Cold <span className="text-white/80">Drinks</span>
        </motion.h1>

        <p className="text-white/80 font-bold uppercase tracking-[0.4em] text-xs mt-4 relative z-10">
          Chilled • Refreshing • Pure
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
                <div className="absolute top-2 left-2 bg-black/40 text-white text-[10px] px-2 py-1 rounded-full backdrop-blur-md">
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

                {/* PRICE ONLY */}
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">

                  <div className="text-left">
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
