import { Button } from "@/components/ui/button";

export default function FooterCta() {
  return <section className="bg-[url('/home/cta-bg.jpg')] bg-cover bg-center text-white">
    <div className="cg-container py-8 h-[420px] flex items-center">
      <div className="max-w-4xl">
        <h2 className="md:text-5xl text-3xl font-bold mb-5">Get in touch with our HVAC specialists</h2>
        <p className="text-lg md:text-xl mb-5">Get an advice for a no-cost, no-obligation consultation. We’ll take the time to understand<br className="max-md:hidden" /> your needs and deliver the right HVAC solution when you need it most.</p>
        <Button size="lg" variant="white">Talk to our specialist</Button>
      </div>
    </div>

  </section>;
}
