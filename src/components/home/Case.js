'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const caseStudies = [
  {
    title: 'AI-Powered CX Transformation',
    description: 'Revolutionized a global retailer’s customer journey using machine learning and predictive analytics.',
    industry: 'Retail & E-commerce',
    img: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'Cloud Migration at Scale',
    description: 'Migrated critical workloads to a hybrid cloud infrastructure for a leading banking institution.',
    industry: 'Banking & Finance',
    img: 'https://images.pexels.com/photos/17323801/pexels-photo-17323801/free-photo-of-network-rack.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'Green Tech for Smart Cities',
    description: 'Designed sustainable IoT ecosystems for a smart city initiative, reducing carbon output by 34%.',
    industry: 'Smart Cities',
    img: 'https://img.freepik.com/premium-photo/factory-conveyor-with-empty-glass-bottles-recycling_1235831-78654.jpg',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const CaseStudiesSection = () => {
  return (
    <section className="relative  text-white py-24 px-6 md:px-20 overflow-hidden">
      {/* <div className="absolute w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] top-[-20%] left-[60%] z-0 pointer-events-none" /> */}

      <div className="relative z-10 max-w-[1400px] mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-3xl md:text-4xl font-semibold mb-6"
        >
          Case Studies
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-lg text-gray-400 max-w-2xl mb-14"
        >
          Real-world impact, measurable outcomes. Explore how integral
          <span className="text-cyan-300">iQ</span> drives transformation across sectors.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-800 hover:shadow-cyan-500/20 transition-shadow duration-300 group"
            >
              <div
                className="h-56 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${study.img}')`,
                }}
              />
              <div className="p-6">
                <p className="text-xs text-cyan-300 uppercase tracking-wide mb-2">
                  {study.industry}
                </p>
                <h4 className="text-lg font-semibold mb-2 group-hover:text-cyan-300 transition-colors">
                  {study.title}
                </h4>
                <p className="text-sm text-gray-400 mb-4">{study.description}</p>
                <Link
                  href="#"
                  className="text-sm text-cyan-400 hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="#"
            className="inline-block px-8 py-3 bg-cyan-400 text-black font-semibold rounded-full hover:bg-cyan-300 transition"
          >
            Explore All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
