import Frontend from "./Frontend";
import Backend from "./Backend";
import "./skills.css";

function Skills() {
  return (
    <section className="section skills" name="Skills">
      <h2 className="section__title" data-aos="fade-up" data-aos-delay="200">
        Skills
      </h2>
      <span
        className="section__subtitle"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        My Technical Level
      </span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
}

export default Skills;
