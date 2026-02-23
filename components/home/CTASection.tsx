"use client"

import { motion } from "motion/react"
import Link from "next/link"

export default function CTASection() {
  return (
    <section className="w-full bg-[#f8f6f0] px-6 lg:px-40 py-28">
      <div className="max-w-4xl mx-auto text-center">

        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-[#b8960c] font-medium text-sm uppercase tracking-widest mb-6 block"
        >
          Take The First Step
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a1628] leading-tight"
        >
          Lost Cryptocurrency? <br />
          <span className="text-[#b8960c]">Lost Your Life Savings?</span>
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="w-16 h-1 bg-[#b8960c] mx-auto my-8 rounded-full origin-center"
        />

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-[#4a5568] text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10"
        >
          Request a confidential case assessment today. Our team will review
          your situation and outline every available pathway — at no obligation.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          <Link
            href="/contact"
            className="inline-block bg-[#0a1628] hover:bg-[#0d1f3c] text-white font-medium px-12 py-4 rounded-md transition-colors duration-300 text-base"
          >
            Request Consultation
          </Link>
        </motion.div>

        {/* Trust note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          className="text-[#94a3b8] text-xs mt-6 tracking-wide"
        >
          Strictly confidential · No obligation · Available worldwide
        </motion.p>

      </div>
    </section>
  )
}