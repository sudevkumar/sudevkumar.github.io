import "./contactme.css";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import emailjs from "emailjs-com";

import React, { useRef } from "react";

function Contactme() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_bq6n1r4",
      "template_91b3lfn",
      form.current,
      "8BfXOONaJLuriNrOJ"
    );
    e.target.reset();
  };

  return (
    <div className="contact">
      <div className="contact-details">
        {/* Emial */}
        <div className="contact-detail">
          <div className="contact-logo">
            <MdEmail style={{ color: "rgb(248, 217, 15)", fontSize: "60px" }} />
          </div>
          <div className="contact-which">
            <h2>Email</h2>
          </div>
          <div className="contact-via">
            <h3>sudevkumar82@gmail.com</h3>
          </div>
        </div>

        {/* Phone */}

        <div className="contact-detail">
          <div className="contact-logo">
            <MdPhone style={{ color: "rgb(248, 217, 15)", fontSize: "60px" }} />
          </div>
          <div className="contact-which">
            <h2>Phone Number</h2>
          </div>
          <div className="contact-via">
            <h3>+91 - 8328847712</h3>
          </div>
        </div>

        {/* Address */}
        <div className="contact-detail">
          <div className="contact-logo">
            <MdLocationOn
              style={{ color: "rgb(248, 217, 15)", fontSize: "60px" }}
            />
          </div>
          <div className="contact-which">
            <h2>Email</h2>
          </div>
          <div className="contact-via">
            <h3>Cuttack, Odisha</h3>
          </div>
        </div>
      </div>

      {/* From */}
      <div className="forms">
        <div className="form-heading">
          <h1 className="flow">
            <span>Have</span> A Chat{" "}
          </h1>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name..."
            required
            autocomplete="off"
          />
          <input
            type="text"
            name="email"
            placeholder="Your Email.."
            required
            autocomplete="off"
          />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="7"
            placeholder="Enter Your Messege"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary" >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contactme;
