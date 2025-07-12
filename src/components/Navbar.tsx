"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "FUTUR MEDIA", href: "#home", highlight: true },
  { label: "Nos Expertises", href: "#expertises" },
  { label: "Notre Vision", href: "#vision" },
  { label: "Nos Références", href: "#references" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNav(false); // scroll down → hide
      } else {
        setShowNav(true); // scroll up → show
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      className="bg-[#7C19BC]/30 px-6 shadow-md z-50 fixed top-0 w-full backdrop-blur-md"
      animate={{ y: showNav ? 0 : -100 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3">
        {/* Logo */}
        <Link href="#home">
          <img src="/logo-blanc.svg" alt="Futur Media Logo" className="h-10 sm:h-16" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 font-semibold text-white">
          {navLinks.map(({ label, href, highlight }) => (
            <motion.a
              key={label}
              href={href}
              className={`hover:text-[#ff2aad] transition ${
                highlight ? "text-[#ff2aad]" : ""
              }`}
              whileHover={{ scale: 1.1 }}
            >
              {label}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.nav
          className="md:hidden bg-[#7C19BC]/20 mt-2 py-4 px-6 space-y-4 text-white font-semibold"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {navLinks.map(({ label, href, highlight }) => (
            <a
              key={label}
              href={href}
              className={`block ${highlight ? "text-[#ff2aad]" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Navbar;
