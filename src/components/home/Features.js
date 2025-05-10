'use client';

import { BarChart3, ShieldCheck, Cpu, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <BarChart3 className="text-blue-700 w-6 h-6" />,
    title: 'Business Intelligence',
    description:
      'Empower your enterprise with real-time data insights and predictive analytics to fuel growth.',
  },
  {
    icon: <ShieldCheck className="text-blue-700 w-6 h-6" />,
    title: 'Cybersecurity & Risk',
    description:
      'Stay resilient with cutting-edge threat protection, compliance services, and risk frameworks.',
  },
  {
    icon: <Cpu className="text-blue-700 w-6 h-6" />,
    title: 'AI & Automation',
    description:
      'Deploy scalable AI models and robotic process automations to streamline complex operations.',
  },
  {
    icon: <Activity className="text-blue-700 w-6 h-6" />,
    title: 'Digital Transformation',
    description:
      'Reimagine customer journeys, optimize digital experiences, and modernize legacy systems.',
  },
];

export default function SolutionsGrid() {
  return (
    <section className="bg-white py-20 border-t border-gray-200">
      <div className="max-w-[1400px] px-8 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 text-center mb-12"
        >
          Transformative Solutions for Next-Gen Enterprises
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gray-50 p-6 rounded-2xl border hover:shadow-lg transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
