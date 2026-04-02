import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap, Mic, Search, Users } from "lucide-react";

const gains = [
  { icon: Award, title: "Certificate of Participation / Presentation", desc: "Internationally recognized, premium certificate with unique ID." },
  { icon: BookOpen, title: "DOI via Crossref", desc: "Permanent Digital Object Identifier for your research paper." },
  { icon: GraduationCap, title: "CPD Accredited Certificate", desc: "Continuing Professional Development hours recognized globally." },
  { icon: Mic, title: "Keynote Speaker Opportunity", desc: "Outstanding presenters invited to speak at future conferences." },
  { icon: Search, title: "Indexed in Google Scholar & Directories", desc: "Abstracts indexed in 10+ international databases." },
  { icon: Users, title: "Global Networking", desc: "Connect with researchers and professionals from 50+ countries." },
];

const WhatYouGain = () => (
  <section className="py-20 bg-light-gray">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
          🎓 What You Gain
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Career-enhancing, globally recognized credentials and opportunities for every participant.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {gains.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card rounded-2xl p-7 shadow-card hover:-translate-y-2 hover:shadow-sky-glow transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl gradient-sky flex items-center justify-center mb-4">
              <item.icon className="text-primary-foreground" size={22} />
            </div>
            <h3 className="font-heading font-bold text-lg text-foreground mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatYouGain;
