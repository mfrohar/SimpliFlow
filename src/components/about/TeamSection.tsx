"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Alex Chen",
    role: "Founder & CEO",
    bio: "Former product lead at a Series B SaaS company. Alex built SimpliFlow to bridge the gap between strategy and execution for growing businesses.",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Jordan Walsh",
    role: "Head of Design",
    bio: "10 years designing digital products for brands including startups and Fortune 500s. Jordan believes that beautiful design and business performance are never at odds.",
    avatar: "https://randomuser.me/api/portraits/women/25.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Marcus Lee",
    role: "Lead Engineer",
    bio: "Full-stack engineer with deep expertise in Next.js, automation architecture, and systems integration. Marcus turns complex requirements into clean, scalable solutions.",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Sana Patel",
    role: "Director of Marketing",
    bio: "Data-driven marketer with a background in growth at multiple funded startups. Sana specializes in multi-channel acquisition strategies that scale predictably.",
    avatar: "https://randomuser.me/api/portraits/women/62.jpg",
    linkedin: "#",
    twitter: "#",
  },
];

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            The People
          </span>
          <h2 className="section-title mb-4">
            Meet the <span className="gradient-text">SimpliFlow Team</span>
          </h2>
          <p className="section-subtitle text-center mx-auto">
            We&apos;re a small but mighty team of specialists who care deeply
            about doing great work and building lasting relationships.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group text-center"
            >
              {/* Avatar */}
              <div className="relative mb-5 inline-block">
                <div className="w-28 h-28 rounded-2xl overflow-hidden shadow-lg mx-auto
                                ring-4 ring-transparent group-hover:ring-accent/20 transition-all duration-300">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Social links - appear on hover */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex gap-2
                                opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <a
                    href={member.linkedin}
                    className="w-7 h-7 bg-accent rounded-full flex items-center justify-center shadow-lg hover:bg-accent-dark transition-colors"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <Linkedin className="w-3.5 h-3.5 text-white" />
                  </a>
                  <a
                    href={member.twitter}
                    className="w-7 h-7 bg-primary rounded-full flex items-center justify-center shadow-lg hover:bg-slate-700 transition-colors"
                    aria-label={`${member.name} on Twitter`}
                  >
                    <Twitter className="w-3.5 h-3.5 text-white" />
                  </a>
                </div>
              </div>

              <h3 className="font-heading font-bold text-primary text-lg mt-2">{member.name}</h3>
              <p className="text-accent text-sm font-medium mb-3">{member.role}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
