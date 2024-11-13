"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
export default function ContactForm2() {
  const formRef = useRef();
  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const sendMail = (e) => {
    emailjs
      .sendForm("service_noj8796", "template_fs3xchn", formRef.current, {
        publicKey: "iG4SCmR-YtJagQ4gV",
      })
      .then((res) => {
        if (res.status === 200) {
          setSuccess(true);
          handleShowMessage();
          formRef.current.reset();
        } else {
          setSuccess(false);
          handleShowMessage();
        }
      });
  };
  return (
    <section className="bg_grey-7 flat-spacing-9">
      <div className="container">
        <div className="flat-title">
          <span className="title">Get in Touch</span>
          <p className="sub-title text_black-2">
            If you’ve got great products your making or looking to work with us
            then drop us a line.
          </p>
        </div>
        <div>
          <form
            ref={formRef}
            onSubmit={(e) => {
              e.preventDefault();
              sendMail();
            }}
            className="mw-705 mx-auto text-center form-contact"
            id="contactform"
            action="./contact/contact-process.php"
            method="post"
          >
            <div className="d-flex gap-15 mb_15">
              <fieldset className="w-100">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Name *"
                />
              </fieldset>
              <fieldset className="w-100">
                <input
                  type="email"
                  autoComplete="abc@xyz.com"
                  name="email"
                  id="email"
                  required
                  placeholder="Email *"
                />
              </fieldset>
            </div>
            <div className="mb_15">
              <textarea
                placeholder="Message"
                name="message"
                id="message"
                required
                cols={30}
                rows={10}
                defaultValue={""}
              />
            </div>
            <div className="send-wrap">
              <div className={`tfSubscribeMsg ${showMessage ? "active" : ""}`}>
                {success ? (
                  <p style={{ color: "rgb(52, 168, 83)" }}>
                    Message has been sent successfully.
                  </p>
                ) : (
                  <p style={{ color: "red" }}>Something went wrong</p>
                )}
              </div>
              <button
                type="submit"
                className="tf-btn radius-3 btn-fill animate-hover-btn justify-content-center"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
