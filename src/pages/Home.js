import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import About from "../components/About";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Footer from "../components/footer";

const Home = () => {
    return ( 
        <div className="Home">
            <Navbar/>
            <Intro/>
            <About/>
            <Skills/>
            <Education/>
            <Projects/>
            <Footer/>
        </div>
     );
}
 
export default Home;