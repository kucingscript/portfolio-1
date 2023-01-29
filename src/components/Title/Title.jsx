function Title({ title, sub }) {
  return (
    <>
      <h2 className="section__title" data-aos="fade-up" data-aos-delay="200">
        {title}
      </h2>
      <span
        className="section__subtitle"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {sub}
      </span>
    </>
  );
}

export default Title;
