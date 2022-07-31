const Intro = () => {
  return (
    <div className="Intro">
      <div className="container-fluid">
        <p
          className=""
          style={{ color: "#64ffda", marginTop: "100px", fontFamily: "anak", fontSize:"22px" }}
        >
          Hello, my name is
        </p>
        <h1
          className="display-2"
          style={{ color: "whitesmoke", fontFamily: "anak" }}
        >
          Alexander Thompson
        </h1>
        <h1
          className="opacity-75 display-1 text-cente mb-4"
          style={{ color: "whitesmoke", fontFamily: "anak" }}
        >
          I build things for the web!
        </h1>
        <p
          className="p-1"
          style={{ color: "whitesmoke", fontFamily: "anak", fontSize: "18px" }}
        >
          I am a software development student studying my final year at the
          University of Sunderland. I am currently focusing on building
          applications using Javascipt and React.
        </p>
        <div className="btn-group" role="group" style={{display: "none"}}>
          <a
            href="https://github.com/AlexanderThompson64"
            className="btn btn-primary me-3 rounded"
            id="btn-github"
          >
            <i className="bi bi-github me-1"></i>
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/alexander-thompson-095a171b7/"
            className="btn btn-primary me-3 rounded"
            id="btn-linkedin"
          >
            <i className="bi bi-linkedin me-1"></i>
            Linkedin
          </a>
        </div>
        <div className="container text-center" id="iconsBody" style={{color: "whitesmoke", fontSize: "25px", display: "none"}}>
          <i className="bi bi-github me-4" id="footer-github"></i>
          <i className="bi bi-linkedin me-4" id="footer-linkedin"></i>
          <i className="bi bi-instagram me-4" id="footer-instagram"></i>
          <i className="bi bi-twitter" id="footer-twitter"></i>
        </div>
      </div>
    </div>
  );
};

export default Intro;