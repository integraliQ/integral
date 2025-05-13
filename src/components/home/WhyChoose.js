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
    <section className="relative py-28  text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[800px] h-[800px] bg-cyan-400/10 rounded-full blur-[120px] top-[-20%] left-[-10%] z-0" />
        <div className="absolute w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] bottom-[-10%] right-[-10%] z-0" />
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <motion.div
          initial={{ y: 30 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            Why integral<span className='text-cyan-400'>iQ</span>?
          </h2>
          <p className="mt-4 text-base text-gray-400 max-w-2xl mx-auto">
            Our edge lies in strategy-first thinking, fueled by innovation and executed with precision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-b from-gray-900 to-[#001123] p-8 shadow-lg border border-gray-800 hover:border-[#00d8ff] hover:bg-none hover:rounded-br-3xl hover:rounded-tl-3xl transition-all group duration-500"
              initial={{ y: 100 }}
              whileInView={{ y: 0, transition:{ duration: 0.1, delay: index * 0.1 } }}
              whileHover={{scale:1.1, transition:{duration:0.2}}}
              viewport={{ once: true }}
            >
              <div className="mb-4 group-hover:animate-bounce">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400">{reason.title}</h3>
              <p className="text-gray-400 text-sm">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
