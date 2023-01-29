import Title from "../Title/Title";
import { lists } from "./data";
import Content from "./Content";
import "./journey.css";

function Journey() {
  return (
    <section className="journey section">
      <Title title={"Journey"} sub={"My Coding Journey"} />

      <div className="journey__container container">
        <div className="journey__tabs">
          {lists.map((list, index) => {
            return (
              <div
                className="journey__button button--flex"
                key={index}
                data-aos="fade-up"
                data-aos-delay={list.delay}
              >
                <i className={list.icon}></i>
                {list.text}
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
