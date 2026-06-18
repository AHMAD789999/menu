"use client";

import React from "react";
import { motion } from "framer-motion";

const menuData = [
  {
    id: "01",
    name: 'American Cheese Pizza 10"',
    desc: "Ground beef, jalapeno, pickle, onions, mozzarella cheese, base pizza sauce, sprinkled with American cheese sauce",
    price: "2.900",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "02",
    name: 'Chicken Ranch Pizza 10"',
    desc: "Chicken, tomato, jalapeno, mozzarella cheese, creamy base sauce, topped with ranch sauce",
    price: "2.800",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "03",
    name: 'Pepperoni Pizza 10"',
    desc: "Beef pepperoni, mozzarella cheese, base pizza sauce, special sauce topping",
    price: "2.800",
    image:
      "ppp.jpeg",
  },
  {
    id: "04",
    name: 'Vegetable Pizza 10"',
    desc: "Tomato, onions, olives, capsicum, broccoli, mozzarella cheese, base pizza sauce, special sauce",
    price: "2.500",
    image:
      "9.jpeg",
  },
  {
    id: "05",
    name: 'Margherita 10"',
    desc: "Mozzarella cheese, base pizza sauce",
    price: "2.500",
    image:
      "pi.jpeg",
  },
  {
    id: "06",
    name: 'Chicken Tikka Pizza 10"',
    desc: "Chicken tikka, onions, capsicum, tomato, base pizza sauce, special sauce topping",
    price: "2.500",
    image:
      "Chicken Tikka pizza.jpeg",
  },
];

export default function PizzaMenu() {
  return (
    <main className="min-h-screen bg-white pb-20">

      {/* HEADER */}
      <div className="bg-[#80A852] py-16 md:py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-black rounded-full blur-3xl"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter relative z-10"
        >
          Pizza <span className="text-white/80">Menu</span>
        </motion.h1>

        <p className="text-white/80 font-bold uppercase tracking-[0.4em] text-xs mt-4 relative z-10">
          Stone Baked • Hot • Premium Ingredients
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
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
              <div className="relative aspect-square md:aspect-video overflow-hidden">
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

                <p className="text-[10px] md:text-sm text-gray-500 mt-2 line-clamp-3 leading-relaxed">
                  {item.desc}
                </p>

                {/* PRICE ONLY */}
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
