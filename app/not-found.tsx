"use client"

import { motion } from "motion/react"
import { TbZoomQuestion } from "react-icons/tb"
import { RiShieldCheckLine } from "react-icons/ri"
import Link from "next/link"
import Button from "@/components/shared/Button"

export default function NotFound() {
  return (
    <section className="w-full min-h-screen bg-[#0a1628] flex items-center justify-center px-6 lg:px-40 py-24">
      <div className="max-w-6xl mx-auto w-full">

        {/* Grid layout — number left, content right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — giant 404 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            {/* Glow behind number */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 rounded-full bg-[#b8960c]/5 blur-3xl" />
            </div>

            <div className="relative text-center">
              <span className="font-heading font-bold leading-none select-none"
                style={{ fontSize: "clamp(8rem, 20vw, 16rem)", color: "transparent", WebkitTextStroke: "2px rgba(184,150,12,0.25)" }}>
                404
              </span>
              {/* Overlaid readable number */}
              <span className="absolute inset-0 flex items-center justify-center font-heading font-bold leading-none text-[#b8960c]/10 select-none"
                style={{ fontSize: "clamp(8rem, 20vw, 16rem)" }}>
                404
              </span>

              {/* Icon badge */}
              <div className="mt-4 flex justify-center">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <TbZoomQuestion className="text-3xl text-[#b8960c]" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="space-y-8"
          >
            {/* Label */}
            <span className="text-[#b8960c] font-medium text-sm uppercase tracking-widest block">
              Page Not Found
            </span>

            {/* Heading */}
            <div className="space-y-3">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight">
                This page doesn't{" "}
                <span className="text-[#b8960c]">exist.</span>
              </h1>
              <p className="text-[#94a3b8] text-base leading-relaxed max-w-md">
                The page you're looking for may have been moved, removed, or never existed.
                Let's get you back on track.
              </p>
            </div>

            {/* Status pills */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-xl px-5 py-3 w-fit">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <p className="text-red-400 font-heading font-bold text-sm">
                  This URL returned no results.
                </p>
              </div>
              <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl px-5 py-3 w-fit">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <p className="text-emerald-400 font-heading font-bold text-sm">
                  Our team and site are fully operational.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/10" />

            {/* Actions */}
            <div className="flex flex-wrap gap-4">
              <Link href="/">
                <Button
                  leftIcon={<RiShieldCheckLine className="text-lg" />}
                  text="Back to Home"
                  href="/"
                />
              </Link>
              <Link href="/contact">
                <button className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#b8960c]/50 text-white font-heading font-semibold text-sm rounded-xl px-8 py-2.5 transition-all duration-150">
                  Contact Us
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="mt-24 text-center"
        >
          <p className="font-heading text-2xl md:text-3xl font-bold text-white/20">
            "Lost pages, like lost funds —{" "}
            <span className="text-[#b8960c]/60">we help you find the way back."</span>
          </p>
        </motion.div>

      </div>
    </section>
  )
}