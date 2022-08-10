import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import About from "../components/About";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Projects from "../components/Projects";

const Home = () => {
    return ( 
        <div className="Home">
            <Navbar/>
            <Intro/>
            <About/>
            <Skills/>
            <Education/>
            <Projects/>
        </div>
     );
}
 
export default Home;