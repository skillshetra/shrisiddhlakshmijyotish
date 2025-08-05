// Declaring Client Component //
"use client"

// Importing Neccessary Packages //
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// Exporting Default Function for Header //
export default function Header() {
  // State Variable and getting pathname //
  const [showNavigationInMobile, setShowNavigationInMobile] = useState<boolean>(false);
  const pathname = usePathname().toString().split("/")[1];

  // Returning TSX //
  return (
    <header className="flex sticky flex-col md:flex-row justify-between md:items-center gap-2 md:gap-4 py-2 px-4 sm:px-8 md:px-14 lg:px-20 xl:px-28 2xl:px-32 top-0 backdrop-blur-lg bg-primary z-100" style={{ boxShadow: "5px 5px 30px 5px #999999" }}>
      <div className="overflow-hidden min-w-[320px]">
        <Link href="/" className="w-fit flex items-center gap-1 group">
          <Image width={50} height={50} src="/website-logo-without-bg.jpg" alt="Shri Siddh Lakshmi Jyotish" />
          <h1 className="hidden md:block text-primary font-bold text-xl max-w-0 whitespace-nowrap overflow-hidden group-hover:max-w-xs transition-all duration-300">Shri Siddh Lakshmi Jyotish</h1>
        </Link>
      </div>
      <nav className={`flex flex-col md:flex-row overflow-hidden transition-[max-height] duration-500 ease-in-out text-lg ${showNavigationInMobile ? "max-h-[500px]" : "max-h-0"} md:max-h-full md:max-h-xs md:bg-transparent md:items-center md:gap-4 lg:gap-6`}>
        <Link href="/" className={`${pathname == "" ? "text-primary font-semibold" : ""}     hover-text-primary transition duration-300`}>Home</Link>
        <Link href="/about" className={`${pathname == "about" ? "text-primary font-semibold" : ""}     hover-text-primary transition duration-300`}>About</Link>
        <Link href="/services" className={`${pathname == "services" ? "text-primary font-semibold" : ""}     hover-text-primary transition duration-300`}>Services</Link>
        <Link href="/blogs" className={`${pathname == "blogs" ? "text-primary font-semibold" : ""}     hover-text-primary transition duration-300`}>Blogs</Link>
        <Link href="/contact" className={`${pathname == "contact" ? "text-primary font-semibold" : ""}     hover-text-primary transition duration-300`}>Contact</Link>
      </nav>
      <button onClick={() => { setShowNavigationInMobile(prev => !prev) }} className="md:hidden cursor-pointer"><FontAwesomeIcon icon={faBars} style={{ fontSize: "22px" }} className="w-5 h-5 absolute top-6 right-5 text-primary" /></button>
    </header>
  )
}