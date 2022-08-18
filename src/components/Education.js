const Education = () => {
  return (
    <div className="Education text-white mb-5" style={{ fontFamily: "anak" }}>
      <div className="container-fluid d-flex">
        <h1 className="mt-sm-5" style={{ width: "170px" }} id="educationTitle">
          Education
        </h1>
        <hr
          className="d-sm-none"
          style={{
            backgroundColour: "white",
            opacity: "0.75",
            width: "90%",
          }}
        />
      </div>
      
      <div className="container d-flex flex-column align-items-center text-center justify-content-center mt-5">
      <h1 className="d-none" id="educationHeaderDesktop" style={{opacity: "0.75"}}>Education</h1>
        <p id="uniP">
          <span id="uniName" style={{fontSize: "22px"}}>University of Sunderland</span>
          <br />
          BSc (Hons) Web and Mobile Development
          <br />
          September 2019 - July 2023
          <br />
          <br />
          Predicted Grade: <span style={{color: "#64ffda"}}>First-Class Honours</span>
        </p>
      </div>
    </div>
  );
};

export default Education;
