import React from "react";
import "./Contact.css";
import { Form } from "react-router-dom";

export const contactData = async({request}) => {
  try {
    const res = await request.formData();
    const data = Object.fromEntries(res);
    console.log(data);
    return null;
  }
  catch (err) {
    console.log(err)
  }
}
const Contact = () => {

  return (
    <main className="contact-page">

      <section className="contact-hero">
        <span>GET IN TOUCH</span>
        <h1>Contact CineVault</h1>
        <p>
          Have a question, suggestion, or feedback? Send us a message.
        </p>
      </section>

      <section className="contact-section">

        <div className="contact-info">
          <span>CONTACT US</span>
          <h2>We'd Love To Hear From You</h2>

          <p>
            Whether you have feedback about CineVault or just want to
            say hello, feel free to reach out.
          </p>

          <div className="contact-item">
            <strong>Email</strong>
            <span>hello@cinevault.com</span>
          </div>

          <div className="contact-item">
            <strong>Location</strong>
            <span>Pakistan</span>
          </div>
        </div>

        <Form className="contact-form" method="POST" >

          <div className="input-group">
            <label>Name</label>
            <input
              name = "username"
              type="text"
              placeholder="Your name"
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              name = "email"
              type="email"
              placeholder="Your email"
            />
          </div>

          <div className="input-group">
            <label>Message</label>
            <textarea
              name = "message"
              rows="6"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button type="submit" onClick={() => alert("your response is submitted")}>
            Send Message
          </button>

        </Form>

      </section>

    </main>
  );
};

export default Contact;

