const Projects = () => {
  return (
    <div className="Projects text-white" style={{ fontFamily: "anak" }}>
      <div className="container-fluid d-flex mb-4 mb-sm-5 ">
        <h1 style={{ width: "140px" }} id="projectsTitle">
          Projects
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
      <div
        className="projectCard container d-flex flex-column justify-content-center rounded"
        style={{ width: "90%", height: "250px", backgroundColor: "#0F243D" }}
      >
        <h1 className="projectTitles" style={{ fontSize: "22px" }}>
          Charity Mobile Application
        </h1>

        <p className="projectsP">
          Cross-platform mobile application built for a charity as part of a
          university project.
        </p>

        <p className="projectsP">
          Technologies - <br />
          <span style={{ color: "#64ffda" }}>
            C# / .NET / Xammarin Forms / Visual Studio
          </span>
        </p>
        <div className="container d-flex justify-content-center">
          <a
            href=""
            className="projectsBtn btn border"
            style={{ color: "white", width: "50%" }}
          >
            Learn More
          </a>
        </div>
      </div>
      <div
        className="projectCard container mt-5 d-flex flex-column justify-content-center rounded"
        style={{ width: "90%", height: "250px", backgroundColor: "#0F243D" }}
      >
        <h1 className="projectTitles" style={{ fontSize: "22px" }}>
          Booking Manager Application
        </h1>

        <p className="projectsP">
          .NET Core C# Application used to manage bookings and their various
          types.
        </p>

        <p className="projectsP">
          Technologies - <br />
          <span style={{ color: "#64ffda" }}>
            C# / .NET / Polymorphism / Visual Studio / Rider
          </span>
        </p>
        <div className="container d-flex justify-content-center">
          <a
            href=""
            className="projectsBtn btn border"
            style={{ color: "white", width: "50%" }}
          >
            Learn More
          </a>
        </div>
      </div>
      <div
        className="projectCard container mt-5 d-flex flex-column justify-content-center rounded"
        style={{ width: "90%", height: "250px", backgroundColor: "#0F243D" }}
      >
        <h1 className="projectTitles" style={{ fontSize: "22px" }}>
          Maintinance ticket system
        </h1>

        <p className="projectsP">
          React web app, built to manage and maintain tickets raised for local
          park maintenance.
        </p>

        <p className="projectsP">
          Technologies - <br />
          <span style={{ color: "#64ffda" }}>
            React / Firebase / Visual Studio
          </span>
        </p>

        <div className="container d-flex justify-content-center">
          <a
            href=""
            className="projectsBtn btn border"
            style={{ color: "white", width: "50%" }}
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
