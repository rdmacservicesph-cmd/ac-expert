"use client"
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import FooterCta from "../components/FooterCta";

const items = [
  "Information We Collect",
  // "How We Use Your Information",
  "Data Protection & Security",
  "Cookies & Website Tracking",
  "Third-Party Links",
  "Your Rights",
  "Contact Us",
]


export default function PrivacyPolicyClient() {
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
            className="mx-auto max-w-5xl md:mt-48 h-auto"
          >
            <h1 className="md:text-[42px] text-3xl md:leading-15 font-bold">
              Privacy Policy
            </h1>
            <p className="md:text-2xl text-xl mt-3">
              We value your privacy and are committed to protecting your personal information. This explains how we collect, use, and safeguard the data you provide when using our website and services.
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

              {items.map((item, idx) => {
                const id = "section" + idx;
                const isActive = activeSection === id;

                return (
                  <div
                    key={idx}
                    className={cn(
                      "py-3 flex items-start gap-1.5",
                      idx + 1 !== items.length && "border-b",
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
                        {item}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT – CONTENT SECTIONS */}
          <div className="md:col-span-9 col-span-12 max-md:mt-5">
            <div id={`section0`} className="scroll-mt-28">
              <h2 className="md:text-2xl text-xl font-bold mb-5">Information We Collect</h2>
              <div className="grid grid-cols-1 gap-4 mb-12">
                <div
                  className="bg-white rounded-2xl px-5 md:px-8 py-6 text-lg"
                >
                  <p className="mb-5">
                    We may collect certain non-personal information, such as your domain name, IP address, browser type, operating system, and the pages you visit on our website. This data does not personally identify you but helps us understand how visitors use our site and improve overall user experience.
                  </p>
                  <p className="mb-5">If you contact us through our website or about our services, we may also collect the information you choose to share with us. When you submit an inquiry or interact with our forms, the personal information we may collect includes:</p>
                  <ul className="list-disc ml-5">
                    <li>Your name, email address, and phone number</li>
                    <li>Company details (if applicable)</li>
                    <li>Project information, location, or service requirements</li>
                    <li>Any additional information you provide through our forms or communications</li>
                  </ul>
                </div>
              </div>
            </div>
            <div id={`section1`} className="scroll-mt-28">
              <h2 className="md:text-2xl text-xl font-bold mb-5">Data Protection & Security</h2>
              <div className="grid grid-cols-1 gap-4 mb-12">
                <div
                  className="bg-white rounded-2xl px-5 md:px-8 py-6 text-lg"
                >
                  <p >
                    We take reasonable steps to protect your personal information from unauthorized access, use, or disclosure. While no online system is 100% secure, we implement security measures to safeguard your data to the best of our ability.
                  </p>
                </div>
              </div>
            </div>
            <div id={`section2`} className="scroll-mt-28">
              <h2 className="md:text-2xl text-xl font-bold mb-5">Cookies & Website Tracking</h2>
              <div className="grid grid-cols-1 gap-4 mb-12">
                <div
                  className="bg-white rounded-2xl px-5 md:px-8 py-6 text-lg"
                >
                  <p className="mb-5">
                    Our website uses cookies to improve your browsing experience and make it easier to return to our site. Cookies help us recognize repeat visitors, save time on logins, and understand which content is most useful to you. They also allow us to analyze site traffic and tailor the experience to your interests.
                  </p>
                  <p>These cookies do not contain any personally identifiable information. You may choose to disable cookies in your browser settings at any time, but please note that some parts of the site may not function properly without them.</p>
                </div>
              </div>
            </div>

            <div id={`section3`} className="scroll-mt-28">
              <h2 className="md:text-2xl text-xl font-bold mb-5">Third-Party Links</h2>
              <div className="grid grid-cols-1 gap-4 mb-12">
                <div
                  className="bg-white rounded-2xl px-5 md:px-8 py-6 text-lg"
                >
                  <p >
                    Our website may contain links to external websites. Please note that we are not responsible for the privacy practices or content of third-party sites.</p>
                </div>
              </div>
            </div>

            <div id={`section4`} className="scroll-mt-28">
              <h2 className="md:text-2xl text-xl font-bold mb-5">Your Rights</h2>
              <div className="grid grid-cols-1 gap-4 mb-12">
                <div
                  className="bg-white rounded-2xl px-5 md:px-8 py-6 text-lg"
                >
                  <p >
                    You have the right to access, update, or request the deletion of your personal information. To do so, please contact us using the details below.
                  </p>
                </div>
              </div>
            </div>

            <div id={`section5`} className="scroll-mt-28">
              <h2 className="md:text-2xl text-xl font-bold mb-5">Contact Us</h2>
              <div className="grid grid-cols-1 gap-4 mb-12">
                <div
                  className="bg-white rounded-2xl px-5 md:px-8 py-6 text-lg"
                >
                  <p className="mb-5">
                    If you have questions about this Privacy Policy or how your information is handled, you may reach us at:
                  </p>
                  <div className="grid grid-cols-11 md:gap-6 gap-5">
                    <div className="md:col-span-5 col-span-10">
                      <h6 className="font-bold">Address</h6>
                      <p>Building M 214 Oasis Hub B. Ortigas Extension, Sta Lucia, Pasig, Metro Manila, 1608 Philippines</p>
                    </div>
                    <div className="md:col-span-3 col-span-10">
                      <h6 className="font-bold">Telephone</h6>
                      <p>+63 (02) 8296 0623</p>
                    </div>
                    <div className="md:col-span-3 col-span-10">
                      <h6 className="font-bold">Mobile</h6>
                      <p>+63 939 981 5829</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <FooterCta />
    </main>
  );
}
