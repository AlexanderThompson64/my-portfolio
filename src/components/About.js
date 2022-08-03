import alexProfilePic from "../img/Alex.jpeg";

const About = () => {
  return (
    <div className="About" style={{ fontFamily: "anak" }}>
      <div className="text-white" id="aboutStatement" style={{}}>
        <div className="container d-flex">
          <h1 style={{ width: "230px" }}>
            <span style={{ color: "whitesmoke" }}>1. </span>
            <span>About me</span>
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
        <div className="container d-flex justify-content-center mt-5 mb-5">
          <img
            className="rounded"
            src={alexProfilePic}
            alt="Image of Alexander"
            id="alex-img"
            style={{ width: "80%", boxShadow: "5px 5px #0b192e" }}
          />
        </div>
        <div className="container d-flex justify-content-center">
          <div
            className="box rounded"
            style={{ width: "285px", height: "285px", marginTop: "-310px", marginRight: "-40px", zIndex: "-1", borderStyle: "solid", borderColor: "#64ffda" }}
          ></div>
        </div>

        <div
          className="aboutParagraph d-flex justify-content-center mt-3"
          style={{ marginLeft: "15px", marginRight: "15px" }}
        >
          <p style={{ fontSize: "20px" }}>
            Hello!
            <span style={{ color: "#64ffda" }}> My name is Alexander</span>, but
            you can call me Alex.
            <br /> I started my journey into software writing basic
            <span style={{ color: "#64ffda" }}> Linux</span> applications,
            working with
            <span style={{ color: "#64ffda" }}> Bash</span> and the command line
            to script applications that worked alongside
            <span style={{ color: "#64ffda" }}> Python</span>. After completing
            my first projects which included a
            <span style={{ color: "#64ffda" }}> Web Scraper </span>
            and console order system I contracted the development bug!
            <br />
            <br />
            Following on from this, I moved onto working with various web
            technologies to build soloutions including
            <span style={{ color: "#64ffda" }}>
              {" "}
              Progressive Web Applications{" "}
            </span>
            ,<span style={{ color: "#64ffda" }}> Web Apps </span> and{" "}
            <span style={{ color: "#64ffda" }}>API's</span>.
            <br />
            <br />I really enjoy{" "}
            <span style={{ color: "#64ffda" }}>Web Design</span>, creating
            custom assets using programs like
            <span style={{ color: "#64ffda" }}> Figma</span> to create digital{" "}
            <span style={{ color: "#64ffda" }}>Mockups</span>,{" "}
            <span style={{ color: "#64ffda" }}>Wireframes</span> and{" "}
            <span style={{ color: "#64ffda" }}>Hi-Fidelity </span>
            prototypes.
            <br />
            <br />
            Some of technologies I've been working with recently -
          </p>
        </div>
        <div className="lead" id="skills" style={{ color: "#64ffda" }}>
          <div className="row justify-content-center">
            <div className="col-3">
              <p>
                HTML
                <br />
                CSS
                <br />
                JS
              </p>
            </div>
            <div className="col-3">
              <p>
                C#
                <br />
                React
                <br />
                Bootstrap
              </p>
            </div>
            <div className="col-3">
              <p>
                Figma
                <br />
                PHP
                <br />
                Wordpress
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
