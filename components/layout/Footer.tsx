import Link from "next/link";
import Image from "next/image";

import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import { HiOutlineLockClosed } from "react-icons/hi";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "Compliance & Risk Management", href: "/services" },
  { label: "Fraud & Forensic Investigation", href: "/services" },
  { label: "Litigation Support", href: "/services" },
  { label: "Digital Asset Analysis", href: "/services" },
];

const badges = [
  {
    src: "/abi-badge.png",
    alt: "Association of British Investigators",
    href: "https://www.theabi.org.uk/member/4387",
  },
  {
    src: "/chainalysis-badge.png",
    alt: "Chainalysis Investigation Specialist Certification",
    href: "https://verify.skilljar.com/c/nrcseeawpvh8",
  },
  {
    src: "/crypto-investigator-badge.png",
    alt: "Cryptocurrency Investigator Marketplace",
    href: "https://cryptocurrencyinvestigator.com/investigators/cnc-intelligence/",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#F5F7FA] text-white">
    {/* <footer className="bg-[#0a1628] text-white"> */}
      {/* Top border accent */}
      <div className="w-full h-0.5 bg-linear-to-r from-transparent via-[#b8960c] to-transparent" />

      {/* Main footer content */}
      <div className="px-6 lg:px-40 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <Link href="/">
              <Image  
                src="/icon.png"
                height={100}
                width={100}
                alt="Norwyn logo"
                className="mb-5"
              />
            </Link>

            <p className="text-[#5e6977] text-sm leading-relaxed mb-6">
              Your bank may have failed you. We won't. <br />
              We step in with regulated forensiv expertise, identifying where funds have gone and providing actionable, court-ready evidence.
            </p>

            {/* Contact */}
            <div className="space-y-3 mb-6">
              <a
                href="mailto:help@norwynsolution.com"
                className="flex items-center gap-3 text-[#5e6977] hover:text-[#b8960c] transition-colors duration-200 text-sm group"
              >
                <MdOutlineEmail className="text-[#b8960c] text-base shrink-0" />
                help@norwynsolution.com
              </a>
            </div>

            {/* Address */}
            <div className="space-y-3 mb-6">
              <span
                
                className="flex items-center gap-3 text-[#5e6977] hover:text-[#b8960c] transition-colors duration-200 text-sm group"
              >
                <MdOutlineLocationOn className="text-[#b8960c] text-base shrink-0" />
                20 Farrington St, London EC4A4AB, UK
              </span>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-[#5e6977] text-sm uppercase tracking-widest mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-[#5e6977] hover:text-[#b8960c] transition-colors duration-200 text-sm group"
                  >
                    <div className="w-1 h-1 rounded-full bg-[#b8960c]/40 group-hover:bg-[#b8960c] transition-colors duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <h4 className="font-heading font-bold text-[#5e6977] text-sm uppercase tracking-widest mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, i) => (
                <li key={i}>
                  <Link
                    href={service.href}
                    className="flex items-start gap-2 text-[#5e6977] hover:text-[#b8960c] transition-colors duration-200 text-sm group"
                  >
                    <div className="w-1 h-1 rounded-full bg-[#b8960c]/40 group-hover:bg-[#b8960c] transition-colors duration-200 mt-2 shrink-0" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Verified Badges */}
          <div className="flex flex-col items-start">
            <h4 className="font-heading font-bold text-[#5e6977] text-sm uppercase tracking-widest mb-6">
              Verified & [Certified]
            </h4>

            <div className="flex flex-col gap-4">
              {badges.map((badge, i) => (
                <a
                  key={i}
                  href={badge.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-2 items-center w-44 justify-center bg-black/5 border border-black/10 rounded-xl px-4 py-4 hover:border-[#b8960c]/40 hover:bg-white/10 transition-all duration-300"
                >
                  <Image
                    src={badge.src}
                    alt={badge.alt}
                    width={220}
                    height={220}
                    className="object-contain max-h-28 brightness-90 hover:brightness-110 transition-all duration-300"
                  />
                  <p className="text-[#94a3b8] text-xs text-center w-[70%] w-text-center">
                    {badge.alt}
                  </p>
                </a>
              ))}
            </div>

            {/* Confidential badge */}
            <div className="flex items-center gap-3 bg-black/5 border border-black/10 rounded-xl px-4 py-3 mt-4">
              <HiOutlineLockClosed className="text-[#b8960c] text-lg shrink-0" />
              <div>
                <p className="text-[#5e6977] text-xs font-medium">
                  Strictly Confidential
                </p>
                <p className="text-[#5e6977] text-xs">
                  All enquiries are protected
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-black/10" />

      {/* Bottom bar */}
      <div className="px-6 lg:px-40 py-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#94a3b8] text-xs">
            © {new Date().getFullYear()} Norwyn Solution. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-[#94a3b8] hover:text-[#b8960c] text-xs transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[#94a3b8] hover:text-[#b8960c] text-xs transition-colors duration-200"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/contact"
              className="text-[#94a3b8] hover:text-[#b8960c] text-xs transition-colors duration-200"
            >
              Contact
            </Link>
          </div>

          <p className="text-[#94a3b8] text-xs">Regulated · Trusted · Global</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
