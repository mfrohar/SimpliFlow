"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";

const faqs = [
  {
    question: "How long does a typical web design project take?",
    answer:
      "Most website projects take between 4–10 weeks depending on scope and complexity. A simple marketing site may be completed in 4 weeks, while a more complex web application with custom integrations can take 8–12 weeks. We provide a detailed timeline estimate in our kickoff call after understanding your requirements.",
  },
  {
    question: "Do you work with small businesses or only larger enterprises?",
    answer:
      "We work with businesses of all sizes — from solo founders and small teams to established mid-market companies. We tailor our engagement models and pricing accordingly. If you're not sure if you're the right fit, book a free call and we'll be upfront with you.",
  },
  {
    question: "What does process automation actually look like in practice?",
    answer:
      "It varies widely based on your business. Examples include: automatically routing customer inquiries from email into your CRM, triggering invoices when a deal closes, syncing data between platforms without manual export/import, and generating weekly reports without anyone touching a spreadsheet. We start with a workflow audit to find the highest-impact opportunities.",
  },
  {
    question: "How do you price your services?",
    answer:
      "We price based on scope and value, not hourly billing. Web design projects are typically fixed-price. Automation and marketing services can be project-based or retainer-based depending on the engagement type. We'll provide a clear, itemized proposal after our discovery call — no hidden fees, ever.",
  },
  {
    question: "What happens after a project is delivered?",
    answer:
      "Every project includes a 30-day post-launch support window at no extra charge. After that, many clients opt into a monthly support or retainer arrangement for ongoing updates, monitoring, and optimization. We're invested in your long-term success, not just the launch.",
  },
];

export default function ContactPageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => setSubmitted(true), 500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
          >
            <span className="inline-block text-accent-light font-semibold text-sm uppercase tracking-wider mb-4">
              Reach Out
            </span>
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-6">
              Let&apos;s Talk
            </h1>
            <p className="text-white/70 text-xl max-w-2xl">
              Whether you have a specific project in mind or just want to explore what&apos;s
              possible, we&apos;re happy to start the conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form - 3 cols */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl shadow-lg border border-mid-gray p-8 md:p-10"
              >
                <h2 className="font-heading font-bold text-2xl text-primary mb-2">
                  Send Us a Message
                </h2>
                <p className="text-slate-500 text-sm mb-8">
                  Fill out the form below and we&apos;ll get back to you within one business day.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                    <h3 className="font-heading font-bold text-xl text-primary mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-slate-500 text-sm">
                      Thanks for reaching out. We&apos;ll be in touch within one business day.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-primary mb-1.5"
                        >
                          Full Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Jane Smith"
                          className="w-full px-4 py-3 rounded-xl border border-mid-gray bg-light-gray
                                     text-primary placeholder-slate-400 text-sm
                                     focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent
                                     transition-all"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-primary mb-1.5"
                        >
                          Email Address *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="jane@company.com"
                          className="w-full px-4 py-3 rounded-xl border border-mid-gray bg-light-gray
                                     text-primary placeholder-slate-400 text-sm
                                     focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent
                                     transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-primary mb-1.5"
                      >
                        Company Name
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Corp"
                        className="w-full px-4 py-3 rounded-xl border border-mid-gray bg-light-gray
                                   text-primary placeholder-slate-400 text-sm
                                   focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent
                                   transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-primary mb-1.5"
                      >
                        Service Interest *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-mid-gray bg-light-gray
                                   text-primary text-sm appearance-none
                                   focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent
                                   transition-all"
                      >
                        <option value="" disabled>Select a service...</option>
                        <option value="web-design">Web Design & Development</option>
                        <option value="automation">Process Automation</option>
                        <option value="marketing">Digital Marketing</option>
                        <option value="multiple">Multiple Services</option>
                        <option value="unsure">Not Sure Yet</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-primary mb-1.5"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, challenges, or goals..."
                        className="w-full px-4 py-3 rounded-xl border border-mid-gray bg-light-gray
                                   text-primary placeholder-slate-400 text-sm resize-none
                                   focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent
                                   transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-primary justify-center py-4 text-base"
                    >
                      Send Message
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                )}
              </motion.div>
            </div>

            {/* Contact Info - 2 cols */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-3xl shadow-lg border border-mid-gray p-8"
              >
                <h3 className="font-heading font-bold text-xl text-primary mb-6">
                  Contact Information
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-medium text-primary text-sm mb-0.5">Office</div>
                      <div className="text-slate-500 text-sm">
                        123 Innovation Drive, Suite 400
                        <br />
                        Toronto, ON M5V 2K7, Canada
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-medium text-primary text-sm mb-0.5">Phone</div>
                      <a
                        href="tel:+14165550199"
                        className="text-slate-500 text-sm hover:text-accent transition-colors"
                      >
                        +1 (416) 555-0199
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-medium text-primary text-sm mb-0.5">Email</div>
                      <a
                        href="mailto:hello@simpliflow.com"
                        className="text-slate-500 text-sm hover:text-accent transition-colors"
                      >
                        hello@simpliflow.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-medium text-primary text-sm mb-0.5">Office Hours</div>
                      <div className="text-slate-500 text-sm">
                        Monday – Friday: 9:00 AM – 6:00 PM ET
                        <br />
                        Saturday: 10:00 AM – 2:00 PM ET
                        <br />
                        Sunday: Closed
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-3xl shadow-lg border border-mid-gray overflow-hidden h-56"
              >
                <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col items-center justify-center gap-3 relative">
                  {/* Grid lines to simulate map */}
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        "linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)",
                      backgroundSize: "30px 30px",
                    }}
                  />
                  {/* Map pin */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-xl shadow-accent/40">
                      <MapPin className="w-6 h-6 text-white" fill="white" />
                    </div>
                    <div className="mt-2 bg-white rounded-xl px-4 py-2 shadow-lg text-center">
                      <div className="font-heading font-semibold text-primary text-xs">
                        SimpliFlow Consulting
                      </div>
                      <div className="text-slate-400 text-xs">Toronto, ON</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              FAQ
            </span>
            <h2 className="font-heading font-bold text-4xl text-primary mb-4">
              Common Questions
            </h2>
            <p className="text-slate-600">
              Answers to the questions we hear most often from prospective clients.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="border border-mid-gray rounded-2xl overflow-hidden hover:border-accent/30 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left
                             hover:bg-light-gray transition-colors"
                >
                  <span className="font-heading font-semibold text-primary text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatedAnswer isOpen={openFaq === i} answer={faq.answer} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function AnimatedAnswer({
  isOpen,
  answer,
}: {
  isOpen: boolean;
  answer: string;
}) {
  return (
    <motion.div
      initial={false}
      animate={{
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0,
      }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="overflow-hidden"
    >
      <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-mid-gray pt-4">
        {answer}
      </div>
    </motion.div>
  );
}
