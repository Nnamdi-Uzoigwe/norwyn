// "use client"

// import { motion } from "motion/react"
// import { TbTargetArrow } from "react-icons/tb"
// import { BsEye } from "react-icons/bs"
// import { RiHandHeartLine } from "react-icons/ri"

// const values = [
//   {
//     icon: <BsEye className="text-2xl text-[#b8960c]" />,
//     label: "Transparency",
//     description:
//       "We keep you informed at every stage. No jargon, no confusion — just clear, honest communication.",
//   },
//   {
//     icon: <RiHandHeartLine className="text-2xl text-[#b8960c]" />,
//     label: "Integrity",
//     description:
//       "We only take cases where we believe recovery is viable. We will never promise what we cannot deliver.",
//   },
//   {
//     icon: <TbTargetArrow className="text-2xl text-[#b8960c]" />,
//     label: "Legal Precision",
//     description:
//       "Every action we take is deliberate, legally sound, and strategically timed for maximum impact.",
//   },
// ]

// export default function OurMission() {
//   return (
//     <section className="w-full bg-[#0a1628] px-6 lg:px-40 py-24 relative overflow-hidden">

//       {/* Background decorative text */}
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
//         <p className="font-heading text-[12rem] md:text-[18rem] font-bold text-white/2 leading-none tracking-tighter">
//           MISSION
//         </p>
//       </div>

//       <div className="max-w-6xl mx-auto relative z-10">

//         {/* Top — icon + label */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//           className="flex flex-col items-center text-center mb-16"
//         >
//           <div className="w-16 h-16 rounded-full bg-[#b8960c]/10 border border-[#b8960c]/30 flex items-center justify-center mb-6">
//             <TbTargetArrow className="text-3xl text-[#b8960c]" />
//           </div>

//           <span className="text-[#b8960c] font-medium text-sm uppercase tracking-widest mb-4 block">
//             Our Mission
//           </span>

//           <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight max-w-3xl">
//             Making a complex situation{" "}
//             <span className="text-[#b8960c]">as simple as possible.</span>
//           </h2>
//         </motion.div>

//         {/* Mission statement card */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
//           className="relative bg-white/5 border border-white/10 rounded-2xl p-10 md:p-14 text-center mb-16"
//         >
//           {/* Gold quote mark */}
//           <span className="absolute top-6 left-8 font-heading text-7xl text-[#b8960c]/20 leading-none select-none">
//             "
//           </span>

//           <p className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-white leading-relaxed max-w-3xl mx-auto">
//             To make a complex and stressful situation as straightforward as
//             possible — handling every stage on behalf of our clients with{" "}
//             <span className="text-[#b8960c]">transparency</span>,{" "}
//             <span className="text-[#b8960c]">integrity</span>, and{" "}
//             <span className="text-[#b8960c]">legal precision.</span>
//           </p>

//           {/* Gold quote mark closing */}
//           <span className="absolute bottom-4 right-8 font-heading text-7xl text-[#b8960c]/20 leading-none select-none">
//             "
//           </span>
//         </motion.div>

//         {/* Three values */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
//           {values.map((value, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
//               className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#b8960c]/50 rounded-2xl p-7 text-center transition-all duration-300"
//             >
//               <div className="w-12 h-12 rounded-full bg-[#b8960c]/10 border border-[#b8960c]/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-[#b8960c]/20 group-hover:border-[#b8960c]/50 transition-all duration-300">
//                 {value.icon}
//               </div>
//               <h3 className="font-heading text-lg font-bold text-white mb-2">
//                 {value.label}
//               </h3>
//               <p className="text-[#94a3b8] text-sm leading-relaxed">
//                 {value.description}
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
import { TbTargetArrow } from "react-icons/tb"
import { BsEye } from "react-icons/bs"
import { RiHandHeartLine } from "react-icons/ri"

const values = [
  {
    icon: <BsEye className="text-2xl text-[#b8960c]" />,
    label: "Transparency",
    description:
      "We keep you informed at every stage. No jargon, no confusion - just clear, honest communication.",
  },
  {
    icon: <RiHandHeartLine className="text-2xl text-[#b8960c]" />,
    label: "Integrity",
    description:
      "We only take cases where we believe recovery is viable. We will never promise what we cannot deliver.",
  },
  {
    icon: <TbTargetArrow className="text-2xl text-[#b8960c]" />,
    label: "Legal Precision",
    description:
      "Every action we take is deliberate, legally sound, and strategically timed for maximum impact.",
  },
]

export default function OurMission() {
  return (
    <section className="w-full bg-[#0a1628] px-6 lg:px-40 py-24 relative overflow-hidden">

      {/* Background decorative text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <p className="font-heading text-[12rem] md:text-[18rem] font-bold text-white/2 leading-none tracking-tighter">
          MISSION
        </p>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Top — icon + label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="w-16 h-16 rounded-full bg-[#b8960c]/10 border border-[#b8960c]/30 flex items-center justify-center mb-6">
            <TbTargetArrow className="text-3xl text-[#b8960c]" />
          </div>

          <span className="text-[#b8960c] font-medium text-sm uppercase tracking-widest mb-4 block">
            Our Mission
          </span>

          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight max-w-3xl">
            Making a complex situation{" "}
            <span className="text-[#b8960c]">as simple as possible.</span>
          </h2>
        </motion.div>

        {/* Mission statement card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative bg-white/5 border border-white/10 rounded-2xl p-10 md:p-14 text-center mb-16"
        >
          {/* Gold quote mark */}
          <span className="absolute top-6 left-8 font-heading text-7xl text-[#b8960c]/20 leading-none select-none">
            "
          </span>

          <p className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-white leading-relaxed max-w-3xl mx-auto">
            To make a complex and stressful situation as straightforward as
            possible; handling every stage on behalf of our clients with{" "}
            <span className="text-[#b8960c]">transparency</span>,{" "}
            <span className="text-[#b8960c]">integrity</span>, and{" "}
            <span className="text-[#b8960c]">legal precision.</span>
          </p>

          {/* Gold quote mark closing */}
          <span className="absolute bottom-4 right-8 font-heading text-7xl text-[#b8960c]/20 leading-none select-none">
            "
          </span>
        </motion.div>

        {/* Three values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              whileHover={{
                backgroundColor: "rgba(255,255,255,0.1)",
                borderColor: "rgba(184,150,12,0.5)",
              }}
              className="bg-white/5 border border-white/10 rounded-2xl p-7 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-[#b8960c]/10 border border-[#b8960c]/20 flex items-center justify-center mx-auto mb-5">
                {value.icon}
              </div>
              <h3 className="font-heading text-lg font-bold text-white mb-2">
                {value.label}
              </h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}