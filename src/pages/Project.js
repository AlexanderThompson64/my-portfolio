import ProjectPageNavbar from "../components/ProjectPageNavbar.js";
import ProjectDataName from "../components/ProjectDataName.js";
import ProjectDataTech from "../components/ProjectDataTech.js";
import ProjectDataImg from "../components/ProjectDataImg.js";
import ProjectDataDescription from "../components/ProjectDataDescription";
import Spacer from "../components/Spacer";
import Footer from "../components/Footer";

const Project = () => {
  return (
    <div className="Project text-white">
      <ProjectPageNavbar/>
      <Spacer/>
      <ProjectDataName />
      <Spacer/>
      <ProjectDataImg />
      <Spacer/>
      <ProjectDataDescription/>
      <Spacer/>
      <ProjectDataTech/>
      <Spacer/>
      <Footer/>

    </div>
  );
};

export default Project;
