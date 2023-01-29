import Title from "../Title/Title";
import Frontend from "./Frontend";
import Backend from "./Backend";
import "./skills.css";

function Skills() {
  return (
    <section className="section skills" name="Skills">
      <Title title={"Skills"} sub={"My Technical Level"} />

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
}

export default Skills;
