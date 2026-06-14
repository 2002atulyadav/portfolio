import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function Rule() {
  return <div className="rule" />;
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Rule />
        <About />
        <Rule />
        <Education />
        <Rule />
        <Experience />
        <Rule />
        <Work />
        <Rule />
        <Skills />
        <Rule />
        <Achievements />
        <Rule />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
