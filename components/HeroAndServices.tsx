"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Video,
  Palette,
  Megaphone,
  Sparkles,
  FileSpreadsheet,
  ArrowRight,
  CheckCircle2,
  X,
  Play,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import siteData from "@/data/siteData.json";

export default function HeroAndServices() {
  const { lang } = useLanguage();
  const [selectedService, setSelectedService] = useState<
    (typeof siteData.services)[0] | null
  >(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "video":
        return <Video className="w-6 h-6 text-[#38BDF8]" />;
      case "palette":
        return <Palette className="w-6 h-6 text-[#38BDF8]" />;
      default:
        return <Megaphone className="w-6 h-6 text-[#38BDF8]" />;
    }
  };

  return (
    <>
      {/* HERO SECTION */}
      <section
        id="home"
        className="relative overflow-hidden py-16 sm:py-24 px-4 sm:px-6"
      >
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#38BDF8]/10 blur-[120px] rounded-full" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#38BDF8]/15 text-[#38BDF8] border border-[#38BDF8]/30 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
              {lang === "en" ? siteData.hero.badgeEn : siteData.hero.badgeBn}
            </span>

            <h1 className="text-3xl sm:text-5xl font-bold leading-tight text-[#F8FAFC]">
              {lang === "en"
                ? siteData.hero.headlineEn
                : siteData.hero.headlineBn}
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {lang === "en"
                ? siteData.hero.subheadlineEn
                : siteData.hero.subheadlineBn}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="#portfolio"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base bg-[#38BDF8] text-[#0B1120] hover:bg-[#7DD3FC] hover:shadow-[0_10px_28px_rgba(56,189,248,0.35)] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>{lang === "en" ? "View My Work" : "আমার কাজ দেখুন"}</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base bg-[#1E293B] text-[#F8FAFC] border border-slate-700 hover:border-[#38BDF8] hover:text-[#38BDF8] hover:bg-[#1E293B]/80 transition-all duration-300 text-center"
              >
                {lang === "en" ? "Let's Talk" : "কথা বলুন"}
              </motion.a>
            </div>
          </motion.div>

          {/* ডান পাশ: প্রোফাইল / শোরিল কার্ড */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-sm rounded-2xl bg-gradient-to-b from-[#1E293B] to-[#0F172A] border border-slate-700/80 p-6 shadow-2xl">
              <div className="aspect-[4/3] rounded-xl bg-[#0B1120] border border-slate-800 flex flex-col items-center justify-center overflow-hidden relative group">
                {siteData.hero.profileImage ? (
                  <img
                    src={siteData.hero.profileImage}
                    alt="Siful Islam"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center p-6">
                    <div className="w-16 h-16 mx-auto rounded-full bg-[#38BDF8]/15 border border-[#38BDF8]/40 flex items-center justify-center text-2xl font-bold text-[#38BDF8] mb-3">
                      SI
                    </div>
                    <p className="text-sm font-semibold text-slate-200">
                      {lang === "en" ? "SIFUL ISLAM" : "সাইফুল ইসলাম"}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      {lang === "en"
                        ? "Photo / Showreel Ready (Upload in Admin)"
                        : "প্রোফাইল ছবি / শোরিল (অ্যাডমিন থেকে যুক্ত হবে)"}
                    </p>
                  </div>
                )}

                <a
                  href="#portfolio"
                  className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-[#0B1120]/90 border border-slate-700 text-xs font-medium text-[#38BDF8] flex items-center gap-1.5 hover:bg-[#38BDF8] hover:text-[#0B1120] transition-colors"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{lang === "en" ? "Samples" : "নমুনা কাজ"}</span>
                </a>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                <div className="p-2.5 rounded-xl bg-[#0B1120]/70 border border-slate-800">
                  <p className="text-xs font-semibold text-[#38BDF8]">Video</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Premiere & AE
                  </p>
                </div>
                <div className="p-2.5 rounded-xl bg-[#0B1120]/70 border border-slate-800">
                  <p className="text-xs font-semibold text-[#38BDF8]">Design</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    PS, AI & Canva
                  </p>
                </div>
                <div className="p-2.5 rounded-xl bg-[#0B1120]/70 border border-slate-800">
                  <p className="text-xs font-semibold text-[#38BDF8]">Meta</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    FB & IG Ads
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#080D1A]/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-[#F8FAFC]">
              {lang === "en" ? "My Services" : "আমার সেবাসমূহ"}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400">
              {lang === "en"
                ? "Click on any service card to view detailed deliverables."
                : "বিস্তারিত জানতে যেকোনো সেবার কার্ডে ক্লিক করুন।"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteData.services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedService(service)}
                className="group cursor-pointer rounded-2xl bg-[#1E293B]/80 border border-slate-800 hover:border-[#38BDF8]/70 p-6 sm:p-7 transition-all duration-300 shadow-lg hover:shadow-[0_12px_30px_rgba(56,189,248,0.12)] flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#38BDF8]/15 border border-[#38BDF8]/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    {getIcon(service.icon)}
                  </div>
                  <h3 className="text-xl font-bold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors">
                    {lang === "en" ? service.titleEn : service.titleBn}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {lang === "en" ? service.shortEn : service.shortBn}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs font-semibold text-[#38BDF8]">
                  <span>
                    {lang === "en" ? "See What's Included" : "বিস্তারিত দেখুন"}
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {siteData.supportingServices.map((sup, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-[#1E293B]/45 border border-slate-800/90 p-5 flex items-start gap-4"
              >
                <div className="p-2.5 rounded-lg bg-[#38BDF8]/10 text-[#38BDF8] shrink-0 mt-0.5">
                  {idx === 0 ? (
                    <Sparkles className="w-5 h-5" />
                  ) : (
                    <FileSpreadsheet className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <h4 className="text-base font-semibold text-[#F8FAFC]">
                    {lang === "en" ? sup.titleEn : sup.titleBn}
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {lang === "en" ? sup.descEn : sup.descBn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* সার্ভিস ডিটেইলস পপ-আপ কার্ড */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-2xl bg-[#1E293B] border border-slate-700 p-6 sm:p-8 shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedService(null)}
                aria-label="Close"
                className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-[#38BDF8] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-[#38BDF8]/15 flex items-center justify-center">
                  {getIcon(selectedService.icon)}
                </div>
                <h3 className="text-2xl font-bold text-[#F8FAFC]">
                  {lang === "en"
                    ? selectedService.titleEn
                    : selectedService.titleBn}
                </h3>
              </div>

              <p className="text-sm text-slate-300 mb-5">
                {lang === "en"
                  ? selectedService.shortEn
                  : selectedService.shortBn}
              </p>

              <div className="space-y-3 mb-7">
                {(lang === "en"
                  ? selectedService.detailsEn
                  : selectedService.detailsBn
                ).map((point, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="block w-full text-center py-3 rounded-xl font-semibold text-sm bg-[#38BDF8] text-[#0B1120] hover:bg-[#7DD3FC] transition-colors"
              >
                {lang === "en"
                  ? "Request a Quote for This Service"
                  : "এই সেবার জন্য কোটেশন নিন"}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}