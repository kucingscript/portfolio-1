import { useState } from "react";
import "./services.css";

function Services() {
  const [showModal, setShowModal] = useState(0);
  const modalTab = (index) => {
    setShowModal(index);
  };

  const servicesContent = [
    {
      id: 1,
      delay: 400,
      t1: "Responsive",
      t2: "Design",
      subt: "Responsive design allows your website content to flow freely across all screen resolutions and sizes, and renders it to look great on all devices.",
      icon: "bx bx-slideshow services__icon",
    },
    {
      id: 2,
      delay: 400,
      t1: "Clean",
      t2: "Code",
      subt: "The way of writing code such that the code is easily readable, testable, and less prone to errors.",
      icon: "bx bx-code-alt services__icon",
    },
    {
      id: 3,
      delay: 500,
      t1: "UX",
      t2: "Design",
      subt: "UX design focuses on building products that someone can easily use and enjoy using.",
      icon: "bx bx-user-pin services__icon",
    },
  ];

  const lists = [
    { text: "I develop the user interface" },
    { text: "Web page development" },
    { text: "I create UX element interaction" },
    { text: "I position your company brand" },
    { text: "Design and mockups of products companies" },
  ];

  return (
    <section className="section services" name="Services">
      <h2 className="section__title" data-aos="fade-up" data-aos-delay="200">
        Services
      </h2>
      <span
        className="section__subtitle"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        What I Offer
      </span>

      <div className="services__container container grid">
        {servicesContent.map((item, index) => {
          return (
            <div className="services__content" key={index}>
              <div data-aos="fade-up" data-aos-delay={item.delay}>
                <i className={item.icon}></i>
                <h3 className="services__title">
                  {item.t1} <br /> {item.t2}
                </h3>
              </div>
              <span
                className="services__button"
                onClick={() => modalTab(item.id)}
                data-aos="fade-up"
                data-aos-delay={item.delay}
              >
                View More
                <i className="bx bxs-chevron-right services__button-icon"></i>
              </span>

              <div
                className={
                  showModal === item.id
                    ? "services__modal active__modal"
                    : "services__modal"
                }
              >
                <div className="services__modal-content">
                  <i
                    className="bx bx-x services__modal-close"
                    onClick={() => modalTab(0)}
                  ></i>

                  <h3 className="services__modal-title">
                    {item.t1} {item.t2}
                  </h3>
                  <p className="services__modal-description">{item.subt}</p>

                  <ul className="services__modal-services grid">
                    {lists.map((list, index) => {
                      return (
                        <li className="services__modal-service" key={index}>
                          <i className="bx bx-check-circle services__modal-icon"></i>
                          <p className="services__modal-info">{list.text}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
