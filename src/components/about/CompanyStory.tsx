"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CompanyStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="SimpliFlow team at work"
                className="w-full h-96 lg:h-[480px] object-cover"
              />
            </div>
            {/* Stats card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-mid-gray">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "2019", label: "Founded" },
                  { value: "50+", label: "Clients" },
                  { value: "12", label: "Team Members" },
                  { value: "3", label: "Countries" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-heading font-bold text-xl text-primary">{stat.value}</div>
                    <div className="text-slate-500 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Story content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Our Background
            </span>
            <h2 className="font-heading font-bold text-4xl text-primary mb-6">
              Built From Real Business Problems
            </h2>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                SimpliFlow was founded in 2019 by a group of consultants, developers, and
                marketers who were tired of watching businesses struggle with the same
                preventable problems — clunky websites, broken internal processes, and
                marketing that went nowhere. We believed something better was possible, and
                we built SimpliFlow to prove it.
              </p>
              <p>
                In our early days, we took on a handful of ambitious clients and delivered
                results that surprised even them. Word spread quickly. Within two years, we
                had grown from a three-person startup to a twelve-member team serving clients
                across North America, the UK, and Australia. Our reputation was built on one
                principle: we only succeed when our clients succeed.
              </p>
              <p>
                Today, SimpliFlow operates at the intersection of design, technology, and
                strategy. We&apos;re not a traditional agency — we&apos;re a growth partner.
                Every project we take on is approached with the same care and urgency we&apos;d
                bring to our own business. That mindset is what sets us apart, and it&apos;s
                what keeps clients coming back.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
