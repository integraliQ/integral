'use client';

export default function CTA() {
  return (
    <section className="bg-black py-24 px-6 md:px-20 text-center relative">
      <div className="max-w-[1100px] mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-100 mb-6">
          Take the Next Step Towards Excellence
        </h2>
        <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
          Unlock your business&apos;s full potential with innovative strategies and cutting-edge solutions. We’re ready when you are.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="/contact"
            className="bg-transparent text-gray-100 hover:text-cyan-300 border border-gray-200 hover:border-cyan-300 py-3 px-8 rounded-lg transition-all duration-300 font-medium tracking-wide text-sm"
          >
            Contact Us
          </a>
          <a
            href="/contact"
            className="text-gray-100 hover:text-cyan-300 py-3 px-8 border border-transparent hover:border-cyan-300 rounded-lg transition-all duration-300 font-medium tracking-wide text-sm"
          >
            Request a Demo
          </a>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-800 to-transparent opacity-30 z-0"></div>
    </section>
  );
}
