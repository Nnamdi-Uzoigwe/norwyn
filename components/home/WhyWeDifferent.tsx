// "use client"

// import { motion } from "motion/react"
// import { BsShieldLock } from "react-icons/bs"
// import { TbBinaryTree } from "react-icons/tb"
// import { PiScalesBold } from "react-icons/pi"
// import { MdGavel } from "react-icons/md"
// import { RiBankLine } from "react-icons/ri"
// import { GiReceiveMoney } from "react-icons/gi"

// const features = [
//   {
//     icon: <BsShieldLock className="text-3xl text-[#b8960c]" />,
//     title: "Digital Asset Tracing",
//     description:
//       "We follow stolen funds across wallets, chains, and exchanges — leaving no transaction unturned.",
//     size: "large", 
//   },
//   {
//     icon: <TbBinaryTree className="text-3xl text-[#b8960c]" />,
//     title: "Forensic Blockchain Analysis",
//     description:
//       "Court-ready blockchain forensics that map every movement of your funds with precision.",
//     size: "small",
//   },
//   {
//     icon: <PiScalesBold className="text-3xl text-[#b8960c]" />,
//     title: "Legal Strategy",
//     description:
//       "Tailored legal frameworks built around your case — civil, criminal, and regulatory.",
//     size: "small",
//   },
//   {
//     icon: <MdGavel className="text-3xl text-[#b8960c]" />,
//     title: "Injunction Applications",
//     description:
//       "We move fast to obtain freezing injunctions before fraudsters liquidate your assets.",
//     size: "small",
//   },
//   {
//     icon: <RiBankLine className="text-3xl text-[#b8960c]" />,
//     title: "Exchange Engagement",
//     description:
//       "Direct engagement with crypto exchanges to freeze accounts and preserve evidence.",
//     size: "large", 
//   },
//   {
//     icon: <GiReceiveMoney className="text-3xl text-[#b8960c]" />,
//     title: "Asset Recovery Proceedings",
//     description:
//       "End-to-end recovery proceedings handled by specialists who know how to win.",
//     size: "small",
//   },
// ]

// export default function WhyWeDifferent() {
//   return (
//     <section className="w-full bg-[#0a1628] px-6 lg:px-40 py-24">
//       <div className="max-w-6xl mx-auto">

//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//           className="mb-16"
//         >
//           <span className="text-[#b8960c] font-medium text-sm uppercase tracking-widest mb-4 block">
//             What Makes Us Different
//           </span>
//           <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
//             <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight max-w-xl">
//               Built for One Purpose:{" "}
//               <span className="text-[#b8960c]">Financial Recovery.</span>
//             </h2>
//             <p className="text-[#94a3b8] text-base md:text-lg max-w-sm leading-relaxed">
//               Other firms outsource, hesitate, and complicate. We built an
//               integrated model that handles everything — under one roof.
//             </p>
//           </div>

//           {/* Divider */}
//           <div className="w-full h-px bg-white/10 mt-10" />
//         </motion.div>

//         {/* Bento Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
//           {features.map((feature, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
//               className={`group relative bg-white/5 border border-white/10 hover:border-[#b8960c]/60 rounded-2xl p-8 transition-all duration-300 hover:bg-white/10 ${
//                 feature.size === "large" ? "lg:col-span-2" : "lg:col-span-1"
//               }`}
//             >
//               {/* Subtle gold glow on hover */}
//               <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
//                 style={{ boxShadow: "inset 0 0 40px rgba(184,150,12,0.05)" }}
//               />

//               {/* Icon */}
//               <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#b8960c]/40 group-hover:bg-[#b8960c]/10 transition-all duration-300">
//                 {feature.icon}
//               </div>

//               {/* Content */}
//               <h3 className="font-heading text-xl font-bold text-white mb-3">
//                 {feature.title}
//               </h3>
//               <p className="text-[#94a3b8] text-sm leading-relaxed">
//                 {feature.description}
//               </p>

//               {/* Corner accent */}
//               <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#b8960c]/30 rounded-br-lg group-hover:border-[#b8960c]/70 transition-colors duration-300" />
//             </motion.div>
//           ))}
//         </div>

