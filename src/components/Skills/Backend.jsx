function Backend() {
  const skills = [
    [
      { name: "Node", level: "Beginner", delay: 500, icon: "bx bxl-nodejs" },
      {
        name: "Express",
        level: "Beginner",
        delay: 600,
        icon: "bx bxs-file-js",
      },
    ],
    [
      { name: "MySQL", level: "Intermediate", delay: 550, icon: "bx bxs-data" },
      {
        name: "MongoDB",
        level: "Beginner",
        delay: 650,
        icon: "bx bxl-mongodb",
      },
    ],
  ];

  return (
    <div className="skills__content" data-aos="fade-up" data-aos-delay="500">
      <h3 className="skills__title">Backend Stack</h3>
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

export default Backend;
