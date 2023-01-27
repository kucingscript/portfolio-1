function Right({ title, sub, date, delay }) {
  return (
    <div className="journey__data">
      <div></div>
      <div>
        <span className="journey__rounder"></span>
        <span className="journey__line"></span>
      </div>
      <div data-aos="fade-up" data-aos-delay={delay}>
        <h3 className="journey__title">{title}</h3>
        <span className="journey__subtitle">{sub}</span>
        <div className="journey__calendar">
          <i className="bx bxs-calendar"></i>
          {date}
        </div>
      </div>
    </div>
  );
}

export default Right;
