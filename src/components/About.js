import alexProfilePic from "../img/Alex.jpeg";

const About = () => {
  return (
    <div className="About" style={{ fontFamily: "anak" }}>
      <div className="text-white" id="aboutStatement">
        <div className="container-fluid d-flex">
          <h1 className="mt-sm-5" id="aboutHeader" style={{ width: "180px" }}>
            About me
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
        <div className="row mt-2 mt-xxl-5 justify-content-center align-items-center">
          <div className="col-sm-6 d-flex justify-content-center col-xxl-4 order-sm-last mt-sm-5">
            <img
              className="rounded img-fluid w-75"
              src={alexProfilePic}
              alt="Image of Alexander"
              id="alexImg"
              style={{boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}
            />
          </div>
          <div className="col-sm-5">
            <div
              className="d-flex flex-column justify-content-center mt-3"
              style={{ marginLeft: "15px", marginRight: "15px" }}
            >
              <h1
                className="d-none"
                id="aboutHeaderDesktop"
                style={{ opacity: "0.75" }}
              >
                About me
              </h1>
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
          className="row rounded mt-sm-5 justify-content-center align-items-center"
          id="techStack"
          style={{ color: "#64ffda", fontSize: "16px" }}
        >
          <div className="col-3 col-sm-2 me-xxl-5 d-flex justify-content-center">
            <p>
              HTML
              <br />
              CSS
              <br />
              JS
            </p>
          </div>
          <div className="col-3 col-sm-2 ms-xxl-5 me-xxl-5 d-flex justify-content-center">
            <p>
              C#
              <br />
              React
              <br />
              Bootstrap
            </p>
          </div>
          <div className="col-3 col-sm-2 ms-xxl-5 d-flex justify-content-center">
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
  );
};

export default About;
