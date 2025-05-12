// components/HeroSection.jsx
'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-28 px-6 sm:px-12 md:px-24 lg:px-32">
      {/* Decorative Background Circles */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-[-5rem] left-[-5rem] w-[300px] h-[300px] bg-purple-600 rounded-full opacity-30 blur-3xl" />
        <div className="absolute bottom-[-4rem] right-[-4rem] w-[250px] h-[250px] bg-blue-500 rounded-full opacity-20 blur-2xl" />
      </div>

      <motion.div 
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
          Future-ready Solutions<br/>for a Digital Tomorrow
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          Empowering enterprises with intelligent technology and visionary strategies to shape tomorrow&apos;s success.
        </p>
        <div className="mt-8">
          <button className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition-all">
            Discover IntegraliQ
          </button>
        </div>
      </motion.div>
    </section>
  );
}
