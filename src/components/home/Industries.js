'use client';

import { motion } from 'framer-motion';
import React from 'react';

const industries = {
  'Core Sectors': [
    'Banking & Finance',
    'Healthcare & Life Sciences',
    'Retail & E-commerce',
    'Telecommunications',
  ],
  'Emerging Sectors': [
    'Green Energy',
    'Smart Cities',
    'EdTech',
    'Digital Media',
  ],
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const IndustriesSection = () => {
  return (
    <section className="relative overflow-hidden text-white py-24 px-6 md:px-20">
{/*     <section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-[#0c0c0c] text-white py-24 px-6 md:px-20">
 */}      {/* Background glow circles */}
     {/*  <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[800px] h-[800px] bg-cyan-400/10 rounded-full blur-[120px] top-[-20%] left-[-10%] z-0" />
        <div className="absolute w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] bottom-[-10%] right-[-10%] z-0" />
      </div> */}

      <div className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        
        {/* Text Column */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed mb-12">
            integral<span className="text-cyan-300 font-semibold">iQ</span> empowers ambitious enterprises to thrive in a connected,
            intelligent future with solutions deeply rooted in your industry&apos;s DNA.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {Object.entries(industries).map(([heading, items], i) => (
              <motion.div
                key={heading}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <h4 className="text-sm font-bold text-cyan-300 uppercase tracking-widest mb-4">
                  {heading}
                </h4>
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="text-lg text-gray-200 hover:text-cyan-400 hover:pl-4 transition-all duration-200 relative group"
                    >
                      <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0.5 h-0.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:w-2 group-hover:h-2 transition-all duration-200" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image Column */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="rounded-xl overflow-hidden shadow-xl border border-gray-800 h-full"
        >
          <div
            className="h-full w-full bg-cover bg-center bg-no-repeat rounded-xl"
            style={{
              backgroundImage:
                "linear-gradient(to bottom right, rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url('https://images.pexels.com/photos/273209/pexels-photo-273209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
              minHeight: '400px',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;
