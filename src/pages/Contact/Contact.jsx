import { useState } from "react";
import { send } from "emailjs-com";
import "./Contact.css";

export function Contact() {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      "service_ael6igl",
      "template_v8rz2zg",
      toSend,
      "user_OBBKgFy2eTR0WX4hOsnzc"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <div className="form-div">
        <form onSubmit={onSubmit} className="contact-form">
          <input
            type="text"
            name="from_name"
            placeholder="Name"
            value={toSend.from_name}
            onChange={handleChange}
            className="contact-form-field"
          />
          <input
            type="text"
            name="message"
            placeholder="Your message"
            value={toSend.message}
            onChange={handleChange}
            className="contact-form-field"
          />
          <input
            type="text"
            name="reply_to"
            placeholder="Your email"
            value={toSend.reply_to}
            onChange={handleChange}
            className="contact-form-field"
          />
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
      <div>
        <p>Phone Number: 0724447609</p>
        <p>Email: razvan_ilea12@yahoo.com</p>
      </div>
    </div>
  );
}
