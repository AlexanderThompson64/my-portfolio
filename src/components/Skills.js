import WebDevImg from "../img/htmlimg.png";
import mobileDevImg from "../img/cfr.png";
import designImg from "../img/figmaxd.png";

const Skills = () => {
  return (
    <div className="Skills text-white" style={{ fontFamily: "anak" }}>
      <div className="container-fluid d-flex mb-sm-2" id="thisone">
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
          <h1
            className="d-none"
            id="skillsHeaderDesktop"
            style={{ opacity: "0.75" }}
          >
            Skills
          </h1>
          Throughout my studies over the last 4 years I have completed a range
          of various projects and gained an array of skills throughout my study,
          personal projects and work. <br />
          <br />I also gained valuable transferable skills through previous
          employment over my years in fast paced driven environments.
          <br />
          <br />
        </p>
      </div>

      <div className="container-fluid d-flex justify-content-center text-center">
        <div
          className="mt-2 mb-5"
          style={{ fontSize: "18px" }}
          id="transSkillsList"
        >
          <p id="transSkillsTitle">Transferable Skills</p>
          <p>
            Critical Thinking
            <br />
            Problem Solving
            <br />
            Time Management
            <br />
            Excellent communicator written and verbally
            <br />
            Competent in with Microsoft products WSL2, PowerShell, Word, Excel,
            PowerPoint etc
            <br />
            Competent with Linux operating systems and command line interface
            <br />
            Highly Motivated
            <br />8 Years working in Client focused environments
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
