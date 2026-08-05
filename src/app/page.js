import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { Skills } from "@/components/skills";
import { Education } from "@/components/education";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Services />
      <Skills />
      <Education />
      <Contact />
    </>
  );
}
