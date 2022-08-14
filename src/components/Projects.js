const Projects = () => {
  return (
    <div className="Projects text-white" style={{ fontFamily: "anak" }}>
      <div className="container d-flex">
        <h1 style={{ width: "140px" }} id="projectsTitle">
          <span>Projects</span>
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
      <div
        className="container d-flex flex-column justify-content-center rounded"
        style={{ width: "90%", height: "250px", backgroundColor: "#0F243D" }}
      >
        <h1 style={{ fontSize: "22px" }}>Charity Mobile Application</h1>

        <p>
          Cross-platform mobile application built for a charity as part of a
          university project.
        </p>

        <p>
          Technologies - <br />
          <span style={{ color: "#64ffda" }}>
            C# / .NET / Xammarin Forms / Visual Studio
          </span>
        </p>

        <a href="" className="btn border" style={{ color: "white" }}>
          Learn More
        </a>
      </div>
      <div
        className="container mt-5 d-flex flex-column justify-content-center rounded"
        style={{ width: "90%", height: "250px", backgroundColor: "#0F243D" }}
      >
        <h1 style={{ fontSize: "22px" }}>Booking Manager Application</h1>

        <p>
          .NET Core C# Application used to manage bookings and their various
          types.
        </p>

        <p>
          Technologies - <br />
          <span style={{ color: "#64ffda" }}>
            C# / .NET / Polymorphism / Visual Studio / Rider
          </span>
        </p>

        <a href="" className="btn border" style={{ color: "white" }}>
          Learn More
        </a>
      </div>
      <div
        className="container mt-5 d-flex flex-column justify-content-center rounded"
        style={{ width: "90%", height: "250px", backgroundColor: "#0F243D" }}
      >
        <h1 style={{ fontSize: "22px" }}>Maintinance ticket system</h1>

        <p>
          React web app, built to manage and maintain tickets raised for local
          park maintenance.
        </p>

        <p>
          Technologies - <br />
          <span style={{ color: "#64ffda" }}>
            React / Firebase / Visual Studio
          </span>
        </p>

        <a href="" className="btn border" style={{ color: "white" }}>
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Projects;
