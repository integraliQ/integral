    // components/SolutionsDark.jsx
    'use client';

    import { motion } from 'framer-motion';
    import Image from 'next/image';

    const solutions = [
    {
        title: 'Cloud Transformation',
        description: 'Secure, scalable cloud adoption and infrastructure modernization to unlock enterprise agility.',
        image: '/images/bg/cloud2.jpg', // Replace with real premium bg images
    },
    {
        title: 'AI & Data Analytics',
        description: 'Transform data into insights with AI-driven analytics to drive next-gen decision making.',
        image: '/images/bg/ai.jpg',
    },
    {
        title: 'Cybersecurity',
        description: 'End-to-end protection strategies tailored for digital-first ecosystems.',
        image: '/images/bg/cyber.jpg',
    },
    {
        title: 'Digital Strategy',
        description: 'Future-ready digital transformation consulting that aligns with business goals.',
        image: '/images/bg/digital.jpg',
    },
    ];

    export default function SolutionsDark() {
    return (
        <section className="py-28 bg-[#0d1117] text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
            <motion.div
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
            >
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight text-white">
                Our Strategic Capabilities
            </h2>
            <p className="mt-4 text-base text-gray-400 max-w-3xl mx-auto">
                Solving tomorrow’s challenges with forward-thinking solutions that deliver tangible business outcomes.
            </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {solutions.map((item, index) => (
                <motion.div
                key={index}
                className="relative group rounded-none overflow-hidden h-[320px] shadow-md cursor-pointer transition-all duration-300"
                initial={{  scale: 0.95 }}
                whileInView={{  scale: 1 }}
                transition={{ duration: 0.6 }}
                >
                <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 z-0 transition-all duration-500 group-hover:scale-125 group-hover:blur-sm group-hover:brightness-70"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 z-10" />

                <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-6">
                    <h3 className="text-2xl font-semibold mb-4 ">{item.title}</h3>
                    <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {item.description}
                    </p>
                </div>
                </motion.div>
            ))}
            </div>
        </div>
        </section>
    );
    }
