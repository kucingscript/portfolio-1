import { Link } from "react-scroll";
import { lists, links } from "./data";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer__container container">
        <h2 className="footer__title">KucingScript</h2>

        <ul className="footer__list">
          {lists.map((list, index) => {
            return (
              <li key={index}>
                <Link
                  to={list.text}
                  duration={500}
                  spy={true}
                  smooth={true}
                  className="footer__link"
                >
                  {list.text}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="footer__social">
          {links.map((item, index) => {
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
