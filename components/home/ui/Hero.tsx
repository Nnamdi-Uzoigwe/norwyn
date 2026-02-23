// import Image from "next/image"
// import Link from "next/link"

// interface HeroProps {
//   title: string
//   subtitle?: string
//   backgroundImage: string
//   ctaText?: string
//   ctaLink?: string
// }

// const Hero = ({
//   title,
//   subtitle,
//   backgroundImage,
//   ctaText,
//   ctaLink = "/",
// }: HeroProps) => {
//   return (
//     <section className="relative w-full h-screen">
//       {/* Background Image */}
//       <Image
//         src={backgroundImage}
//         alt="Hero background"
//         fill
//         priority
//         className="object-cover object-center"
//       />

//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black/60" />

//       {/* Text overlay content */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 lg:px-40">
//         <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl">
//           {title}
//         </h1>

//         {subtitle && (
//           <p className="mt-4 text-base md:text-lg text-white/80 max-w-2xl">
//             {subtitle}
//           </p>
//         )}

//         {ctaText && (
//           <Link
//             href={ctaLink}
//             className="mt-8 bg-[#b8960c] text-white font-medium px-10 py-3 rounded-md hover:bg-[#a07c0a] transition-colors duration-300"
//           >
//             {ctaText}
//           </Link>
//         )}
//       </div>
//     </section>
//   )
// }

// export default Hero


"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"

interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  backgroundImage: string
  ctaText?: string
  ctaLink?: string
}

const Hero = ({
  title,
  subtitle,
  description,
  backgroundImage,
  ctaText,
  ctaLink = "/",
}: HeroProps) => {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="Hero background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay — fades in */}
      <motion.div
        className="absolute inset-0 bg-black/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Text overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 lg:px-40">

        {/* Title */}
        <motion.h1
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            className="mt-4 text-sm lg:text-lg text-white/70 max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          >
            {subtitle}
          </motion.p>
        )}

        {/* Description
        {description && (
          <motion.p
            className="mt-4 text-sm lg:text-[16px] text-white/80 max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          >
            {description}
          </motion.p>
        )} */}

        {/* CTA Button */}
        {ctaText && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
          >
            <Link
              href={ctaLink}
              className="mt-8 inline-block bg-[#b8960c] text-white font-medium px-10 py-3 rounded-md hover:bg-[#a07c0a] transition-colors duration-300"
            >
              <motion.span
                whileHover={{ letterSpacing: "0.05em" }}
                transition={{ duration: 0.3 }}
                className="inline-block"
              >
                {ctaText}
              </motion.span>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Hero