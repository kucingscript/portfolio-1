import { LazyLoadImage } from "react-lazy-load-image-component";

function WorkItem({ item }) {
  return (
    <div
      className="work__card"
      key={item.id}
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <LazyLoadImage src={item.image} alt={item.title} className="work__img" />
      <div className="img__overlay">
        <div className="overlay__text">{item.text}</div>
      </div>

      <h3 className="work__title">{item.title}</h3>
      <a
        href={item.link}
        className="work__button"
        target={"_blank"}
        rel={"noopener noreferrer"}
      >
        Demo <i className="bx bxs-chevron-right work__button-icon"></i>
      </a>
    </div>
  );
}

export default WorkItem;
