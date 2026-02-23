"use client"

import { motion } from "motion/react"
import { TbBinaryTree } from "react-icons/tb"
import { PiScalesBold } from "react-icons/pi"
import { BsLightningCharge } from "react-icons/bs"
import { RiShieldCheckLine } from "react-icons/ri"

const pillars = [
  {
    icon: <TbBinaryTree className="text-3xl text-[#b8960c]" />,
    title: "Technical Movement of Crypto Assets",
    description:
      "We understand how stolen funds move — across wallets, chains, mixers, and exchanges. Our analysts trace with precision and produce court-ready reports.",
  },
  {
    icon: <PiScalesBold className="text-3xl text-[#b8960c]" />,
    title: "Legal Pathways to Recovery",
    description:
      "From freezing injunctions to civil litigation and regulatory engagement — we know which legal tools apply and when to deploy them.",
  },
]

const qualities = [
  {
    icon: <BsLightningCharge className="text-xl text-[#b8960c]" />,
    label: "Swiftly",
    description: "Time is critical in fraud recovery. We act fast.",
  },
  {
    icon: <RiShieldCheckLine className="text-xl text-[#b8960c]" />,
    label: "Strategically",
    description: "Every move is calculated and case-specific.",
  },
  {
    icon: <PiScalesBold className="text-xl text-[#b8960c]" />,
    label: "Professionally",
    description: "Held to the highest legal and ethical standards.",
  },
]

export default function OurExperience() {
  return (
    <section className="w-full bg-white px-6 lg:px-40 py-24">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16 max-w-2xl"
        >
          <span className="text-[#b8960c] font-medium text-sm uppercase tracking-widest mb-4 block">
            Our Experience
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0a1628] leading-tight">
            Focused experience.{" "}
            <span className="text-[#b8960c]">Proven pathways.</span>
          </h2>
          <p className="text-[#4a5568] text-base md:text-lg leading-relaxed mt-6">
            With focused experience in digital asset recovery and financial
            litigation — including successfully securing freezing and injunctive
            relief where appropriate — we understand both sides of the equation.
          </p>
        </motion.div>

        {/* Two pillar cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              className="group relative bg-[#0a1628] rounded-2xl p-8 overflow-hidden"
            >
              {/* Gold corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#b8960c]/5 rounded-bl-full transition-all duration-500 group-hover:w-32 group-hover:h-32" />

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#b8960c]/10 group-hover:border-[#b8960c]/40 transition-all duration-300">
                {pillar.icon}
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-bold text-white mb-3">
                {pillar.title}
              </h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed">
                {pillar.description}
              </p>

              {/* Bottom gold line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#b8960c] group-hover:w-full transition-all duration-500 rounded-b-2xl" />
            </motion.div>
          ))}
        </div>

        {/* We act — three qualities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-[#f8f6f0] border border-[#e8e0cc] rounded-2xl p-8 md:p-12"
        >
          <p className="font-heading text-2xl md:text-3xl font-bold text-[#0a1628] mb-10 text-center">
            We act{" "}
            <span className="text-[#b8960c]">swiftly</span>,{" "}
            <span className="text-[#b8960c]">strategically</span>, and{" "}
            <span className="text-[#b8960c]">professionally.</span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {qualities.map((q, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                className="flex flex-col items-center text-center gap-3 group"
              >
                <div className="w-12 h-12 rounded-full bg-white border border-[#e8e0cc] flex items-center justify-center group-hover:border-[#b8960c]/40 group-hover:bg-[#b8960c]/10 transition-all duration-300">
                  {q.icon}
                </div>
                <h4 className="font-heading text-lg font-bold text-[#0a1628]">
                  {q.label}
                </h4>
                <p className="text-sm text-[#4a5568] leading-relaxed">
                  {q.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}