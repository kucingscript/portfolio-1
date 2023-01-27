function ContactSocial() {
  const socialMedia = [
    {
      title: "Facebook",
      subtitle: "Rasyidz.ar",
      href: "https://www.facebook.com/RasyidzScreamo.221016",
      icon: "bx bxl-facebook-square contact__card-icon",
      delay: 300,
    },
    {
      title: "Email",
      subtitle: "arrasyidsarifullah@gmail.com",
      href: "mailto:arrasyidsarifullah@gmail.com",
      icon: "bx bxl-gmail contact__card-icon",
      delay: 350,
    },
    {
      title: "Instagram",
      subtitle: "Kucingscript",
      href: "https://www.instagram.com/kucingscript/",
      icon: "bx bxl-instagram-alt contact__card-icon",
      delay: 400,
    },
  ];

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
              <a href={item.href} target={"_blank"} className="contact__button">
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
