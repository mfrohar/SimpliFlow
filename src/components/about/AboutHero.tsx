"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-slate-800 to-accent/50 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-block text-accent-light font-semibold text-sm uppercase tracking-wider mb-4">
            Our Story
          </span>
          <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-6">
            Who We Are
          </h1>
          <p className="text-white/70 text-xl leading-relaxed">
            SimpliFlow is a team of strategists, designers, and engineers who believe
            that great businesses deserve great tools — and that technology should work
            for people, not the other way around.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
