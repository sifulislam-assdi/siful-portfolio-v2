"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Image as ImageIcon,
  BarChart3,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import siteData from "@/data/siteData.json";

interface PortfolioItem {
  id: string;
  category: string;
  featured: boolean;
  isSample: boolean;
  isAiAssisted: boolean;
  titleEn: string;
  titleBn: string;
  oneLinerEn: string;
  oneLinerBn: string;
  roleEn: string;
  roleBn: string;
  image?: string;
  youtubeId?: string;
  goalEn?: string;
  goalBn?: string;
  actionEn?: string;
  actionBn?: string;
  resultEn?: string;
  resultBn?: string;
}

export default function PortfolioSection() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("All");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const tabs = [
    { key: "All", labelEn: "All Work", labelBn: "সব কাজ" },
    { key: "Video Editing", labelEn: "Video Editing", labelBn: "ভিডিও এডিটিং" },
    {
      key: "Graphic Design",
      labelEn: "Graphic Design",
      labelBn: "গ্রাফিক ডিজাইন",
    },
    {
      key: "Meta Marketing",
      labelEn: "Meta Marketing",
      labelBn: "মেটা মার্কেটিং",
    },
    { key: "AI-assisted", labelEn: "AI-assisted", labelBn: "AI-assisted" },
  ];

  // Featured কাজগুলো আগে দেখাবে
  const sortedPortfolio = [...(siteData.portfolio as PortfolioItem[])].sort(
    (a, b) => Number(b.featured) - Number(a.featured)
  );

  const filteredItems =
    activeTab === "All"
      ? sortedPortfolio
      : sortedPortfolio.filter((item) => item.category === activeTab);

  return (
    <section id="portfolio" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#F8FAFC]">
            {lang === "en" ? "Featured Portfolio" : "নির্বাচিত পোর্টফোলিও"}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            {lang === "en"
              ? "Click any project card to watch the video, inspect the design, or read the Meta campaign case study."
              : "ভিডিও দেখতে, ডিজাইন বড় করে দেখতে বা মেটা মার্কেটিং কেস স্টাডি পড়তে যেকোনো কার্ডে ক্লিক করুন।"}
          </p>
        </div>

        {/* ক্যাটাগরি ট্যাব বাটনসমূহ */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors duration-300 cursor-pointer ${
                  isActive
                    ? "text-[#0B1120] font-semibold"
                    : "bg-[#1E293B] text-slate-300 border border-slate-700/80 hover:border-[#38BDF8] hover:text-[#38BDF8]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePortfolioTab"
                    transition={{ type: "spring", stiffness: 320, damping: 28 }}
                    className="absolute inset-0 rounded-xl bg-[#38BDF8]"
                  />
                )}
                <span className="relative z-10">
                  {lang === "en" ? tab.labelEn : tab.labelBn}
                </span>
              </button>
            );
          })}
        </div>

        {/* পোর্টফোলিও কার্ড গ্রিড */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const thumbnailSrc = item.image
                ? item.image
                : item.youtubeId
                ? `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`
                : null;

              return (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedItem(item)}
                  className="group cursor-pointer rounded-2xl bg-[#1E293B]/85 border border-slate-800 hover:border-[#38BDF8]/70 overflow-hidden shadow-lg hover:shadow-[0_12px_28px_rgba(56,189,248,0.14)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-video bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0B1120] flex items-center justify-center overflow-hidden border-b border-slate-800">
                      {thumbnailSrc ? (
                        <>
                          <img
                            src={thumbnailSrc}
                            alt={lang === "en" ? item.titleEn : item.titleBn}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          {item.youtubeId && (
                            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                              <div className="w-12 h-12 rounded-full bg-[#38BDF8]/90 text-[#0B1120] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                <Play className="w-5 h-5 fill-current ml-0.5" />
                              </div>
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="flex flex-col items-center text-slate-400 group-hover:text-[#38BDF8] transition-colors">
                          {item.category === "Meta Marketing" ? (
                            <BarChart3 className="w-10 h-10 text-[#38BDF8]" />
                          ) : (
                            <ImageIcon className="w-10 h-10 text-[#38BDF8]" />
                          )}
                          <span className="text-xs mt-2 font-medium">
                            {lang === "en"
                              ? "Click to Preview"
                              : "প্রিভিউ দেখতে ক্লিক করুন"}
                          </span>
                        </div>
                      )}

                      {/* ব্যাজসমূহ: Featured, Sample Project, AI-assisted */}
                      <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-1.5">
                        {item.featured && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-[#38BDF8] text-[#0B1120]">
                            <Star className="w-3 h-3 fill-current" />
                            Featured
                          </span>
                        )}
                        {item.isSample && (
                          <span className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-900/90 text-slate-200 border border-slate-700">
                            Sample Project
                          </span>
                        )}
                        {item.isAiAssisted && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-purple-500/20 text-purple-200 border border-purple-400/40">
                            <Sparkles className="w-3 h-3" />
                            AI-assisted
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="p-5">
                      <span className="text-xs font-medium text-[#38BDF8]">
                        {item.category}
                      </span>
                      <h3 className="mt-1 text-lg font-bold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors">
                        {lang === "en" ? item.titleEn : item.titleBn}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {lang === "en" ? item.oneLinerEn : item.oneLinerBn}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-2">
                    <p className="text-[11px] text-slate-400 border-t border-slate-800 pt-3">
                      <strong className="text-slate-300">
                        {lang === "en" ? "Role: " : "আমার ভূমিকা: "}
                      </strong>
                      {lang === "en" ? item.roleEn : item.roleBn}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* পোর্টফোলিও পপ-আপ প্রিভিউ কার্ড (ভিডিও / ইমেজ / কেস স্টাডি) */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 18 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl rounded-2xl bg-[#1E293B] border border-slate-700 p-5 sm:p-7 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedItem(null)}
                aria-label="Close Preview"
                className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-[#38BDF8] transition-colors cursor-pointer z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-wrap items-center gap-2 mb-3 pr-10">
                <span className="text-xs font-semibold text-[#38BDF8] px-2.5 py-1 rounded-md bg-[#38BDF8]/10">
                  {selectedItem.category}
                </span>
                {selectedItem.isSample && (
                  <span className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                    Sample Project
                  </span>
                )}
                {selectedItem.isAiAssisted && (
                  <span className="text-xs px-2.5 py-1 rounded-md bg-purple-500/20 text-purple-200 border border-purple-400/40">
                    AI-assisted
                  </span>
                )}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] mb-4">
                {lang === "en" ? selectedItem.titleEn : selectedItem.titleBn}
              </h3>

              {/* ভিডিও হলে ক্লিক করার পর ইউটিউব প্লেয়ার লোড হবে */}
              {selectedItem.youtubeId ? (
                <div className="aspect-video w-full rounded-xl overflow-hidden bg-black border border-slate-700 mb-5">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${selectedItem.youtubeId}?autoplay=1`}
                    title={selectedItem.titleEn}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : selectedItem.image ? (
                <div className="rounded-xl overflow-hidden bg-[#0B1120] border border-slate-700 mb-5">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.titleEn}
                    className="w-full max-h-[420px] object-contain mx-auto"
                  />
                </div>
              ) : null}

              {/* মেটা মার্কেটিং কেস স্টাডি হলে লক্ষ্য, কাজ ও ফলাফল দেখাবে */}
              {selectedItem.category === "Meta Marketing" &&
              selectedItem.goalEn ? (
                <div className="space-y-3 mb-5 bg-[#0B1120]/70 p-4 rounded-xl border border-slate-800">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
                      {lang === "en" ? "Goal" : "লক্ষ্য"}
                    </h4>
                    <p className="text-sm text-slate-200 mt-1">
                      {lang === "en" ? selectedItem.goalEn : selectedItem.goalBn}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-800">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
                      {lang === "en" ? "What I Did" : "আমি কী করেছি"}
                    </h4>
                    <p className="text-sm text-slate-200 mt-1">
                      {lang === "en"
                        ? selectedItem.actionEn
                        : selectedItem.actionBn}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-800">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
                      {lang === "en" ? "Outcome" : "ফলাফল"}
                    </h4>
                    <p className="text-sm text-slate-200 mt-1">
                      {lang === "en"
                        ? selectedItem.resultEn
                        : selectedItem.resultBn}
                    </p>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {lang === "en"
                    ? selectedItem.oneLinerEn
                    : selectedItem.oneLinerBn}
                </p>
              )}

              <div className="p-3.5 rounded-xl bg-[#0B1120] border border-slate-800 text-xs sm:text-sm text-slate-300">
                <strong className="text-[#38BDF8]">
                  {lang === "en" ? "My Role: " : "আমার ভূমিকা: "}
                </strong>
                {lang === "en" ? selectedItem.roleEn : selectedItem.roleBn}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
