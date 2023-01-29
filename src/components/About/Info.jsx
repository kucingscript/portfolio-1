import { lists } from "./data";

function Info() {
  return (
    <div className="about__info grid">
      {lists.map((item, index) => {
        return (
          <div
            className="about__box"
            key={index}
            data-aos="fade-up"
            data-aos-delay={item.delay}
          >
            <i className={item.icon}></i>
            <h3 className="about__title">{item.text}</h3>
            <span className="about__subtitle">{item.subtext}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Info;
