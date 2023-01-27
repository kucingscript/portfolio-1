import "./journey.css";
import Left from "./Left";
import Right from "./Right";

function Journey() {
  const lists = [
    {
      text: "Education",
      icon: "bx bxs-graduation journey__icon",
      delay: 350,
    },
    { text: "Experience", icon: "bx bxs-trophy journey__icon", delay: 400 },
  ];

  return (
    <section className="journey section">
      <h2 className="section__title" data-aos="fade-up" data-aos-delay="200">
        Journey
      </h2>
      <span
        className="section__subtitle"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        My Coding Journey
      </span>

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
            <Left
              title={"Vocational High School"}
              sub={"Computer and Network Engineering"}
              date={"2018 - 2021"}
              delay={300}
            />

            <Right
              title={"Putra Jaya Computer (Internship)"}
              sub={"IT Support"}
              date={"July - Sept 2019"}
              delay={350}
            />

            <Left
              title={"Student Skills Competition"}
              sub={"IT Network System Administration"}
              date={"Maret, 2021 - East Java"}
              delay={400}
            />

            <Right
              title={"Politeknik Elektronika Negeri Surabaya (Internship)"}
              sub={"Network Engineer"}
              date={"Jan - March 2020"}
              delay={450}
            />

            <Left
              title={"Nusantara PGRI Kediri University"}
              sub={"Informatics Engineering"}
              date={"2021 - Present"}
              delay={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journey;
