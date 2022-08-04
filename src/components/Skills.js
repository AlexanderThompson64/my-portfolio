import WebDevImg from "../img/htmlimg.png";
import mobileDevImg from "../img/cfr.png";
import designImg from "../img/figmaxd.png";

const Skills = () => {
  return (
    <div className="Skills text-white" style={{fontFamily: "anak"}}>
      <div className="container d-flex ms-1">
        <h1 style={{ width: "80px" }}>
          <span>Skills</span>
        </h1>
        <hr
          className=""
          style={{
            backgroundColour: "white",
            opacity: "0.75",
            width: "95%",
          }}
        />
      </div>

      <div className="container p-2" style={{fontSize: "18px"}}>
        <div className="row mb-4">
          <div className="col-6 d-flex justify-content-center align-items-center" style={{width: "50%", }}>
            <p style={{marginBottom: "-20px", marginRight: "-20px"}}>Web Development</p>
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
          <div className="col-6 d-flex justify-content-center align-items-center" style={{width: "50%"}}>
            <p style={{marginBottom: "0px", marginRight: "-30px"}}>Mobile App Development</p>
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
        <div className="row">
          <div className="col-6 d-flex justify-content-center align-items-center" style={{width: "50%"}}>
            <p style={{marginBottom: "0px", marginRight: "-30px"}}>Web / Mobile Design</p>
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
      </div>
    </div>
  );
};

export default Skills;
