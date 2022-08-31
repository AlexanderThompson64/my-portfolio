import { useParams } from "react-router-dom";

function GetProjectId() {
  let params = useParams();
  let projectId = params.projectId;

  return projectId;
}

export default GetProjectId;
