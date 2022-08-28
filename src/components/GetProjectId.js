import { useParams } from "react-router-dom";
import { JSONHeroPath } from "@jsonhero/path";

function GetProjectId() {
  let params = useParams();
  let projectId = params.projectId;

  return projectId;
}

export default GetProjectId;
