import React from "react";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Experience from "./Experience";
import ResumeDownload from "./resume";
function App() {
  return (
    <div className="App">
        <About/>
        <ResumeDownload/>
        <Skills/>
        <Projects/>
        <Experience/>
        <Contact/>
    </div>
  );
}

export default App;
