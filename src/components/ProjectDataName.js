import { useParams } from "react-router-dom";
import { JSONHeroPath } from "@jsonhero/path";
import { data } from "../Data";
import GetProjectId from "./GetProjectId";

const ProjectDataName = () => {
  let pathName = new JSONHeroPath("$.projects." + GetProjectId() + ".name");
  let name = pathName.all(data);

  return (
    <div className="Project text-white">
      <h1>{name}</h1>
    </div>
  );
};

export default ProjectDataName;
