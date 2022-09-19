import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Spacer from "../components/Spacer";


const Home = () => {

  return (
    <div className="Home">
      <Navbar/>
      <div className="spacer" id="spacerHome"><Spacer /></div>
      <Intro />
      <div className="spacer " id="spacer1"><Spacer /></div>
      <About />
      <div className="spacer " id="spacer2"><Spacer /></div>
      <Skills />
      <div className="spacer " id="spacer3"><Spacer /></div>
      <Projects />
      <div className="spacer " id="spacer4"><Spacer /></div>
      <Footer />
    </div>
  );
};
export default Home;
