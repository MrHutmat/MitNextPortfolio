import Backgroundeffect from "@/components/Backgroundeffect";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import ProjectsComponent from "@/components/projects/ProjectsComponent";
import Frontend from "@/components/skills/Frontend";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <div className="text-themegray">
      <section id="home" className="">
        <Hero />
      </section>

      <section id="about" className="relative">
        <About />
        <Backgroundeffect />
      </section>

      <section id="projects" className="">
        <ProjectsComponent />
      </section>

      <section id="techstack" className="">
        <Skills />
      </section>

      <section id="contact" className="relative">
        <Contact />
        <Backgroundeffect />
      </section>
    </div>
  );
}
