import type { Metadata } from "next";
import ContactPageClient from "@/components/contact/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with SimpliFlow Consulting. Book a free strategy call, send us a message, or drop by our office. We'd love to hear about your project.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
