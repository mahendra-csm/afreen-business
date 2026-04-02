import { motion } from "framer-motion";
import { BookOpen, Globe, GraduationCap, Zap, FileText } from "lucide-react";

const reasons = [
  { icon: BookOpen, label: "DOI Assigned" },
  { icon: Globe, label: "Indexed Globally" },
  { icon: GraduationCap, label: "CPD Credits" },
  { icon: Zap, label: "Fast Review Process" },
  { icon: FileText, label: "Publication Opportunity" },
];

const WhySubmit = () => (
  <section className="py-20 gradient-dark">
    <div className="container mx-auto px-4 text-center">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-12"
      >
        ⚡ Why Submit Your Research?
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-6 mb-10">
        {reasons.map((r, i) => (
          <motion.div
            key={r.label}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass-card rounded-2xl px-6 py-5 flex flex-col items-center gap-3 min-w-[140px]"
          >
            <r.icon className="text-sky-light" size={28} />
            <span className="text-primary-foreground font-semibold text-sm">{r.label}</span>
          </motion.div>
        ))}
      </div>

      <a
        href="https://onegrasp.com/conference-events/ivc-on-computer-science-information-technology-software-engineering-2026/"
        className="inline-flex gradient-sky text-primary-foreground font-bold px-8 py-3.5 rounded-full shadow-sky-glow hover:scale-105 transition-transform"
      >
        Submit Abstract Now
      </a>
    </div>
  </section>
);

export default WhySubmit;
