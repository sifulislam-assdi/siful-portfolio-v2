"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);

  const navItems = [
    { nameEn: "Home", nameBn: "হোম", href: "#home" },
    { nameEn: "About", nameBn: "আমার সম্পর্কে", href: "#about" },
    { nameEn: "Services", nameBn: "সেবাসমূহ", href: "#services" },
  ];

  const portfolioSubItems = [
    { nameEn: "Video Editing", nameBn: "ভিডিও এডিটিং", href: "#portfolio" },
    { nameEn: "Graphic Design", nameBn: "গ্রাফিক ডিজাইন", href: "#portfolio" },
    { nameEn: "Meta Marketing", nameBn: "মেটা মার্কেটিং", href: "#portfolio" },
    { nameEn: "AI-assisted", nameBn: "AI-assisted কাজ", href: "#portfolio" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B1120]/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* ব্র্যান্ড নাম */}
        <a
          href="#home"
          className="text-xl sm:text-2xl font-bold tracking-wider text-[#F8FAFC] hover:text-[#38BDF8] transition-colors duration-300"
        >
          {lang === "en" ? "SIFUL ISLAM" : "সাইফুল ইসলাম"}
        </a>

        {/* ডেস্কটপ মেনু */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-[#38BDF8] transition-colors duration-300"
            >
              {lang === "en" ? item.nameEn : item.nameBn}
            </a>
          ))}

          {/* পোর্টফোলিও ড্রপডাউন */}
          <div
            className="relative"
            onMouseEnter={() => setPortfolioOpen(true)}
            onMouseLeave={() => setPortfolioOpen(false)}
          >
            <button
              onClick={() => setPortfolioOpen(!portfolioOpen)}
              className="flex items-center gap-1 hover:text-[#38BDF8] transition-colors duration-300 py-2 cursor-pointer"
            >
              <span>{lang === "en" ? "Portfolio" : "পোর্টফোলিও"}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  portfolioOpen ? "rotate-180 text-[#38BDF8]" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {portfolioOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute left-0 mt-1 w-52 rounded-xl bg-[#1E293B] border border-slate-700/80 shadow-xl py-2 overflow-hidden"
                >
                  {portfolioSubItems.map((sub) => (
                    <a
                      key={sub.nameEn}
                      href={sub.href}
                      onClick={() => setPortfolioOpen(false)}
                      className="block px-4 py-2.5 text-sm text-slate-200 hover:bg-[#38BDF8]/15 hover:text-[#38BDF8] transition-colors duration-200"
                    >
                      {lang === "en" ? sub.nameEn : sub.nameBn}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="#contact"
            className="hover:text-[#38BDF8] transition-colors duration-300"
          >
            {lang === "en" ? "Contact" : "যোগাযোগ"}
          </a>
        </nav>

        {/* ডান পাশের ভাষা বাটন ও Contact Me বাটন */}
        <div className="hidden md:flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium bg-[#1E293B] text-slate-200 border border-slate-700 hover:border-[#38BDF8] hover:text-[#38BDF8] transition-all duration-300 cursor-pointer"
          >
            <Globe className="w-4 h-4 text-[#38BDF8]" />
            <span>{lang === "en" ? "বাংলা" : "English"}</span>
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="#contact"
            className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-[#38BDF8] text-[#0B1120] hover:bg-[#7DD3FC] hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all duration-300"
          >
            {lang === "en" ? "Contact Me" : "যোগাযোগ করুন"}
          </motion.a>
        </div>

        {/* ফোনের জন্য ভাষা বাটন ও মেনু আইকন */}
        <div className="flex md:hidden items-center gap-2.5">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#1E293B] text-slate-200 border border-slate-700 active:scale-95 transition-all"
          >
            <Globe className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>{lang === "en" ? "বাংলা" : "English"}</span>
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
            className="p-2 rounded-lg bg-[#1E293B] text-slate-200 border border-slate-700 hover:text-[#38BDF8] transition-colors"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* মোবাইল ড্রপডাউন মেনু */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-[#1E293B] border-b border-slate-700/80 overflow-hidden"
          >
            <div className="px-5 py-5 flex flex-col gap-3 text-base font-medium text-slate-200">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-2 px-3 rounded-lg hover:bg-slate-800 hover:text-[#38BDF8] transition-colors"
                >
                  {lang === "en" ? item.nameEn : item.nameBn}
                </a>
              ))}

              <div className="py-1 px-3">
                <p className="text-xs uppercase tracking-wider text-slate-400 mb-2">
                  {lang === "en" ? "Portfolio" : "পোর্টফোলিও"}
                </p>
                <div className="pl-3 border-l-2 border-[#38BDF8]/40 flex flex-col gap-2">
                  {portfolioSubItems.map((sub) => (
                    <a
                      key={sub.nameEn}
                      href={sub.href}
                      onClick={() => setMobileOpen(false)}
                      className="py-1 text-sm text-slate-300 hover:text-[#38BDF8] transition-colors"
                    >
                      {lang === "en" ? sub.nameEn : sub.nameBn}
                    </a>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 text-center py-3 rounded-xl font-semibold bg-[#38BDF8] text-[#0B1120] hover:bg-[#7DD3FC] transition-colors"
              >
                {lang === "en" ? "Contact Me" : "যোগাযোগ করুন"}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}