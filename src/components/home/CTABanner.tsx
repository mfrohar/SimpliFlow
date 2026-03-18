"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTABanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-slate-800 to-accent/80 p-12 md:p-16 text-center"
        >
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              Let&apos;s build something remarkable
            </div>

            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6 max-w-2xl mx-auto leading-tight">
              Ready to Simplify Your Business?
            </h2>

            <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
              Book a free 30-minute strategy call and let&apos;s talk about where
              your business is headed and how SimpliFlow can help you get there
              faster.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full
                           font-semibold hover:bg-white/90 transition-all duration-200 shadow-xl
                           hover:shadow-white/20 hover:-translate-y-0.5 active:translate-y-0"
              >
                Book a Free Call
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium
                           transition-colors group"
              >
                View Our Portfolio
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
