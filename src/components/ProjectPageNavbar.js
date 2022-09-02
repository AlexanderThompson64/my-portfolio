import Spacer from "./Spacer";

const ProjectPageNavbar = () => {
  return (
    <div className="ProjectPageNavbar" style={{ fontFamily: "anak" }}>
      <div className="Navbar">
        <nav
          className="navbar navbar-dark fixed-top"
          style={{ backgroundColor: "#0b192e" }}
        >
          <div className="container-fluid">
            <a
              className="navbar-brand ms-4"
              style={{ fontFamily: "Dancing" }}
              href="/"
            >
              A.Thompson
            </a>
            <button
              className="navbar-toggler me-4"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              style={{ backgroundColor: "#0B192E", width: "80%" }}
            >
              <div
                className="offcanvas-header"
                style={{ backgroundColor: "#0b192e" }}
              >
                <div className="container">
                  <div className="row justify-content-end">
                    <button
                      type="button"
                      className="btn-close btn-close-white"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="row text-center">
                    <div className="col">
                      <a href="/" style={{ textDecoration: "none" }}>
                        <h5
                          className="offcanvas-title"
                          style={{ color: "whitesmoke", fontFamily: "Dancing" }}
                          id="offcanvasNavbarLabel"
                        >
                          A.Thompson
                        </h5>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="offcanvas-body lead"
                style={{ backgroundColor: "#0b192e", fontFamily: "anak" }}
              >
                <ul className="navbar-nav justify-content-end text-center flex-grow-1 mt-4">
                  <li className="nav-item mb-3">
                    <a className="nav-link" href="/projects/0">Mobile App</a>
                  </li>
                  <li className="nav-item mb-3">
                    <a className="nav-link" href="/projects/1">Booking App</a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link" href="/projects/2">Ticket App</a>
                  </li>
                  <Spacer/>
                  <li className="nav-item">
                    <a
                      className="btn btn-light"
                      style={{ fontSize: "24px", width: "150px" }}
                      href="/"
                    >
                      Home
                    </a>
                  </li>
                </ul>
                <br />
                <div className="container text-center">
                  <div className="container-fluid" id="offcanvasIcons">
                    <a
                      href="https://github.com/AlexanderThompson64"
                      className="bi bi-github me-4"
                      id="footer-github"
                      style={{ color: "whitesmoke" }}
                    ></a>
                    <a
                      href="https://www.linkedin.com/in/alexander-thompson-095a171b7/"
                      className="bi bi-linkedin me-4"
                      id="footer-linkedin"
                      style={{ color: "whitesmoke" }}
                    ></a>
                    <a
                      href="https://www.instagram.com/lexilex64/"
                      className="bi bi-instagram me-4"
                      id="footer-instagram"
                      style={{ color: "whitesmoke" }}
                    ></a>
                    <a
                      href="https://twitter.com/theATdeveloper"
                      className="bi bi-twitter"
                      id="footer-twitter"
                      style={{ color: "whitesmoke" }}
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default ProjectPageNavbar;
