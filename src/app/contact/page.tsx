import ContactHero from "@/components/sections/ContactHero";
import ContactForm from "@/components/sections/ContactForm";
import ServicesWeHelpWith from "@/components/sections/ServicesWeHelpWith";
import OtherWaysToConnect from "@/components/sections/OtherWaysToConnect";
import WhyChooseUsReel from "@/components/sections/WhyChooseUsReel";
import ContactFAQ from "@/components/sections/ContactFAQ";
import ContactFinalCta from "@/components/sections/ContactFinalCta";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactForm />
      <ServicesWeHelpWith />
      <OtherWaysToConnect />
      <WhyChooseUsReel />
      <ContactFAQ />
      <ContactFinalCta />
    </main>
  );
}