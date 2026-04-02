import { motion } from "framer-motion";
import callBg from "@/assets/call-for-papers-bg.jpg";

const CallForPapers = () => (
  <section id="call-for-papers" className="relative py-24 overflow-hidden">
    <img src={callBg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
    <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsla(213,64%,14%,0.8), hsla(199,89%,48%,0.55))" }} />

    <div className="relative z-10 container mx-auto px-4 text-center">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
          📢 Call for Papers
        </h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
          We invite original research papers, case studies, and review articles across all areas of Computer Science, Information Technology, and Software Engineering.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
          {[
            "Artificial Intelligence & Machine Learning",
            "Cloud Computing & DevOps",
            "Cybersecurity & Cryptography",
            "Data Science & Big Data Analytics",
            "Software Engineering & Architecture",
            "IoT, Blockchain & Emerging Tech",
          ].map((topic) => (
            <div key={topic} className="glass-card rounded-xl px-4 py-3 text-primary-foreground text-sm font-medium">
              {topic}
            </div>
          ))}
        </div>

        <a
          href="#register"
          className="inline-flex gradient-sky text-primary-foreground font-bold px-8 py-3.5 rounded-full shadow-sky-glow hover:scale-105 transition-transform"
        >
          Submit Abstract Now
        </a>
      </motion.div>
    </div>
  </section>
);

export default CallForPapers;
