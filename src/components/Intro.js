import Spacer from "./Spacer";

const Intro = () => {
  return (
    <div className="Intro">
      <div className="container-fluid">
        <p
          style={{
            color: "#64ffda",
            fontFamily: "anak",
            fontSize: "18px",
          }}
          id="introHello"
        >
          Hello, my name is
        </p>

        <h1
          className="display-3"
          style={{ color: "whitesmoke", fontFamily: "anak" }}
          id="introName"
        >
          Alexander Thompson
        </h1>
        <h1
          className="opacity-75 display-3 text-cente mb-4"
          style={{ color: "whitesmoke", fontFamily: "anak" }}
          id="introTitle"
        >
          Web and Mobile Developer
        </h1>

        <p
          className="p-1"
          style={{ color: "whitesmoke", fontFamily: "anak", fontSize: "18px" }}
          id="introParagraph"
        >
          I am a software development student studying my final year at the
          University of Sunderland, currently focusing on building applications
          using Javascipt and React.
          <span id="aboutScrollTarget"></span>
        </p>
        <div
          className="introButtons btn-group p-1"
          role="group"
          style={{ display: "none", fontFamily: "anak" }}
        >
          <a
            href="https://github.com/AlexanderThompson64"
            className="btn btn-primary me-3 rounded"
            id="btn-github"
          >
            <i className="bi bi-github me-1"></i>
            Github
          </a>
          <a
            href="https://www.instagram.com/lexilex64/"
            className="btn btn-primary me-3 rounded"
            id="btn-github"
          >
            <i className="bi bi-instagram me-1"></i>
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/alexander-thompson-095a171b7/"
            className="btn btn-primary me-3 rounded"
            id="btn-linkedin"
          >
            <i className="bi bi-linkedin me-1"></i>
            Linkedin
          </a>
          <a
            href="https://twitter.com/TheATdeveloper"
            className="btn btn-primary me-3 rounded"
            id="btn-linkedin"
          >
            <i className="bi bi-twitter me-1"></i>
            Twitter
          </a>
        </div>
        <div
          className="container text-center"
          id="iconsBody"
          style={{ color: "whitesmoke", fontSize: "25px", display: "none" }}
        >
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
