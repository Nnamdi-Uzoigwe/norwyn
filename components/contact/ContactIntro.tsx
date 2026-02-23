// export default function ContactIntro() {
//     return (
//         <div>Contact Intro Section</div>
//     )
// }


"use client"

import { motion } from "motion/react"
import { BiBitcoin } from "react-icons/bi"
import { TbChartCandle } from "react-icons/tb"
import { MdOutlineAccountBalance } from "react-icons/md"
import { RiCoinLine } from "react-icons/ri"
import { HiOutlineLockClosed } from "react-icons/hi"

// ─── INTRO ────────────────────────────────────────────────────────────────────

const fraudTypes = [
  { icon: <BiBitcoin className="text-xl text-[#b8960c]" />, label: "Cryptocurrency Fraud" },
  { icon: <TbChartCandle className="text-xl text-[#b8960c]" />, label: "Fake Trading Platforms" },
  { icon: <MdOutlineAccountBalance className="text-xl text-[#b8960c]" />, label: "Forex Scams" },
  { icon: <RiCoinLine className="text-xl text-[#b8960c]" />, label: "Investment Manipulation" },
  { icon: <HiOutlineLockClosed className="text-xl text-[#b8960c]" />, label: "Online Asset Theft" },
]

export function ContactIntro() {
  return (
    <section className="w-full bg-[#0a1628] px-6 lg:px-40 py-24 relative overflow-hidden">

      {/* Background decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#b8960c]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#b8960c]/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-[#b8960c] font-medium text-sm uppercase tracking-widest mb-4 block"
            >
              Contact Us
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
            >
              The Sooner You Act,{" "}
              <span className="text-[#b8960c]">The Stronger Your Position.</span>
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="w-16 h-1 bg-[#b8960c] mb-8 rounded-full origin-left"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="text-[#94a3b8] text-base leading-relaxed mb-10"
            >
              We offer a confidential initial case review to assess what occurred,
              where funds may have moved, and whether recovery options exist.
            </motion.p>

            {/* Urgency badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-xl px-5 py-3"
            >
              <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse shrink-0" />
              <p className="text-red-400 font-heading font-bold text-sm">
                Time is critical — every hour matters.
              </p>
            </motion.div>
          </div>

          {/* Right — fraud types */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <p className="text-[#b8960c] font-medium text-xs uppercase tracking-widest mb-6">
              If you lost funds through
            </p>

            <div className="space-y-4">
              {fraudTypes.map((type, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1, ease: "easeOut" }}
                  className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4 hover:border-[#b8960c]/40 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#b8960c]/10 border border-[#b8960c]/20 flex items-center justify-center group-hover:bg-[#b8960c]/20 transition-all duration-300 shrink-0">
                    {type.icon}
                  </div>
                  <span className="text-white font-medium text-base">{type.label}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-[#94a3b8] text-xs leading-relaxed">
                We assess every case individually. If funds moved through any
                financial channel, there may be a pathway.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}