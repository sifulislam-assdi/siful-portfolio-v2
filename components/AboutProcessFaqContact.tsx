"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Mail,
  MessageCircle,
  ExternalLink,
  Send,
  CheckCircle2,
  AlertCircle,
  Cpu,
  Layers,
  FileText,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import siteData from "@/data/siteData.json";

export default function AboutProcessFaqContact() {
  const { lang } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // নিচের কোটেশনের ভেতরে তোমার কপি করা Access Key-টি বসাও
  const WEB3FORMS_ACCESS_KEY = "f3b6c940-a68a-4014-b509-05cb18f1b355";

  const processSteps = [
    {
      num: "01",
      titleEn: "Discussion",
      titleBn: "আলোচনা",
      descEn: "We talk about your goal, target audience, style, and timeline.",
      descBn: "আপনার কাজের লক্ষ্য, দর্শক, পছন্দ এবং সময় নিয়ে বিস্তারিত আলোচনা।",
    },
    {
      num: "02",
      titleEn: "First Draft",
      titleBn: "খসড়া তৈরি",
      descEn:
        "I create the initial edit, design layout, or ad setup for your review.",
      descBn:
        "আপনার দেখার জন্য ভিডিও এডিট, ডিজাইন বা বিজ্ঞাপনের প্রথম খসড়া তৈরি।",
    },
    {
      num: "03",
      titleEn: "Revision",
      titleBn: "সংশোধন",
      descEn:
        "You share feedback and I refine the details until everything looks right.",
      descBn:
        "আপনার মতামত অনুযায়ী লেখা, রং বা দৃশ্যের প্রয়োজনীয় পরিবর্তন।",
    },
    {
      num: "04",
      titleEn: "Final Delivery",
      titleBn: "চূড়ান্ত ডেলিভারি",
      descEn:
        "High-resolution files or live campaign handover delivered on time.",
      descBn: "সময়মতো হাই-রেজোলিউশন ফাইল বা চালু বিজ্ঞাপন ক্যাম্পেইন হস্তান্তর।",
    },
  ];

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setSubmitStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: "New Inquiry from Siful Islam Portfolio",
      from_name: "Portfolio Website",
      name: formData.get("name"),
      contact: formData.get("contact"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus("success");
        form.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      {/* 5. ABOUT ME & SOFTWARE STACK */}
      <section
        id="about"
        className="py-16 sm:py-20 px-4 sm:px-6 bg-[#080D1A]/60"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-[#38BDF8]">
              {lang === "en" ? "About Me" : "আমার সম্পর্কে"}
            </span>
            <h2 className="mt-2 text-2xl sm:text-4xl font-bold text-[#F8FAFC]">
              {lang === "en"
                ? "Creative Visuals Backed by Clear Strategy"
                : "সৃজনশীল ভিজ্যুয়াল ও গোছানো মার্কেটিংয়ের সমন্বয়"}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              {lang === "en" ? siteData.about.storyEn : siteData.about.storyBn}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="https://www.behance.net/siful_islam"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-[#1E293B] text-[#F8FAFC] border border-slate-700 hover:border-[#38BDF8] hover:text-[#38BDF8] transition-all"
              >
                <span>
                  {lang === "en"
                    ? "View Behance Profile"
                    : "Behance প্রোফাইল দেখুন"}
                </span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

          {/* সফটওয়্যার ও টুলস বক্স */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-6 space-y-4"
          >
            <div className="p-5 rounded-2xl bg-[#1E293B]/75 border border-slate-800">
              <div className="flex items-center gap-2 text-sm font-bold text-[#F8FAFC] mb-3">
                <Layers className="w-4 h-4 text-[#38BDF8]" />
                <span>
                  {lang === "en"
                    ? "Video Editing & Graphic Design"
                    : "ভিডিও এডিটিং ও গ্রাফিক ডিজাইন সফটওয়্যার"}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Adobe Premiere Pro",
                  "Adobe After Effects",
                  "Adobe Photoshop",
                  "Adobe Illustrator",
                  "Canva",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#0B1120] text-slate-200 border border-slate-700/80"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#1E293B]/75 border border-slate-800">
              <div className="flex items-center gap-2 text-sm font-bold text-[#F8FAFC] mb-3">
                <FileText className="w-4 h-4 text-[#38BDF8]" />
                <span>
                  {lang === "en"
                    ? "Marketing, Office & Data Tools"
                    : "মার্কেটিং, অফিস ও ডেটা টুলস"}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Meta Ads Manager",
                  "Google Sheets",
                  "Google Docs",
                  "MS Excel",
                  "MS Word",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#0B1120] text-slate-200 border border-slate-700/80"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#1E293B]/75 border border-slate-800">
              <div className="flex items-center gap-2 text-sm font-bold text-[#F8FAFC] mb-3">
                <Cpu className="w-4 h-4 text-[#38BDF8]" />
                <span>
                  {lang === "en"
                    ? "AI & Productivity Tools"
                    : "AI ও প্রোডাক্টিভিটি টুলস"}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["ChatGPT", "Gemini", "Claude", "DeepSeek"].map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/30"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. WORK PROCESS (৪ ধাপ) */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-[#F8FAFC]">
              {lang === "en" ? "How I Work" : "আমার কাজের ৪টি সহজ ধাপ"}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-[#1E293B]/65 border border-slate-800 hover:border-[#38BDF8]/50 transition-all duration-300"
              >
                <span className="text-2xl font-bold text-[#38BDF8]">
                  {step.num}
                </span>
                <h3 className="mt-3 text-lg font-bold text-[#F8FAFC]">
                  {lang === "en" ? step.titleEn : step.titleBn}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {lang === "en" ? step.descEn : step.descBn}
                </p>
              </motion.div>
            ))}
          </div>

          {/* 8. PRICING / GET A QUOTE CTA */}
          <div className="mt-14 rounded-2xl bg-gradient-to-r from-[#1E293B] via-[#172554]/70 to-[#1E293B] border border-[#38BDF8]/30 p-7 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC]">
                {lang === "en"
                  ? "Need a Custom Package or Quick Quote?"
                  : "আপনার প্রজেক্টের জন্য কাস্টম প্যাকেজ বা কোটেশন চান?"}
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                {lang === "en"
                  ? "Tell me what you need—single video, monthly social media designs, or an ad campaign—and get a clear quote."
                  : "একটি ভিডিও, মাসিক সোশ্যাল মিডিয়া ডিজাইন বা বিজ্ঞাপন ক্যাম্পেইন—আপনার প্রয়োজন জানালেই আমি স্পষ্ট খরচ জানিয়ে দেব।"}
              </p>
            </div>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="#contact"
              className="shrink-0 px-7 py-3.5 rounded-xl font-semibold text-sm bg-[#38BDF8] text-[#0B1120] hover:bg-[#7DD3FC] shadow-[0_8px_24px_rgba(56,189,248,0.3)] transition-all"
            >
              {lang === "en" ? "Get a Quote" : "কোটেশন নিন"}
            </motion.a>
          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#080D1A]/60">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-4xl font-bold text-[#F8FAFC]">
              {lang === "en"
                ? "Frequently Asked Questions"
                : "সাধারণ কিছু প্রশ্ন ও উত্তর"}
            </h2>
          </div>

          <div className="space-y-3">
            {siteData.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-[#1E293B]/80 border border-slate-800 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#F8FAFC] hover:text-[#38BDF8] transition-colors cursor-pointer"
                  >
                    <span>{lang === "en" ? faq.qEn : faq.qBn}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#38BDF8] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-4 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3">
                          {lang === "en" ? faq.aEn : faq.aBn}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. CONTACT SECTION */}
      <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* বাম পাশ: সরাসরি যোগাযোগ */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#38BDF8]">
                {lang === "en" ? "Contact" : "যোগাযোগ"}
              </span>
              <h2 className="mt-2 text-2xl sm:text-4xl font-bold text-[#F8FAFC]">
                {lang === "en"
                  ? "Let's Start Your Project"
                  : "চলুন আপনার প্রজেক্ট শুরু করি"}
              </h2>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                {lang === "en"
                  ? "Message me directly on WhatsApp for the fastest reply, or send your details through the form."
                  : "দ্রুত উত্তরের জন্য সরাসরি WhatsApp-এ মেসেজ দিন, অথবা পাশের ফর্মটি পূরণ করে পাঠান।"}
              </p>
            </div>

            <div className="space-y-3">
              <a
                href="https://wa.me/8801518911027"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#1E293B] border border-slate-800 hover:border-[#25D366] transition-colors group"
              >
                <div className="p-3 rounded-lg bg-[#25D366]/15 text-[#25D366]">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">WhatsApp</p>
                  <p className="text-sm font-semibold text-[#F8FAFC] group-hover:text-[#25D366] transition-colors">
                    +880 1518-911027
                  </p>
                </div>
              </a>

              <a
                href="mailto:sifulislam.assdi@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#1E293B] border border-slate-800 hover:border-[#38BDF8] transition-colors group"
              >
                <div className="p-3 rounded-lg bg-[#38BDF8]/15 text-[#38BDF8]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Email</p>
                  <p className="text-sm font-semibold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors">
                    sifulislam.assdi@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://www.behance.net/siful_islam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#1E293B] border border-slate-800 hover:border-[#38BDF8] transition-colors group"
              >
                <div className="p-3 rounded-lg bg-[#38BDF8]/15 text-[#38BDF8]">
                  <ExternalLink className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Portfolio</p>
                  <p className="text-sm font-semibold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors">
                    behance.net/siful_islam
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* ডান পাশ: যোগাযোগ ফর্ম */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleFormSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-[#1E293B]/85 border border-slate-800 space-y-5 shadow-xl"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {lang === "en" ? "Your Name" : "আপনার নাম"}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder={
                      lang === "en" ? "Enter your name" : "নাম লিখুন"
                    }
                    className="w-full px-4 py-3 rounded-xl bg-[#0B1120] border border-slate-700 text-sm text-[#F8FAFC] focus:outline-none focus:border-[#38BDF8] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {lang === "en"
                      ? "Email or WhatsApp"
                      : "ইমেইল বা WhatsApp নম্বর"}
                  </label>
                  <input
                    type="text"
                    name="contact"
                    required
                    placeholder={
                      lang === "en"
                        ? "you@example.com / 017..."
                        : "ইমেইল বা নম্বর লিখুন"
                    }
                    className="w-full px-4 py-3 rounded-xl bg-[#0B1120] border border-slate-700 text-sm text-[#F8FAFC] focus:outline-none focus:border-[#38BDF8] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  {lang === "en" ? "Service Needed" : "কোন সেবাটি প্রয়োজন?"}
                </label>
                <select
                  name="service"
                  className="w-full px-4 py-3 rounded-xl bg-[#0B1120] border border-slate-700 text-sm text-[#F8FAFC] focus:outline-none focus:border-[#38BDF8] transition-colors"
                >
                  <option value="Video Editing">
                    {lang === "en" ? "Video Editing" : "ভিডিও এডিটিং"}
                  </option>
                  <option value="Graphic Design">
                    {lang === "en" ? "Graphic Design" : "গ্রাফিক ডিজাইন"}
                  </option>
                  <option value="Meta Marketing">
                    {lang === "en" ? "Meta Marketing" : "মেটা মার্কেটিং"}
                  </option>
                  <option value="AI-assisted">
                    {lang === "en"
                      ? "AI-assisted Content"
                      : "AI-assisted কনটেন্ট"}
                  </option>
                  <option value="Office / Data Support">
                    {lang === "en"
                      ? "Office / Data Support"
                      : "অফিস / ডেটা সাপোর্ট"}
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  {lang === "en" ? "Project Details" : "কাজের বিবরণ"}
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder={
                    lang === "en"
                      ? "Briefly describe your project..."
                      : "আপনার কাজ সম্পর্কে সংক্ষেপে লিখুন..."
                  }
                  className="w-full px-4 py-3 rounded-xl bg-[#0B1120] border border-slate-700 text-sm text-[#F8FAFC] focus:outline-none focus:border-[#38BDF8] transition-colors"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSending}
                className="w-full py-3.5 rounded-xl font-semibold text-sm bg-[#38BDF8] text-[#0B1120] hover:bg-[#7DD3FC] disabled:opacity-60 hover:shadow-[0_8px_24px_rgba(56,189,248,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>
                  {isSending
                    ? lang === "en"
                      ? "Sending..."
                      : "পাঠানো হচ্ছে..."
                    : lang === "en"
                    ? "Send Message"
                    : "মেসেজ পাঠান"}
                </span>
              </motion.button>

              {submitStatus === "success" && (
                <div className="flex items-center gap-2 p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-xs sm:text-sm text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>
                    {lang === "en"
                      ? "Thank you! Your message has been sent directly to my email."
                      : "ধন্যবাদ! আপনার মেসেজটি সরাসরি আমার ইমেইলে পাঠানো হয়েছে।"}
                  </span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="flex items-center gap-2 p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/40 text-xs sm:text-sm text-rose-300">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>
                    {lang === "en"
                      ? "Something went wrong. Please message me directly on WhatsApp!"
                      : "মেসেজ পাঠাতে সমস্যা হয়েছে। অনুগ্রহ করে সরাসরি WhatsApp-এ মেসেজ দিন!"}
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}