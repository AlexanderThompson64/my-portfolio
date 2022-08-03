import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import About from "../components/About";

const Home = () => {
    return ( 
        <div className="Home">
            <Navbar/>
            <Intro/>
            <About/>
        </div>
     );
}
 
export default Home;