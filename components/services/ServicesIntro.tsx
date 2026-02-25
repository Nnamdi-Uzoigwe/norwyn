"use client"

import { motion } from "motion/react"

export default function ServicesIntro() {
  return (
    <section className="relative w-full h-[60vh] min-h-100">
      {/* Background — reuse a dark office image */}
      <div className="absolute inset-0 bg-[#0a1628]" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(#b8960c 1px, transparent 1px), linear-gradient(90deg, #b8960c 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial fade over grid */}
      <div className="absolute inset-0 bg-radial-gradient"
        style={{ background: "radial-gradient(ellipse at center, transparent 30%, #0a1628 100%)" }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 lg:px-40">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-[#b8960c] font-medium text-sm uppercase tracking-widest mb-4 block"
        >
          What We Do
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl"
        >
          Our{" "}
          <span className="text-[#b8960c]">Services</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="text-white/70 text-base md:text-lg mt-4 max-w-xl"
        >
          From prevention to recovery - every stage handled under one coordinated structure.
        </motion.p>
      </div>
    </section>
  )
}

