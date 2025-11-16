"use client"
import WhyChooseUs from "@/app/(website)/components/WhyChooseUs";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Form from "./components/Form";

export default function Contact() {
  return <div className="bg-[#F2F2F2]">
    <section className="bg-[url('/inquiry/inquiry-bg.jpg')] bg-cover bg-center md:h-[720px] pt-10">
      <Link href="/">
        <Image src="/aircon-experts.svg" alt="Aircon Expert" width={206} height={100} className="mx-auto" />
      </Link>
      <div className="cg-container flex max-md:items-end max-md:pb-10 h-full text-white mt-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="md:mb-40 mb-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10"
        >
          <div>
            <div className="max-w-lg">
              <div className="max-md:text-center">
                <h1 className="md:text-[42px] text-3xl md:leading-15 font-bold">
                  Get in touch with<br /> our specialists
                </h1>
                <p className="md:text-2xl text-xl mt-3">
                  We make it easy to get the information you need. Whether you’re planning a new project, requesting a service quote, or exploring options for your home, office, or facility, our team is here to assist you.
                </p>
                <p className="md:text-2xl text-xl mt-3 mb-5">Simply fill out the inquiry form, and one of our specialists will get back to you with the answers and guidance you need.</p>
              </div>

              <div className="md:mt-14 mt-4 bg-white px-6 py-8 rounded-2xl max-w-md text-black shadow1">
                <h5 className="text-xl font-bold mb-2">What our specialists can do for you:</h5>
                <ul className="text-lg list-disc ml-5">
                  <li>One-on-one consultation with an experienced air conditioning expert.</li>
                  <li>Comprehensive assessment of your current system and setup.</li>
                  <li>Tailored advice on improving efficiency, continuity, and automation opportunities.</li>
                  <li>A clear discussion of your challenges and practical solutions to overcome them together.</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <Form />
          </div>
        </motion.div>
      </div>
    </section>

    <section className="md:mt-100 pb-14 md:pb-20 max-md:pt-5">
      <WhyChooseUs />
    </section>


  </div>;
}
