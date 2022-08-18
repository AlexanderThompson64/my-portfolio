import WebDevImg from "../img/htmlimg.png";
import mobileDevImg from "../img/cfr.png";
import designImg from "../img/figmaxd.png";

const Skills = () => {
  return (
    <div className="Skills text-white" style={{ fontFamily: "anak" }}>
      <div className="container-fluid d-flex mb-sm-2">
        <h1 style={{ width: "80px" }} id="skillsTitle">
          <span>Skills</span>
        </h1>
        <hr
          className="d-sm-none"
          style={{
            backgroundColour: "white",
            opacity: "0.75",
            width: "95%",
          }}
        />
      </div>
      <div className="container-fluid text-center">
        <p className="mb-5" style={{ fontSize: "18px" }} id="skillsP">
        <h1 className="d-none" id="skillsHeaderDesktop" style={{opacity: "0.75"}}>Skills</h1>
          Throughout my studies over the last 4 years I have completed a range
          of various projects and gained an array of skills throughout my study,
          personal projects and work. <br />
          <br />I also gained valuable transferable skills through previous
          employment over my years in fast paced driven environments.
          <br />
          <br />
        </p>
      </div>
      <div
        className="container"
        style={{ fontSize: "16px", marginTop: "-20px" }}
      >
        <div className="row mb-4" id="skillsWeb">
          <div
            className="col-6 d-flex justify-content-center align-items-center"
            style={{ width: "50%" }}
          >
            <p style={{ marginBottom: "-25px", marginRight: "-20px" }}>
              Web Development
            </p>
          </div>
          <div className="col-6 col-lg-5 d-flex justify-content-center">
            <img
              className="rounded"
              src={WebDevImg}
              alt="Image of Web Technologies"
              id="webDevImg"
              style={{ width: "70%" }}
            />
          </div>
        </div>
        <div className="row mb-3" id="skillsMobile">
          <div
            className="col-6 d-flex justify-content-center align-items-center"
            style={{ width: "50%" }}
          >
            <p style={{ marginBottom: "-5px", marginRight: "-35px" }}>
              Mobile App Development
            </p>
          </div>
          <div className="col-6 col-lg-5 d-flex justify-content-center">
            <img
              className="rounded me-1"
              src={mobileDevImg}
              alt="Image of Mobile developement tech"
              id="mobileAppDevImg"
              style={{ width: "75%" }}
            />
          </div>
        </div>
        <div className="row mb-3 " id="skillsDesign">
          <div
            className="col-6 d-flex justify-content-center align-items-center"
            style={{ width: "50%" }}
          >
            <p style={{ marginBottom: "-5px", marginRight: "-30px" }}>
              Web / Mobile Design
            </p>
          </div>
          <div className="col-6 col-lg-5 d-flex justify-content-center">
            <img
              className="rounded me-lg-3"
              src={designImg}
              alt="Image of design tech"
              id="mobileDesignImg"
              style={{ width: "70%", marginLeft: "-25px" }}
            />
          </div>
        </div>
        <div className="container d-flex-column">
          <p
            className="mt-5"
            style={{ fontSize: "18px" }}
            id="transSkillsTitle"
          >
            Transferable Skills -
          </p>
          <div
            className="mt-2 mb-5"
            style={{ fontSize: "18px" }}
            id="transSkillsList"
          >
            <ul
              style={{
                marginTop: "15px",
              }}
            >
              <li>Critical Thinking</li>
              <li>Problem Solving</li>
              <li>Time Management</li>
              <li>Excellent communicator written and verbally</li>
              <li>
                Competent in with Microsoft products WSL2, PowerShell, Word,
                Excel, PowerPoint etc
              </li>
              <li>
                Competent with Linux operating systems and command line
                interface
              </li>
              <li>Highly Motivated</li>
              <li>8 Years working in Client focused environments</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
