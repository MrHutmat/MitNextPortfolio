import Backgroundeffect from "@/components/Backgroundeffect";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import ProjectsComponent from "@/components/projects/ProjectsComponent";

export default function Home() {
  return (
    <div className="text-themegray">
      <section id="home" className="">
        <Hero />
      </section>

      <section id="about" className="">
        <About />
        {/* <Backgroundeffect /> */}
      </section>

      <section id="projects" className="">
        <ProjectsComponent />
      </section>

      <section id="contact" className="">
        <Contact />
        {/* <Backgroundeffect /> */}
      </section>
    </div>
  );
}
