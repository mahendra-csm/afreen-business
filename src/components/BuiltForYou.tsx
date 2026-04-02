import { motion } from "framer-motion";
import devImg from "@/assets/audience-developers.jpg";
import aiImg from "@/assets/audience-ai.jpg";
import cyberImg from "@/assets/audience-cyber.jpg";
import entImg from "@/assets/audience-entrepreneurs.jpg";

const audiences = [
  { img: devImg, title: "Software Developers & Engineers", desc: "Build next-generation software, cloud systems, and scalable applications." },
  { img: aiImg, title: "AI & Data Science Researchers", desc: "Explore machine learning, deep learning, and intelligent systems." },
  { img: cyberImg, title: "Cybersecurity Professionals", desc: "Learn modern security, ethical hacking, and digital trust solutions." },
  { img: entImg, title: "Tech Entrepreneurs & Startups", desc: "Pitch innovations, meet investors, and scale globally." },
];

const BuiltForYou = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
          👥 This Conference Is Built For You
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {audiences.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group rounded-2xl overflow-hidden shadow-card hover:-translate-y-2 transition-all duration-300"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-primary/30" />
              <h3 className="absolute bottom-4 left-4 right-4 font-heading font-bold text-primary-foreground text-lg">
                {item.title}
              </h3>
            </div>
            <div className="p-5 bg-card">
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BuiltForYou;
