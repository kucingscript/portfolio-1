import Works from "./Works";
import Title from "../Title/Title";
import "./work.css";

function Work() {
  return (
    <section className="section work" name="Portfolio">
      <Title title={"Portfolio"} sub={"Most recent works"} />
      <Works />
    </section>
  );
}

export default Work;
