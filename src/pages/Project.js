import ProjectDataName from "../components/ProjectDataName.js";
import ProjectDataTech from "../components/ProjectDataTech.js";
import ProjectDataImg from "../components/ProjectDataImg.js";


const Project = () => {
    
  return (
    <div className="Project text-white">
      <ProjectDataName/>
      <ProjectDataTech/>
      <ProjectDataImg/>
     
    </div>
  );
};

export default Project;
