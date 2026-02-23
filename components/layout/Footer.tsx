import Link from 'next/link'
import Image from 'next/image'
import { BiBitcoin } from 'react-icons/bi'
import { FaXTwitter, FaLinkedinIn } from 'react-icons/fa6'
import { MdOutlineEmail, MdOutlinePhone } from 'react-icons/md'
import { HiOutlineLockClosed } from 'react-icons/hi'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
]

const services = [
  { label: 'Compliance & Risk Management', href: '/services' },
  { label: 'Fraud & Forensic Investigation', href: '/services' },
  { label: 'Litigation Support', href: '/services' },
  { label: 'Digital Asset Analysis', href: '/services' },
]

const credentials = [
  'Association of British Investigators (ABI)',
  'Global Blockchain Association (GBA)',
  'Blockchain Intelligence Group (BIG)',
  'World Association of Detectives (W.A.D)',
]

const Footer = () => {
  return (
    <footer className='bg-[#0a1628] text-white'>

      {/* Top border accent */}
      <div className='w-full h-0.5 bg-linear-to-r from-transparent via-[#b8960c] to-transparent' />

      {/* Main footer content */}
      <div className='px-6 lg:px-40 py-16'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>

          {/* Col 1 — Brand */}
          <div className='lg:col-span-1'>
            {/* Logo */}
            <Image
              src='/NORWYN.svg'
              height={90}
              width={90}
              alt='Norwyn logo'
              className='mb-5'
            />

            <p className='text-[#94a3b8] text-sm leading-relaxed mb-6'>
              Specialists in cryptocurrency and investment fraud recovery. We trace, freeze, litigate, and pursue recovery — relentlessly.
            </p>

            {/* Contact */}
            <div className='space-y-3 mb-6'>
              <a
                href='mailto:info@norwyn.com'
                className='flex items-center gap-3 text-[#94a3b8] hover:text-[#b8960c] transition-colors duration-200 text-sm group'
              >
                <MdOutlineEmail className='text-[#b8960c] text-base shrink-0' />
                info@norwyn.com
              </a>
              <a
                href='tel:+441234567890'
                className='flex items-center gap-3 text-[#94a3b8] hover:text-[#b8960c] transition-colors duration-200 text-sm'
              >

                <MdOutlinePhone className='text-[#b8960c] text-base shrink-0' />
                +44 123 456 7890
              </a>
            </div>

            {/* Socials */}
            <div className='flex items-center gap-3'>
              <a
                href='#'
                className='w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#b8960c]/50 hover:bg-[#b8960c]/10 transition-all duration-300'
              >
                <FaXTwitter className='text-sm text-[#94a3b8] hover:text-[#b8960c]' />
              </a>
              <a
                href='#'
                className='w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#b8960c]/50 hover:bg-[#b8960c]/10 transition-all duration-300'
              >
                <FaLinkedinIn className='text-sm text-[#94a3b8] hover:text-[#b8960c]' />
              </a>
              <a
                href='#'
                className='w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#b8960c]/50 hover:bg-[#b8960c]/10 transition-all duration-300'
              >
                <BiBitcoin className='text-sm text-[#94a3b8] hover:text-[#b8960c]' />
              </a>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className='font-heading font-bold text-white text-sm uppercase tracking-widest mb-6'>
              Quick Links
            </h4>
            <ul className='space-y-3'>
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className='flex items-center gap-2 text-[#94a3b8] hover:text-[#b8960c] transition-colors duration-200 text-sm group'
                  >
                    <div className='w-1 h-1 rounded-full bg-[#b8960c]/40 group-hover:bg-[#b8960c] transition-colors duration-200' />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <h4 className='font-heading font-bold text-white text-sm uppercase tracking-widest mb-6'>
              Our Services
            </h4>
            <ul className='space-y-3'>
              {services.map((service, i) => (
                <li key={i}>
                  <Link
                    href={service.href}
                    className='flex items-start gap-2 text-[#94a3b8] hover:text-[#b8960c] transition-colors duration-200 text-sm group'
                  >
                    <div className='w-1 h-1 rounded-full bg-[#b8960c]/40 group-hover:bg-[#b8960c] transition-colors duration-200 mt-2 shrink-0' />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Credentials */}
          <div>
            <h4 className='font-heading font-bold text-white text-sm uppercase tracking-widest mb-6'>
              Credentials & Memberships
            </h4>
            <ul className='space-y-3 mb-8'>
              {credentials.map((cred, i) => (
                <li
                  key={i}
                  className='flex items-start gap-2 text-[#94a3b8] text-sm'
                >
                  <div className='w-1 h-1 rounded-full bg-[#b8960c]/40 mt-2 shrink-0' />
                  {cred}
                </li>
              ))}
            </ul>

            {/* Confidential badge */}
            <div className='flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3'>
              <HiOutlineLockClosed className='text-[#b8960c] text-lg shrink-0' />
              <div>
                <p className='text-white text-xs font-medium'>Strictly Confidential</p>
                <p className='text-[#94a3b8] text-xs'>All enquiries are protected</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className='w-full h-px bg-white/10' />

      {/* Bottom bar */}
      <div className='px-6 lg:px-40 py-6'>
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4'>
          <p className='text-[#475569] text-xs'>
            © {new Date().getFullYear()} Norwyn. All rights reserved.
          </p>

          <div className='flex items-center gap-6'>
            <Link href='/privacy' className='text-[#475569] hover:text-[#b8960c] text-xs transition-colors duration-200'>
              Privacy Policy
            </Link>
            <Link href='/terms' className='text-[#475569] hover:text-[#b8960c] text-xs transition-colors duration-200'>
              Terms & Conditions
            </Link>
            <Link href='/contact' className='text-[#475569] hover:text-[#b8960c] text-xs transition-colors duration-200'>
              Contact
            </Link>
          </div>

          <p className='text-[#475569] text-xs'>
            Regulated · Trusted · Global
          </p>
        </div>
      </div>

    </footer>
  )
}

export default Footer