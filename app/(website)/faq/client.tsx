"use client"
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import FooterCta from "../components/FooterCta";
import { FAQData } from "../data/faq";

export default function FAQClient() {
  const [activeSection, setActiveSection] = useState("");

  return (
    <main className="bg-[#F2F2F2]">

      {/* HERO */}
      <section className="bg-[url('/inquiry/faq-bg.jpg')] bg-cover bg-center h-[445px]">
        <div className="cg-container flex max-md:items-center max-md:pt-20 h-full text-white text-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto max-w-4xl md:mt-48 h-auto"
          >
            <h1 className="md:text-[42px] text-3xl md:leading-15 font-bold">
              Frequently Asked Questions
            </h1>
            <p className="md:text-2xl text-xl mt-3">
              Find quick answers to common questions about our aircon installation,
              maintenance, and HVAC services. If you need more details, our team is always ready to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="cg-container pt-10 md:pt-20 mb-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {/* LEFT – TABLE OF CONTENTS */}
          <div className="md:col-span-3 col-span-12">
            <div className="w-full bg-[#F4F8FF] rounded-xl px-5 md:px-6 py-7 sticky top-34">
              <h5 className="text-lg font-bold">On this page</h5>

              {FAQData.map((item, idx) => {
                const id = "section" + idx;
                const isActive = activeSection === id;

                return (
                  <div
                    key={idx}
                    className={cn(
                      "py-3 flex items-start gap-1.5",
                      idx + 1 !== FAQData.length && "border-b",
                      isActive && "font-bold"
                    )}
                  >
                    {
                      isActive && <ArrowRightCircle className="w-4 h-4 text-primary mt-1" />
                    }
                    <div className="flex-1">
                      <Link
                        href={`#${id}`}
                        onClick={() => setActiveSection(id)}
                      >
                        {item.title}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT – CONTENT SECTIONS */}
          <div className="md:col-span-9 col-span-12 max-md:mt-5">
            {FAQData.map((item, idx) => (
              <div key={idx} id={`section${idx}`} className="scroll-mt-28">
                <h2 className="md:text-2xl text-xl font-bold mb-5">{item.title}</h2>

                <div className="grid grid-cols-1 gap-4 mb-12">
                  {item.items.map((sub) => (
                    <div
                      key={sub.title}
                      className="bg-white rounded-2xl px-5 md:px-8 py-6"
                    >
                      <h3 className="text-xl font-bold mb-4">{sub.title}</h3>
                      <p className="text-lg">{sub.paragraph}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <FooterCta />
    </main>
  );
}
