import Header from './PortfolioContainer/Header/Header';
import Footer from './PortfolioContainer/Footer/Footer';
import Contact from './PortfolioContainer/Contact/Contact';
import About from './PortfolioContainer/About/About';
import Skills from './PortfolioContainer/Skills/Skills';
import Projects from './PortfolioContainer/Projects/Projects';
import SideMail from './PortfolioContainer/SideMail/SideMail';
import SideSocial from './PortfolioContainer/SideSocial/SideSocial';
import SectionPresentation from './PortfolioContainer/SectionPresentation/SectionPresentation';
import {useState, useEffect} from 'react';

const App = () => {
  const [toggle, setToggle] = useState(localStorage.getItem("theme"))

  useEffect(() => {
    localStorage.setItem("theme", toggle)
    console.log(localStorage.getItem("theme "))
  }, [toggle])

  return (
    <>
      <div className={toggle ? 'Layout darkmode' : 'Layout lightmode'}>
        <Header changeTheme={x => {
          setToggle(x = !toggle)

        }}/>
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
}

export default App;
