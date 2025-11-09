"use client"
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import FooterCta from "../components/FooterCta";

const ductworkSolutions = [
  {
    title: "Tailored Design",
    description: "Ducts customized to your building’s size, layout, and airflow needs."
  },
  {
    title: "In-House Fabrication",
    description: "Full control over quality and precision from start to finish."
  },
  {
    title: "Energy Efficiency",
    description: "Minimized air leakage to reduce wasted energy and lower costs."
  },
  {
    title: "Improved Air Quality",
    description: "Proper sealing and design that keep airflow clean and consistent."
  }
]

export default function Services() {
  return <main>
    <section className="md:bg-[url('/services/service-hero-ae.jpg')] bg-[url('/mobile/services.jpg')] bg-cover bg-center md:h-[700px] h-screen">
      <div className="cg-container flex md:items-center items-end max-md:pb-10 h-full max-md:text-white">
        <motion.div
          className="md:mt-32 max-md:text-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="md:text-[42px] text-3xl md:leading-15 font-bold">
            High-Performance Air Conditioning<br className="max-md:hidden" /> Solutions for Every Industry
          </h1>
          <p className="md:text-2xl text-xl mt-3 max-w-172">
            Keep your workplace comfortable and productive with our commercial air conditioning services. We’ve partnered with BPOs, banks, offices, schools, and retail spaces to factories, warehouses, and large-scale operations. To deliver customized cooling systems, energy-saving HVAC designs, and quick-response repairs.
          </p>
          <div className="md:mt-10 mt-6 flex max-md:flex-col gap-3">
            <Button size="lg">Inquire now</Button>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="cg-container mt-10 md:mt-20">
      <div className="grid grid-cols-12 gap-5 md:gap-10">
        <div className="col-span-12 md:col-span-7">
          <h2 className="md:text-4xl text-3xl font-bold mb-4">Project Planning & System Design</h2>
          <p className="text-lg mb-4">
            At Aircon Experts, we know that every successful HVAC system starts with careful planning. Our engineers work closely with you to understand your building’s layout, airflow needs, and budget, combining technical expertise with practical solutions to design systems that are efficient, reliable, and built to last.
          </p>
          <p className="text-lg">
            We follow industry best practices to ensure each design is cost-effective, energy-efficient, and promotes healthy indoor air quality. Whether for a small office, retail store, or large industrial facility, our tailored approach provides a clear roadmap for installation, operation, and long-term maintenance—helping you avoid costly errors and ensuring peak performance from day one.
          </p>
        </div>
        <div className="col-span-12 md:col-span-5">
          <div className="bg-[url('/services/planning.jpg')] rounded-2xl px-6 py-6 w-full h-96 flex items-end">
            <div className="bg-primary/75 p-5 rounded-2xl text-lg text-white">
              We follow industry best practices to ensure each design is cost-effective, & energy-efficient.
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="cg-container mt-10 md:mt-20">
      <div className="grid grid-cols-12 gap-5 md:gap-10">
        <div className="col-span-12 md:col-span-4">
          <div className="bg-[url('/services/procurement-2.jpg')] rounded-2xl px-6 py-6 w-full h-96 flex items-end">
            <div className="bg-primary/75 p-5 rounded-2xl text-lg text-white">
              Our trained technicians handle every step of the installation to performance testing and calibration.
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-8 max-md:order-first">
          <h2 className="md:text-4xl text-3xl font-bold mb-4">Procurement & Installation</h2>
          <p className="text-lg mb-4">
            At Aircon Experts, we believe quality cooling begins with quality equipment. That’s why we source only from trusted, industry-leading brands known for reliability, efficiency, and long-term performance. Each unit and component is carefully chosen to match your project needs, ensuring every installation is built to deliver comfort that lasts.
          </p>
          <p className="text-lg">
            Our trained technicians handle every step of the installation with precision—from site preparation and system setup to performance testing and calibration. Whether for homes, offices, or industrial facilities, we prioritize safety, cooling power, and efficiency, giving you confidence that your investment will provide dependable comfort for years to come.
          </p>
        </div>
      </div>
    </section>

    <section className="bg-[url('/services/ductwork.jpg')] bg-cover bg-center py-10 md:py-16 mt-10 md:mt-20">
      <div className="cg-container text-center text-white">
        <h2 className="md:text-4xl text-3xl font-bold mb-4">Ductwork Fabrication & Customization</h2>
        <div className="max-w-3xl mx-auto mb-10 md:mb-14">
          <p className="text-lg">At Aircon Experts, we provide custom-built ductwork to ensure your HVAC system performs at its best. Our in-house team designs and fabricates ducts with precision, giving you efficiency, durability, and comfort you can count on.</p>
        </div>

        <h3 className="text-2xl font-bold mb-5 md:mb-8">What you get with our ductwork solutions:</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-10 max-w-5xl mx-auto">
          {
            ductworkSolutions.map(item => <div key={item.title}>
              <h5 className="text-xl font-bold md:mb-2">{item.title}</h5>
              <p className="text-lg">{item.description}</p>
            </div>)
          }
        </div>
      </div>
    </section>

    <section className="cg-container mt-10 md:mt-20">
      <div className="grid grid-cols-12 gap-5 md:gap-10">
        <div className="col-span-12 md:col-span-7">
          <h2 className="md:text-4xl text-3xl font-bold mb-4">Maintenance & Repair Services</h2>
          <p className="text-lg mb-5 md:mb-6">
            Keep your air conditioning system running at its best with our expert maintenance and repair solutions. From routine check-ups, cleaning, and filter replacements to tune-ups and emergency repairs, Aircon Experts ensures your system lasts longer, performs better, and avoids costly breakdowns.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
            <div>
              <h5 className="text-lg font-bold mb-2">Why Maintenance Matters</h5>
              <p>Without proper care, an aircon system can lose up to 5% of its efficiency each year. Our tailored maintenance plans are designed to prevent this, keeping your system energy-efficient and cost-effective.</p>
            </div>
            <div>
              <h5 className="text-lg font-bold mb-2">Plans Built Around You</h5>
              <p>Every space is different—whether residential, commercial, or industrial. That’s why we create personalized maintenance schedules that match your needs, ensuring your air conditioning system is always operating at peak performance.</p>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5">
          <div className="bg-[url('/services/maintenance-repair.jpg')] rounded-2xl px-6 py-6 w-full h-96 flex items-end">
            <div className="bg-primary/75 p-5 rounded-2xl text-lg text-white">
              Aircon Experts ensures your system lasts longer, performs better, and avoids costly breakdowns.
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="cg-container mt-10 md:mt-20 mb-10 md:mb-20">
      <div className="grid grid-cols-12 gap-5 md:gap-10">
        <div className="col-span-12 md:col-span-5">
          <div className="bg-[url('/services/coating.jpg')] rounded-2xl px-6 py-6 w-full h-96 flex items-end">
            <div className="bg-primary/75 p-5 rounded-2xl text-lg text-white">
              Our protective coatings create a durable barrier that prevents damage and wear over time.
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-7 max-md:order-first">
          <h2 className="md:text-4xl text-3xl font-bold mb-4">Coating Solutions</h2>
          <p className="text-lg mb-5">
            At Aircon Experts, we enhance the life and performance of HVAC systems with advanced coating solutions. Constant exposure to moisture, dust, salt air, and pollutants can cause corrosion and reduce efficiency, but our protective coatings create a durable barrier that prevents damage and wear over time.
          </p>
          <p>These coatings not only safeguard your investment but also improve airflow efficiency, lower energy consumption, and reduce operating costs. Designed for residential, commercial, and industrial systems, our solutions deliver long-term protection, sustainable performance, and reliable comfort in any environment.</p>
        </div>
      </div>
    </section>

    <FooterCta />

  </main>;
}
