import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";

export default function HiringBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-accent to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Briefcase className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-2xl text-white mb-1">
                We&apos;re Hiring!
              </h3>
              <p className="text-white/80 text-base">
                Passionate about design, tech, or marketing? We&apos;d love to hear from you.
                Join a team that cares.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-accent px-7 py-3.5 rounded-full
                       font-semibold hover:bg-white/90 transition-all duration-200 shadow-xl
                       hover:-translate-y-0.5 active:translate-y-0"
          >
            View Open Roles
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
