import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
}