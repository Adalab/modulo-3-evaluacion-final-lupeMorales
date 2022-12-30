import "../styles/layout/Footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">2022&copy; made with ♥️ lupeMorales</p>
      <div>
        <p className="footer__text">see more about me on:</p>
        <nav className="footer__nav">
          <a
            href="https://github.com/lupeMorales"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github-alt  fa-2x"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/lupe-morales-817245226/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin fa-2x"></i>
          </a>

          <a
            href="https://twitter.com/lacanellyatope"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter fa-2x"></i>
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
