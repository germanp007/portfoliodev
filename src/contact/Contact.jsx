import "./contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Social } from "../hero/Social";
import swal from "sweetalert";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (ev) => {
    ev.preventDefault();
    console.log(ev.target[0].value, ev.target[1].value, ev.target[2].value);
    emailjs
      .sendForm(
        "service_nqlh9pa",
        "template_aa6bemb",
        form.current,
        "SODEE_LoWfgwMPNEH"
      )
      .then(
        (result) => {
          console.log(result);
          form.current.reset();
          swal({
            title: "Successful",
            text: "Your message was sent successfully",
            icon: "success",
          });
        },
        (error) => {
          console.log(error.text);
          swal({
            title: "Error",
            text: error.text,
            icon: "error",
          });
        }
      );
  };

  return (
    <>
      <section id="contact" className="contact-section">
        <div className="contact-title">
          <h1>
            Contact <span style={{ color: "#26e6c6" }}>Me</span>
          </h1>
        </div>
        <div className="form-container">
          <form ref={form} onSubmit={sendEmail} className="form">
            <label>Name</label>
            <input type="text" name="user_name" placeholder="John Doe" />
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="example@email.com"
            />
            <label>Message</label>
            <textarea name="message" placeholder="Enter your message" />
            <input id="submit" type="submit" value="Send" />
          </form>
        </div>
        <div className="contact-social">
          <Social />
        </div>
      </section>
    </>
  );
};
