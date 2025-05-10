// components/HeroSection.jsx
'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative bg-white text-[#1f2937] pt-36 pb-28 px-6 sm:px-12 md:px-24 lg:px-32">
      {/* Gradient background flare */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-[#f8fafc] to-white" />

      {/* Decorative Lines or Abstract Shapes (subtle) */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-5">
        <svg viewBox="0 0 500 500" className="w-full h-full">
          <path d="M0,100 Q250,200 500,100" fill="none" stroke="#1e293b" strokeWidth="3" />
        </svg>
      </div>

      <motion.div 
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-snug tracking-wide">
          Transforming Enterprises<br />
          with <span className="font-semibold text-[#0f172a]">Intelligent Innovation</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          integraliQ partners with visionary leaders to architect digital ecosystems that deliver measurable value.
        </p>
        <div className="mt-10">
          <button className="bg-[#0f172a] text-white font-medium px-8 py-3 rounded-md hover:bg-[#1e293b] transition-all">
            Explore Our Capabilities
          </button>
        </div>
      </motion.div>
    </section>
  );
}
