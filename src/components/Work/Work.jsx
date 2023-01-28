import Works from "./Works";
import "./work.css";

function Work() {
  return (
    <section className="section work" name="Portfolio">
      <h2 className="section__title" data-aos="fade-up" data-aos-delay="200">
        Portfolio
      </h2>
      <span
        className="section__subtitle"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Most recent works
      </span>
      <Works />
    </section>
  );
}

export default Work;
