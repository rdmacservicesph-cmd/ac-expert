"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { title: "About us", url: "/about" },
  { title: "Services", url: "/services" },
  { title: "Clients", url: "/clients" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed w-full z-50 transition-all duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="cg-container mt-7">
        <div
          className={cn(
            "h-20 px-6 py-3 flex items-center rounded-2xl relative transition-all duration-300",
            isScrolled
              ? "md:backdrop-blur-md md:bg-white/60 border md:border-white/40 md:shadow-[0_4px_20px_rgba(0,0,0,0.15)] bg-white shadow-[0px_3px_6px_#00000031]"
              : "bg-white/90 shadow-[0px_3px_6px_#00000031]"
          )}
        >
          {/* Desktop links */}
          <div className="hidden lg:flex gap-5 flex-1">
            {links.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                className={cn(
                  "text-lg font-medium transition-colors",
                  pathname === link.url ? "text-[#0065E1]" : "text-black"
                )}
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <div className="flex-1">
            <Link href="/">
              <Image
                src="/aircon-experts.svg"
                alt="Aircon Experts"
                width={120}
                height={100}
                className="mx-auto"
              />
            </Link>

          </div>

          {/* Desktop right */}
          <div className="hidden lg:flex flex-1 gap-5 items-center justify-end">
            <Link
              href="/contact"
              className={cn(
                "text-lg font-medium transition-colors",
                pathname === "/contact" ? "text-[#0065E1]" : "text-black"
              )}
            >
              Contact us
            </Link>
            <Link href="/inquire"><Button>Inquire now</Button></Link>
          </div>

          {/* Hamburger button */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden ml-auto"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* ✅ Mobile drawer */}
          <AnimatePresence>
            {isOpen && (
              <>
                {/* Background overlay */}
                <motion.div
                  key="overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.4 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 bg-black lg:hidden z-50"
                  onClick={() => setIsOpen(false)}
                />

                {/* Drawer panel */}
                <motion.div
                  key="drawer"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "tween", duration: 0.25 }}
                  className="fixed top-0 right-0 h-full w-72 bg-white shadow-xl flex flex-col py-8 px-6 z-50 lg:hidden"
                >
                  <div className="flex justify-end mb-4">
                    <button onClick={() => setIsOpen(false)}>
                      <X size={28} />
                    </button>
                  </div>

                  <nav className="flex flex-col gap-6">
                    {links.map((link) => (
                      <Link
                        key={link.url}
                        href={link.url}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "text-lg font-medium transition-colors",
                          pathname === link.url ? "text-[#0065E1]" : "text-black"
                        )}
                      >
                        {link.title}
                      </Link>
                    ))}

                    <Link
                      href="/contact"
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-lg font-medium transition-colors",
                        pathname === "/contact" ? "text-[#0065E1]" : "text-black"
                      )}
                    >
                      Contact us
                    </Link>

                    <Button onClick={() => setIsOpen(false)}>
                      Inquire now
                    </Button>
                  </nav>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
