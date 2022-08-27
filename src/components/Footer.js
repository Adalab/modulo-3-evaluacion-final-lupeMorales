import "../styles/layout/Footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">2022 lupeMorales</p>
      <div>
        <p className="footer__text">see more about me on:</p>
        <nav className="footer__nav">
          <a href="github">
            <i class="fa-brands fa-github-alt"></i>
          </a>
          <i class="fa-brands fa-linkedin"></i>
          <a href="twitter">
            <i class="fa-brands fa-twitter"></i>
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
