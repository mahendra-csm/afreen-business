import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What is the format of the conference?", a: "This is a fully online international conference. You can participate from anywhere in the world via our virtual platform." },
  { q: "Who can submit papers?", a: "Researchers, academicians, students, industry professionals, and practitioners from all related fields are welcome to submit." },
  { q: "What is a DOI and why is it important?", a: "A DOI (Digital Object Identifier) is a permanent, unique identifier for your research. It makes your work citable, discoverable, and part of the permanent scientific record. Our DOI is issued via Crossref (Prefix: 10.65838)." },
  { q: "Will I receive a certificate?", a: "Yes. All participants receive a Certificate of Participation or Presentation, plus a CPD Accredited Certificate. These are ideal for CVs and professional portfolios." },
  { q: "How does the review process work?", a: "After abstract submission, our scientific committee reviews your work. You'll receive feedback and acceptance notification within a fast turnaround period." },
  { q: "Where will my paper be indexed?", a: "Accepted abstracts are indexed in Google Scholar, Journal Citation Index, MetaSpectra, RMetaHub, IntelliMindEd, and other international databases." },
  { q: "Can I become a keynote speaker?", a: "Yes! Outstanding presenters may be invited to serve as Keynote Speakers at future OneGrasp conferences." },
  { q: "Is there a registration fee?", a: "Please contact us at support@onegrasp.com or via WhatsApp at +91 89777 60443 for registration fee details and available packages." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-12"
        >
          ❓ Frequently Asked Questions
        </motion.h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="bg-card rounded-xl shadow-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-muted/50 transition-colors"
                >
                  <span className="font-heading font-semibold text-foreground text-sm">{faq.q}</span>
                  <ChevronDown className={`shrink-0 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} size={18} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                      <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{faq.a}</div>
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

export default FAQ;
