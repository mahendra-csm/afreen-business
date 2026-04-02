import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SocialProof from "@/components/SocialProof";
import WhatYouGain from "@/components/WhatYouGain";
import BuiltForYou from "@/components/BuiltForYou";
import AboutConference from "@/components/AboutConference";
import CallForPapers from "@/components/CallForPapers";
import WhySubmit from "@/components/WhySubmit";
import WhyChoose from "@/components/WhyChoose";
import ScientificCommittee from "@/components/ScientificCommittee";
import CertificateBenefits from "@/components/CertificateBenefits";
import CertificationBenefits from "@/components/CertificationBenefits";
import RegistrationForm from "@/components/RegistrationForm";
import FAQ from "@/components/FAQ";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <HeroSection />
    <SocialProof />
    <WhatYouGain />
    <BuiltForYou />
    <AboutConference />
    <CallForPapers />
    <WhySubmit />
    <WhyChoose />
    <ScientificCommittee />
    <CertificateBenefits />
    <CertificationBenefits />
    <RegistrationForm />
    <FAQ />
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Index;
