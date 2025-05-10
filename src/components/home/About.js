'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] text-white py-32 px-6 md:px-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-[700px] h-[700px] bg-cyan-400/10 blur-[120px] -translate-x-1/2 -translate-y-1/2 rounded-full z-0" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-400/10 blur-[80px] rounded-full z-0" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto text-center">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-4xl md:text-5xl font-semibold leading-tight mb-6 tracking-tight"
        >
          Who We Are at <span className="text-cyan-400">integraliQ</span>
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-lg text-gray-400 max-w-3xl mx-auto mb-14"
        >
          We’re not just a consultancy — we are your strategic transformation partner. Powered by vision, driven by technology, and grounded in impact.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-12 text-left">
          {[
            {
              title: 'Mission',
              desc: 'Empowering enterprises to unlock growth through technology, innovation, and purposeful strategy.',
            },
            {
              title: 'Vision',
              desc: 'To become the most trusted partner for global organizations navigating digital transformation at scale.',
            },
            {
              title: 'Principles',
              desc: 'Rooted in integrity. Inspired by curiosity. Committed to outcomes that matter.',
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:shadow-xl hover:shadow-cyan-500/10 transition"
            >
              <h3 className="text-xl font-semibold text-white mb-4 tracking-wide">
                {item.title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
