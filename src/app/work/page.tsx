import type { Metadata } from "next";
import WorkPageClient from "@/components/work/WorkPageClient";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Browse SimpliFlow's portfolio of web design, automation, and digital marketing projects. Real results for real businesses.",
};

export default function WorkPage() {
  return <WorkPageClient />;
}
