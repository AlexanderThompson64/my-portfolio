import { JSONHeroPath } from "@jsonhero/path";
import { data } from "../Data";
import GetProjectId from "./GetProjectId";

const ProjectDataTech = () => {
  let pathDesc = new JSONHeroPath("$.projects." + GetProjectId() + ".description");
  let desc = pathDesc.all(data);

  return (
    <div className="projectDesc container text-white text-center" style={{fontFamily: "anak"}}>
      <h1 style={{fontSize: "18px"}}>{desc}</h1>
    </div>
  );
};

export default ProjectDataTech;
