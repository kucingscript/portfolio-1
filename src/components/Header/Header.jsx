import { useState } from "react";
import { Link } from "react-scroll";
import "./header.css";

function Header() {
  const [toggle, setToggle] = useState(false);

  const lists = [
    { icons: "bx bx-home nav__icon active__link", text: "Home" },
    { icons: "bx bx-user-pin nav__icon", text: "About" },
    { icons: "bx bx-git-branch nav__icon", text: "Skills" },
    { icons: "bx bx-briefcase nav__icon", text: "Services" },
    { icons: "bx bx-git-compare nav__icon", text: "Portfolio" },
    { icons: "bx bx-send nav__icon", text: "Contact" },
  ];

  return (
    <header>
      <nav className="container">
        <Link
          to="Home"
          className="nav__logo"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          KucingScript
        </Link>

        <div className={toggle ? "nav__menu show__menu" : "nav__menu"}>
          <ul
            className="nav__list grid"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            {lists.map((item, index) => {
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
