import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import WebDesignSection from "@/components/services/WebDesignSection";
import AutomationSection from "@/components/services/AutomationSection";
import MarketingSection from "@/components/services/MarketingSection";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore SimpliFlow's core services: custom web design, business process automation, and data-driven digital marketing. Built for businesses ready to grow.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <WebDesignSection />
      <AutomationSection />
      <MarketingSection />
      <ServicesCTA />
    </>
  );
}
