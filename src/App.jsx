import React, { useState, useEffect } from "react";
import Header from "./PortfolioContainer/Header/Header";
import Footer from "./PortfolioContainer/Footer/Footer";
import Contact from "./PortfolioContainer/Contact/Contact";
import About from "./PortfolioContainer/About/About";
import Skills from "./PortfolioContainer/Skills/Skills";
import Projects from "./PortfolioContainer/Projects/Projects";
import SideMail from "./PortfolioContainer/SideMail/SideMail";
import SideSocial from "./PortfolioContainer/SideSocial/SideSocial";
import SectionPresentation from "./PortfolioContainer/SectionPresentation/SectionPresentation";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("THEME"));

  useEffect(() => {
    localStorage.setItem("THEME", theme);
  }, [theme]);

  return (
    <>
      <div className="Layout" data-theme={theme}>
        <Header
          changeTheme={() => {
            setTheme(theme == "dark" ? "light" : "dark");
          }}
        />
        <SideSocial />
        <SideMail />
        <SectionPresentation />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
