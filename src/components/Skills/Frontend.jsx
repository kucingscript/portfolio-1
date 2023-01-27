function Frontend() {
  const skills = [
    [
      { name: "HTML", level: "Advanced", delay: 400, icon: "bx bxl-html5" },
      { name: "CSS", level: "Advanced", delay: 500, icon: "bx bxl-css3" },
      {
        name: "JavaScript",
        level: "Intermediate",
        delay: 600,
        icon: "bx bxl-javascript",
      },
    ],
    [
      { name: "React", level: "Beginner", delay: 450, icon: "bx bxl-react" },
      {
        name: "Tailwind",
        level: "Intermediate",
        delay: 550,
        icon: "bx bxl-tailwind-css",
      },
      {
        name: "Bootstrap",
        level: "Beginner",
        delay: 650,
        icon: "bx bxl-bootstrap",
      },
    ],
  ];

  return (
    <div className="skills__content" data-aos="fade-up" data-aos-delay="400">
      <h3 className="skills__title">Frontend Stack</h3>
      <div className="skills__box">
        <div className="skills__group">
          {skills[0].map((item, index) => {
            return (
              <div
                className="skills__data"
                key={index}
                data-aos="fade-up"
                data-aos-delay={item.delay}
              >
                <i className={item.icon}></i>

                <div>
                  <h3 className="skills__name">{item.name}</h3>
                  <span className="skills__level">{item.level}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="skills__group">
          {skills[1].map((item, index) => {
            return (
              <div
                className="skills__data"
                key={index}
                data-aos="fade-up"
                data-aos-delay={item.delay}
              >
                <i className={item.icon}></i>

                <div>
                  <h3 className="skills__name">{item.name}</h3>
                  <span className="skills__level">{item.level}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Frontend;
