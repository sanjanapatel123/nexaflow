"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Platfrom", href: "#platfrom" },
  { label: "Solutions", href: "#solution" },
  { label: "Resources", href: "#resources" },
  { label: "Pricing", href: "#pricing" },
  { label: "Company", href: "#company" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-white">
      <nav className="mx-auto flex h-20 max-w-[1320px] items-center justify-between px-6 sm:px-8 lg:px-10">
        {/* Logo */}
        <Link
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="relative z-10 font-[var(--font-family)] text-[27px] font-bold leading-none tracking-[-0.8px] text-[var(--heading)]"
        >
          NEXAFLOW
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center md:flex">
          <div className="flex items-center gap-8 lg:gap-9">
            {/* Navigation Links */}
            <div className="flex -translate-x-20 items-center gap-8 lg:gap-9">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group relative py-3 font-[var(--font-family)] text-[16px] font-normal leading-5 text-[var(--gray-dark)] transition-colors duration-300 hover:text-[var(--heading)]"
                >
                  {item.label}

                  {/* Desktop underline */}
                  <span className="absolute bottom-[2px] left-0 h-[2px] w-0 rounded-full bg-[var(--purple)] transition-all duration-400 ease-out group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Desktop CTA — stays exactly where it is */}
            <Link
              href="#contact"
              className="group relative ml-2 flex h-12 w-[200px] items-center justify-center overflow-hidden rounded-full bg-[var(--heading)] font-[var(--font-family)] text-[15px] font-semibold text-[var(--white)] transition-all duration-300 hover:-translate-y-[1px] hover:shadow-lg"
            >
              <span className="relative z-10">Book a Demo</span>

              {/* Shine */}
              <span className="pointer-events-none absolute -left-[120%] top-0 h-full w-[65%] skew-x-[-20deg] bg-white/20 transition-all duration-700 ease-out group-hover:left-[130%]" />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="relative z-10 flex h-10 w-10 items-center justify-center bg-[var(--white)] md:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-5 bg-[var(--heading)] transition-transform duration-300 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`absolute left-0 top-2 h-px w-5 bg-[var(--heading)] transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />

            <span
              className={`absolute left-0 top-4 h-px w-5 bg-[var(--heading)] transition-transform duration-300 ${
                menuOpen ? "-translate-y-1 -rotate-50" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`origin-top overflow-hidden border-t border-[var(--border)] bg-[var(--white)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          menuOpen
            ? "max-h-[420px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6">
          <div className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="group relative w-fit py-4 pr-8 font-[var(--font-family)] text-base font-normal text-[var(--gray-dark)] transition-colors duration-300 hover:text-[var(--heading)]"
              >
                {item.label}
                {/* <span className="absolute bottom-[-1px] left-0 h-[2px] w-0 rounded-full bg-[var(--purple)] transition-all duration-400 ease-out group-hover:w-full" /> */}
                <span className="absolute bottom-[6px] left-0 h-[2px] w-0 rounded-full bg-[var(--purple)] transition-all duration-400 ease-out group-hover:w-full" />
              </Link>
            ))}

            {/* Mobile CTA */}
            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="group relative mt-5 flex h-12 w-full items-center justify-center overflow-hidden rounded-full bg-[var(--heading)] font-[var(--font-family)] text-[15px] font-semibold text-[var(--white)] transition-all duration-300 hover:shadow-lg"
            >
              <span className="relative z-10">Book a Demo</span>

              {/* Same shine animation */}
              <span className="pointer-events-none absolute -left-[120%] top-0 h-full w-[65%] skew-x-[-20deg] bg-white/20 transition-all duration-700 ease-out group-hover:left-[130%]" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
