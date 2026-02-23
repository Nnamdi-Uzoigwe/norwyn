// export default function WhoWeHelp() {
//     return (
//         <div>Who we help Section</div>
//     )
// }

"use client"

import { motion } from "motion/react"
import { BiBitcoin } from "react-icons/bi"
import { TbChartCandle } from "react-icons/tb"
import { MdOutlineAccountBalance } from "react-icons/md"
import { RiCoinLine } from "react-icons/ri"
import { HiOutlineOfficeBuilding } from "react-icons/hi"

const victims = [
  {
    icon: <BiBitcoin className="text-3xl text-[#b8960c]" />,
    title: "Crypto Platform Scams",
    description:
      "Individuals deceived by fraudulent crypto investment platforms promising guaranteed returns.",
  },
  {
    icon: <TbChartCandle className="text-3xl text-[#b8960c]" />,
    title: "Fake Forex Brokers",
    description:
      "Victims of unregulated or impersonated forex brokers who vanished with deposited funds.",
  },
  {
    icon: <MdOutlineAccountBalance className="text-3xl text-[#b8960c]" />,
    title: "Fraudulent Stock Schemes",
    description:
      "Those misled by pump-and-dump schemes, fake stock tips, or unlicensed investment advisors.",
  },
  {
    icon: <RiCoinLine className="text-3xl text-[#b8960c]" />,
    title: "High-Value Asset Theft",
    description:
      "Victims of large-scale digital asset theft — including NFTs, DeFi exploits, and wallet hacks.",
  },
  {
    icon: <HiOutlineOfficeBuilding className="text-3xl text-[#b8960c]" />,
    title: "Organisational Fraud",
    description:
      "Companies and institutions facing complex, multi-layered financial fraud at scale.",
  },
]

export default function WhoWeHelp() {
  return (
    <section className="w-full bg-white px-6 lg:px-40 py-24">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-[#b8960c] font-medium text-sm uppercase tracking-widest mb-4 block">
              Who We Help
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0a1628] leading-tight">
              If you were defrauded,{" "}
              <span className="text-[#b8960c]">we want to hear from you.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-[#4a5568] text-base md:text-lg leading-relaxed lg:mb-2"
          >
            If funds moved through a bank account, blockchain, or an exchange —
            there may be a pathway. We assess every case individually and pursue
            every available route.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {victims.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="group relative bg-[#f8f6f0] border border-[#e8e0cc] hover:border-[#b8960c] rounded-2xl p-7 transition-all duration-300 hover:shadow-lg overflow-hidden"
            >
              {/* Gold top bar on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#b8960c] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-2xl" />

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-white border border-[#e8e0cc] flex items-center justify-center mb-5 group-hover:border-[#b8960c]/40 group-hover:bg-[#b8960c]/10 transition-all duration-300">
                {item.icon}
              </div>

              <h3 className="font-heading text-lg font-bold text-[#0a1628] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[#4a5568] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}

          {/* Last card — pathway CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="group bg-[#0a1628] border border-[#0a1628] rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl"
          >
            <div>
              <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mb-5">
                <span className="text-2xl text-[#b8960c] font-heading font-bold">?</span>
              </div>
              <h3 className="font-heading text-lg font-bold text-white mb-2">
                Not sure if you qualify?
              </h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed">
                If funds moved through any financial channel — there may be a pathway. Let us assess your case.
              </p>
            </div>
            <a
              href="/contact"
              className="mt-6 inline-block text-center bg-[#b8960c] hover:bg-[#a07c0a] text-white text-sm font-medium px-6 py-3 rounded-md transition-colors duration-300"
            >
              Free Case Assessment
            </a>
          </motion.div>
        </div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="border-l-4 border-[#b8960c] bg-[#f8f6f0] rounded-r-2xl px-8 py-6"
        >
          <p className="font-heading text-lg md:text-xl font-bold text-[#0a1628]">
            Bank account. Blockchain. Exchange.
          </p>
          <p className="text-[#4a5568] text-sm mt-1">
            Wherever your funds went — if there is a pathway, we will find it.
          </p>
        </motion.div>

      </div>
    </section>
  )
}