import Title from "../Title/Title";
import Content from "./Content";
import { journeyLists } from "../../constants";
import "./journey.css";

function Journey() {
  return (
    <section className="journey section">
      <Title title={"Journey"} sub={"My Coding Journey"} />

      <div className="journey__container container">
        <div className="journey__tabs">
          {journeyLists.map((item, index) => {
            return (
              <div
                className="journey__button button--flex"
                key={index}
                data-aos="fade-up"
                data-aos-delay={item.delay}
              >
                <i className={item.icon}></i>
                {item.text}
              </div>
            );
          })}
        </div>
        <div className="journey__sections">
          <div className="journey__content">
            <Content />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journey;
