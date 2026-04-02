import { motion } from "framer-motion";
import { Award, Users, Trophy, BookOpen, FileCheck, Globe } from "lucide-react";
import certImage from "@/assets/certificate-sample.png";
import certImage2 from "@/assets/certificate-sample-2.png";

const benefits = [
  { icon: FileCheck, title: "Presentation Certificate", desc: "Receive an official certificate for presenting your research." },
  { icon: Award, title: "Participation Certificate", desc: "All attendees receive a globally recognized participation certificate." },
  { icon: Trophy, title: "Best Paper Award", desc: "Top research papers receive excellence awards." },
  { icon: BookOpen, title: "Conference Proceedings", desc: "Accepted abstracts included in official proceedings." },
  { icon: Globe, title: "DOI Publication", desc: "All accepted papers receive DOI indexing." },
  { icon: Users, title: "Global Recognition", desc: "Enhance your academic and professional profile." },
];

const trustLogos = [
  { name: "Crossref", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Crossref_logo.svg/200px-Crossref_logo.svg.png" },
  { name: "DOI", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/DOI_logo.svg/200px-DOI_logo.svg.png" },
  { name: "Google Scholar", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Scholar_logo.svg/200px-Google_Scholar_logo.svg.png" },
];

const CertificationBenefits = () => (
  <section id="certification" className="py-24" style={{ background: "linear-gradient(180deg, hsl(var(--light-gray)) 0%, hsl(var(--background)) 100%)" }}>
    <div className="container mx-auto px-4 max-w-6xl">
      {/* Header */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-[42px] font-heading font-bold text-foreground mb-3 leading-tight">
          Get Certified & Published
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Your participation comes with globally recognized academic benefits
        </p>
      </motion.div>

      {/* Two-column layout */}
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT — Certificate Showcase */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="relative flex justify-center items-center min-h-[400px]"
        >
          {/* Back-left certificate */}
          <motion.img
            src={certImage}
            alt="OneGrasp Participation Certificate"
            className="absolute w-56 md:w-64 rounded-xl shadow-xl object-cover"
            style={{ transform: "rotate(-8deg) translateX(-40px)", zIndex: 1 }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            loading="lazy"
          />
          {/* Center certificate */}
          <motion.img
            src={certImage2}
            alt="OneGrasp Presentation Certificate"
            className="relative w-60 md:w-72 rounded-xl shadow-2xl object-cover z-10 hover:scale-105 transition-transform duration-300"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            loading="lazy"
          />
          {/* Back-right certificate */}
          <motion.img
            src={certImage}
            alt="OneGrasp Best Paper Award Certificate"
            className="absolute w-56 md:w-64 rounded-xl shadow-xl object-cover"
            style={{ transform: "rotate(8deg) translateX(40px)", zIndex: 1 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            loading="lazy"
          />
        </motion.div>

        {/* RIGHT — Benefits Grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {benefits.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-2xl p-6 shadow-card hover:-translate-y-2 hover:shadow-sky-glow transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl gradient-sky flex items-center justify-center mb-3">
                <item.icon className="text-primary-foreground" size={20} />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Caption */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-sm text-muted-foreground mt-10 mb-12"
      >
        Official OneGrasp Conference Certificates
      </motion.p>

      {/* Trust Badges */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center items-center gap-10"
      >
        {trustLogos.map((logo) => (
          <img
            key={logo.name}
            src={logo.url}
            alt={logo.name}
            className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            loading="lazy"
          />
        ))}
      </motion.div>
    </div>
  </section>
);

export default CertificationBenefits;
