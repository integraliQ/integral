import AboutSection from "@/components/home/About";
import CaseStudiesSection from "@/components/home/Case";
import ClientLogos from "@/components/temp/ClientLogos";
import SolutionsGrid from "@/components/home/Features";
import HeroSection from "@/components/home/Hero";
import IndustriesSection from "@/components/home/Industries";
import ImpactMetricsSection from "@/components/home/CTA";
import StrategyHighlights from "@/components/home/Strategy";
import TestimonialsSection from "@/components/home/Testimony";
import WhyIntegraliQ from "@/components/home/WhyChoose";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative bg-gradient-to-br from-black via-gray-900 to-[#0c0c0c]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[800px] h-[800px] bg-cyan-400/10 rounded-full blur-[120px] top-[-20%] left-[-10%] z-0" />
        <div className="absolute w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] bottom-[-10%] right-[-10%] z-0" />
      </div>
      <HeroSection/>
      <StrategyHighlights/>
      <IndustriesSection/>
      <WhyIntegraliQ/>
      <AboutSection/>
      <CaseStudiesSection/>
      {/* <TestimonialsSection/> */}
      <ImpactMetricsSection/>
    </div>
  );
}
