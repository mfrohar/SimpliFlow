"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO",
    company: "NovaTech Solutions",
    quote:
      "SimpliFlow completely reimagined our web presence. Within three months of launching our new site, lead generation increased by 140%. Their team genuinely cares about outcomes, not just deliverables.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    name: "James Okafor",
    role: "Operations Director",
    company: "Clearpath Logistics",
    quote:
      "We were drowning in manual processes — data entry, approvals, reporting. SimpliFlow's automation solution saved us 20+ hours a week and virtually eliminated errors. The ROI was visible within 60 days.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Founder",
    company: "Bloom & Co.",
    quote:
      "As a small business owner, I was skeptical a consulting firm would take us seriously. SimpliFlow proved me wrong from day one. They treated our brand like their own and the results speak for themselves.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
  },
];

export default function Testimonials() {
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
            Client Stories
          </span>
          <h2 className="section-title mb-4">
            Real Results,{" "}
            <span className="gradient-text">Real Businesses</span>
          </h2>
          <p className="section-subtitle text-center mx-auto">
            Don&apos;t take our word for it. Here&apos;s what our clients have
            to say about working with SimpliFlow.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300
                         border border-mid-gray hover:border-accent/20 hover:-translate-y-1 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                <Quote className="w-5 h-5 text-accent" fill="currentColor" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <span key={j} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-mid-gray">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-accent/20"
                />
                <div>
                  <div className="font-heading font-semibold text-primary text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-slate-500 text-xs">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
