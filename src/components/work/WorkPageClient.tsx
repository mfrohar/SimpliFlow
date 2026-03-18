"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Monitor, Cpu, TrendingUp } from "lucide-react";

type Category = "All" | "Web Design" | "Automation" | "Marketing";

const categories: Category[] = ["All", "Web Design", "Automation", "Marketing"];

const projects = [
  {
    id: 1,
    name: "Apex Financial Group",
    category: "Web Design" as Category,
    description:
      "Complete brand redesign and website rebuild for a boutique investment firm. Resulted in 85% increase in qualified lead inquiries.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    id: 2,
    name: "CloudPath HR Suite",
    category: "Automation" as Category,
    description:
      "Automated employee onboarding workflow reducing HR processing time by 70% and eliminating manual data entry across 5 systems.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    tags: ["Make.com", "Notion", "Slack API"],
  },
  {
    id: 3,
    name: "Bloom & Co. Growth Campaign",
    category: "Marketing" as Category,
    description:
      "Full-funnel digital marketing strategy for a direct-to-consumer beauty brand. Generated 3.2x ROAS within 60 days.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    tags: ["Meta Ads", "Google Ads", "Email Marketing"],
  },
  {
    id: 4,
    name: "Vantage Property Management",
    category: "Web Design" as Category,
    description:
      "Modern property listing platform with real-time search, virtual tours, and tenant portal — built in 8 weeks.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
    tags: ["Next.js", "Supabase", "Mapbox"],
  },
  {
    id: 5,
    name: "Clearpath Invoice Automation",
    category: "Automation" as Category,
    description:
      "End-to-end invoice processing pipeline connecting Shopify, QuickBooks, and their fulfillment partner — zero manual steps.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
    tags: ["Zapier", "QuickBooks API", "Shopify"],
  },
  {
    id: 6,
    name: "NovaTech Brand & SEO",
    category: "Marketing" as Category,
    description:
      "Technical SEO overhaul and content strategy for a B2B SaaS company. Organic traffic grew from 2K to 28K monthly visitors in 9 months.",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&q=80",
    tags: ["SEO", "Content Strategy", "Analytics"],
  },
  {
    id: 7,
    name: "Meridian Health Portal",
    category: "Web Design" as Category,
    description:
      "Patient-facing health portal designed with accessibility at the forefront. WCAG 2.1 AA compliant with a 4.9/5 user satisfaction score.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
    tags: ["React", "Accessibility", "TypeScript"],
  },
  {
    id: 8,
    name: "RapidRoute Lead Pipeline",
    category: "Automation" as Category,
    description:
      "Custom CRM automation for a logistics company, routing and qualifying 300+ inbound leads per month without human intervention.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    tags: ["HubSpot", "n8n", "Custom Scripts"],
  },
  {
    id: 9,
    name: "Sprout Organic Social Campaign",
    category: "Marketing" as Category,
    description:
      "12-month social media and influencer strategy for a sustainable food brand. Built audience from 4K to 67K followers organically.",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&q=80",
    tags: ["Instagram", "TikTok", "Influencer Marketing"],
  },
];

const categoryIcons: Record<string, React.ElementType> = {
  "Web Design": Monitor,
  Automation: Cpu,
  Marketing: TrendingUp,
};

export default function WorkPageClient() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-primary via-slate-800 to-accent/50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-accent-light font-semibold text-sm uppercase tracking-wider mb-4">
              Portfolio
            </span>
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-6">
              Our Work
            </h1>
            <p className="text-white/70 text-xl">
              A selection of projects that demonstrate what we&apos;re capable of —
              and what we can do for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-14">
            {categories.map((cat) => {
              const Icon = cat !== "All" ? categoryIcons[cat] : null;
              return (
                <motion.button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  whileTap={{ scale: 0.97 }}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold
                               transition-all duration-200 ${
                                 activeFilter === cat
                                   ? "bg-accent text-white shadow-lg shadow-accent/30"
                                   : "bg-white text-slate-600 border border-mid-gray hover:border-accent/30 hover:text-accent"
                               }`}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  {cat}
                </motion.button>
              );
            })}
          </div>

          {/* Project Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => {
                const Icon = categoryIcons[project.category];
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl
                               transition-all duration-300 hover:-translate-y-1 border border-mid-gray
                               hover:border-accent/20 group"
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden h-52">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Category badge */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-sm
                                         text-primary text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
                          {Icon && <Icon className="w-3.5 h-3.5 text-accent" />}
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-heading font-bold text-primary text-lg mb-2">
                        {project.name}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-light-gray text-slate-500 text-xs px-2.5 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm
                                         hover:gap-3 transition-all duration-200">
                        View Project
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-slate-400">
              No projects found for this category.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
