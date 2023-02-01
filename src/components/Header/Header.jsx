import { useState } from "react";
import { Link } from "react-scroll";
import { headerLists } from "../../constants";
import "./header.css";

function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <header>
      <nav className="container">
        <Link to="Home" className="nav__logo">
          KucingScript
        </Link>

        <div className={toggle ? "nav__menu show__menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {headerLists.map((item, index) => {
              return (
                <Link
                  key={index}
                  to={item.text}
                  smooth={true}
                  spy={true}
                  duration={500}
                >
                  <li className="nav__item" onClick={() => setToggle(!toggle)}>
                    <span className="nav__link">
                      <i className={item.icons}></i>
                      {item.text}
                    </span>
                  </li>
                </Link>
              );
            })}
          </ul>
          <i
            className="bx bx-x nav__close"
            onClick={() => setToggle(!toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
          <i className="bx bx-food-menu"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
