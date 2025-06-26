import { Button } from "@/components/ui/button";
import {
  Monitor,
  RefreshCw,
  BadgeDollarSign,
  Smartphone,
  PenTool,
  Layers,
  Grid,
  UserCheck,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

import PhotoCarousel from "../components/PhotoCarousel";
import { useState, useEffect, useRef } from "react";

const showcase = [
  {
    label: "One",
    img: "lovable-uploads/4.png",
    title: "Card One",
  },
  {
    label: "Two",
    img: "lovable-uploads/2.png",
    title: "Card Two",
  },
  {
    label: "Three",
    img: "lovable-uploads/3.png",
    title: "Card Three",
  },
  {
    label: "Four",
    img: "lovable-uploads/1.png",
    title: "Card Four",
  },
  {
    label: "Five",
    img: "lovable-uploads/5.png",
    title: "Card Five",
  },
  {
    label: "Six",
    img: "lovable-uploads/6.png",
    title: "Card Six",
  },
];

const features = [
  {
    Icon: Monitor,
    title: "Responsive Design",
    desc: "Crafting websites that adjust smoothly across devices for user experience on desktops, tablets and mobile.",
  },
  {
    Icon: RefreshCw,
    title: "Unlimited Revisions",
    desc: "We're open to unlimited revisions for sure, with full client support and best results!",
  },
  {
    Icon: BadgeDollarSign,
    title: "Best Designs ever",
    desc: "Designing in the best way, we'll make your business shine by our outstanding work with best quality ever!!",
  },
];

const expertise = [
  { Icon: Smartphone, label: "App Designs" },
  { Icon: PenTool, label: "UI/UX Designs" },
  { Icon: Layers, label: "Product Designs" },
  { Icon: Grid, label: "Framer Websites" },
  { Icon: UserCheck, label: "Dashboard Designs" },
  { Icon: BadgeDollarSign, label: "Logo Design" },
];

const pricing = [
  {
    label: "Redesign Landing Page",
    price: "$99",
    bg: "from-black via-black to-purple-700",
    features: [
      "Redesign UX/UI",
      "Responsiveness",
      "100% Client Support",
      "Fresh, Modern Look",
      "Unlimited Revisions",
      "Quality Service",
    ],
  },
  {
    label: "Landing Page Design",
    price: "$249",
    bg: "from-lime-400 to-green-400",
    standout: true,
    features: [
      "1 Landing page",
      "Expert UI/UX Design",
      "Fully Responsive",
      "Mobile, Tablet & Desktop View",
      "Dedicated Client Support",
      "1 Week Fast Delivery",
    ],
  },
  {
    label: "Custom UI/UX Design",
    price: "$499",
    bg: "from-black via-black to-purple-700",
    features: [
      "On-Demand Design",
      "Mobile, Tablet & Desktop View",
      "Dedicated Client Support",
      "Unlimited Revisions",
      "Quality Service",
    ],
  },
];

const Index = () => {
  const heroRef = useScrollReveal<HTMLDivElement>();

  const showcaseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = showcaseRef.current;
    if (!container) return;

    let scrollSpeed = 0.5;
    let animationFrameId: number;

    const autoScroll = () => {
      if (!container) return;
      container.scrollLeft += scrollSpeed;

      // Reset to start for infinite loop
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0;
      }

      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const featuresRef = useScrollReveal<HTMLDivElement>();
  const expertiseRef = useScrollReveal<HTMLDivElement>();
  const pricingRef = useScrollReveal<HTMLDivElement>();

  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleHeroButtonClick = () => {
    if (!buttonRef.current) return;
    buttonRef.current.classList.add("scale-95", "ring", "ring-green-500");
    setTimeout(() => {
      buttonRef.current?.classList.remove("scale-95", "ring", "ring-green-500");
    }, 150);
    window.open("https://calendly.com/singhchoudharychandan62/30min", "_blank");
  };

  // State for flipping expertise cards
  const [flippedCards, setFlippedCards] = useState<boolean[]>(
    Array(expertise.length).fill(false)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const index = Math.floor(Math.random() * expertise.length);
      setFlippedCards((prev) =>
        prev.map((val, i) => (i === index ? !val : val))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [expertise.length]);

  return (
    <div className="min-h-screen w-full text-white flex flex-col items-center pb-20 bg-[radial-gradient(#ffffff0d_1px,transparent_2px)] [background-size:20px_20px] bg-gray-950">
      {/* Top bar */}
      <div className="flex w-full max-w-8xl mt-6 px-6 justify-between items-center">
        <img src="lovable-uploads/logo.png" alt="Logo" className="h-10 transition-transform duration-500 hover:rotate-[180deg] hover:scale-150" />
        <div className="flex items-center gap-3">
          <a
            href="https://x.com/iam_csc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white transition-transform duration-200 hover:scale-105"
          >
            <img src="lovable-uploads/x.png" alt="X logo" className="w-6 h-6" />
            <span className="font-semibold text-base">iam_csc</span>
          </a>
        </div>
      </div>

      {/* Hero */}
      <div className="relative flex flex-col items-center mt-10 mb-8 px-4">
        {/* Faded glow behind the call-to-action button */}
        <div className="absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#5D17D8] opacity-50 blur-3xl rounded-full z-0"></div>

        {/* Content stays centered and above glow */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-8">
            Premium Website Design<br />
            <span className="text-white">
              Fast & Affordable
            </span>
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-white/80">
            We build websites that make your business shine
          </p>
          <Button
            className="rounded-full px-8 py-4 mb-10 font-bold text-lg bg-gradient-to-r from-green-400 to-lime-500 text-black shadow-xl hover:scale-105 duration-200 active:scale-95 ring-offset-2 ring-green-400 focus:outline-none focus:ring-2 transition-transform"
            onClick={() =>
              window.open("https://calendly.com/singhchoudharychandan62/30min", "_blank")
            }
          >
            Book a call
          </Button>
        </div>
      </div>


      {/* Showcase - Infinite Scroll */}
      <div ref={showcaseRef} className="relative overflow-hidden w-full mb-20">
        <div
          className="flex animate-scroll whitespace-nowrap"
          style={{ animationDuration: "60s" }}
        >
          {[...showcase, ...showcase].map((site, idx) => (
            <div
              key={idx}
              className="min-w-[350px] flex-shrink-0 bg-gradient-to-br from-[#161335]/70 to-[#34316e]/60 shadow-xl border-[2px] border-[#4332b6]/30 overflow-hidden backdrop-blur-lg"
            >
              <img
                src={site.img}
                alt={site.label}
                className="w-full h-[290px]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div ref={featuresRef} className="w-full flex flex-col items-center mb-7 px-4 opacity-0 transition-all duration-1000">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-center mb-10">Why Partner with us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-5xl">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-gradient-to-br from-[#22204c] to-[#4c4583] shadow-lg p-14 flex flex-col items-center text-center gap-3 transition-transform duration-300 hover:scale-105 hover:shadow-green-200 hover:shadow-md"
            >
              <item.Icon size={40} className="text-green-400 mb-1" />
              <div className="text-lg font-bold">{item.title}</div>
              <div className="text-white/85 text-sm">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 w-full flex flex-col items-center px-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-6">Landing Page Designs</h2>
      </div>

      <PhotoCarousel />

      {/* Expertise */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-5 max-w-5xl w-full">
        {expertise.map((ex, index) => (
          <div
            key={ex.label}
            className="relative [perspective:1000px] min-h-[110px]"
          >
            <div
              className={`transition-transform duration-700 w-full h-full [transform-style:preserve-3d] ${
                flippedCards[index] ? "[transform:rotateY(180deg)]" : ""
              }`}
            >
              {/* Front Face */}
              <div className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br from-[#181930] to-[#615c8d] shadow-md p-7 flex flex-col items-center justify-center">
                <ex.Icon size={34} className="mb-5 text-white/85" />
                <div className="font-bold text-lg text-white/95">{ex.label}</div>
              </div>

              {/* Back Face */}
              <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)] rounded-2xl bg-[#6d60ea] shadow-md p-7 flex flex-col items-center justify-center">
                <div className="text-white text-lg font-semibold">Back Side</div>
              </div>
            </div>
          </div>
        ))}
      </div>


      {/* Pricing */}
      <div ref={pricingRef} className="mt-10 w-full flex flex-col items-center px-4 opacity-0 transition-all duration-1000">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-12">Pick the right plan for you</h2>
        <div className="flex flex-col md:flex-row w-full max-w-5xl gap-6 justify-center">
          {pricing.map((card, idx) => (
            <div
              key={card.label}
              className={`flex flex-col rounded-3xl p-7 md:flex-1 bg-gradient-to-br ${card.standout ? "from-green-400 to-lime-400 text-black border-2 border-lime-400 shadow-2xl scale-105 z-10" : "from-[#221f34] to-[#4e4285] text-white border-2 border-[#3C326D]/50 shadow-xl"} transition-transform hover:scale-105 hover:shadow-green-400/40 cursor-pointer duration-300`}
              style={card.standout ? { marginTop: -20 } : {}}
              tabIndex={0}
            >
              <div className="font-bold text-xl mb-4">{card.label}</div>
              <div className="text-3xl md:text-4xl font-extrabold mb-6 mt-2">
                <span
                  className="block bg-[#2ecc40] text-black px-4 py-1 rounded-xl bg-gradient-to-r from-lime-400 to-green-400 text-lg font-bold w-max mx-auto"
                >
                  {card.price}
                </span>
              </div>
              <ul className="flex flex-col gap-2 pl-4 mb-2 text-base">
                {card.features.map((f, i) => (
                  <li
                    key={i}
                    className="relative before:content-[''] before:block before:absolute before:-left-4 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-green-400/80"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Founder */}
      <div className="mt-16 w-full flex flex-col items-center px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">Meet the Founder</h2>
        <p className="max-w-xl text-white/80 mb-8">
          I'm Chandan Singh Choudhary, passionate about building high-impact designs that make businesses stand out.
          With years of hands-on experience in UI/UX, I focus on creating clean, modern, and conversion-focused digital experiences.
        </p>
        <img
          src="lovable-uploads/IMG_5441.PNG"
          alt="Founder"
          className="w-40 h-40 rounded-full object-cover border-4 border-green-400 shadow-lg mb-6"
        />
        <p className="text-white font-semibold">Chandan Singh Choudhary</p>
        <p className="text-white/70 text-sm">Founder & Designer</p>
      </div>
    </div>
  );
};

export default Index;