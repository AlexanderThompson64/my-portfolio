import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import About from "../components/About";
import Education from "../components/Education";
import Skills from "../components/Skills";

const Home = () => {
    return ( 
        <div className="Home">
            <Navbar/>
            <Intro/>
            <About/>
            <Education/>
            <Skills/>
        </div>
     );
}
 
export default Home;