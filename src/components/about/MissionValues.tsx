"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, Target, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Results Over Appearances",
    description:
      "We care deeply about outcomes, not optics. Every strategy we deploy, every design we ship, every automation we build is measured against real business results. Pretty doesn't matter if it doesn't perform.",
    color: "from-red-400 to-orange-500",
  },
  {
    icon: Lightbulb,
    title: "Clarity in Complexity",
    description:
      "Business problems are messy. Our job is to cut through the noise, identify what actually matters, and communicate solutions in plain language. We make the complex simple — not the other way around.",
    color: "from-accent to-purple-600",
  },
  {
    icon: Heart,
    title: "People First, Always",
    description:
      "We build for humans. Whether it's the end user navigating a website we designed or the employee whose workflow we automated, we design every solution with empathy and human dignity at the center.",
    color: "from-emerald-400 to-teal-500",
  },
];

export default function MissionValues() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-light-gray" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            What Drives Us
          </span>
          <h2 className="section-title mb-4">
            Our Mission & <span className="gradient-text">Core Values</span>
          </h2>
          <p className="section-subtitle text-center mx-auto">
            Our mission is simple: help businesses operate smarter, look better,
            and grow faster. Everything we do is guided by three values.
          </p>
        </motion.div>

        {/* Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300
                         border border-mid-gray hover:-translate-y-1 group text-center"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center
                             mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading font-bold text-xl text-primary mb-4">
                {value.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
