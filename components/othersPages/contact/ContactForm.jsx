"use client";
import { socialLinksWithBorder } from "@/data/socials";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
export default function ContactForm() {
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
    <section className="flat-spacing-21">
      <div className="container">
        <div className="tf-grid-layout gap30 lg-col-2">
          <div className="tf-content-left">
            <h5 className="mb_20">Visit Our Store</h5>
            <div className="mb_20">
              <p className="mb_15">
                <strong>Address</strong>
              </p>
              <p>66 Mott St, New York, New York, Zip Code: 10006, AS</p>
            </div>
            <div className="mb_20">
              <p className="mb_15">
                <strong>Phone</strong>
              </p>
              <p>(623) 934-2400</p>
            </div>
            <div className="mb_20">
              <p className="mb_15">
                <strong>Email</strong>
              </p>
              <p>EComposer@example.com</p>
            </div>
            <div className="mb_36">
              <p className="mb_15">
                <strong>Open Time</strong>
              </p>
              <p className="mb_15">Our store has re-opened for shopping,</p>
              <p>exchange Every day 11am to 7pm</p>
            </div>
            <div>
              <ul className="tf-social-icon d-flex gap-20 style-default">
                {socialLinksWithBorder.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className={`box-icon link round ${link.className} ${link.borderClass}`}
                    >
                      <i
                        className={`icon ${link.iconSize} ${link.iconClass}`}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="tf-content-right">
            <h5 className="mb_20">Get in Touch</h5>
            <p className="mb_24">
              If you’ve got great products your making or looking to work with
              us then drop us a line.
            </p>
            <div>
              <form
                ref={formRef}
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMail();
                }}
                className="form-contact"
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
                <div
                  className={`tfSubscribeMsg ${showMessage ? "active" : ""}`}
                >
                  {success ? (
                    <p style={{ color: "rgb(52, 168, 83)" }}>
                      Message has been sent successfully.
                    </p>
                  ) : (
                    <p style={{ color: "red" }}>Something went wrong</p>
                  )}
                </div>
                <div className="send-wrap">
                  <button
                    type="submit"
                    className="tf-btn w-100 radius-3 btn-fill animate-hover-btn justify-content-center"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
