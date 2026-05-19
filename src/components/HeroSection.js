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

      {/* 2. The "PEPTIDES" equivalent (Big Typography) */}
      <h1 className="absolute z-10 text-[15vw] font-black text-white/10 tracking-tighter uppercase select-none">
        ARTISAN
      </h1>

      {/* 3. The Floating 3D Asset */}
      <motion.div 
        initial={{ y: 20, rotate: -5 }}
        animate={{ y: -20, rotate: 5 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        className="relative z-20 w-[40%] drop-shadow-[0_35px_35px_rgba(0,0,0,0.8)]"
      >
        <Image 
          src="/premium-pizza.png" 
          alt="Signature Pizza" 
          width={800} 
          height={800} 
          className="hover:scale-105 transition-transform duration-500"
        />
      </motion.div>

      {/* 4. The Content Overlay (Bottom Left) */}
      <div className="absolute bottom-20 left-10 z-30 max-w-sm">
        <h2 className="text-3xl font-bold text-white mb-2">Wood-Fired Perfection</h2>
        <p className="text-gray-400 mb-6">Sourced from Italy. Crafted in Brooklyn. 48-hour fermented dough.</p>
        <button className="bg-[#d4a373] text-black px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-white transition-colors">
          Order Online <span>→</span>
        </button>
      </div>

      {/* 5. The Product Card (Bottom Right) */}
      <div className="absolute bottom-20 right-10 z-30 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
        <span className="text-[10px] text-gray-400 uppercase tracking-widest">Today's Special</span>
        <h3 className="text-xl font-bold text-white">The Truffle Diavola</h3>
        <p className="text-[#d4a373] font-mono mt-1">$24.00</p>
        <div className="mt-4 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white">
          +
        </div>
      </div>

    </section>
  );
}