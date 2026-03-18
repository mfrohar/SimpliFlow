"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Monitor } from "lucide-react";

const deliverables = [
  "Custom UI/UX design tailored to your brand",
  "Fully responsive across all devices and screen sizes",
  "Performance-optimized with 90+ Lighthouse scores",
  "SEO-ready architecture and semantic HTML",
  "CMS integration (Next.js, Webflow, or Sanity)",
  "Accessibility compliant (WCAG 2.1 AA)",
  "Analytics and conversion tracking setup",
  "30-day post-launch support included",
];

export default function WebDesignSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="web-design" className="py-24 bg-white" ref={ref}>
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
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80"
                alt="Web Design & Development"
                className="w-full h-96 lg:h-[520px] object-cover"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                    <Monitor className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-primary text-sm">Web Design</div>
                    <div className="text-slate-500 text-xs">Beautiful & Functional</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-50 rounded-full -z-10" />
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-accent/5 rounded-full -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 text-blue-500 font-semibold text-sm uppercase tracking-wider mb-4">
              <Monitor className="w-4 h-4" />
              Service 01
            </span>
            <h2 className="font-heading font-bold text-4xl text-primary mb-6">
              Web Design & Development
            </h2>

            <div className="space-y-4 text-slate-600 leading-relaxed mb-8">
              <p>
                Your website is often the first impression customers have of your business.
                We design and build websites that don&apos;t just look great — they work hard
                to convert visitors into customers, communicate your value clearly, and reflect
                the quality of your brand at every touchpoint.
              </p>
              <p>
                Our design process starts with deep research into your audience, competitors,
                and business objectives. From wireframes and prototypes to pixel-perfect final
                builds, every decision is intentional. We use the latest technologies including
                Next.js, TypeScript, and Tailwind CSS to deliver sites that are fast, scalable,
                and easy to maintain.
              </p>
              <p>
                We don&apos;t believe in cookie-cutter templates. Whether you need a sleek
                marketing site, a complex web application, or a full e-commerce experience,
                we build from the ground up to meet your exact requirements.
              </p>
              <p>
                Post-launch, we provide comprehensive support and performance monitoring to
                ensure your site continues to deliver results as your business evolves.
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
                    <div className="w-5 h-5 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-blue-500" />
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
