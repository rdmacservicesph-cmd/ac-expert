import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { partners } from "../data/partners";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

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

export default function WhyChooseUs() {
  return <AnimatedSection delay={0.2}>
    <section className="cg-container mt-10 md:mt-16 text-center">
      <h5 className="text-xl text-gray-600 mb-3">Why Choose Us</h5>
      <h2 className="md:text-4xl text-3xl font-bold mb-4">Trusted by Leading Aircon Brands</h2>
      <p className="text-lg">
        Our portfolio of partner brands gives you the confidence that your system<br className="max-md:hidden" /> is built to last, energy-efficient, and backed by proven technology.
      </p>

      <div className="mt-6 flex flex-wrap md:gap-x-4 md:gap-y-6 gap-4 justify-center md:px-10">
        {
          partners.map(partner => <div key={partner.name} className="border px-6 py-3 rounded-4xl flex items-center justify-center">
            <Image src={"/partner-logos/" + partner.img} alt={partner.name} width={140} height={60} />
          </div>)
        }
      </div>
    </section>
  </AnimatedSection>
}
