'use client';

import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
    return (
        <section className="bg-[#0b0b0b] text-gray-100 px-6 md:px-20 py-24 font-sans">
            <div className="max-w-[1200px] mx-auto">
                {/* Heading */}
                <div className="mb-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
                        Start a Conversation
                    </h2>
                    <p className="text-gray-400 mt-4 text-lg max-w-xl mx-auto">
                        We&apos;re not just here to answer questions. We&apos;re here to build solutions with you.
                    </p>
                </div>

                {/* Info + Form */}
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    {/* Info Side */}
                    <div className="space-y-10">
                        <div className="flex items-start gap-4">
                            <Mail className="text-cyan-400 mt-1" />
                            <div>
                                <h4 className="text-lg font-medium">Email</h4>
                                <p className="text-gray-400">hello@integraliq.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Phone className="text-cyan-400 mt-1" />
                            <div>
                                <h4 className="text-lg font-medium">Phone</h4>
                                <p className="text-gray-400">+91 9656250000</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <MapPin className="text-cyan-400 mt-1" />
                            <div>
                                <h4 className="text-lg font-medium">Office</h4>
                                <p className="text-gray-400">7th floor, Capital City, Round North, Thrissur, Kerala 680020</p>
                            </div>
                        </div>
                        
                        <div className="relative w-full h-[300px] md:h-[220px] group">
                            <iframe
                                title="integraliQ Location"
                                width="100%"
                                height="100%"
                                /* style={{ filter: 'grayscale(100%) contrast(120%) opacity(0.6)' }} */
                                className="transition-all rounded-sm duration-700 ease-in-out filter grayscale contrast-125 opacity-60 group-hover:grayscale-0 group-hover:contrast-100 group-hover:opacity-100"
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.658379232264!2d76.21681439999999!3d10.527549999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43e335e8e7ded3af%3A0x8a133439fc1c0a01!2sintegraliQ!5e0!3m2!1sen!2sin!4v1746876602407!5m2!1sen!2sin"
                            />
                            
                            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/90 group-hover:from-black/10 group-hover:to-black/60 pointer-events-none" />
                        </div>

                    </div>

                    {/* Form Side */}
                    <form className="space-y-8">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-sm uppercase tracking-wide text-gray-400">
                                Your Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="John Carter"
                                className="bg-[#121212] border border-gray-700 text-white px-5 py-3 rounded-md focus:outline-none focus:border-cyan-400"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm uppercase tracking-wide text-gray-400">
                                Your Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                className="bg-[#121212] border border-gray-700 text-white px-5 py-3 rounded-md focus:outline-none focus:border-cyan-400"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-sm uppercase tracking-wide text-gray-400">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="5"
                                placeholder="What's on your mind?"
                                className="bg-[#121212] border border-gray-700 text-white px-5 py-3 rounded-md focus:outline-none focus:border-cyan-400"
                            />
                        </div>

                        <button
                            type="submit"
                            className="mt-4 bg-gradient-to-r from-cyan-400 to-cyan-500 text-black font-semibold px-8 py-3 rounded-md hover:opacity-90 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
