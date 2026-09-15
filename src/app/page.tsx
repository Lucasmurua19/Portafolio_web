import Hero from "@/components/Hero";
import FeaturedProject from "@/components/FeaturedProject";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import WorkProcess from "@/components/WorkProcess";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProject />
      <Projects />
      <Technologies />
      <WorkProcess />
      <About />
      <Contact />
    </>
  );
}
