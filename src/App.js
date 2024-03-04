import "./App.css";
import React from "react";
import Header from "./components/Header"; // Import the Header component
import Navbar from "./components/Navbar";
import Bio from "./components/Bio";
import WorkExperience from "./components/WorkExperience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <div className="top-container">
        <Header />
        <Navbar />
      </div>
      <div className="content">
        <div>
          <section id="about" className="section">
            <h1>About</h1>
            <Bio />
          </section>
        </div>
        <div className="experience">
          <section id="experience" className="section">
            <h1>Experience</h1>
            <WorkExperience />
            <Certifications />
          </section>
        </div>
        <div>
          <section id="contact" className="section">
            <h1>Contact</h1>
            <Contact />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
