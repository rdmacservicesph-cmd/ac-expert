import { siteMetadata } from "@/app/metadata/siteMetadata";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const metadata = siteMetadata.thankyou

export default function ThankYou() {
  return <div className="bg-[#F2F2F2]">
    <section className="bg-[url('/inquiry/inquiry-bg.jpg')] bg-cover bg-center md:min-h-screen pt-10 flex flex-col">
      <Link href="/">
        <Image src="/aircon-experts.svg" alt="Aircon Expert" width={206} height={100} className="mx-auto" />
      </Link>
      <div className="cg-container text-white mt-10 text-center  flex items-center flex-1">
        <div className="max-w-2xl mx-auto ">
          <h1 className="text-4xl font-bold mb-5">Thank You!</h1>
          <div className="text-lg">
            <p className="mb-5">We{"’"}ve received your inquiry and one of our specialists will be in touch with you soon. Our team is reviewing your request and will provide the guidance, quote, or information you need as quickly as possible.</p>
            <p>In the meantime, feel free to explore our services and learn more about how Aircon Experts can keep your home, office, or facility comfortable and efficient.</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <Link href="/services"><Button size="lg">Our Services</Button></Link>
            <Link href="/"><Button size="lg" variant="white">Continue to Homepage</Button></Link>
          </div>
        </div>
      </div>
    </section>
  </div>
}
