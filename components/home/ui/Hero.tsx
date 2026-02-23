"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"

interface HeroProps {
  title: string
  subtitle?: string
  backgroundImage: string
  ctaText?: string
  ctaLink?: string
}

const Hero = ({
  title,
  subtitle,
  backgroundImage,
  ctaText,
  ctaLink = "/",
}: HeroProps) => {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>

      {/* Layered overlays for depth */}
      <motion.div
        className="absolute inset-0 bg-black/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* Bottom gradient fade */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/20" />

      {/* Left vignette */}
      <div className="absolute inset-0 bg-linear-to-r from-black/40 via-transparent to-transparent" />

      {/* Subtle gold linear wash at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-[#b8960c]/10 to-transparent" />

      {/* Main content — left aligned for premium feel */}
      <div className="absolute inset-0 flex flex-col justify-end px-6 lg:px-40 pb-24 md:pb-32">

        {/* Top eyebrow line */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-10 h-px bg-[#b8960c]" />
          <span className="text-[#b8960c] font-medium text-xs uppercase tracking-[0.2em]">
            Crypto & Investment Fraud Recovery
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] max-w-4xl mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          {title}
        </motion.h1>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
          className="w-16 h-0.5 bg-[#b8960c] mb-6 origin-left"
        />

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            className="text-sm md:text-base lg:text-lg text-white/70 max-w-xl mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1, ease: "easeOut" }}
          >
            {subtitle}
          </motion.p>
        )}

        {/* CTA row */}
        {ctaText && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <Link
              href={ctaLink}
              className="group inline-flex items-center gap-3 bg-[#b8960c] hover:bg-[#a07c0a] text-white font-medium px-10 py-4 rounded-md transition-all duration-300"
            >
              <motion.span
                whileHover={{ letterSpacing: "0.04em" }}
                transition={{ duration: 0.3 }}
                className="inline-block text-sm md:text-base"
              >
                {ctaText}
              </motion.span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            {/* Secondary trust line */}
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white/50 text-xs tracking-wide">
                Strictly confidential · No obligation
              </span>
            </div>
          </motion.div>
        )}
      </div>

      {/* Bottom right scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 right-10 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs tracking-[0.2em] uppercase rotate-90 mb-4">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-10 bg-linear-to-b from-[#b8960c]/60 to-transparent"
        />
      </motion.div>

    </section>
  )
}

export default Hero