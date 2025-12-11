"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import FooterCta from "../components/FooterCta";
import { coreValues } from "../data/core-values";
import { customers } from "../data/customers";


export default function AboutUsClient() {
  return <div>
    <main>
      <section className="md:bg-[url('/about/about-hero.jpg')] bg-[url('/mobile/about.jpg')] bg-cover bg-center md:h-[700px] h-screen">
        <div className="cg-container flex md:items-center items-end max-md:pb-10 h-full">
          <motion.div
            className="md:mt-16 max-md:text-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="md:text-[46px] text-3xl md:leading-15 font-bold">
              Your Partner in World-Class<br className="max-md:hidden" /> Air Conditioning
            </h1>
            <p className="md:text-2xl text-xl mt-3 max-w-172">
              We specialize in HVAC design, installation, and maintenance, delivering efficient and reliable solutions for every need. Backed by years of expertise, our team ensures comfort and performance in every project—from small businesses to large industrial facilities.
            </p>
            <div className="md:mt-10 mt-6 flex max-md:flex-col gap-3">
              <Link href="/inquire">
                <Button size="lg">Inquire now</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="cg-container mt-10 md:mt-16">
        <div className="grid grid-cols-12 gap-5 md:gap-10">
          <div className="md:col-span-6 col-span-12">
            <div>
              <h5 className="text-xl text-gray-600 mb-3">Who We Are</h5>
              <h2 className="md:text-4xl text-3xl font-bold mb-4">We Believe in<br className="max-md:hidden" /> Sustainable Excellence</h2>
              <p className="text-lg">
                For us, sustainable excellence means more than just cooling—it’s about creating high-quality HVAC systems built for efficiency and long-term performance. We embrace eco-friendly practices and forward-looking technologies that reduce environmental impact. Just as importantly, we invest in lasting partnerships with our clients and uphold fair, respectful treatment of our team. At Aircon Experts, sustainability is about building systems, relationships, and trust that stand the test of time.
              </p>
            </div>
          </div>
          <div className="md:col-span-6 col-span-12">
            <Image src="/about/who-we-are.jpg" alt="Who We Are?" width={700} height={600} className="rounded-2xl" />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-5 md:gap-10 mt-10 md:mt-16">
          <div className="md:col-span-7 col-span-12">
            <Image src="/about/about-img.jpg" alt="Who We Are? 2" width={700} height={600} className="rounded-2xl" />
          </div>
          <div className="md:col-span-5 col-span-12 flex items-center max-md:order-first">
            <div>
              <h2 className="md:text-4xl text-3xl font-bold mb-4">Tailor-Made Solutions</h2>
              <p className="text-lg">
                At Aircon Experts, we combine experience and industry expertise to solve real-world challenges for our clients. By listening closely and understanding their specific needs, we design custom, sustainable air conditioning solutions that deliver long-term comfort, efficiency, and success.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-10 md:mt-16 gradiant-radiant">
        <div className="cg-container text-center py-10 md:py-14 text-white">
          <p className="text-lg">Why We{"’"}re the Preferred Choice</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">Trusted for conditioning success by<br className="max-md:hidden" /> our customers for over years</h2>

          <div className="mt-6 md:mt-10 flex flex-wrap md:gap-x-4 md:gap-y-6 gap-4 justify-center md:px-10">
            {
              customers.map(customer => <div key={customer.name} className="border px-6 md:px-10 py-2 rounded-full flex items-center justify-center bg-white">
                <Image src={"/about/" + customer.img} alt={customer.name} width={customer.width} height={60} />
              </div>)
            }
          </div>
        </div>
      </section>

      <section className="mt-10 md:mt-16">
        <div className="cg-container">
          <div className="bg-[url('/about/pattern-bg.jpg')] bg-cover rounded-2xl md:px-10 px-6 md:py-10 pt-6 pb-10">
            <div className="grid grid-cols-6 md:grid-cols-12 gap-4 md:gap-10">
              <div className="col-span-6">
                <Image src="/about/mission-vision.svg" alt="Mission Vision" width={700} height={577} />
              </div>
              <div className="col-span-6 text-white flex items-center max-md:text-center">
                <div>
                  <h5 className="text-xl md:mb-6 mb-4">What We Stand For</h5>
                  <h2 className="md:text-4xl text-3xl font-bold md:mb-4 mb-2">Mission</h2>
                  <p className="mt-4 text-lg">
                    Our company aims to humanize the air conditioning services industry by focusing not just on service excellence, but investing in people as well. We invest in our people and foster business relationships to deliver reliable, innovative, and energy-efficient air conditioning services through expert knowledge and cutting-edge solutions.
                  </p>

                  <h2 className="md:text-4xl text-3xl font-bold mb-4 md:mt-10 mt-6">Vision</h2>
                  <p className="md:mt-4 mt-2 text-lg">
                    Our company envisions to be the preferred air conditioning services provider in the Philippines by incorporating the latest trends in technological innovations, setting industry standards for quality and customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cg-container text-center py-10 md:py-16 md:mb-10">
        <h5 className="text-xl text-gray-600 mb-3">Our Core Values</h5>
        <h2 className="md:text-4xl text-3xl font-bold mb-6 md:mb-8">The Principles That Define Us</h2>
        <div className="grid lg:grid-cols-10 md:grid-cols-4 grid-cols-2 gap-4">
          {
            coreValues.map((coreValue) => <div key={coreValue.title} className="col-span-2 border rounded-2xl px-4 py-4">
              <Image src={"/about/" + coreValue.img} alt={coreValue.title} width={110} height={110} className="mx-auto mb-2" />
              <h5 className="text-xl font-bold mb-4">{coreValue.title}</h5>
              <p>We take pride in every project, delivering work built on skill and attention to detail.</p>
            </div>)
          }
        </div>
      </section>

      <FooterCta />
    </main>
  </div>;
}
