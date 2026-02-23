"use client"

import { motion } from "motion/react";
import { PiScalesBold } from "react-icons/pi"
import { TbBinaryTree } from "react-icons/tb"
import { MdGavel } from "react-icons/md"
import { BsSearch } from "react-icons/bs"

const services = [
  {
    number: "01",
    icon: <PiScalesBold className="text-3xl text-[#b8960c]" />,
    title: "Compliance & Risk Management",
    tagline: "Our goal is not only recovery — but prevention.",
    items: [
      "Fraud risk exposure",
      "Regulatory considerations",
      "Platform due diligence",
      "Preventative controls",
      "Recovery strategy planning",
    ],
  },
  {
    number: "02",
    icon: <BsSearch className="text-3xl text-[#b8960c]" />,
    title: "Fraud & Forensic Investigation",
    tagline: "We identify where assets moved and assess recovery feasibility.",
    items: [
      "Cryptocurrency tracing",
      "Wallet movement analysis",
      "Exchange identification",
      "Evidence preparation",
      "Transaction mapping",
    ],
  },
  {
    number: "03",
    icon: <MdGavel className="text-3xl text-[#b8960c]" />,
    title: "Litigation Support",
    tagline: "We guide cases from assessment to resolution.",
    items: [
      "Pre-action strategy",
      "Exchange & intermediary engagement",
      "Freezing order applications",
      "Injunction support",
      "Asset recovery proceedings",
      "Cross-border coordination",
    ],
  },
  {
    number: "04",
    icon: <TbBinaryTree className="text-3xl text-[#b8960c]" />,
    title: "Digital Asset Analysis",
    tagline: "Complex blockchain data translated into clear, actionable strategy.",
    items: [
      "Blockchain transaction review",
      "Wallet clustering insights",
      "Exchange tracing",
      "Scam pattern identification",
      "Documentation for legal proceedings",
    ],
  },
]

// ─── MAIN CONTENT ─────────────────────────────────────────────────────────────

export function MainContent() {
  return (
    <section className="w-full bg-white px-6 lg:px-40 py-24">
      <div className="max-w-6xl mx-auto space-y-8">
        {services.map((service, i) => {
          const isEven = i % 2 === 0
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className={`group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-[#e8e0cc] hover:border-[#b8960c]/40 hover:shadow-xl transition-all duration-500`}
            >
              {/* Info panel */}
              <div className={`bg-[#0a1628] p-10 flex flex-col justify-between ${!isEven ? "lg:order-2" : ""}`}>
                {/* Top */}
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#b8960c]/10 group-hover:border-[#b8960c]/40 transition-all duration-300">
                      {service.icon}
                    </div>
                    <span className="font-heading text-6xl font-bold text-white/5 leading-none">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Tagline */}
                <div className="border-l-2 border-[#b8960c] pl-4 mt-6">
                  <p className="text-[#94a3b8] text-sm italic leading-relaxed">
                    {service.tagline}
                  </p>
                </div>
              </div>

              {/* Items panel */}
              <div className={`bg-[#f8f6f0] p-10 flex flex-col justify-center ${!isEven ? "lg:order-1" : ""}`}>
                <p className="text-[#b8960c] font-medium text-xs uppercase tracking-widest mb-6">
                  What's included
                </p>
                <ul className="space-y-4">
                  {service.items.map((item, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + j * 0.08, ease: "easeOut" }}
                      className="flex items-center gap-4 group/item"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#b8960c] shrink-0 group-hover/item:scale-150 transition-transform duration-200" />
                      <span className="text-[#0a1628] font-medium text-base">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

            </motion.div>
          )
        })}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="bg-[#0a1628] rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <p className="font-heading text-2xl md:text-3xl font-bold text-white leading-tight">
              Not sure which service <br />
              <span className="text-[#b8960c]">applies to your case?</span>
            </p>
            <p className="text-[#94a3b8] text-sm mt-3 max-w-md">
              Every situation is different. Contact us for a confidential assessment and we will identify the right pathway for you.
            </p>
          </div>
          <a
            href="/contact"
            className="shrink-0 bg-[#b8960c] hover:bg-[#a07c0a] text-white font-medium px-12 py-4 rounded-md transition-colors duration-300 whitespace-nowrap"
          >
            Free Case Assessment
          </a>
        </motion.div>

      </div>
    </section>
  )
}