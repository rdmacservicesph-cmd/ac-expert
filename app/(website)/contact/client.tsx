"use client"
import { motion } from "framer-motion";
import Form from "./components/Form";

export default function ContactClient() {
  return <div>
    <section className="md:bg-[url('/contact/contact.jpg')] bg-[url('/mobile/contact.jpg')] bg-cover bg-center md:h-[540px] h-screen">
      <div className="cg-container flex max-md:items-end max-md:pb-10 h-full text-white">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl md:mt-60 mb-40 h-auto max-md:text-center"
        >
          <h1 className="md:text-[42px] text-3xl md:leading-15 font-bold">
            Let’s Talk Comfort
          </h1>
          <p className="md:text-2xl text-xl mt-3">
            Our team of experts is ready to answer your questions, provide guidance, and deliver the right cooling solutions for your home, business, or facility.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="cg-container mb-20">
      <div className="grid md:grid-cols-12 grid-cols-6 gap-6">
        <div className="col-span-6">
          <div className="md:mt-14 mt-4 bg-[#F4F4F4] px-10 py-8 rounded-2xl max-w-md">
            <h5 className="text-xl font-bold mb-4">Main Branch</h5>
            <h5 className="text-lg font-bold mb-2">Address</h5>
            <p className="text-xl">Building M 214 Oasis Hub B. Ortigas Extension, Sta Lucia, Pasig, Metro Manila, 1608 Philippines</p>
            <div className="border-t border-gray-300 w-full my-4"></div>
            <h5 className="text-lg font-bold">Telephone</h5>
            <p className="text-xl">+63 (02) 8296 0623</p>
            <div className="border-t border-gray-300 w-full my-4"></div>
            <h5 className="text-lg font-bold">Mobile</h5>
            <p className="text-xl">+63 939 981 5829</p>
          </div>
          <div className="mt-4 bg-[#F4F4F4] px-10 py-8 rounded-2xl max-w-md">
            <h5 className="text-xl font-bold mb-4">Pampanga Branch</h5>
            <h5 className="text-lg font-bold mb-2">Address</h5>
            <p className="text-xl">#148 Din Pepe Henson Ave., corner Magalang Ave., Angeles, 2009 Pampanga</p>
            <div className="border-t border-gray-300 w-full my-4"></div>
            <h5 className="text-lg font-bold">Telephone</h5>
            <p className="text-xl">+63 917 304 9431</p>
          </div>
        </div>
        <Form />
      </div>
    </section>

  </div>;
}
