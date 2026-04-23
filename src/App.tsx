import "./App.css";
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe";
import Home from "./PortfolioContainer/home/home";
import Project from "./PortfolioContainer/Projects/Projects";
import Testimonial from "./PortfolioContainer/Testimonial/Testimonial";
import ContactMe from "./PortfolioContainer/ContactMe/ContactMe";
import Resume from "./PortfolioContainer/Resume/Resume";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <>
    <div className="App">
      <Home />
      <Project />
      <AboutMe />
      <Resume />
      <Testimonial/>
      <ContactMe/> 
      <ScrollToTop />
    </div>
    </>
  );
}

export default App;
