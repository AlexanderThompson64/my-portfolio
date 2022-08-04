const Education = () => {
  return (
    <div className="Projects text-white" style={{ fontFamily: "anak" }}>
      <div className="container d-flex ms-1">
        <h1 style={{ width: "170px" }}>
          <span>Education</span>
        </h1>
        <hr
          className=""
          style={{
            backgroundColour: "white",
            opacity: "0.75",
            width: "90%",
          }}
        />
      </div>
      <h1 className="display-6 mt-2" style={{ fontSize: "22px", marginLeft: "30px", marginRight: "30px"}}>
        University of Sunderland
      </h1>
      <div className="container" style={{fontSize: "18px", marginLeft: "30px", marginRight: "30px"}}>
        <p>
          BSc (Hons) Web and Mobile Development
          <div className="container">September 2019 - July 2023</div>
        </p>
      </div>
    </div>
  );
};

export default Education;
