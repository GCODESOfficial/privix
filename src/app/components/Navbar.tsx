/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";

type NavLink = {
  text?: string;
  url: string;
  image?: string;
  alt?: string;
  scrollToId?: string; // for scroll-into-view
};

type NavItem = {
  label: string;
  links: NavLink[];
};

const navItems: NavItem[] = [
  {
    label: "About",
    links: [
      { text: "Team", url: "/Team" },
      { text: "Tokenomics", url: "/", scrollToId: "tokenomics" },
      { text: "Roadmap", url: "/", scrollToId: "roadmap" },
      { text: "KYC Certificate", url: "https://projects.assuredefi.com/project/privix" },
    ],
  },
  {
    label: "Ecosystem",
    links: [
      { text: "Nexar", url: "https://nexar.privix.co/" },
      { text: "Pulsar", url: "https://pulsar.privix.co/" },
      { text: "Xfera", url: "https://xfera.privix.co/" },
      { text: "Privymail", url: "https://privymail.privix.co/" },
      { text: "Track", url: "https://track.privix.co/" },
      { text: "Pass", url: "https://pass.privix.co/" },
    ],
  },
  {
    label: "Resources",
    links: [
      { text: "Documentation", url: "https://privix.gitbook.io/docs" },
      { text: "Brand Kits", url: "https://www.figma.com/design/nlQ0B49NrysmmZOpqlDoUY/%F0%9F%9F%A6--Privix---Brand-Identity?node-id=0-1&t=6uEoVnEv6Qndzzpn-1" },
      { text: "Github", url: "https://github.com/PrivixAI-labs/Privix-node" },
      { text: "Pitch deck", url: "/pitchdeck" },
    ],
  },
  {
    label: "Explorer",
    links: [
      { text: "Mainnet", url: "https://privixscan.io/" },
      { text: "Testnet", url: "https://testnet.privixscan.io/" },
      { text: "Privix Faucet", url: "https://faucet.privixchain.xyz/" },
    ],
  },
  {
    label: "Socials",
    links: [
      {
        image: "/X navbar.svg",
        alt: "Twitter",
        url: "https://x.com/privixtoken",
      },
      {
        image: "/telegram navbar.svg",
        alt: "Telegram",
        url: "https://t.me/Privix_official",
      },
    ],
  },
];

const Navbar = () => {
  const [dropdown, setDropdown] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  const handleClick = (e: React.MouseEvent, link: NavLink) => {
    if (link.scrollToId) {
      e.preventDefault();
      if (window.location.pathname === "/") {
        const el = document.getElementById(link.scrollToId);
        el?.scrollIntoView({ behavior: "smooth" });
      } else {
        // Fix: router.push returns void, not a promise
        router.push("/");
        setTimeout(() => {
          const el = document.getElementById(link.scrollToId!);
          el?.scrollIntoView({ behavior: "smooth" });
        }, 500); // Give time for homepage to load
      }
    }
  };

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-20 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center max-w-20 md:w-auto">
          <img
            src="/images/Logo.svg"
            alt="Overlay"
            className="pointer-events-none"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
          />
        </Link>

        <div className="flex justify-center items-center md:gap-20 gap-5">
          <ul className="hidden md:flex gap-8 text-sm font-bold">
            {navItems.map((nav, i) => (
              <li
                key={nav.label}
                className="relative"
                onMouseEnter={() => setDropdown(i)}
                onMouseLeave={() => setDropdown(null)}
              >
                <button className="flex items-center gap-1 hover:text-blue-600 transition">
                  {nav.label}
                  <ChevronDownIcon className="w-4 h-4" />
                </button>

                <AnimatePresence>
                  {dropdown === i && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="absolute text-[#58595D] top-full mt-2 bg-gradient-to-b from-[#FFFFFF] to-[#F4F7FF] transition shadow-md rounded-md px-2 py-4 w-[148px] max-h-[241px] z-20"
                    >
                      {nav.label === "Socials" ? (
                        <div className="grid grid-cols-2">
                          {nav.links.map((link, idx) => (
                            <a
                              key={idx}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex justify-center"
                            >
                              <img
                                src={link.image!}
                                alt={link.alt!}
                                className="w-4 h-4 hover:scale-110 transition"
                              />
                            </a>
                          ))}
                        </div>
                      ) : (
                        nav.links.map((link, idx) => (
                          <a
                            key={idx}
                            href={link.url}
                            onClick={(e) => handleClick(e, link)}
                            className="block px-3 py-1 text-sm hover:bg-gray-100 rounded"
                            target={
                              link.url.startsWith("http") ? "_blank" : undefined
                            }
                            rel={
                              link.url.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                          >
                            {link.text}
                          </a>
                        ))
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          <Link href="https://app.uniswap.org/#/swap?&chain=mainnet&use=v2&outputCurrency=0xaFB942E2A12aC0861Ad81b5c37682f588912c1d9">
            <button className="bg-gradient-to-b from-[#2950FF] to-[#8AADFF] transition border-[#C4CBEC] border text-white px-4 py-2 rounded-full text-xs md:text-sm font-medium hover:from-[#000C17] hover:to-[#000C17] cursor-pointer ">
              Buy $PRIVIX
            </button>
          </Link>

          <div className="md:hidden text-[#2950FF] font-bold font-[Montserrat-Bold]">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? (
                <XMarkIcon className="w-8 h-8" />
              ) : (
                <Bars3Icon className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white shadow-inner overflow-hidden"
          >
            <ul className="flex flex-col px-9 py-6 space-y-4">
            <Link href="/">
            <div className="rounded-lg p-2 bg-gradient-to-t from-[#B0C6F8] to-[#FFFFFF] transition">
            Home
            </div>
                 
              </Link>
              {navItems.map((nav) => (
                <li key={nav.label}>
                  <details className="group rounded-lg p-2 bg-gradient-to-t from-[#B0C6F8] to-[#FFFFFF] transition">
                    <summary className="flex justify-between items-center cursor-pointer text-gray-800">
                      {nav.label}
                      <ChevronDownIcon className="w-4 h-4 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="mt-2 space-y-1">
                      {nav.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          onClick={(e) => {
                            setMobileOpen(false);
                            handleClick(e, link);
                          }}
                          className="block text-sm text-gray-600 hover:text-blue-600"
                          target={
                            link.url.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            link.url.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          {link.text || link.alt}
                        </a>
                      ))}
                    </div>
                  </details>
                </li>
              ))}
              <li>
                <Link href="https://app.uniswap.org/#/swap?&chain=mainnet&use=v2&outputCurrency=0xaFB942E2A12aC0861Ad81b5c37682f588912c1d9">
                  <button className="w-full bg-gradient-to-b from-[#2950FF] to-[#8AADFF] transition border-[#C4CBEC] border text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-10 ">
                    Buy $PRIVIX
                  </button>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;