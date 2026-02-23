// export default function AboutIntro() {
//     return (
//         <div>About Intro Section</div>
//     )
// }

"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { BsCheckCircle } from "react-icons/bs"

const actions = [
  "Identify asset movement",
  "Assess recovery viability",
  "Engage exchanges",
  "Seek freezing relief",
  "Initiate legal proceedings where appropriate",
]

export default function AboutIntro() {
  return (
    <>
      {/* Hero with background image */}
      <section className="relative w-full h-[60vh] min-h-100">
        <Image
          src="/about-hero.jpg"
          alt="About Norwyn"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Hero text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 lg:px-40">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[#b8960c] font-medium text-sm uppercase tracking-widest mb-4 block"
          >
            About Us
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl"
          >
            Specialists in{" "}
            <span className="text-[#b8960c]">Fraud Recovery.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="text-white/75 text-base md:text-lg mt-4 max-w-xl"
          >
            Combining financial litigation expertise with advanced digital asset tracing.
          </motion.p>
        </div>
      </section>

      {/* Content section below hero */}
      <section className="w-full bg-white px-6 lg:px-40 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left — main copy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0a1628] leading-tight mb-6">
                Digital fraud has evolved.{" "}
                <span className="text-[#b8960c]">So have we.</span>
              </h2>

              <div className="space-y-5 text-[#4a5568] text-base leading-relaxed">
                <p>
                  Recovering cryptocurrency is no longer about hiring separate
                  experts and hoping they coordinate effectively.
                </p>
                <p>
                  We built a streamlined, action-focused recovery structure
                  designed to move quickly and strategically — bringing together
                  blockchain analysts and legal professionals under one roof.
                </p>
              </div>

              {/* Bottom statement */}
              <div className="mt-10 border-l-4 border-[#b8960c] pl-6">
                <p className="font-heading text-xl font-bold text-[#0a1628]">
                  We do not overpromise.
                </p>
                <p className="text-[#4a5568] text-base mt-1">
                  We assess, act, and pursue — with clarity and precision.
                </p>
              </div>
            </motion.div>

            {/* Right — action list */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="bg-[#f8f6f0] border border-[#e8e0cc] rounded-2xl p-8"
            >
              <span className="text-[#b8960c] font-medium text-sm uppercase tracking-widest mb-6 block">
                Our Team Works To
              </span>

              <div className="space-y-4">
                {actions.map((action, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + i * 0.1,
                      ease: "easeOut",
                    }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-[#b8960c]/10 border border-[#b8960c]/30 flex items-center justify-center group-hover:bg-[#b8960c]/20 transition-colors duration-300">
                      <BsCheckCircle className="text-[#b8960c] text-sm" />
                    </div>
                    <p className="text-[#0a1628] font-medium text-base">{action}</p>
                  </motion.div>
                ))}
              </div>

              {/* Bottom card strip */}
              <div className="mt-8 pt-6 border-t border-[#e8e0cc]">
                <p className="text-[#4a5568] text-sm leading-relaxed">
                  Every case is assessed individually. We only proceed where
                  there is a genuine pathway to recovery.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}