"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, TrendingUp } from "lucide-react";

const deliverables = [
  "Comprehensive SEO audit and keyword strategy",
  "Content marketing plan and editorial calendar",
  "Google Ads and Meta Ads campaign management",
  "Social media strategy and content creation",
  "Email marketing automation and nurture sequences",
  "Monthly analytics reports with insights",
  "Conversion rate optimization (CRO)",
  "Competitor analysis and market positioning",
];

export default function MarketingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="marketing" className="py-24 bg-white" ref={ref}>
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
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                alt="Digital Marketing"
                className="w-full h-96 lg:h-[520px] object-cover"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-primary text-sm">Marketing</div>
                    <div className="text-slate-500 text-xs">Data-Driven Growth</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-50 rounded-full -z-10" />
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-teal-50 rounded-full -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 text-emerald-500 font-semibold text-sm uppercase tracking-wider mb-4">
              <TrendingUp className="w-4 h-4" />
              Service 03
            </span>
            <h2 className="font-heading font-bold text-4xl text-primary mb-6">
              Digital Marketing
            </h2>

            <div className="space-y-4 text-slate-600 leading-relaxed mb-8">
              <p>
                Visibility without strategy is just noise. Our digital marketing services
                are built on a foundation of data, customer psychology, and channel
                expertise — designed to attract the right audience and turn them into
                loyal, paying customers.
              </p>
              <p>
                We take a holistic approach to growth. From technical SEO and content
                strategy to paid media campaigns and email nurture sequences, every
                tactic we deploy is connected to a clear objective. We don&apos;t run ads
                in isolation or write blog posts without purpose — everything ladders up
                to your revenue goals.
              </p>
              <p>
                Our team combines creative talent with analytical rigor. We A/B test
                relentlessly, analyze performance data weekly, and continuously
                reallocate budget and effort toward what&apos;s working — so your
                marketing investment compounds over time rather than plateauing.
              </p>
              <p>
                Whether you&apos;re launching a new brand, trying to break into a
                competitive market, or looking to scale a proven acquisition channel,
                SimpliFlow brings the strategy and execution horsepower to make it happen.
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
                    <div className="w-5 h-5 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-emerald-500" />
                    </div>
                    <span className="text-slate-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
