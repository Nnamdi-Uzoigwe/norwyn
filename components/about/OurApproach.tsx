"use client"

import { motion } from "motion/react"
import { TbZoomQuestion } from "react-icons/tb"
import { BsLightningCharge } from "react-icons/bs"
import { MdOutlineCancel } from "react-icons/md"
import { RiShieldCheckLine } from "react-icons/ri"

const steps = [
  {
    number: "01",
    icon: <TbZoomQuestion className="text-2xl text-[#b8960c]" />,
    title: "Initial Assessment",
    description:
      "We review the full picture - how funds moved, through which channels, and whether a recovery pathway realistically exists.",
  },
  {
    number: "02",
    icon: <BsLightningCharge className="text-2xl text-[#b8960c]" />,
    title: "We Move Decisively",
    description:
      "If recovery is viable, we act immediately. Time is critical; the longer funds sit, the harder recovery becomes.",
  },
  {
    number: "03",
    icon: <MdOutlineCancel className="text-2xl text-[#b8960c]" />,
    title: "We Say So Clearly",
    description:
      "If recovery is not realistic, we tell you directly. We do not string clients along for fees. Victims deserve clarity, not false hope.",
  },
  {
    number: "04",
    icon: <RiShieldCheckLine className="text-2xl text-[#b8960c]" />,
    title: "Coordinated Execution",
    description:
      "Where viable, we deploy tracing, legal strategy, exchange engagement, and freezing relief - all coordinated under one structure.",
  },
]

export default function OurApproach() {
  return (
    <section className="w-full bg-[#0a1628] px-6 lg:px-40 py-24">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-[#b8960c] font-medium text-sm uppercase tracking-widest mb-4 block">
              Our Approach
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight">
              One objective.{" "}
              <span className="text-[#b8960c]">
                Is recovery possible?
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="space-y-4"
          >
            {/* Yes / No pills */}
            <div className="flex gap-4">
              <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl px-5 py-3">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <p className="text-emerald-400 font-heading font-bold text-sm">
                  If YES, we move decisively.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-xl px-5 py-3">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <p className="text-red-400 font-heading font-bold text-sm">
                  If NO, we say so clearly.
                </p>
              </div>
            </div>
            <p className="text-[#94a3b8] text-sm leading-relaxed pt-1">
              Victims deserve clarity, not false hope. Every case starts with an
              honest assessment - no obligations, no guarantees we cannot keep.
            </p>
          </motion.div>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10 hidden lg:block" />

          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                whileHover={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderColor: "rgba(184,150,12,0.5)",
                }}
                className="relative lg:pl-20 bg-white/5 border border-white/10 rounded-2xl p-8"
              >
                {/* Step number — left side connector dot */}
                <div className="absolute left-4.5 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#0a1628] border-2 border-[#b8960c]/40 hidden lg:block" />

                <div className="flex items-start gap-6">
                  {/* Number + Icon */}
                  <div className="shrink-0 flex flex-col items-center gap-2">
                    <span className="font-heading text-4xl font-bold text-white/10 leading-none">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-1">
                    <h3 className="font-heading text-xl font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#94a3b8] text-sm leading-relaxed max-w-2xl">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="mt-16 text-center"
        >
          <p className="font-heading text-2xl md:text-3xl font-bold text-white/20">
            "Victims deserve clarity,{" "}
            <span className="text-[#b8960c]/60">not false hope."</span>
          </p>
        </motion.div>

      </div>
    </section>
  )
}