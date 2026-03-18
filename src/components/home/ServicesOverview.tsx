"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, Cpu, TrendingUp, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Web Design & Development",
    description:
      "We craft pixel-perfect, high-performance websites that captivate your audience and convert visitors into customers. Every design decision is intentional, beautiful, and built for results.",
    color: "from-blue-500 to-indigo-600",
    href: "/services#web-design",
    features: ["Custom UI/UX Design", "Responsive Development", "Performance Optimization"],
  },
  {
    icon: Cpu,
    title: "Process Automation",
    description:
      "Stop wasting hours on repetitive tasks. We identify bottlenecks in your workflow and implement smart automation solutions that save time, reduce errors, and free your team to focus on what matters.",
    color: "from-accent to-purple-600",
    href: "/services#automation",
    features: ["Workflow Analysis", "Custom Automation Pipelines", "System Integrations"],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Growth doesn't happen by accident. Our data-driven marketing strategies put your brand in front of the right people at the right time — turning clicks into loyal customers and revenue.",
    color: "from-emerald-500 to-teal-600",
    href: "/services#marketing",
    features: ["SEO & Content Strategy", "Paid Advertising", "Social Media Management"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ServicesOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            What We Do
          </span>
          <h2 className="section-title mb-4">
            Three Services, One{" "}
            <span className="gradient-text">Focused Mission</span>
          </h2>
          <p className="section-subtitle text-center mx-auto">
            We bring together design, technology, and strategy to help your
            business operate smarter and grow faster.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="service-card group"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6
                             shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="font-heading font-bold text-xl text-primary mb-3">
                {service.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-slate-500">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={service.href}
                className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm
                           hover:gap-3 transition-all duration-200"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
