import "./contact.css";
import ContactForm from "./ContactForm";
import ContactSocial from "./ContactSocial";

function Contact() {
  return (
    <section className="section contact" name="Contact">
      <h2 className="section__title" data-aos="fade-up" data-aos-delay="200">
        Get in touch
      </h2>
      <span
        className="section__subtitle"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Contact Me
      </span>

      <div className="contact__container container grid">
        <ContactSocial />
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
