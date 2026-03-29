import AnimateIn from "@/components/AnimateIn";
import CtaSection from "@/components/CtaSection";
import FloatingChat from "@/components/FloatingChat";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import WhatToExpectSection from "@/components/WhatToExpectSection";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import SocialProofBar from "@/components/SocialProofBar";
import StatsStrip from "@/components/StatsStrip";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import WhyRevSquaredSection from "@/components/WhyRevSquaredSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <AnimateIn delay={0} direction="up" slide={false}>
        <Navbar />
      </AnimateIn>
      <AnimateIn delay={0.1} direction="right">
        <HeroSection />
      </AnimateIn>
      <AnimateIn delay={0.2} direction="up">
        <SocialProofBar />
      </AnimateIn>
      <AnimateIn delay={0.3} direction="left">
        <WhatToExpectSection />
      </AnimateIn>
      <AnimateIn delay={0.4} direction="up">
        <ServicesSection />
      </AnimateIn>
      <AnimateIn delay={0.5} direction="right">
        <ValuePropositionSection />
      </AnimateIn>
      <AnimateIn delay={0.6} direction="left">
        <WhyRevSquaredSection />
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
