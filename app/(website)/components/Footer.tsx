import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return <section className="bg-primary md:py-4 py-6">
    <div className="cg-container">
      <div className="flex max-md:flex-col items-center justify-between gap-3">
        <div className="flex max-md:flex-col items-center gap-5">
          <Image src="/aircon-experts-white.svg" alt="Aircon Experts" width={120} height={80} />
          <div className="text-white flex gap-5">
            <Link href="/about">About us</Link>
            <Link href="/services">Services</Link>
            <Link href="/clients">Clients</Link>
            <Link href="/contact">Contact us</Link>
            <Link href="/faq">FAQs</Link>
          </div>
        </div>
        <div className="text-white">
          Copyright © Aircon Experts | <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </div>
  </section>;
}
