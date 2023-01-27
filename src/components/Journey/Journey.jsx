import "./journey.css";

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
            <div className="journey__data">
              <div data-aos="fade-up" data-aos-delay="300">
                <h3 className="journey__title">Vocational High School</h3>
                <span className="journey__subtitle">
                  Computer and Network Engineering
                </span>
                <div className="journey__calendar">
                  <i className="bx bxs-calendar"></i>2018 - 2021
                </div>
              </div>
              <div>
                <span className="journey__rounder"></span>
                <span className="journey__line"></span>
              </div>
            </div>

            <div className="journey__data">
              <div></div>
              <div>
                <span className="journey__rounder"></span>
                <span className="journey__line"></span>
              </div>
              <div data-aos="fade-up" data-aos-delay="350">
                <h3 className="journey__title">
                  Putra Jaya Computer (Internship)
                </h3>
                <span className="journey__subtitle">IT Support</span>
                <div className="journey__calendar">
                  <i className="bx bxs-calendar"></i>July - Sept 2019
                </div>
              </div>
            </div>

            <div className="journey__data">
              <div data-aos="fade-up" data-aos-delay="400">
                <h3 className="journey__title">Student Skills Competition</h3>
                <span className="journey__subtitle">
                  IT Network System Administration
                </span>
                <div className="journey__calendar">
                  <i className="bx bxs-calendar"></i>Maret, 2021 - East Java
                </div>
              </div>
              <div>
                <span className="journey__rounder"></span>
                <span className="journey__line"></span>
              </div>
            </div>

            <div className="journey__data">
              <div></div>
              <div>
                <span className="journey__rounder"></span>
                <span className="journey__line"></span>
              </div>
              <div data-aos="fade-up" data-aos-delay="450">
                <h3 className="journey__title">
                  Politeknik Elektronika Negeri Surabaya (Internship)
                </h3>
                <span className="journey__subtitle">Network Engineer</span>
                <div className="journey__calendar">
                  <i className="bx bxs-calendar"></i>Jan - March 2020
                </div>
              </div>
            </div>

            <div className="journey__data">
              <div data-aos="fade-up" data-aos-delay="500">
                <h3 className="journey__title">Nusantara Kediri University</h3>
                <span className="journey__subtitle">
                  Informatics Engineering
                </span>
                <div className="journey__calendar">
                  <i className="bx bxs-calendar"></i>2021 - present
                </div>
              </div>
              <div>
                <span className="journey__rounder"></span>
                <span className="journey__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journey;
