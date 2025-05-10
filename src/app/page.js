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
    <div>
      <HeroSection/>
      <StrategyHighlights/>
      <IndustriesSection/>
      <CaseStudiesSection/>
      <TestimonialsSection/>
      <AboutSection/>
      <ImpactMetricsSection/>
      <WhyIntegraliQ/>
    </div>
  );
}
