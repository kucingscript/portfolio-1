import { useState } from "react";
import { servicesContent } from "./data";
import "./services.css";

function Services() {
  const [showModal, setShowModal] = useState(0);
  const modalTab = (index) => {
    setShowModal(index);
  };

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
                    <li className="services__modal-service">
                      <i className="bx bx-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">{item.modal1}</p>
                    </li>

                    <li className="services__modal-service">
                      <i className="bx bx-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">{item.modal2}</p>
                    </li>

                    <li className="services__modal-service">
                      <i className="bx bx-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">{item.modal3}</p>
                    </li>
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
