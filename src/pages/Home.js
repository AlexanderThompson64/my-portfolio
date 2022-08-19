import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/footer";
import Spacer from "../components/Spacer";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
