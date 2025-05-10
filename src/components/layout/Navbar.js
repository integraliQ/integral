'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const navItems = [
  {
    title: 'Services',
    megaMenu: [
      {
        heading: 'Consulting & Transformation',
        links: [
          { name: 'Business Strategy', href: '#' },
          { name: 'Digital Transformation', href: '#' },
          { name: 'Customer Experience', href: '#' },
          { name: 'Operational Excellence', href: '#' },
        ],
      },
      {
        heading: 'Technology & Innovation',
        links: [
          { name: 'AI & Automation', href: '#' },
          { name: 'Cloud Solutions', href: '#' },
          { name: 'Blockchain Advisory', href: '#' },
          { name: 'Cybersecurity Services', href: '#' },
        ],
      },
      {
        heading: 'Managed Services',
        links: [
          { name: 'IT Infrastructure', href: '#' },
          { name: 'Workplace Services', href: '#' },
          { name: 'Application Services', href: '#' },
          { name: 'Platform Operations', href: '#' },
        ],
      },
      {
        heading: 'Sustainability',
        links: [
          { name: 'Green IT', href: '#' },
          { name: 'Carbon Strategy', href: '#' },
          { name: 'ESG Reporting', href: '#' },
          { name: 'Circular Economy', href: '#' },
        ],
      },
    ],
  },
  {
    title: 'Industries',
    megaMenu: [
      {
        heading: 'Core Sectors',
        links: [
          { name: 'Banking & Finance', href: '#' },
          { name: 'Healthcare & Life Sciences', href: '#' },
          { name: 'Retail & E-commerce', href: '#' },
          { name: 'Telecommunications', href: '#' },
        ],
      },
      {
        heading: 'Emerging Sectors',
        links: [
          { name: 'Green Energy', href: '#' },
          { name: 'Smart Cities', href: '#' },
          { name: 'EdTech', href: '#' },
          { name: 'Digital Media', href: '#' },
        ],
      },
    ],
  },
  { title: 'Insights', href: '#insights' },
  { title: 'Careers', href: '#careers' },
  { title: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black/30 backdrop-blur-sm shadow-sm border-b border-gray-800">
      <div className="max-w-[1600px] mx-auto px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tight text-gray-50">
          integral<span className="text-cyan-300">iQ</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-10 text-sm text-gray-50 relative">
          {navItems.map((item) => (
            <div
              key={item.title}
              className="relative"
              onMouseEnter={() => item.megaMenu && setOpenMenu(item.title)}
              onMouseLeave={() => item.megaMenu && setOpenMenu(null)}
            >
              <Link
                href={item.href || '#'}
                className="hover:text-cyan-300 transition duration-200"
              >
                {item.title}
              </Link>

              {/* Mega Menu */}
              {/* <AnimatePresence>
                {openMenu === item.title && item.megaMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 top-full w-screen bg-white shadow-xl border-t border-gray-200 py-10 px-4"
                  >
                    <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                      {item.megaMenu.map((section) => (
                        <div key={section.heading}>
                          <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">
                            {section.heading}
                          </h4>
                          <ul className="space-y-2">
                            {section.links.map((link) => (
                              <li key={link.name}>
                                <a
                                  href={link.href}
                                  className="text-sm text-gray-600 hover:text-blue-700 transition"
                                >
                                  {link.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                )}
              </AnimatePresence> */}
            </div>
          ))}

          <AnimatePresence>
            {openMenu &&
              navItems.find((item) => item.title === openMenu)?.megaMenu && (
                <motion.div
                  initial={{ opacity: 1, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 1, y: 10 }}
                  onMouseEnter={() => setOpenMenu(openMenu)}
                  onMouseLeave={() => setOpenMenu(null)}
                  className="fixed left-0 top-14 w-full bg-black/30 backdrop-blur-sm shadow-xl border-t border-gray-700 py-10 px-20 z-40"
                >
                  <div className="max-w-[1400px] mx-auto grid grid-cols-4 gap-10">
                    {navItems
                      .find((item) => item.title === openMenu)
                      ?.megaMenu.map((section) => (
                        <div key={section.heading}>
                          <h4 className="text-sm font-semibold text-gray-50 mb-4 uppercase tracking-wider">
                            {section.heading}
                          </h4>
                          <ul className="space-y-2">
                            {section.links.map((link) => (
                              <li key={link.name}>
                                <a
                                  href={link.href}
                                  className="text-sm text-gray-200 hover:text-cyan-400 transition"
                                >
                                  {link.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                  </div>
                </motion.div>
              )}
          </AnimatePresence>

        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-gray-700">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white px-6 pb-4">
          {navItems.map((item) => (
            <div key={item.title} className="py-2">
              <a href={item.href || '#'} className="text-gray-700 hover:text-blue-700">
                {item.title}
              </a>
              {/* For simplicity, mega menus are not expanded in mobile view */}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
