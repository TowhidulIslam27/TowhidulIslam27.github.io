import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ResearchInterests from "./components/ResearchInterests";
import Projects from "./components/Projects";
import ResearchProjects from "./components/ResearchProjects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Publications from "./components/Publications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Alternating background bands keep consecutive sections visually distinct.
const Band = ({ children }) => <div className="bg-ink-50/60 dark:bg-ink-900/30">{children}</div>;

function App() {
  return (
    <div className="min-h-svh">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Band><ResearchInterests /></Band>
        <ResearchProjects />
        <Band><Projects /></Band>
        <Experience />
        <Band><Education /></Band>
        <Publications />
        <Band><Skills /></Band>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
