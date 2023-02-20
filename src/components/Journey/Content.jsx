import Left from "./Left";
import Right from "./Right";

function Content() {
  return (
    <>
      <Left
        title={"Vocational High School"}
        sub={"Computer and Network Engineering"}
        date={"2018 - 2021"}
      />

      <Right
        title={"Putra Jaya Computer (Internship)"}
        sub={"IT Support"}
        date={"July - Sept 2019"}
      />

      <Left
        title={"Student Skills Competition"}
        sub={"IT Network System Administration"}
        date={"March, 2021 - East Java"}
      />

      <Right
        title={"Politeknik Elektronika Negeri Surabaya (Internship)"}
        sub={"Network Engineer"}
        date={"Jan - March 2020"}
      />

      <Left
        title={"Nusantara PGRI Kediri University"}
        sub={"Informatics Engineering"}
        date={"2021 - Present"}
      />

      <Right
        title={"Core Initiative (Internship)"}
        sub={"Frontend Developer"}
        date={"Feb 2023 - Present"}
      />
    </>
  );
}

export default Content;
