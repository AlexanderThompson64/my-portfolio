const Footer = () => {
  return (
    <div className="Footer">
      <div className="container d-flex justify-content-center">
        <div className="footerIcons" id="offcanvasIcons" style={{fontSize: "30px"}}>
          <i
            href="https://github.com/AlexanderThompson64"
            className="bi bi-github me-4"
            id="footer-github"
            style={{ color: "whitesmoke" }}
          ></i>
          <i
            href="https://www.linkedin.com/in/alexander-thompson-095a171b7/"
            className="bi bi-linkedin me-4"
            id="footer-linkedin"
            style={{ color: "whitesmoke" }}
          ></i> 
          <i
            href="https://www.instagram.com/lexilex64/"
            className="bi bi-instagram me-4"
            id="footer-instagram"
            style={{ color: "whitesmoke" }}
          ></i>
          <i
            href="https://twitter.com/theATdeveloper"
            className="bi bi-twitter"
            id="footer-twitter"
            style={{ color: "whitesmoke" }}
          ></i>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Footer;
