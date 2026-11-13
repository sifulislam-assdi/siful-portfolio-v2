"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, ExternalLink, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <>
      <footer className="bg-[#080D1A] border-t border-slate-800/80 text-slate-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-[#F8FAFC] tracking-wider">
                {lang === "en" ? "SIFUL ISLAM" : "সাইফুল ইসলাম"}
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                {lang === "en"
                  ? "Video Editor | Graphic Designer & Meta Marketer"
                  : "ভিডিও এডিটর | গ্রাফিক ডিজাইনার ও মেটা মার্কেটার"}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#home" className="hover:text-[#38BDF8] transition-colors">
                {lang === "en" ? "Home" : "হোম"}
              </a>
              <a href="#about" className="hover:text-[#38BDF8] transition-colors">
                {lang === "en" ? "About" : "আমার সম্পর্কে"}
              </a>
              <a href="#services" className="hover:text-[#38BDF8] transition-colors">
                {lang === "en" ? "Services" : "সেবাসমূহ"}
              </a>
              <a href="#portfolio" className="hover:text-[#38BDF8] transition-colors">
                {lang === "en" ? "Portfolio" : "পোর্টফোলিও"}
              </a>
              <a href="#contact" className="hover:text-[#38BDF8] transition-colors">
                {lang === "en" ? "Contact" : "যোগাযোগ"}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <motion.a
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.behance.net/siful_islam"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-lg bg-[#1E293B] text-slate-200 border border-slate-700 hover:border-[#38BDF8] hover:text-[#38BDF8] text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <span>Behance</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:sifulislam.assdi@gmail.com"
                aria-label="Email"
                className="p-2.5 rounded-lg bg-[#1E293B] text-slate-200 border border-slate-700 hover:border-[#38BDF8] hover:text-[#38BDF8] transition-colors"
              >
                <Mail className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800/60 text-center text-xs text-slate-500">
            © 2026{" "}
            {lang === "en"
              ? "SIFUL ISLAM. All rights reserved."
              : "সাইফুল ইসলাম। সর্বস্বত্ব সংরক্ষিত।"}
          </div>
        </div>
      </footer>

      {/* কোণায় ভাসমান WhatsApp বাটন */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 220 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        href="https://wa.me/8801518911027"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-[#25D366] text-[#0B1120] font-semibold text-sm shadow-[0_8px_25px_rgba(37,211,102,0.35)] hover:bg-[#2EE573] transition-colors"
      >
        <MessageCircle className="w-5 h-5 fill-[#0B1120]" />
        <span className="hidden sm:inline">
          {lang === "en" ? "WhatsApp" : "হোয়াটসঅ্যাপ"}
        </span>
      </motion.a>
    </>
  );
}