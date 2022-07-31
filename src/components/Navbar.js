const Navbar = () => {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand ms-4" style={{}} href="/">
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
          >
            <div className="offcanvas-header">
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
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                      A.Thompson
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="offcanvas-body lead">
              <ul className="navbar-nav justify-content-end text-center flex-grow-1">
                <li className="nav-item">
                  <a className="nav-link mb-2" aria-current="fasls" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mb-2" href="About">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mb-2" href="Services">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mb-2" href="Projects">
                    Projects
                  </a>
                </li>
              </ul>
              <br />
              <div className="container text-center">
                <div className="container-fluid" id="icons">
                  <a
                    href="https://github.com/AlexanderThompson64"
                    className="bi bi-github me-4"
                    id="footer-github"
                  ></a>
                  <a
                    href="https://www.linkedin.com/in/alexander-thompson-095a171b7/"
                    className="bi bi-linkedin me-4"
                    id="footer-linkedin"
                  ></a>
                  <a
                    href="https://www.instagram.com/lexilex64/"
                    className="bi bi-instagram me-4"
                    id="footer-instagram"
                  ></a>
                  <a
                    href="https://twitter.com/theATdeveloper"
                    className="bi bi-twitter"
                    id="footer-twitter"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
