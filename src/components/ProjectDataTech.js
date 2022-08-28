import { useParams } from "react-router-dom";
import { JSONHeroPath } from "@jsonhero/path";
import { data } from "../Data";
import GetProjectId from "./GetProjectId";

const ProjectDataTech = () => {
  let pathTech = new JSONHeroPath("$.projects." + GetProjectId() + ".tech");
  let tech = pathTech.all(data);

  return (
    <div className="Project text-white">
      <h1>{tech}</h1>
    </div>
  );
};

export default ProjectDataTech;
