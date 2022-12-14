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
      <br />
      <div className="container d-flex justify-content-center">
        <h1
          className="d-none"
          id="skillsHeaderDesktop"
          style={{ opacity: "0.75" }}
        >
          Projects
        </h1>
      </div>
      <br />
      <div className="desktopProjectsContainer container d-xxl-flex align-items-center">
        <div
          className="projectCard text-center container mb-5 d-flex flex-column justify-content-center rounded"
          style={{ width: "90%", height: "310px", backgroundColor: "#0F243D", boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}
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
              href="https://ticket-system-265d4.firebaseapp.com/"
              className="projectsBtn btn btn-primary"
              style={{ width: "50%" }}
            >
              learn more
            </a>
          </div>
        </div>
        <div
          className="projectCard text-center container d-flex flex-column justify-content-center rounded"
          style={{ width: "90%", height: "310px", backgroundColor: "#0F243D", boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}
        >
          <h1 className="projectTitles" style={{ fontSize: "22px" }}>
            IOS / Android Mobile Application
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
              href="https://github.com/AlexanderThompson64/ICCAPP"
              className="projectsBtn btn btn-primary"
              style={{ color: "white", width: "50%" }}
            >
              learn more
            </a>
          </div>
        </div>
        <div
          className="projectCard text-center container mt-5 d-flex flex-column justify-content-center rounded"
          style={{ width: "90%", height: "310px", backgroundColor: "#0F243D", boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}
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
              href="https://github.com/AlexanderThompson64/UoRBookingSystem"
              className="projectsBtn btn btn-primary"
              style={{ color: "white", width: "50%" }}
            >
              learn more
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
