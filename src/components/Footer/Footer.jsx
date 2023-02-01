import { Link } from "react-scroll";
import { footerLists, footerLinks } from "../../constants";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer__container container">
        <h2 className="footer__title">KucingScript</h2>

        <ul className="footer__list">
          {footerLists.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  to={item.text}
                  duration={500}
                  spy={true}
                  smooth={true}
                  className="footer__link"
                >
                  {item.text}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="footer__social">
          {footerLinks.map((item, index) => {
            return (
              <a
                href={item.href}
                className="footer__social-link"
                target={"_blank"}
                key={index}
              >
                <i className={item.icon}></i>
              </a>
            );
          })}
        </div>

        <span className="footer__copy">
          Build with &#10084; by KucingScript
        </span>
      </div>
    </footer>
  );
}

export default Footer;
