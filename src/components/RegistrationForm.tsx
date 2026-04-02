import { useState } from "react";
import { motion } from "framer-motion";
import regBg from "@/assets/registration-bg.jpg";

const RegistrationForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", country: "", profession: "", comments: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="register" className="relative py-24 overflow-hidden">
      <img src={regBg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
      <div className="absolute inset-0" style={{ background: "hsla(213, 64%, 14%, 0.75)" }} />

      <div className="relative z-10 container mx-auto px-4 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="flex-1 text-primary-foreground"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">📝 Register Now</h2>
            <p className="text-primary-foreground/80 text-lg mb-6">
              Secure your spot at the International Conference on Computer Science, Information Technology & Software Engineering.
            </p>
            <p className="text-gold font-semibold">⚡ Limited Online Seats — Filling Fast</p>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="flex-1 w-full max-w-lg"
          >
            {submitted ? (
              <div className="bg-card rounded-2xl p-10 text-center shadow-card">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">Registration Received!</h3>
                <p className="text-muted-foreground text-sm">We'll contact you shortly with further details.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-card space-y-4">
                {[
                  { key: "name", label: "Full Name", type: "text" },
                  { key: "email", label: "Email", type: "email" },
                  { key: "phone", label: "Phone", type: "tel" },
                  { key: "country", label: "Country", type: "text" },
                  { key: "profession", label: "Profession", type: "text" },
                ].map((field) => (
                  <input
                    key={field.key}
                    type={field.type}
                    placeholder={field.label}
                    required
                    value={form[field.key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                ))}
                <textarea
                  placeholder="Comments (optional)"
                  rows={3}
                  value={form.comments}
                  onChange={(e) => setForm({ ...form, comments: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
                <button
                  type="submit"
                  className="w-full gradient-sky text-primary-foreground font-bold py-3.5 rounded-full shadow-sky-glow hover:scale-[1.02] transition-transform"
                >
                  Submit & Reserve My Spot
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
