import { motion } from "framer-motion";
import { Database, Globe, Users, Eye } from "lucide-react";

const stats = [
  { icon: Database, value: "170M+", label: "Metadata Records" },
  { icon: Globe, value: "10+", label: "Indexing Databases" },
  { icon: Users, value: "50+", label: "Countries Participation" },
  { icon: Eye, value: "Global", label: "Research Exposure" },
];

const SocialProof = () => (
  <section className="relative -mt-16 z-20 pb-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card bg-card/80 backdrop-blur-xl rounded-2xl p-6 text-center shadow-card"
          >
            <stat.icon className="mx-auto mb-3 text-primary" size={28} />
            <div className="text-2xl sm:text-3xl font-heading font-bold text-foreground">{stat.value}</div>
            <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;
