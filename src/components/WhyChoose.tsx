import { motion } from "framer-motion";
import { ShieldCheck, Zap, Globe, Heart } from "lucide-react";

const cards = [
  { icon: ShieldCheck, title: "Verified & Accredited", desc: "Accredited by CPD and powered by Crossref DOI." },
  { icon: Zap, title: "Instant Certification", desc: "Receive your certificate immediately after the conference." },
  { icon: Globe, title: "Global Reach", desc: "Participants from 50+ countries and 10+ indexing databases." },
  { icon: Heart, title: "Trusted Platform", desc: "Backed by OneGrasp's reputation for academic excellence." },
];

const WhyChoose = () => (
  <section className="py-20 bg-light-gray">
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-12"
      >
        🏆 Why Choose OneGrasp
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl p-7 text-center shadow-card hover:-translate-y-2 hover:shadow-sky-glow transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-full gradient-sky flex items-center justify-center mx-auto mb-4">
              <c.icon className="text-primary-foreground" size={24} />
            </div>
            <h3 className="font-heading font-bold text-foreground mb-2">{c.title}</h3>
            <p className="text-sm text-muted-foreground">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChoose;
