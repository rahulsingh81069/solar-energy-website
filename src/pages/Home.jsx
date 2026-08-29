import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <WhyChooseUs />
      <CTA />
      <Testimonials />
      <FAQ />
    </>
  );
}