"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Rocket, BarChart2, Puzzle, Headphones } from "lucide-react";

const values = [
  {
    icon: Rocket,
    title: "Fast Delivery",
    description:
      "We move with purpose. Our streamlined process gets you from brief to launch faster than traditional agencies — without cutting corners on quality.",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: BarChart2,
    title: "Proven Results",
    description:
      "Every recommendation we make is backed by data. We track what works, ditch what doesn't, and keep optimizing until your goals are met.",
    color: "text-accent",
    bg: "bg-accent/5",
  },
  {
    icon: Puzzle,
    title: "Tailored Solutions",
    description:
      "No two businesses are the same. We listen deeply, think critically, and build solutions custom-fit to your specific challenges and ambitions.",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description:
      "Our relationship doesn't end at launch. We offer continuous support, proactive monitoring, and strategic guidance as your business evolves.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
];

export default function WhySimplIFlow() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              Why SimpliFlow
            </span>
            <h2 className="section-title mb-6">
              We&apos;re Not Just a Vendor.{" "}
              <span className="gradient-text">We&apos;re Your Partner.</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Most agencies hand you a deliverable and call it done. We take a
              different approach — embedding ourselves in your business, understanding
              your goals at a deep level, and staying committed to your success long
              after the project is complete.
            </p>
            <p className="text-slate-600 leading-relaxed">
              From scrappy startups to established enterprises, we&apos;ve helped
              organizations across industries streamline how they work, look, and grow.
              We bring enterprise-level thinking with boutique-level care.
            </p>
          </motion.div>

          {/* Right: Value Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-mid-gray hover:border-accent/20
                           hover:shadow-lg transition-all duration-300 group"
              >
                <div
                  className={`w-12 h-12 ${value.bg} rounded-xl flex items-center justify-center mb-4
                               group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon className={`w-6 h-6 ${value.color}`} />
                </div>
                <h3 className="font-heading font-semibold text-primary text-base mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
