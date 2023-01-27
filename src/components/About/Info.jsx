function Info() {
  const lists = [
    {
      icon: "bx bx-award about__icon",
      text: "Experience",
      subtext: "1 Years Working",
      delay: 400,
    },
    {
      icon: "bx bx-message-rounded-check about__icon",
      text: "Completed",
      subtext: "14 + Projects",
      delay: 500,
    },
    {
      icon: "bx bx-support about__icon",
      text: "Support",
      subtext: "Online 24/7",
      delay: 600,
    },
  ];

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
