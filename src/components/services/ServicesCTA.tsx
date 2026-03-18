import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function ServicesCTA() {
  return (
    <section className="py-20 bg-light-gray">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
          Ready to Start?
        </span>
        <h2 className="font-heading font-bold text-4xl text-primary mb-6">
          Not Sure Which Service You Need?
        </h2>
        <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto">
          That&apos;s exactly what we&apos;re here for. Book a free 30-minute call
          with our team and we&apos;ll help you identify the highest-leverage
          opportunities for your business.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="btn-primary">
            Book a Free Strategy Call
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="tel:+14165550199"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
          >
            <Phone className="w-4 h-4" />
            +1 (416) 555-0199
          </a>
        </div>
      </div>
    </section>
  );
}
