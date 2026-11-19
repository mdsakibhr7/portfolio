import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import Flow from "./sections/Flow.jsx";
import BackToTop from "./sections/BackToTop.jsx";
import About from "./sections/About.jsx";
import Services from "./sections/Services.jsx";
import Process from "./sections/Process.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import Experience from "./sections/Experience.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[999] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Flow />
        <About />
        <Services />
        <Process />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <BackToTop />
      <Footer />
    </>
  );
}
