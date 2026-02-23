"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { HiOutlineLockClosed } from "react-icons/hi"

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <section className="w-full bg-[#f8f6f0] px-6 lg:px-40 py-24">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <span className="text-[#b8960c] font-medium text-sm uppercase tracking-widest mb-4 block">
            Confidential Case Review
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0a1628] leading-tight">
            Complete the form below.
          </h2>
          <p className="text-[#4a5568] text-base mt-3">
            All submissions are strictly confidential. We will respond within 24 hours.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white border border-[#e8e0cc] rounded-2xl p-14 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-6">
              <svg className="w-7 h-7 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-heading text-2xl font-bold text-[#0a1628] mb-2">
              Submission Received
            </h3>
            <p className="text-[#4a5568] text-base leading-relaxed max-w-sm mx-auto">
              Our team will review your case confidentially and respond within 24 hours.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            onSubmit={handleSubmit}
            className="bg-white border border-[#e8e0cc] rounded-2xl p-8 md:p-12 space-y-6"
          >
            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[#0a1628] text-sm font-medium">
                  Full Name <span className="text-[#b8960c]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Smith"
                  className="bg-[#f8f6f0] border border-[#e8e0cc] rounded-lg px-4 py-3 text-[#0a1628] text-sm placeholder:text-[#94a3b8] focus:outline-none focus:border-[#b8960c] transition-colors duration-200"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#0a1628] text-sm font-medium">
                  Email Address <span className="text-[#b8960c]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="bg-[#f8f6f0] border border-[#e8e0cc] rounded-lg px-4 py-3 text-[#0a1628] text-sm placeholder:text-[#94a3b8] focus:outline-none focus:border-[#b8960c] transition-colors duration-200"
                />
              </div>
            </div>

            {/* Phone + Country */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[#0a1628] text-sm font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+1 234 567 8900"
                  className="bg-[#f8f6f0] border border-[#e8e0cc] rounded-lg px-4 py-3 text-[#0a1628] text-sm placeholder:text-[#94a3b8] focus:outline-none focus:border-[#b8960c] transition-colors duration-200"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#0a1628] text-sm font-medium">
                  Country
                </label>
                <input
                  type="text"
                  placeholder="United Kingdom"
                  className="bg-[#f8f6f0] border border-[#e8e0cc] rounded-lg px-4 py-3 text-[#0a1628] text-sm placeholder:text-[#94a3b8] focus:outline-none focus:border-[#b8960c] transition-colors duration-200"
                />
              </div>
            </div>

            {/* Fraud type */}
            <div className="flex flex-col gap-2">
              <label className="text-[#0a1628] text-sm font-medium">
                Type of Fraud <span className="text-[#b8960c]">*</span>
              </label>
              <select
                required
                className="bg-[#f8f6f0] border border-[#e8e0cc] rounded-lg px-4 py-3 text-[#0a1628] text-sm focus:outline-none focus:border-[#b8960c] transition-colors duration-200"
              >
                <option defaultValue="" disabled selected>Select fraud type</option>
                <option>Cryptocurrency Fraud</option>
                <option>Fake Trading Platform</option>
                <option>Forex Scam</option>
                <option>Investment Manipulation</option>
                <option>Online Asset Theft</option>
                <option>Other</option>
              </select>
            </div>

            {/* Estimated loss */}
            <div className="flex flex-col gap-2">
              <label className="text-[#0a1628] text-sm font-medium">
                Estimated Amount Lost <span className="text-[#b8960c]">*</span>
              </label>
              <select
                required
                className="bg-[#f8f6f0] border border-[#e8e0cc] rounded-lg px-4 py-3 text-[#0a1628] text-sm focus:outline-none focus:border-[#b8960c] transition-colors duration-200"
              >
                <option value="" disabled selected>Select a range</option>
                <option>Under $10,000</option>
                <option>$10,000 – $50,000</option>
                <option>$50,000 – $100,000</option>
                <option>$100,000 – $500,000</option>
                <option>Over $500,000</option>
              </select>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-[#0a1628] text-sm font-medium">
                Brief Description of What Happened <span className="text-[#b8960c]">*</span>
              </label>
              <textarea
                required
                rows={5}
                placeholder="Please describe what happened, when it occurred, and any platforms or individuals involved..."
                className="bg-[#f8f6f0] border border-[#e8e0cc] rounded-lg px-4 py-3 text-[#0a1628] text-sm placeholder:text-[#94a3b8] focus:outline-none focus:border-[#b8960c] transition-colors duration-200 resize-none"
              />
            </div>

            {/* Confidentiality note */}
            <div className="flex items-start gap-3 bg-[#f8f6f0] border border-[#e8e0cc] rounded-xl px-5 py-4">
              <HiOutlineLockClosed className="text-[#b8960c] text-lg mt-0.5 shrink-0" />
              <p className="text-[#4a5568] text-xs leading-relaxed">
                All information submitted is treated with strict confidentiality.
                Your details will never be shared without your explicit consent.
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#0a1628] hover:bg-[#0d1f3c] disabled:opacity-60 text-white font-medium py-4 rounded-lg transition-colors duration-300 font-heading text-base tracking-wide"
            >
              {loading ? "Submitting..." : "Request Confidential Review"}
            </button>

            <p className="text-center text-[#94a3b8] text-xs">
              Strictly confidential · No obligation · Available worldwide
            </p>
          </motion.form>
        )}

      </div>
    </section>
  )
}