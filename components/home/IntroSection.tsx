// "use client"

// import { motion } from "motion/react"
// import { BsSearch } from "react-icons/bs"
// import { AiOutlineStop } from "react-icons/ai"
// import { PiScalesBold } from "react-icons/pi"
// import { GiReceiveMoney } from "react-icons/gi"

// const steps = [
//   {
//     icon: <BsSearch className="text-2xl text-[#b8960c]" />,
//     label: "We Trace.",
//     description: "We follow the digital trail of stolen funds across wallets, exchanges, and borders.",
//   },
//   {
//     icon: <AiOutlineStop className="text-2xl text-[#b8960c]" />,
//     label: "We Freeze.",
//     description: "We move fast to obtain freezing orders before fraudsters can liquidate your assets.",
//   },
//   {
//     icon: <PiScalesBold className="text-2xl text-[#b8960c]" />,
//     label: "We Litigate.",
//     description: "Our legal team pursues every avenue — civil, criminal, and regulatory.",
//   },
//   {
//     icon: <GiReceiveMoney className="text-2xl text-[#b8960c]" />,
//     label: "We Pursue Recovery.",
//     description: "We don't stop until every possible avenue for recovery has been exhausted.",
//   },
// ]

// export default function IntroSection() {
//   return (
//     <section className="w-full bg-white px-6 lg:px-40 py-24">
//       <div className="max-w-6xl mx-auto">

//         {/* Top statement */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
//           {/* Left */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//           >
//             <span className="text-[#b8960c] font-medium text-sm uppercase tracking-widest mb-4 block">
//               The Reality
//             </span>
//             <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0a1628] leading-tight">
//               Billions lost every year. <br />
//               <span className="text-[#b8960c]">Most never recovered.</span>
//             </h2>

//             {/* Divider */}
//             <div className="w-16 h-1 bg-[#b8960c] mt-6 mb-6 rounded-full" />

//             <p className="text-[#4a5568] text-base md:text-lg leading-relaxed">
//               Fraudulent crypto platforms, fake trading schemes, and sophisticated
//               online investment scams are devastating lives globally. Victims are
//               ignored. Exchanges delay. Fraudsters disappear.
//             </p>
//           </motion.div>

//           {/* Right */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
//             className="grid grid-cols-2 gap-4"
//           >
//             {[
//               { stat: "$5.6B+", label: "Lost to crypto fraud in 2023 alone" },
//               { stat: "46%", label: "Of victims never report the crime" },
//               { stat: "72hrs", label: "Critical window to freeze stolen assets" },
//               { stat: "1 in 3", label: "Online investments are fraudulent" },
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: "easeOut" }}
//                 className="bg-[#f8f6f0] border border-[#e8e0cc] rounded-xl p-6"
//               >
//                 <p className="font-heading text-3xl font-bold text-[#0a1628]">{item.stat}</p>
//                 <p className="text-sm text-[#4a5568] mt-1 leading-snug">{item.label}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>

//         {/* Divider */}
//         <div className="w-full h-px bg-[#e8e0cc] mb-24" />

//         {/* We step in statement */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           className="text-center mb-16"
//         >
//           <span className="text-[#b8960c] font-medium text-sm uppercase tracking-widest mb-4 block">
//             Our Response
//           </span>
//           <h3 className="font-heading text-3xl md:text-4xl font-bold text-[#0a1628]">
//             We step in.
//           </h3>
//         </motion.div>

//         {/* Steps grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {steps.map((step, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
//               className="group bg-white border border-[#e8e0cc] hover:border-[#b8960c] hover:shadow-lg rounded-xl p-6 transition-all duration-300"
//             >
//               {/* Icon */}
//               <div className="w-12 h-12 rounded-lg bg-[#f8f6f0] flex items-center justify-center mb-4 group-hover:bg-[#b8960c]/10 transition-colors duration-300">
//                 {step.icon}
//               </div>

//               {/* Step number */}
//               <span className="text-xs text-[#b8960c] font-medium tracking-widest uppercase">
//                 Step {i + 1}
//               </span>

//               <h4 className="font-heading text-xl font-bold text-[#0a1628] mt-1 mb-2">
//                 {step.label}
//               </h4>

//               <p className="text-sm text-[#4a5568] leading-relaxed">
//                 {step.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   )
// }


"use client"

import { motion } from "motion/react"
import { BsSearch } from "react-icons/bs"
import { AiOutlineStop } from "react-icons/ai"
import { PiScalesBold } from "react-icons/pi"
import { GiReceiveMoney } from "react-icons/gi"

const steps = [
  {
    icon: <BsSearch className="text-2xl text-[#b8960c]" />,
    label: "We Trace.",
    description: "We follow the digital trail of stolen funds across wallets, exchanges, and borders.",
  },
  {
    icon: <AiOutlineStop className="text-2xl text-[#b8960c]" />,
    label: "We Freeze.",
    description: "We move fast to obtain freezing orders before fraudsters can liquidate your assets.",
  },
  {
    icon: <PiScalesBold className="text-2xl text-[#b8960c]" />,
    label: "We Litigate.",
    description: "Our legal team pursues every avenue - civil, criminal, and regulatory.",
  },
  {
    icon: <GiReceiveMoney className="text-2xl text-[#b8960c]" />,
    label: "We Pursue Recovery.",
    description: "We don't stop until every possible avenue for recovery has been exhausted.",
  },
]

export default function IntroSection() {
  return (
    <section className="w-full bg-white px-6 lg:px-40 py-24">
      <div className="max-w-6xl mx-auto">

        {/* Top statement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-[#b8960c] font-medium text-sm uppercase tracking-widest mb-4 block">
              The Reality
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0a1628] leading-tight">
              Billions lost every year. <br />
              <span className="text-[#b8960c]">Most never recovered.</span>
            </h2>

            {/* Divider */}
            <div className="w-16 h-1 bg-[#b8960c] mt-6 mb-6 rounded-full" />

            <p className="text-[#4a5568] text-base md:text-lg leading-relaxed">
              Fraudulent crypto platforms, fake trading schemes, and sophisticated
              online investment scams are devastating lives globally. Victims are
              ignored. Exchanges delay. Fraudsters disappear.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { stat: "$17B", label: "Lost to crypto-related scams in 2025 alone" },
              { stat: "46%", label: "Of victims never report the crime" },
              { stat: "72hrs", label: "Critical window to freeze stolen assets" },
              { stat: "1 in 3", label: "Online investments are fraudulent" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                className="bg-[#f8f6f0] border border-[#e8e0cc] rounded-xl p-6"
              >
                <p className="font-heading text-3xl font-bold text-[#0a1628]">{item.stat}</p>
                <p className="text-sm text-[#4a5568] mt-1 leading-snug">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#e8e0cc] mb-24" />

        {/* We step in statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="text-[#b8960c] font-medium text-sm uppercase tracking-widest mb-4 block">
            Our Response
          </span>
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-[#0a1628]">
            We step in.
          </h3>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              className="group bg-white border border-[#e8e0cc] rounded-xl p-6"
              whileHover={{ boxShadow: "0 10px 30px rgba(0,0,0,0.1)", borderColor: "#b8960c" }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-[#f8f6f0] flex items-center justify-center mb-4">
                {step.icon}
              </div>

              {/* Step number */}
              <span className="text-xs text-[#b8960c] font-medium tracking-widest uppercase">
                Step {i + 1}
              </span>

              <h4 className="font-heading text-xl font-bold text-[#0a1628] mt-1 mb-2">
                {step.label}
              </h4>

              <p className="text-sm text-[#4a5568] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}