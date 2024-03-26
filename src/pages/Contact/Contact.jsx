import React, { useRef, useState } from "react";
import { FaEnvelopeOpen, FaPhoneSquareAlt, FaWhatsapp } from "react-icons/fa";
import "./Contact.css";
import { FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_52ux8sj", "template_jg0is3g", form.current, {
        publicKey: "8BfXOONaJLuriNrOJ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Email sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.success("Something went wrong!");
        }
      );
  };

  return (
    <section className=" contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Let's have a chat!</h3>
          <p className="contact__description">
            I'm always open to discussing new projects, creative ideas and
            opportunities to be part of your vision.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail Me</span>
                <h4 className="info__desc">sudevkumar82@gmail.com</h4>
              </div>
            </div>
            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call Me</span>
                <h4 className="info__desc">+91 8328847712</h4>
              </div>
            </div>
            <div className="info__item">
              <FaWhatsapp className="info__icon" />
              <div>
                <span className="info__title">Whats App Me</span>
                <h4 className="info__desc">+91 8328847712</h4>
              </div>
            </div>
          </div>
        </div>

        <form
          action=""
          className="contact__form"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="from__input-group">
            <div className="form__input-div">
              <input
                type="text"
                className="form__control"
                placeholder="Your Name..."
                name="name"
                id=""
                required
                autocomplete="off"
              />
            </div>
            <div className="form__input-div">
              <input
                type="email"
                className="form__control"
                placeholder="Your Email..."
                name="email"
                id=""
                required
                autocomplete="off"
              />
            </div>
            <div className="form__input-div">
              <input
                type="text"
                className="form__control"
                placeholder="Your Subject..."
                name="subject"
                id=""
                required
                autocomplete="off"
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              name="message"
              required
              autocomplete="off"
              className="form__control textarea"
              placeholder="Your Message..."
            ></textarea>
          </div>
          <button className="button">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
