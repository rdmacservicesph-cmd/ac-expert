"use client";

import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import FooterCta from "./components/FooterCta";
import WhyChooseUs from "./components/WhyChooseUs";

const ourPromises = [
  {
    title: "Proven Experience",
    description: "Trusted by top companies, residences, and public institutions nationwide.",
    img: "pattern-1.jpg"
  },
  {
    title: "Energy-Efficient Solutions",
    description: "Lower your energy costs with innovative HVAC technology.",
    img: "pattern-2.jpg"
  },
  {
    title: "Certified Technicians",
    description: "Skilled experts ensuring reliable, high-quality results from start to finish.",
    img: "pattern-3.jpg"
  },
  {
    title: "Customer-First Approach",
    description: "Fast response, clear pricing, and zero hidden fees—just honest costs that fit your budget.",
    img: "pattern-4.jpg"
  },
]

// Animation variants for minimal scroll animations
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// Reusable animated section component
function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}


export default function HomeClient() {
  return (
    <div>
      <main>
        <section className="md:bg-[url('/home/hero-ae.jpg')] bg-[url('/mobile/home.jpg')] bg-center md:h-[700px] h-screen">
          <div className="cg-container flex md:items-center items-end max-md:pb-10 h-full">
            <motion.div
              className="md:mt-16 max-md:text-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="md:text-[46px] text-3xl md:leading-15 font-bold text-white">
                Delivering Reliable HVAC &<br className="max-md:hidden" /> Air Conditioning Services that <br className="max-md:hidden" /> drive quality levels across industries
              </h1>
              <p className="md:text-2xl text-xl text-white mt-3">
                Combining advanced technology and expert service to deliver<br className="max-md:hidden" /> sustainable, high-quality HVAC solutions across industries.
              </p>
              <div className="md:mt-10 mt-6 flex max-md:flex-col gap-3">
                <Link href="/services">
                  <Button size="lg">Learn more</Button>
                </Link>
                <Link href="/inquire">
                  <Button size="lg" variant="white">Inquire now</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <AnimatedSection>
          <section className="cg-container mt-14">
            <h5 className="text-xl text-gray-600 mb-3">What We Do</h5>
            <div className="grid grid-cols-12 gap-6">
              <div className="md:col-span-7 col-span-12">
                <h2 className="md:text-4xl text-3xl font-bold mb-4">Complete HVAC Solutions for <br className="max-md:hidden" /> Businesses and Homes</h2>
                <p className="md:text-lg md:mb-10 mb-6">We offer full-spectrum HVAC & aircon services — from design to installation, maintenance, and repair. Each service is tailored to your needs, whether it&apos;s a home in Manila, a school in BGC, or a large industrial facility in Laguna.</p>

                <div className="grid grid-cols-12 md:gap-8 gap-2 border-b md:py-5 py-4">
                  <div className="md:col-span-4 col-span-12">
                    <h4 className="text-primary font-bold text-xl">Project Planning & System Design</h4>
                  </div>
                  <div className="md:col-span-8 col-span-12">
                    <p className="text-lg">Our engineers work with you to design HVAC systems that match your building size, airflow needs, and budget. We use current best practices for energy efficiency and indoor air quality.</p>
                  </div>
                </div>
                <div className="grid grid-cols-12 md:gap-8 gap-2 border-b md:py-5 py-4">
                  <div className="md:col-span-4 col-span-12">
                    <h4 className="text-primary font-bold text-xl">Procurement & Installation</h4>
                  </div>
                  <div className="md:col-span-8 col-span-12">
                    <p className="text-lg">We bring in high-quality equipment from trusted brands, then install them with precision. Ensuring everything works right from the start — safety, cooling power, and durability.</p>
                  </div>
                </div>
                <div className="grid grid-cols-12 md:gap-8 gap-2 border-b md:py-5 py-4">
                  <div className="md:col-span-4 col-span-12">
                    <h4 className="text-primary font-bold text-xl">Ductwork Fabrication & Customization</h4>
                  </div>
                  <div className="md:col-span-8 col-span-12">
                    <p className="text-lg">Our engineers work with you to design HVAC systems that match your building size, airflow needs, and budget. We use current best practices for energy efficiency and indoor air quality.</p>
                  </div>
                </div>
                <div className="grid grid-cols-12 md:gap-8 gap-2 py-4">
                  <div className="md:col-span-4 col-span-12">
                    <h4 className="text-primary font-bold text-xl">Maintenance & Repair Services</h4>
                  </div>
                  <div className="md:col-span-8 col-span-12">
                    <p className="text-lg">Regular check-ups, cleaning, filter replacement, and tune-ups so your aircon lasts longer, works better, and avoids breakdowns. We also do emergency repairs — fast response when you need it.</p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-5 col-span-12 md:pl-10">
                <div className="md:bg-[url('/home/what-we-do.jpg')] md:bg-cover md:bg-bottom w-full h-full md:rounded-2xl  md:p-5 md:flex md:items-end">
                  <div className="md:bg-primary/80 bg-primary py-5 px-7 rounded-2xl">
                    <p className="text-lg text-white mb-3 italic">
                      We take pride in delivering top-notch work with skill and attention to detail in every project.
                    </p>
                    <Link href="/" className="text-lg text-white flex items-center gap-2 hover:underline">Learn more <ArrowRightCircle className="w-5 h-5" /></Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <section className="bg-[url('/home/why-us.jpg')] py-10 md:py-14 mt-10 md:mt-16">
            <div className="cg-container">
              <div className="bg-white p-7 rounded-2xl max-w-2xl">
                <h5 className="text-xl text-gray-600 mb-3">What Sets Us Apart</h5>
                <h2 className="md:text-4xl text-3xl font-bold mb-4">Broad Market Leader</h2>
                <p className="text-lg mb-4">We deliver reliable, energy-efficient air conditioning in the Philippines, combining global standards with local expertise. With precise installations, on-time projects, and 24/7 support, we&apos;re the partner you can trust for lasting comfort.</p>
                <Link href="/inquire">
                  <Button>Inquire now</Button>
                </Link>
              </div>
            </div>
          </section>
        </AnimatedSection>
        <WhyChooseUs />

        <AnimatedSection delay={0.3}>
          <section className="cg-container md:mt-16 mt-10 md:mb-16 mb-10">
            <div className="bg-[#F5F4F0] xl:p-14 md:p-10 p-6 rounded-2xl">
              <h5 className="text-xl text-gray-600 mb-3">Our Promise</h5>
              <div className="flex max-md:flex-col gap-4">
                <div className="xl:w-5xl md:w-3xl">
                  <h2 className="md:text-4xl text-3xl font-bold">Your Comfort,<br className="max-md:hidden" /> Our Priority</h2>
                </div>
                <div>
                  <p className="text-lg">We design efficient, customizable HVAC solutions built around your lifestyle and needs. Whether at home or at work, our team makes sure your environment is exactly how you want it, every season of the year.</p>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-4 md:gap-8 mt-6 md:mt-10">
                {
                  ourPromises.map((item, idx) => <div key={idx} className="md:col-span-6 col-span-12 px-5 py-7 md:py-12 rounded-2xl bg-cover bg-center" style={{ backgroundImage: `url('/home/${item.img}')` }}>
                    <div className="text-white text-center max-w-sm mx-auto">
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="md:text-lg">{item.description}</p>
                    </div>
                  </div>)
                }
              </div>
            </div>
          </section>
        </AnimatedSection>

        <FooterCta />
      </main>
    </div>
  );
}
