import { JSONHeroPath } from "@jsonhero/path";
import { data } from "../Data";
import GetProjectId from "./GetProjectId";


const ProjectDataTech = () => {
  let pathImg1 = new JSONHeroPath("$.projects." + GetProjectId() + ".img1");
  let img1 = pathImg1.all(data);

  let pathImg2 = new JSONHeroPath("$.projects." + GetProjectId() + ".img2");
  let img2 = pathImg2.all(data);

  return (
    <div className="projectImg text-white text-center">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        // data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="carousel-inner" style={{marginTop: "-80px", marginBottom: "-40px"}}>
          <div className="carousel-item active text-white">
            <div className="caraContainer container d-flex flex-column justify-content-center align-items-center text-center" style={{height: "280px"}}>
              <div className="img1">{img1}</div>
            </div>
          </div>
          <div className="carousel-item text-white">
            <div className="caraContainer container d-flex justify-content-center align-items-center" style={{height: "280px"}}>
              <div className="div">{img2}</div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default ProjectDataTech;