//         {/* Bottom CTA strip */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
//           className="bg-[#b8960c]/10 border border-[#b8960c]/30 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
//         >
//           <div>
//             <p className="font-heading text-xl font-bold text-white">
//               You speak to one team.
//             </p>
//             <p className="text-[#94a3b8] text-sm mt-1">
//               We handle the rest — coordinated, relentless, and built around your case.
//             </p>
//           </div>
//           <a
//             href="/contact"
//             className="shrink-0 bg-[#b8960c] hover:bg-[#a07c0a] text-white font-medium px-10 py-3 rounded-md transition-colors duration-300"
//           >
//             Start Your Case
//           </a>
//         </motion.div>

//       </div>
//     </section>
//   )
// }


"use client"

import { motion } from "motion/react"
import { BsShieldLock } from "react-icons/bs"
import { TbBinaryTree } from "react-icons/tb"
import { PiScalesBold } from "react-icons/pi"
import { MdGavel } from "react-icons/md"
import { RiBankLine } from "react-icons/ri"
import { GiReceiveMoney } from "react-icons/gi"

const features = [
  {
    icon: <BsShieldLock className="text-3xl text-[#b8960c]" />,
    title: "Digital Asset Tracing",
    description:
      "We follow stolen funds across wallets, chains, and exchanges leaving no transaction unturned.",
    size: "large", 
  },
  {
    icon: <TbBinaryTree className="text-3xl text-[#b8960c]" />,
    title: "Forensic Blockchain Analysis",
    description:
      "Court-ready blockchain forensics that map every movement of your funds with precision.",
    size: "small",
  },
  {
    icon: <PiScalesBold className="text-3xl text-[#b8960c]" />,
    title: "Legal Strategy",
    description:
      "Tailored legal frameworks built around your case - civil, criminal, and regulatory.",
    size: "small",
  },
  {
    icon: <MdGavel className="text-3xl text-[#b8960c]" />,
    title: "Injunction Applications",
    description:
      "We move fast to obtain freezing injunctions before fraudsters liquidate your assets.",
    size: "small",
  },
  {
    icon: <RiBankLine className="text-3xl text-[#b8960c]" />,
    title: "Exchange Engagement",
    description:
      "Direct engagement with crypto exchanges to freeze accounts and preserve evidence.",
    size: "large", 
  },
  {
    icon: <GiReceiveMoney className="text-3xl text-[#b8960c]" />,
    title: "Asset Recovery Proceedings",
    description:
      "End-to-end recovery proceedings handled by specialists who know how to win.",
    size: "small",
  },
]

export default function WhyWeDifferent() {
  return (
    <section className="w-full bg-[#0a1628] px-6 lg:px-40 py-24">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16"
        >
          <span className="text-[#b8960c] font-medium text-sm uppercase tracking-widest mb-4 block">
            What Makes Us Different
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight max-w-xl">
              Built for One Purpose:{" "}
              <span className="text-[#b8960c]">Financial Recovery.</span>
            </h2>
            <p className="text-[#94a3b8] text-base md:text-lg max-w-sm leading-relaxed">
              Other firms outsource, hesitate, and complicate. We built an
              integrated model that handles everything under one roof.
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10 mt-10" />
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{
                borderColor: "rgba(184,150,12,0.6)",
                backgroundColor: "rgba(255,255,255,0.1)",
                boxShadow: "inset 0 0 40px rgba(184,150,12,0.05)",
              }}
              className={`relative bg-white/5 border border-white/10 rounded-2xl p-8 ${
                feature.size === "large" ? "lg:col-span-2" : "lg:col-span-1"
              }`}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Corner accent */}
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#b8960c]/30 rounded-br-lg" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="bg-[#b8960c]/10 border border-[#b8960c]/30 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="font-heading text-xl font-bold text-white">
              You speak to one team.
            </p>
            <p className="text-[#94a3b8] text-sm mt-1">
              We handle the rest - coordinated, relentless, and built around your case.
            </p>
          </div>
          <a
            href="/contact"
            className="shrink-0 bg-[#b8960c] hover:bg-[#a07c0a] text-white font-medium px-10 py-3 rounded-md transition-colors duration-300"
          >
            Start Your Case
          </a>
        </motion.div>

      </div>
    </section>
  )
}