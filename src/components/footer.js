const Footer = () => {
  return (
    <div className="Footer">
      <div className="container d-flex justify-content-center">
        <div className="footerIcons mt-4 mb-4" id="offcanvasIcons" style={{fontSize: "30px"}}>
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
  );
};

export default Footer;
