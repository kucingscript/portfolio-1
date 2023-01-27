import Social from "./Social";
import Data from "./Data";
import "./home.css";

function Home() {
  return (
    <section className="home section" name="Home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div
            className="home__img"
            data-aos="fade-up"
            data-aos-delay="500"
          ></div>
          <Data />
        </div>
      </div>
    </section>
  );
}

export default Home;
