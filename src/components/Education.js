const Education = () => {
  return (
    <div className="Projects text-white" style={{ fontFamily: "anak" }}>
      <div className="container d-flex">
        <h1 style={{ width: "250px" }}>
          <span style={{ color: "whitesmoke" }}>2. </span>
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
      <h1 className="display-6 mt-2" style={{ fontSize: "24px", marginLeft: "5px", marginRight: "5px" }}>
        University of Sunderland
      </h1>
      <div className="container" style={{fontSize: "20px", marginLeft: "5px", marginRight: "5px"}}>
        <p>
          BSc (Hons) Web and Mobile Development
          <div className="container">September 2019 - July 2023</div>
        </p>
      </div>
    </div>
  );
};

export default Education;
