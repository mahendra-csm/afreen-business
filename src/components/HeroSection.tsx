import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Globe, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const trustBadges = [
  "Crossref", "DOI 10.65838", "CPD Accreditation", "Journal Citation Index",
  "MetaSpectra", "RMetaHub", "IntelliMindEd", "Google Scholar",
];

const LiveClock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const fmt = (n: number) => String(n).padStart(2, "0");
  return (
    <span className="font-mono text-lg sm:text-xl tracking-widest text-primary-foreground/90">
      {fmt(time.getHours())}:{fmt(time.getMinutes())}:{fmt(time.getSeconds())}
    </span>
  );
};

const marqueeText = "🔥 SEATS FILLING FAST — REGISTER NOW   •   🔥 SEATS FILLING FAST — REGISTER NOW   •   🔥 SEATS FILLING FAST — REGISTER NOW   •   ";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
    <img
      src={heroBg}
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 gradient-hero-overlay" />

    <div className="relative z-10 container mx-auto px-4 py-16 text-center">
      {/* Marquee urgency strip */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mx-auto max-w-md overflow-hidden rounded-full bg-gold/90 mb-8"
      >
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="text-accent-foreground font-bold text-xs sm:text-sm px-4 py-2 tracking-wide">
            {marqueeText}
          </span>
          <span className="text-accent-foreground font-bold text-xs sm:text-sm px-4 py-2 tracking-wide">
            {marqueeText}
          </span>
        </div>
      </motion.div>

      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight max-w-5xl mx-auto mb-6"
      >
        International Conference on Computer Science, Information Technology & Software Engineering
      </motion.h1>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap items-center justify-center gap-6 text-primary-foreground/90 text-sm sm:text-base mb-3"
      >
        <span className="flex items-center gap-2"><Calendar size={18} /> 16th & 17th April 2026</span>
        <span className="flex items-center gap-2"><Globe size={18} /> Online Conference</span>
        <span className="flex items-center gap-2"><Users size={18} /> Global Participation</span>
      </motion.div>

      {/* Live clock */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="mb-8"
      >
        <LiveClock />
      </motion.div>

      {/* Trust badges */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="flex flex-wrap items-center justify-center gap-3 mb-10"
      >
        {trustBadges.map((badge) => (
          <span
            key={badge}
            className="glass-card text-primary-foreground/90 text-xs font-medium px-3 py-1.5 rounded-full"
          >
            {badge}
          </span>
        ))}
      </motion.div>

      {/* CTA buttons */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex flex-wrap items-center justify-center gap-4 mb-6"
      >
        <a
          href="#register"
          className="gradient-sky text-primary-foreground font-bold text-base px-8 py-3.5 rounded-full shadow-sky-glow hover:scale-105 transition-transform"
        >
          Register Now
        </a>
        <a
          href="#call-for-papers"
          className="border-2 border-primary-foreground/40 text-primary-foreground font-bold text-base px-8 py-3.5 rounded-full hover:bg-primary-foreground/10 transition-colors"
        >
          Submit Abstract
        </a>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75 }}
        className="text-primary-foreground/70 text-sm font-medium"
      >
        ⏳ Limited Seats — Registration Closing Soon
      </motion.p>
    </div>
  </section>
);

export default HeroSection;
