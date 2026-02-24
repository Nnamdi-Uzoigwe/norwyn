"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { IoCloseOutline } from "react-icons/io5"
import { HiOutlineMenu } from "react-icons/hi"
import Button from "../shared/Button"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white text-[#0a1628] px-6 lg:px-40 shadow-sm fixed w-full top-0 z-50">
      {/* Main navbar row */}
      <div className="flex items-center justify-between h-20 lg:h-24">
        {/* Logo */}
        <Image
          src="/NORWYN.svg"
          height={100}
          width={100}
          alt="norwyn logo"
        />

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center text-lg gap-6 font-medium lg:gap-10">
          <Link href="/"><h4>Home</h4></Link>
          <Link href="/about"><h4>About</h4></Link>
          <Link href="/services"><h4>Services</h4></Link>
          <Link href="/contact">
            <h4>Contact</h4>
          </Link>
        </div>

        <div className="hidden md:flex">
          <Button 
            text="Request Now"
            href="/contact"
          />
        </div>

        {/* Hamburger icon - mobile only */}
        <button 
          className="md:hidden text-[#0a1628] text-3xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="transition-all duration-300 ease-in-out">
            {isOpen ? <IoCloseOutline className="text-4xl" /> : <HiOutlineMenu />}
          </span>
        </button>
      </div>

      {/* Mobile menu with smooth transition */}
      <div
        className={`md:hidden flex flex-col gap-6 font-medium overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 pb-6 pt-10" : "max-h-0 opacity-0"
        }`}
      >
        <Link href="/" onClick={() => setIsOpen(false)}>
            <h4>
                Home
            </h4>
        </Link>
        <Link href="/about" onClick={() => setIsOpen(false)}><h4>About</h4></Link>
        <Link href="/services" onClick={() => setIsOpen(false)}><h4>Services</h4></Link>
        <Link
          href="/contact"
          onClick={() => setIsOpen(false)}
        >
          <h4>Contact</h4>
        </Link>
        <div className="mt-3">
          <Button 
            text="Request Now"
            href="/contact"
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar