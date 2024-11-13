"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
export default function NewsLetter() {
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
    <section className="flat-spacing-24 pb_0 tf-slideshow tf-form-sneaker">
      <div className="banner-wrapper">
        <Image
          className="lazyload"
          data-src="/images/slider/bg-sneaker.jpg"
          alt="collection-img"
          src="/images/slider/bg-sneaker.jpg"
          width={1920}
          height={589}
        />
        <div className="container-full">
          <div className="box-content bg_white">
            <div
              className="flat-title text-center mb_1 wow fadeInUp"
              data-wow-delay="0s"
            >
              <span className="title text_black fw-7">
                BECOME PART <br />
                OF THE ECOMUS DISTRICT
              </span>
              <p className="sub-title text_black">
                Promotions, new products and sales. Directly to your inbox.
              </p>
            </div>
            <div className="flat-subscrite-wrap">
              <div className={`tfSubscribeMsg ${showMessage ? "active" : ""}`}>
                {success ? (
                  <p style={{ color: "rgb(52, 168, 83)" }}>
                    You have successfully subscribed.
                  </p>
                ) : (
                  <p style={{ color: "red" }}>Something went wrong</p>
                )}
              </div>
              <form
                ref={formRef}
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMail();
                }}
                className="form-newsletter"
                action="#"
                method="post"
                acceptCharset="utf-8"
                data-mailchimp="true"
              >
                <div id="subscribe-content" className="subscribe-content">
                  <fieldset className="email">
                    <input
                      required
                      type="email"
                      name="email-form"
                      placeholder="Enter email address"
                      tabIndex={0}
                      aria-required="true"
                      autoComplete="abc@xyz.com"
                    />
                  </fieldset>
                  <div className="button-submit">
                    <button
                      className="tf-btn mt-0 bg-yellow-9 text_black btn-sm animate-hover-btn text-uppercase letter-2 fw-6"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
                <div id="subscribe-msg" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
