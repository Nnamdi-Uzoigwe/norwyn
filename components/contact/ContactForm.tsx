"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { HiOutlineLockClosed } from "react-icons/hi"

type FormData = {
  fullName: string
  email: string
  phone: string
  country: string
  fraudType: string
  amountLost: string
  description: string
}

type ModalState = { open: boolean; type: "success" | "error"; message?: string }

function Modal({ modal, onClose }: { modal: ModalState; onClose: () => void }) {
  const isSuccess = modal.type === "success"

  return (
    <AnimatePresence>
      {modal.open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center px-6 pointer-events-none"
          >
            <div className="bg-white rounded-2xl p-10 max-w-md w-full text-center shadow-2xl pointer-events-auto">
              {/* Icon */}
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${
                isSuccess ? "bg-emerald-50 border border-emerald-200" : "bg-red-50 border border-red-200"
              }`}>
                {isSuccess ? (
                  <svg className="w-7 h-7 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-7 h-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </div>

              {/* Title */}
              <h3 className="font-heading text-2xl font-bold text-[#0a1628] mb-3">
                {isSuccess ? "Submission Received" : "Something Went Wrong"}
              </h3>

              {/* Message */}
              <p className="text-[#4a5568] text-sm leading-relaxed max-w-sm mx-auto mb-8">
                {isSuccess
                  ? "Our team will review your case confidentially and respond within 24 hours."
                  : modal.message || "Please try again or contact us directly."}
              </p>

              {/* Button */}
              <button
                onClick={onClose}
                className={`w-full font-medium py-3 rounded-lg transition-colors duration-300 font-heading text-sm tracking-wide text-white ${
                  isSuccess ? "bg-[#0a1628] hover:bg-[#0d1f3c]" : "bg-red-500 hover:bg-red-600"
                }`}
              >
                {isSuccess ? "Done" : "Try Again"}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [modal, setModal] = useState<ModalState>({ open: false, type: "success" })

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    fraudType: "",
    amountLost: "",
    description: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      // Scroll to top first, then show modal
      window.scrollTo({ top: 0, behavior: "smooth" })

      if (!res.ok) {
        setModal({ open: true, type: "error", message: data.error || "Something went wrong. Please try again." })
        return
      }

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        country: "",
        fraudType: "",
        amountLost: "",
        description: "",
      })

      setModal({ open: true, type: "success" })
    } catch (err) {
      window.scrollTo({ top: 0, behavior: "smooth" })
      setModal({ open: true, type: "error", message: "Network error. Please check your connection and try again." })
    } finally {
      setLoading(false)
    }
  }

  const closeModal = () => setModal((prev) => ({ ...prev, open: false }))

  return (
    <>
      <Modal modal={modal} onClose={closeModal} />

      <section className="w-full min-h-screen bg-[#f8f6f0] px-6 lg:px-40 py-24">
        <div className="max-w-3xl mx-auto">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-12"
          >
            <span className="text-[#b8960c] font-medium text-sm uppercase tracking-widest mb-4 block">
              Contact Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#0a1628] leading-tight mb-4">
              Start Your Confidential <span className="text-[#b8960c]">Case Review.</span>
            </h1>
            <p className="text-[#4a5568] text-base leading-relaxed max-w-xl">
              Fill out the form below and our team will assess your case privately.
              We respond within 24 hours - no obligations, no false promises.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
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
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
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
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="bg-[#f8f6f0] border border-[#e8e0cc] rounded-lg px-4 py-3 text-[#0a1628] text-sm placeholder:text-[#94a3b8] focus:outline-none focus:border-[#b8960c] transition-colors duration-200"
                />
              </div>
            </div>

            {/* Phone + Country */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[#0a1628] text-sm font-medium">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 234 567 8900"
                  className="bg-[#f8f6f0] border border-[#e8e0cc] rounded-lg px-4 py-3 text-[#0a1628] text-sm placeholder:text-[#94a3b8] focus:outline-none focus:border-[#b8960c] transition-colors duration-200"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#0a1628] text-sm font-medium">Country</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
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
                name="fraudType"
                required
                value={formData.fraudType}
                onChange={handleChange}
                className="bg-[#f8f6f0] border border-[#e8e0cc] rounded-lg px-4 py-3 text-[#0a1628] text-sm focus:outline-none focus:border-[#b8960c] transition-colors duration-200"
              >
                <option value="" disabled>Select fraud type</option>
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
                name="amountLost"
                required
                value={formData.amountLost}
                onChange={handleChange}
                className="bg-[#f8f6f0] border border-[#e8e0cc] rounded-lg px-4 py-3 text-[#0a1628] text-sm focus:outline-none focus:border-[#b8960c] transition-colors duration-200"
              >
                <option value="" disabled>Select a range</option>
                <option>Under $10,000</option>
                <option>$10,000 - $50,000</option>
                <option>$50,000 - $100,000</option>
                <option>$100,000 - $500,000</option>
                <option>Over $500,000</option>
              </select>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-[#0a1628] text-sm font-medium">
                Brief Description of What Happened <span className="text-[#b8960c]">*</span>
              </label>
              <textarea
                name="description"
                required
                rows={5}
                value={formData.description}
                onChange={handleChange}
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
              className="w-full bg-[#0a1628] cursor-pointer hover:bg-[#0d1f3c] disabled:opacity-60 text-white font-medium py-4 rounded-lg transition-colors duration-300 font-heading text-base tracking-wide"
            >
              {loading ? "Submitting..." : "Request Confidential Review"}
            </button>

            <p className="text-center text-[#94a3b8] text-xs">
              Strictly confidential · No obligation · Available worldwide
            </p>
          </motion.form>

        </div>
      </section>
    </>
  )
}