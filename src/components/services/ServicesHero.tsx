"use client";

import { motion } from "framer-motion";
import { Monitor, Cpu, TrendingUp } from "lucide-react";

const services = [
  { icon: Monitor, label: "Web Design" },
  { icon: Cpu, label: "Automation" },
  { icon: TrendingUp, label: "Marketing" },
];

export default function ServicesHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-slate-800 to-accent/50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-accent-light font-semibold text-sm uppercase tracking-wider mb-4">
            Our Expertise
          </span>
          <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-6">
            What We Do
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-12">
            We deliver focused, high-impact services designed to transform how your
            business looks, operates, and grows in the digital world.
          </p>

          {/* Service indicators */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {services.map((service, i) => (
              <motion.div
                key={service.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm
                           text-white px-5 py-2.5 rounded-full"
              >
                <service.icon className="w-4 h-4 text-accent-light" />
                <span className="font-medium text-sm">{service.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
