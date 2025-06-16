import { Button } from "@/components/ui/button";
import { Monitor, RefreshCw, BadgeDollarSign, Smartphone, PenTool, Layers, Grid, UserCheck } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useRef } from "react";
import PhotoCarousel from "../components/PhotoCarousel";


const showcase = [
  {
    label: "AirNav",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    title: "Your Flight, Your Way",
  },
  {
    label: "Recon",
    img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80",
    title: "Your Roof, Our Responsibility",
  },
  {
    label: "Hobxd",
    img: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80",
    title: "NewYork Real Estate",
  },
  {
    label: "Cargob",
    img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
    title: "Delivering Excellence in Every Mile",
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
  // Refs for scroll-reveal
  const heroRef = useScrollReveal<HTMLDivElement>();
  const showcaseRef = useScrollReveal<HTMLDivElement>();
  const featuresRef = useScrollReveal<HTMLDivElement>();
  const expertiseRef = useScrollReveal<HTMLDivElement>();
  const pricingRef = useScrollReveal<HTMLDivElement>();

  // For button click animation
  const buttonRef = useRef<HTMLButtonElement>(null);
  const handleHeroButtonClick = () => {
    if (!buttonRef.current) return;
    buttonRef.current.classList.add("scale-95", "ring", "ring-green-500");
    setTimeout(() => {
      buttonRef.current?.classList.remove("scale-95", "ring", "ring-green-500");
    }, 150);
    // Open Calendly link
    window.open("https://calendly.com/singhchoudharychandan62/30min", "_blank");
  };

  return (
    <div className="min-h-screen w-full text-white flex flex-col items-center pb-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950">
      {/* Top bar */}
      <div className="flex w-full max-w-5xl mt-6 px-6 justify-between items-center">
        <img src="/lovable-uploads/logo.png" alt="Logo" className="h-10 transition-transform duration-500 hover:rotate-[180deg] hover:scale-150" />
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-white">
            <a
  href="https://x.com/iam_csc"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 text-white transition-transform duration-200 hover:scale-105"
>
  <img
    src="/lovable-uploads/x.png"
    alt="X logo"
    className="w-6 h-6"
  />
  <span className="font-semibold text-base">iam_csc</span>
</a>

  
</div>

        </div>
      </div>

      {/* Hero section */}
      <div
        ref={heroRef}
        className="flex flex-col items-center mt-10 mb-8 px-4 opacity-0 transition-all duration-1000"
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-center leading-tight mb-3" style={{ fontFamily: "inherit" }}>
          Premium Website Design<br />
          <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Fast & Affordable
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-center mb-7 text-white/80">We build websites that make your business shine</p>
        <Button
          ref={buttonRef}
          onClick={handleHeroButtonClick}
          className="rounded-full px-8 py-4 font-bold text-lg bg-gradient-to-r from-green-400 to-lime-500 text-black shadow-xl hover:scale-105 duration-200 active:scale-95 ring-offset-2 ring-green-400 focus:outline-none focus:ring-2 transition-transform"
        >
          Book a call
        </Button>
      </div>

      {/* Showcase section */}
      <div
        ref={showcaseRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12 px-4 w-full max-w-5xl opacity-0 transition-all duration-1000"
      >
        {showcase.map((site, idx) => (
          <div
            key={site.label}
            className="rounded-3xl bg-gradient-to-br from-[#161335]/70 to-[#34316e]/60 shadow-xl border-[2px] border-[#4332b6]/30 overflow-hidden flex flex-col min-h-[220px] backdrop-blur-lg group transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:z-10"
          >
            <img src={site.img} alt={site.label}
              className="w-full h-44 object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110"
            />
            {/* REMOVE info for first 4 cards: Only photo shown */}
          </div>
        ))}
      </div>

      {/* Why Partner with us */}
      <div
        ref={featuresRef}
        className="w-full flex flex-col items-center mb-7 px-4 opacity-0 transition-all duration-1000"
      >
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-6">Why Partner with us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl">
          {features.map((item, i) => (
            <div
              key={item.title}
              className="rounded-2xl bg-gradient-to-br from-[#22204c] to-[#4c4583] shadow-lg p-7 flex flex-col items-center text-center gap-3 transition-transform duration-300 hover:scale-105 hover:shadow-green-200 hover:shadow-md"
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
    
  
      {/* Our Expertise PHOTOS CAROUSEL */}
      <PhotoCarousel />
  
      {/* Our Expertise */}
      <div
        ref={expertiseRef}
        className="mt-8 w-full flex flex-col items-center px-4 mb-7 opacity-0 transition-all duration-1000"
      >
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-6">Our Expertise</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-5 max-w-5xl w-full">
          {expertise.map((ex, i) => (
            <div
              key={ex.label}
              className="rounded-2xl bg-gradient-to-br from-[#181930] to-[#615c8d] shadow-md p-7 flex flex-col items-center justify-center min-h-[110px] transition-transform duration-300 hover:scale-105 hover:bg-[#6d60ea]/80 hover:shadow-lg"
            >
              <ex.Icon size={34} className="mb-2 text-white/85" />
              <div className="font-bold text-lg text-white/95">{ex.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Cards */}
      <div
        ref={pricingRef}
        className="mt-10 w-full flex flex-col items-center px-4 opacity-0 transition-all duration-1000"
      >
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-12">Pick the right plan for you</h2>
        <div className="flex flex-col md:flex-row w-full max-w-5xl gap-6 justify-center">
          {pricing.map((card, idx) => (
            <div
              key={card.label}
              className={`flex flex-col rounded-3xl p-6 md:flex-1 bg-gradient-to-br ${card.standout ? "from-green-400 to-lime-400 text-black border-2 border-lime-400 shadow-2xl scale-105 z-10" : "from-[#221f34] to-[#4e4285] text-white border-2 border-[#3C326D]/50 shadow-xl"} transition-transform hover:scale-105 hover:shadow-green-400/40 cursor-pointer duration-300`}
              style={card.standout ? { marginTop: -20 } : {}}
              tabIndex={0}
            >
              <div className="font-bold text-xl mb-1">{card.label}</div>
              <div className="text-3xl md:text-4xl font-extrabold mb-4 mt-2">
                <span
                  className="block bg-[#2ecc40] text-black px-4 py-1 rounded-xl bg-gradient-to-r from-lime-400 to-green-400 text-lg font-bold w-max mx-auto"
                  style={{ background: card.standout ? undefined : "linear-gradient(to right, #28d764, #5f5fff)" }}
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
      {/* Meet the Founder Section */}
<div className="mt-16 w-full flex flex-col items-center px-4 text-center">
  <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">Meet the Founder</h2>
  <p className="max-w-xl text-white/80 mb-6">
    I'm Chandan Singh, passionate about building high-impact designs that make businesses stand out.
    With years of hands-on experience in UI/UX, I focus on creating clean, modern, and conversion-focused digital experiences.
  </p>
  <img
    src="/lovable-uploads/IMG_5441.PNG" // replace with your own photo if needed
    alt="Founder"
    className="w-32 h-32 rounded-full object-cover border-4 border-green-400 shadow-lg mb-4"
  />
  <p className="text-white font-semibold">Chandan Singh</p>
  <p className="text-white/70 text-sm">Founder & Designer</p>
</div>

    </div>
  );
};

export default Index;