import "./contact.css";
import { Social } from "../hero/Social";
import swal from "sweetalert";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { useRef } from "react";

export const Contact = () => {
  const form = useRef();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { yes_i_understand: false },
  });

  const sendEmail = (ev) => {
    emailjs
      .sendForm(
        "service_nqlh9pa",
        "template_aa6bemb",
        form.current,
        "SODEE_LoWfgwMPNEH"
      )
      .then(
        (result) => {
          console.log(result.text);
          swal({
            title: "Successful",
            text: "The message was sent successfully.",
            icon: "success",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset();
  };

  // const sendEmail = (ev) => {
  //   ev.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_nqlh9pa",
  //       "template_aa6bemb",
  //       ev.target,
  //       "SODEE_LoWfgwMPNEH"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result);

  //         swal({
  //           title: "Successful",
  //           text: "Your message was sent successfully",
  //           icon: "success",
  //         });
  //       },
  //       (error) => {
  //         console.log(error.text);
  //         swal({
  //           title: "Error",
  //           text: error.text,
  //           icon: "error",
  //         });
  //       }
  //     );
  // };

  return (
    <>
      <section id="contact" className="contact-section">
        <div className="contact-title">
          <h1>
            Contact <span style={{ color: "#26e6c6" }}>Me</span>
          </h1>
        </div>
        <div className="form-container">
          <form ref={form} onSubmit={handleSubmit(sendEmail)} className="form">
            <label>Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="John Doe"
              {...register("user_name", { required: true })}
            />
            {errors.user_name?.type === "required" && (
              <span>Field Required</span>
            )}
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="example@email.com"
              {...register("user_email", { required: true })}
            />
            {errors.user_email?.type === "required" && (
              <span>Field Required</span>
            )}
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Enter your message"
              {...register("message", { required: true })}
            />
            {errors.message?.type === "required" && <span>Field Required</span>}
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
