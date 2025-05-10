'use client';

import { motion } from 'framer-motion';
import { FaRocket, FaLightbulb, FaUsersCog, FaShieldAlt } from 'react-icons/fa';

const reasons = [
  {
    title: 'Innovative DNA',
    icon: <FaLightbulb className="text-3xl text-[#00d8ff]" />,
    description: 'We challenge the status quo with forward-thinking strategies and modern technologies.',
  },
  {
    title: 'Tailored Solutions',
    icon: <FaUsersCog className="text-3xl text-[#00ffa2]" />,
    description: 'No cookie-cutter blueprints—only sharp, bespoke solutions designed for your growth.',
  },
  {
    title: 'Agile Mindset',
    icon: <FaRocket className="text-3xl text-[#ff8a00]" />,
    description: 'We move fast, iterate faster, and deliver without compromise.',
  },
  {
    title: 'Trusted Partnership',
    icon: <FaShieldAlt className="text-3xl text-[#c084fc]" />,
    description: 'Integrity, transparency, and commitment define every interaction with us.',
  },
];

export default function WhyIntegraliQ() {
  return (
    <section className="py-28 bg-[#0c0f16] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <motion.div
          initial={{ y: 30 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            Why integraliQ?
          </h2>
          <p className="mt-4 text-base text-gray-400 max-w-2xl mx-auto">
            Our edge lies in strategy-first thinking, fueled by innovation and executed with precision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-[#12151d] p-8 shadow-lg border border-gray-800 hover:border-[#00d8ff] transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-400 text-sm">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
