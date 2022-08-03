import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import About from "../components/About";
import Education from "../components/Education";

const Home = () => {
    return ( 
        <div className="Home">
            <Navbar/>
            <Intro/>
            <About/>
            <Education/>
        </div>
     );
}
 
export default Home;