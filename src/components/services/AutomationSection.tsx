"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Cpu } from "lucide-react";

const deliverables = [
  "In-depth process audit and bottleneck analysis",
  "Custom automation workflow design and implementation",
  "CRM, ERP, and third-party tool integrations",
  "No-code and custom-code automation solutions",
  "Employee training and change management support",
  "Real-time reporting and dashboard setup",
  "Error handling and exception monitoring",
  "Ongoing optimization and scaling support",
];

export default function AutomationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="automation" className="py-24 bg-light-gray" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              <Cpu className="w-4 h-4" />
              Service 02
            </span>
            <h2 className="font-heading font-bold text-4xl text-primary mb-6">
              Process Automation
            </h2>

            <div className="space-y-4 text-slate-600 leading-relaxed mb-8">
              <p>
                Manual processes are the silent killers of business growth. They consume
                your team&apos;s time, introduce human error, and create invisible ceilings
                on how fast you can scale. SimpliFlow&apos;s automation practice is built
                around one goal: giving your team their time back.
              </p>
              <p>
                We begin every engagement with a structured process audit — mapping your
                existing workflows, identifying repetitive tasks, and quantifying exactly
                how much time and money inefficiency is costing you. Then we design
                targeted automation solutions using tools like Zapier, Make (Integromat),
                n8n, and custom-built pipelines depending on your needs.
              </p>
              <p>
                From automating invoice generation and client onboarding to building
                internal approval systems and data synchronization between platforms,
                our automation solutions are designed to be robust, maintainable, and
                built to scale as your business grows.
              </p>
              <p>
                We also prioritize adoption — providing clear documentation and team
                training so your people feel empowered, not replaced, by automation.
              </p>
            </div>

            {/* Deliverables */}
            <div>
              <h4 className="font-heading font-semibold text-primary mb-4">
                What&apos;s Included
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {deliverables.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-slate-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
                alt="Process Automation"
                className="w-full h-96 lg:h-[520px] object-cover"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-primary text-sm">Automation</div>
                    <div className="text-slate-500 text-xs">Save 20+ hrs/week</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/5 rounded-full -z-10" />
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-purple-100 rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
