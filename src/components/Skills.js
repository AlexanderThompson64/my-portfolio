import WebDevImg from "../img/htmlimg.png";
import mobileDevImg from "../img/cfr.png";
import designImg from "../img/figmaxd.png";

const Skills = () => {
  return (
    <div className="Skills text-white" style={{ fontFamily: "anak" }}>
      <div className="container d-flex">
        <h1 style={{ width: "260px" }}>
          <span>Skills / Experience</span>
        </h1>
        <hr
          className=""
          style={{
            backgroundColour: "white",
            opacity: "0.75",
            width: "45%",
          }}
        />
      </div>
      <div className="container">
        <p className="mb-5" style={{fontSize: "16px"}}>
          Throughout my studies over the last 4 years I have completed a range
          of various projects and gained an array skills throughout my study,
          personal projects and work. <br />
          <br />I also gained valuable transferable skills through previous
          employment over my years in fast paced driven environments.
        </p>
        <p style={{fontSize: "18px"}}>Key Skills -</p>
      </div>
      <div className="container p-2" style={{ fontSize: "16px", marginTop: "-20px" }}>
        <div className="row mb-4">
          <div
            className="col-6 d-flex justify-content-center align-items-center"
            style={{ width: "50%" }}
          >
            <p style={{ marginBottom: "-25px", marginRight: "-20px" }}>
              Web Development
            </p>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <img
              className="rounded"
              src={WebDevImg}
              alt="Image of Alexander"
              id="alex-img"
              style={{ width: "70%" }}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div
            className="col-6 d-flex justify-content-center align-items-center"
            style={{ width: "50%" }}
          >
            <p style={{ marginBottom: "-5px", marginRight: "-30px" }}>
              Mobile App Development
            </p>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <img
              className="rounded"
              src={mobileDevImg}
              alt="Image of Alexander"
              id="alex-img"
              style={{ width: "75%" }}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div
            className="col-6 d-flex justify-content-center align-items-center"
            style={{ width: "50%" }}
          >
            <p style={{ marginBottom: "-5px", marginRight: "-30px" }}>
              Web / Mobile Design
            </p>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <img
              className="rounded"
              src={designImg}
              alt="Image of Alexander"
              id="alex-img"
              style={{ width: "80%", marginLeft: "-25px" }}
            />
          </div>
        </div>
        <p className="mt-4" style={{fontSize: "18px"}}>Transferable Skills -</p>
        <div
          className="container d-flex align-items-center rounded mt-5 mb-5"
          style={{ borderStyle: "solid", borderColor: "#64ffda", fontSize: "16px" }}
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
              Competent with Linux operating systems and command line interface
            </li>
            <li>Highly Motivated</li>
            <li>8 Years working in Client focussed environments</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
