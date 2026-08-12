import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PizzaHero() {
  return (
    <section className="relative h-screen w-full bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
      
      {/* 1. Background Layer (Deep Texture) */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image 
          src="/wood-charcoal-texture.jpg" 
          alt="background" 
          fill 
          className="object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
      </div>

      {/* 2. The Big Typography Background Layer */}
      <h1 className="absolute z-10 text-[15vw] font-black text-white/10 tracking-tighter uppercase select-none">
        ARTISAN
      </h1>

      {/* 3. The Floating 3D Asset */}
      <motion.div 
        initial={{ y: 20, rotate: -5 }}
        animate={{ y: -20, rotate: 5 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        className="relative z-20 w-[80%] sm:w-[50%] md:w-[40%] drop-shadow-[0_35px_35px_rgba(0,0,0,0.8)]"
      >
        <Image 
          src="/premium-pizza.png" 
          alt="Signature Pizza" 
          width={800} 
          height={800} 
          priority
          className="hover:scale-105 transition-transform duration-500 w-full h-auto object-contain"
        />
      </motion.div>

      {/* 4. The Content Overlay (Bottom Left) */}
      <div className="absolute bottom-10 left-6 sm:left-10 z-30 max-w-xs sm:max-w-sm">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Wood-Fired Perfection</h2>
        <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6 leading-relaxed">Sourced from Italy. Crafted in Brooklyn. 48-hour fermented dough.</p>
        <button className="bg-[#d4a373] text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 hover:bg-white transition-colors">
          Order Online <span>→</span>
        </button>
      </div>

      {/* 5. The Product Card (Bottom Right) */}
      <div className="absolute bottom-10 right-6 sm:right-10 z-30 bg-white/5 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-white/10 hidden sm:block">
        <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Today's Special</span>
        <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">The Truffle Diavola</h3>
        <p className="text-[#d4a373] font-mono mt-1 text-sm sm:text-base font-bold">$24.00</p>
        <div className="mt-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 flex items-center justify-center text-white cursor-pointer hover:bg-white/10 transition-colors">
          +
        </div>
      </div>

    </section>
  );
}
