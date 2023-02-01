import { homeLinks } from "../../constants";

function Social() {
  return (
    <div className="home__social">
      {homeLinks.map((item, index) => {
        return (
          <a
            href={item.href}
            className="home__social-icon"
            target={"_blank"}
            key={index}
            data-aos="fade-up"
            data-aos-delay={item.delay}
          >
            <i className={item.icon}></i>
          </a>
        );
      })}
    </div>
  );
}

export default Social;
