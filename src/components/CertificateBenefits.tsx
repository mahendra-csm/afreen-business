import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Award, BookOpen, GraduationCap, Search, Database, Mic } from "lucide-react";

const items = [
  {
    icon: Award,
    title: "Certificate of Participation / Presentation",
    subtitle: "Awarded after submitting post-conference feedback",
    content: "Receive an internationally recognized, premium Certificate of Participation or Presentation issued by OneGrasp Scientific Conferences. The certificate includes your full name, role (Speaker / Presenter / Attendee), conference title, conference date, and unique Certificate ID. It is accredited and ideal for academic CVs, LinkedIn profiles, and professional portfolios.",
  },
  {
    icon: BookOpen,
    title: "DOI via Crossref — Make Your Research Permanent",
    subtitle: "Get a globally recognized Digital Object Identifier for your abstract",
    content: "Every accepted abstract receives a unique DOI (Digital Object Identifier) issued via Crossref — the world's leading DOI registration agency trusted by 50,000+ publishers. Your DOI ensures your research becomes permanently citable, discoverable, and accessible worldwide. DOI Prefix: 10.65838. Your work enters the permanent scientific record and can be referenced in future publications, grant applications, and institutional reports.",
  },
  {
    icon: GraduationCap,
    title: "CPD Accredited Certificate",
    subtitle: "Recognized for Continuing Professional Development",
    content: "Participation contributes to your Continuing Professional Development (CPD) hours, accredited by TheCPD.Group, a globally recognized CPD accreditation body. This certificate demonstrates your commitment to lifelong learning and is recognized by employers, professional bodies, and licensing authorities worldwide.",
  },
  {
    icon: Search,
    title: "Abstract Indexed in Google Scholar & 10+ Directories",
    subtitle: "Your research, discoverable globally",
    content: "Accepted abstracts are indexed in Google Scholar and 10+ international indexing databases, dramatically increasing research visibility and reach. Indexing partners include Journal Citation Index, MetaSpectra (170M+ metadata records), RMetaHub, IntelliMindEd, and more.",
  },
  {
    icon: Database,
    title: "Free Access to 170+ Million Metadata Records",
    subtitle: "Via MetaSpectra — an interdisciplinary knowledge ecosystem",
    content: "All registered participants receive complimentary access to MetaSpectra's repository of 170+ million scholarly metadata records spanning Computer Science, Engineering, Artificial Intelligence, Software Engineering, and Emerging Technologies.",
  },
  {
    icon: Mic,
    title: "Opportunity to Become a Keynote Speaker",
    subtitle: "Your expertise on the international stage",
    content: "Outstanding presenters may be invited to serve as Keynote Speakers at future OneGrasp international conferences. This is a rare career-defining opportunity to establish yourself as a global thought leader.",
  },
];

const CertificateBenefits = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="benefits" className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
            What You Gain By Joining
          </h2>
          <p className="text-muted-foreground">
            Every participant walks away with tangible, career-enhancing, globally recognized credentials and opportunities.
          </p>
        </motion.div>

        <div className="space-y-4">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={item.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-2xl shadow-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center gap-4 p-5 text-left hover:bg-muted/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl gradient-sky flex items-center justify-center shrink-0">
                    <item.icon className="text-primary-foreground" size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading font-bold text-foreground text-base">{item.title}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.subtitle}</p>
                  </div>
                  <ChevronDown
                    className={`shrink-0 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    size={20}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pl-[76px] text-sm text-muted-foreground leading-relaxed">
                        {item.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificateBenefits;
