'use client';

import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black py-16 px-6 md:px-20 text-gray-200">
      <div className="max-w-[1200px] mx-auto text-center">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          {/* Logo */}
          <div className="text-3xl font-bold text-gray-50 mb-6 md:mb-0">
            integrali<span className="text-cyan-300">Q</span>
          </div>

          {/* Quick Links */}
          <div className="flex gap-12 mb-6 md:mb-0">
            <ul className='text-right'>
              <li><Link href="#services" className="hover:text-cyan-300 transition">Services</Link></li>
              <li><Link href="#insights" className="hover:text-cyan-300 transition">Insights</Link></li>
              <li><Link href="#careers" className="hover:text-cyan-300 transition">Careers</Link></li>
              <li><Link href="#industries" className="hover:text-cyan-300 transition">Industries</Link></li>
            </ul>
            <ul className='text-left'>
              <li><Link href="#about" className="hover:text-cyan-300 transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-cyan-300 transition">Contact</Link></li>
              <li><Link href="#privacy" className="hover:text-cyan-300 transition">Privacy Policy</Link></li>
              <li><Link href="#terms" className="hover:text-cyan-300 transition">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 justify-center md:justify-start">
            <Link href="https://facebook.com" className="text-gray-200 hover:text-cyan-300 transition duration-300">
              <Facebook size={20} />
            </Link>
            <Link href="https://twitter.com" className="text-gray-200 hover:text-cyan-300 transition duration-300">
              <Twitter size={20} />
            </Link>
            <Link href="https://linkedin.com" className="text-gray-200 hover:text-cyan-300 transition duration-300">
              <Linkedin size={20} />
            </Link>
            <Link href="https://instagram.com" className="text-gray-200 hover:text-cyan-300 transition duration-300">
              <Instagram size={20} />
            </Link>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-700 pt-10 mt-10">
          <h3 className="text-2xl font-semibold text-gray-100 mb-4">Stay Updated</h3>
          <p className="text-lg text-gray-400 mb-6">Subscribe to our newsletter for the latest insights and updates.</p>
          <div className="flex justify-center">
            <form className="w-full max-w-[500px] flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-2 border-gray-600 text-gray-200 px-6 py-3 w-full rounded-full focus:outline-none focus:border-cyan-300 transition"
              />
              <button type="submit" className="bg-gradient-to-r from-cyan-400 to-cyan-500 text-gray-900 hover:text-gray-100 py-3 px-8 ml-4 rounded-full font-medium tracking-wide text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-6 mt-6">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} integraliQ. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
