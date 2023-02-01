import { inputForm } from "../../constants";
import Button from "./Button";

function ContactForm() {
  return (
    <div className="contact__content">
      <h3 className="contact__title" data-aos="fade-up" data-aos-delay="350">
        Write me your project
      </h3>
      <form
        method="POST"
        action={import.meta.env.VITE__ENDPOINT}
        className="contact__form"
      >
        {inputForm.map((item, index) => {
          return (
            <div
              className="contact__form-div"
              key={index}
              data-aos="fade-up"
              data-aos-delay={item.delay}
            >
              <label className="contact__form-tag">{item.label}</label>
              <input
                type={item.inputType}
                name={item.inputName}
                className="contact__form-input"
                placeholder={item.ph}
                required
              />
            </div>
          );
        })}

        <div
          className="contact__form-div contact__form-area"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <label className="contact__form-tag">Project</label>
          <textarea
            name="project"
            className="contact__form-input"
            placeholder="Write your project"
            required
          ></textarea>
        </div>
        <Button />
      </form>
    </div>
  );
}

export default ContactForm;
