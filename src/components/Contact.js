// Imports
import React from "react";
import { contact } from "../data";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_osvkvtl",
        "template_33bgi1e",
        form.current,
        "l0foi6hnOWruWHWDr"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="section bg-primary" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block">
            Contact me
          </h2>
          <p className="subtitle">
            If you would like to reach out to me , discuss about an upcoming
            project or job offer please feel free to send me an email :)
          </p>
        </div>
        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className="flex flex-col lg:flex-row gap-x-4" key={index}>
                  <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-body text-xl mb-1">{title}</h4>
                    <p className="mb-1 text-paragraph">{subtitle}</p>
                    <p className="text-accent font-normal ">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <form
            className="space-y-8 w-full max-w-[780px]"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="flex gap-8">
              <input
                className="input"
                type="text"
                placeholder="Your name"
                name="to_name"
              />
              <input
                className="input"
                type="email"
                placeholder="Your email"
                name="from_name"
              />
            </div>

            <textarea
              className="textarea"
              placeholder="Your message"
              name="message"
            ></textarea>

            <Popup
              trigger={
                <button
                  className="btn btn-lg bg-accent hover:bg-secondary-hover"
                  type="submit"
                  value="Send"
                >
                  Send message
                </button>
              }
              position="right center"
            >
              <div>Message Sent</div>
            </Popup>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
