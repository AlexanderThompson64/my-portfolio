import alexProfilePic from "../img/Alex.jpeg";

const About = () => {
  return (
    <div className="About" style={{ fontFamily: "anak" }}>
      <div className="text-white mb-5" id="aboutStatement">
        <div className="container-fluid d-flex">
          <h1 className="mt-sm-5" id="aboutHeader" style={{ width: "180px" }}>About me</h1>
          <hr
            className="d-sm-none"
            style={{
              backgroundColour: "white",
              opacity: "0.75",
              width: "95%",
            }}
          />
        </div>
        <div className="row mt-2">
          <div className="col-sm-6 order-sm-last mt-sm-5">
            <div className="container d-flex justify-content-center mt-3 mb-3 mt-sm-5">
              <img
                className="rounded"
                src={alexProfilePic}
                alt="Image of Alexander"
                id="alex-img"
                style={{ width: "95%", boxShadow: "5px 5px #0b192e" }}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div
              className="d-flex justify-content-center mt-3"
              style={{ marginLeft: "15px", marginRight: "15px" }}
            >
              <p style={{ fontSize: "18px" }} id="aboutP">
                Hello!
                <span style={{ color: "#64ffda" }}> My name is Alexander</span>,
                but you can call me Alex.
                <br /> I started my journey into software writing basic
                <span style={{ color: "#64ffda" }}> Linux</span> applications,
                working with
                <span style={{ color: "#64ffda" }}> Bash</span> and the command
                line to script applications that worked alongside
                <span style={{ color: "#64ffda" }}> Python</span>. After
                completing my first projects which included a
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
                <span style={{ color: "#64ffda" }}> Figma</span> to create
                digital <span style={{ color: "#64ffda" }}>Mockups</span>,{" "}
                <span style={{ color: "#64ffda" }}>Wireframes</span> and{" "}
                <span style={{ color: "#64ffda" }}>Hi-Fidelity </span>
                prototypes.
                <br />
                <br />
                Some of technologies I've been working with recently -
              </p>
            </div>
          </div>
        </div>
        <div
          className="lead"
          id="techStack"
          style={{ color: "#64ffda", fontSize: "16px" }}
        >
          <div className="row mt-sm-5 justify-content-center align-items-center">
            <div className="col-3 col-sm-2">
              <p>
                HTML
                <br />
                CSS
                <br />
                JS
              </p>
            </div>
            <div className="col-3 col-sm-2">
              <p>
                C#
                <br />
                React
                <br />
                Bootstrap
              </p>
            </div>
            <div className="col-3 col-sm-2">
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
