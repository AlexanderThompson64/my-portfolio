import { JSONHeroPath } from "@jsonhero/path";
import { data } from "../Data";
import GetProjectId from "./GetProjectId";

const ProjectDataTech = () => {
  let pathImg = new JSONHeroPath("$.projects." + GetProjectId() + ".img");
  let img = pathImg.all(data);

  return (
    <div className="projectImg text-white text-center">
      <h1>{img}</h1>
    </div>
  );
};

export default ProjectDataTech;
