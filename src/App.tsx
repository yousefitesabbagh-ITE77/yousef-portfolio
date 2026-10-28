import Header from "./components/Header";
import Hero from "./components/Hero";
import TechMarquee from "./components/TechMarquee";
import Projects from "./components/Projects";
import Expertise from "./components/Expertise";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import usePortfolioEffects from "./hooks/usePortfolioEffects";

function App() {
  usePortfolioEffects();
  return (
    <main className="portfolio-main">
      <Header />
      <Hero />
      <TechMarquee />
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

export default App;
