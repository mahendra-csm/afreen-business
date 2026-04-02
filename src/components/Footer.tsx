import logo from "@/assets/onegrasp-logo.png";

const Footer = () => (
  <footer id="contact" className="gradient-dark py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <img src={logo} alt="OneGrasp" className="h-10 mb-3 brightness-125" />
          <p className="text-primary-foreground/70 text-sm">
            Empowering global research through accredited international conferences.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-bold text-primary-foreground mb-3">Contact</h4>
          <div className="space-y-2 text-sm text-primary-foreground/70">
            <p>✉️ <a href="mailto:support@onegrasp.com" className="hover:text-primary transition-colors">support@onegrasp.com</a></p>
            <p>📞 +91 89777 60443</p>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-bold text-primary-foreground mb-3">Quick Links</h4>
          <div className="space-y-2 text-sm text-primary-foreground/70">
            <a href="#register" className="block hover:text-primary transition-colors">Register</a>
            <a href="#" className="block hover:text-primary transition-colors">Terms & Conditions</a>
            <a href="#" className="block hover:text-primary transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-6">
        <p className="text-center text-xs text-primary-foreground/50 mb-3">
          Crossref · DOI 10.65838 · CPD · Journal Citation Index · MetaSpectra · RMetaHub · IntelliMindEd · Google Scholar
        </p>
        <p className="text-center text-xs text-primary-foreground/40">
          © 2026 OneGrasp Scientific Conferences. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
