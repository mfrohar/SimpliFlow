import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import CompanyStory from "@/components/about/CompanyStory";
import MissionValues from "@/components/about/MissionValues";
import TeamSection from "@/components/about/TeamSection";
import HiringBanner from "@/components/about/HiringBanner";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about SimpliFlow Consulting — our story, mission, values, and the team behind the work. We're a team of strategists, designers, and engineers committed to making businesses better.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyStory />
      <MissionValues />
      <TeamSection />
      <HiringBanner />
    </>
  );
}
