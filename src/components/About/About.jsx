import IMG from "/profile.webp";
import Info from "./Info";
import Description from "./Description";
import Title from "../Title/Title";
import "./about.css";

function About() {
  return (
    <section className="section about" name="About">
      <Title title={"About"} sub={"My Introduction"} />

      <div className="about__container container grid">
        <img
          src={IMG}
          alt="Ar Rasyid Sarifullah's Profile"
          className="about__img"
          data-aos="fade-up"
          data-aos-delay="400"
        />
        <div className="about__data">
          <Info />
          <Description />
        </div>
      </div>
    </section>
  );
}

export default About;
