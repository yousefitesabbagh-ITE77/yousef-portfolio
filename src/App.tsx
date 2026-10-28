import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Expertise from "./components/Expertise";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07101f] text-[#edf4ff]">
      <Header />
      <Hero />
      <Projects />
      <Expertise />
      <Experience />
      <About />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
