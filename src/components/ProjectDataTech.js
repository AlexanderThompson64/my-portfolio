import { JSONHeroPath } from "@jsonhero/path";
import { data } from "../Data";
import GetProjectId from "./GetProjectId";

const ProjectDataTech = () => {
  let pathTech = new JSONHeroPath("$.projects." + GetProjectId() + ".tech");
  let tech = pathTech.all(data);

  return (
    <div className="projectTech text-white text-center" style={{fontFamily: "anak"}}>
      <h1>{tech}</h1>
    </div>
  );
};

export default ProjectDataTech;
