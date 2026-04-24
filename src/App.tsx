import { useState } from "react";
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import Projects from "./components/Projects.tsx";
import TechStack from "./components/TechStack.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";
import AerodynamicLoader from "./components/AerodynamicLoader.tsx";

function App() {
  const [showLoader, setShowLoader] = useState(true);

  return (
    <>
      {showLoader && <AerodynamicLoader onComplete={() => setShowLoader(false)} />}
      <Header />
      <main className="max-w-container-max mx-auto px-6">
        <Hero />
        <Projects />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
