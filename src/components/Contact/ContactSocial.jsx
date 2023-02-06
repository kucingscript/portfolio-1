import { socialMedia } from "../../constants";

function ContactSocial() {
  return (
    <div className="contact__content">
      <h3 className="contact__title" data-aos="fade-up" data-aos-delay="350">
        Talk to me
      </h3>

      <div className="contact__info">
        {socialMedia.map((item, index) => {
          return (
            <div
              className="contact__card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={item.delay}
            >
              <i className={item.icon}></i>
              <h3 className="contact__card-title">{item.title}</h3>
              <span className="contact__card-data">{item.subtitle}</span>
              <a
                href={item.href}
                target={"_blank"}
                rel={"noopener noreferrer"}
                className="contact__button"
              >
                Write me
                <i className="bx bxs-chevron-right contact__button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ContactSocial;
