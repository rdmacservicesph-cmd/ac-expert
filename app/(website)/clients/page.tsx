"use client"
import { motion } from "framer-motion";
import FooterCta from "../components/FooterCta";
import WhyChooseUs from "../components/WhyChooseUs";
import { companies, companies2 } from "../data/companies";

export default function Clients() {
  return <main>
    <section className="md:bg-[url('/clients/clients-hero.jpg')] bg-[url('/mobile/clients.jpg')] bg-cover bg-center md:h-[700px] h-screen">
      <div className="cg-container flex max-md:items-end max-md:pb-10 h-full text-white text-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-2xl md:mt-44 h-auto"
        >
          <h1 className="md:text-[42px] text-3xl md:leading-15 font-bold">
            Trusted Aircon Partner for Offices and Businesses
          </h1>
          <p className="md:text-2xl text-xl mt-3">
            Our clients include some of the country’s most trusted names, and we bring the same professionalism to every project.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="mt-14 md:mt-20 cg-container">
      <h2 className="md:text-4xl text-3xl font-bold mb-10 text-center">BPO Companies & Other Offices</h2>
      {
        companies.map(company => <div key={company.name} className="bg-[#F4F4F4] mb-2 px-5 md:py-2 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-10">
            <div>{company.address}</div>
            <div>{company.name}</div>
            <div>{company.building}</div>
          </div>
        </div>)
      }

    </section>

    <section className="mt-14 md:mt-20 cg-container">
      <h2 className="md:text-4xl text-3xl font-bold mb-10 text-center">Public Institutionss</h2>
      {
        companies2.map(company => <div key={company.name} className="bg-[#F4F4F4] mb-2 px-5 md:py-2 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-10">
            <div>{company.address}</div>
            <div>{company.name}</div>
            <div>{company.building}</div>
          </div>
        </div>)
      }

    </section>

    <section className="mb-14 md:mb-20">
      <WhyChooseUs />
    </section>

    <FooterCta />
  </main>;
}
