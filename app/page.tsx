import AnimateIn from "@/components/AnimateIn";
import CtaSection from "@/components/CtaSection";
import FloatingChat from "@/components/FloatingChat";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import WhatToExpectSection from "@/components/WhatToExpectSection";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import StatsStrip from "@/components/StatsStrip";
import CampaignIncludesSection from "@/components/CampaignIncludesSection";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import WhyUsSection from "@/components/WhyUsSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <AnimateIn delay={0} direction="up" slide={false}>
        <Navbar />
      </AnimateIn>
      <AnimateIn className="overflow-hidden" delay={0.1} direction="right">
        <HeroSection />
      </AnimateIn>
      <AnimateIn delay={0.2} direction="right">
        <WhyUsSection />
      </AnimateIn>
      <AnimateIn delay={0.4} direction="left">
        <WhatToExpectSection />
      </AnimateIn>
      <AnimateIn delay={0.5} direction="up">
        <ServicesSection />
      </AnimateIn>
      <AnimateIn delay={0.55} direction="up">
        <CampaignIncludesSection />
      </AnimateIn>
      <AnimateIn delay={0.6} direction="left">
        <ValuePropositionSection />
      </AnimateIn>
      <AnimateIn delay={0.7} direction="up">
        <StatsStrip />
      </AnimateIn>
      <AnimateIn delay={0.8} direction="up">
        <CtaSection />
      </AnimateIn>
      <AnimateIn delay={0.9} direction="up">
        <Footer />
      </AnimateIn>
      <FloatingChat />
    </main>
  );
}
