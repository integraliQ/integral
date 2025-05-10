'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Emma White',
    role: 'CTO, Zenith Retail',
    text: "integraliQ didn't just meet expectations—they redefined them. Their AI solutions elevated our customer engagement game to a whole new level.",
    avatar: '/images/avatar-1.jpg',
  },
  {
    name: 'Rajiv Menon',
    role: 'VP Technology, Axis Health',
    text: 'From strategy to execution, integraliQ delivered transformative results that helped us scale securely into the cloud.',
    avatar: '/images/avatar-2.jpg',
  },
  {
    name: 'Lena Ortega',
    role: 'Founder, GreenGrid Tech',
    text: 'Sustainability meets innovation—that’s what integraliQ brought to the table. Our carbon footprint dropped while our efficiency soared.',
    avatar: '/images/avatar-3.jpg',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 px-6 md:px-20 bg-black text-white overflow-hidden">
      <div className="absolute top-[-10%] left-[70%] w-[500px] h-[500px] bg-cyan-400/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 max-w-[1400px] mx-auto text-center">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-semibold mb-6"
        >
          What Our Clients Say
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-lg text-gray-400 mb-14 max-w-xl mx-auto"
        >
          Voices of transformation, innovation, and trust. Here’s how we’re empowering our partners across industries.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-cyan-400 transition shadow-lg"
            >
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                “{testimonial.text}”
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.avatar}
                  width={48}
                  height={48}
                  className="rounded-full object-cover border border-gray-600"
                  alt={testimonial.name}
                />
                <div className="text-left">
                  <p className="font-medium text-white">{testimonial.name}</p>
                  <p className="text-xs text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
