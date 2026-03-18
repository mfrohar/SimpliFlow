import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhySimplIFlow from "@/components/home/WhySimplIFlow";
import StatsBar from "@/components/home/StatsBar";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "SimpliFlow Consulting | Simplify. Automate. Grow.",
  description:
    "SimpliFlow Consulting helps businesses simplify operations, automate workflows, and grow their digital presence. Expert web design, process automation, and digital marketing.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <WhySimplIFlow />
      <StatsBar />
      <Testimonials />
      <CTABanner />
    </>
  );
}
