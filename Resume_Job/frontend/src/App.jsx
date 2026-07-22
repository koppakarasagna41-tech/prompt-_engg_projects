import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import UploadSection from "./components/UploadSection";
import Results from "./components/Results";
import Footer from "./components/Footer";

function App() {
  const [showResults, setShowResults] = useState(false);

  return (
    <div className="app">
      <Navbar />
      <Hero />

      <UploadSection
        onAnalysisComplete={() => setShowResults(true)}
      />

      {showResults && <Results />}

      <Footer />
    </div>
  );
}

export default App;