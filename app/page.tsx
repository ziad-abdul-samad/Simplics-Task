import AboutUs from "@/components/AboutUs/AboutUs";
import Hero from "@/components/Home/Hero/Hero";
import Navbar from "@/components/Home/Navbar";
import "../app/styles/gradients.css";
import ServicesSection from "@/components/Services/ServicesSection";
import WorkSection from "@/components/Work/WorkSection";
import TestimonialsSection from "@/components/Testimonials/TestimonialsSection";
import FAQSection from "@/components/FAQ/FAQSection";
import ContactUsSection from "@/components/ContactUs/ContactUsSection";
import Footer from "@/components/Footer/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <ServicesSection />
      <WorkSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactUsSection />
      <Footer />
    </>
  );
}
