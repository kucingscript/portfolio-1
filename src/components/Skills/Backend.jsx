import { beSkills } from "./data";

function Backend() {
  return (
    <div className="skills__content" data-aos="fade-up" data-aos-delay="500">
      <h3 className="skills__title">Backend Stack</h3>
      <div className="skills__box">
        <div className="skills__group">
          {beSkills[0].map((item, index) => {
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
          {beSkills[1].map((item, index) => {
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
