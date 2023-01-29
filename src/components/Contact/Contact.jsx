import Title from "../Title/Title";
import ContactForm from "./ContactForm";
import ContactSocial from "./ContactSocial";
import "./contact.css";

function Contact() {
  return (
    <section className="section contact" name="Contact">
      <Title title={"Get in touch"} sub={"Contact Me"} />

      <div className="contact__container container grid">
        <ContactSocial />
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
