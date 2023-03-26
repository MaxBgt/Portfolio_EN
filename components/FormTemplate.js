import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const FormTemplate = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMessage = document.querySelector(".form-message");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE,
        form.current,
        process.env.NEXT_PUBLIC_KEY_FORM
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          formMessage.innerHTML = "<p class='sucess'>Message envoyé !</p>";

          setTimeout(() => {
            formMessage.innerHTML = "";
          }, 2500);
        },
        (error) => {
          console.log(error.text);
          formMessage.innerHTML =
            "<p class='error'>Le message ne s'est pas envoyé</p>";

          setTimeout(() => {
            formMessage.innerHTML = "";
          }, 2500);
        }
      );
  };

  return (
    <div className="form-container">
      <form ref={form} onSubmit={sendEmail} className="form">
        <label className="lab">Nom</label>
        <input type="text" name="nom" required autoComplete="off" />
        <label className="lab">Email</label>
        <input type="email" name="email" required autoComplete="off" />
        <label className="lab">Message</label>
        <textarea name="message" className="message" />
        <input type="submit" value="Envoyer" className="submit" />
      </form>
      <div className="form-message"></div>
    </div>
  );
};
