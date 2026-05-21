"use client";

import React from "react";
import { motion } from "framer-motion";

const menuData = [
  {
    id: "01",
    name: "Grill Chicken Pasta with veg",
    desc: "Pasta, grilled chicken, olives, green pepper, mushroom, broccoli, zucchini, mozzarella cheese, your choice of fresh source (white, red, mix)",
    price: "2.500",
    image:
      "grill chicken pasta new.jpeg",
  },
  {
    id: "02",
    name: "Shrimp Pasta with veg",
    desc: "Pasta, shrimp, vegetables, mushrooms, mozzarella cheese, your choice of sauce (white, red, mix)",
    price: "2.500",
    image:
      "shrimp pasta new.jpeg",
  },
  {
    id: "03",
    name: "Vegetable Pasta",
    desc: "Pasta, black olives, green pepper, mushroom, broccoli, zucchini, mozzarella cheese, your choice of fresh source (white, red, mix)",
    price: "2.200",
    image:
      "Vegetable Pasta.jpg",
  },
  {
    id: "04",
    name: "Everything Pasta",
    desc: "Pasta, chicken, shrimp, vegetables, mozzarella cheese, your choice of sauce (white, red, mix)",
    price: "2.500",
    image:
      "everything pasta.jpeg",
  },
  {
    id: "05",
    name: "Chicken Noodles",
    desc: "Spaghetti, chicken, green pepper, onions served with special tomato sauce",
    price: "2.200",
    image:
      "chicken noodles (1).jpeg",
  },
  {
    id: "06",
    name: "Chicken Teriyaki Noodles",
    desc: "Spaghetti, chicken teriyaki, fresh vegetables served with special sauce",
    price: "2.200",
    image:
      "https://images.unsplash.com/photo-1612240498936-65f5101365d2?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "07",
    name: "Beef Bolognese Noodles",
    desc: "Spaghetti, beef, tomato, fresh vegetables served with special sauce",
    price: "2.500",
    image:
      "beef bologneese.jpeg",
  },
];

export default function PastaMenu() {
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
          Pasta <span className="text-white/80">Menu</span>
        </motion.h1>

        <p className="text-white/80 font-bold uppercase tracking-[0.4em] text-xs mt-4 relative z-10">
          Italian Style • Fresh • Handmade
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
                <h3 className="text-sm md:text-xl font-black text-gray-900 group-hover:text-[#80A852] transition-colors">
                  {item.name}
                </h3>

                <p className="text-[10px] md:text-sm text-gray-500 mt-2 line-clamp-3 leading-relaxed h-12 md:h-16">
                  {item.desc}
                </p>

                {/* PRICE ONLY */}
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                  <div>
                    <span className="block text-[8px] md:text-[10px] text-[#80A852] font-black uppercase tracking-widest">
                      Price
                    </span>
                    <span className="text-sm md:text-xl font-black text-gray-900">
                      BD{item.price}
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
