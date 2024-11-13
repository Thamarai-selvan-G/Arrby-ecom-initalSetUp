"use client";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import Link from "next/link";
import LanguageSelect from "../common/LanguageSelect";
import CurrencySelect from "../common/CurrencySelect";
import { aboutLinks, footerLinks, paymentImages } from "@/data/footerLinks";
export default function Footer3() {
  useEffect(() => {
    const headings = document.querySelectorAll(".footer-heading-moblie");

    const toggleOpen = (event) => {
      const parent = event.target.closest(".footer-col-block");

      parent.classList.toggle("open");
    };

    headings.forEach((heading) => {
      heading.addEventListener("click", toggleOpen);
    });

    // Clean up event listeners when the component unmounts
    return () => {
      headings.forEach((heading) => {
        heading.removeEventListener("click", toggleOpen);
      });
    };
  }, []); // Empty dependency array means this will run only once on mount
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
    <footer id="footer" className="footer has-border has-border-full">
      <div className="footer-wrap">
        <div className="footer-body">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="d-flex justify-content-center flex-wrap">
                  <div className="footer-newsletter footer-col-block">
                    <div className="footer-heading footer-heading-desktop">
                      <h6>Sign Up for Email</h6>
                    </div>
                    <div className="footer-heading footer-heading-moblie">
                      <h6>Sign Up for Email</h6>
                    </div>
                    <div className="tf-collapse-content">
                      <div className="footer-menu_item">
                        Sign up to get first dibs on new arrivals, sales,
                        exclusive content, events and more!
                      </div>
                      <div
                        className={`tfSubscribeMsg ${
                          showMessage ? "active" : ""
                        }`}
                      >
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
                      >
                        <fieldset className="email">
                          <input
                            required
                            type="email"
                            placeholder="Enter your email...."
                            className=""
                            name="email"
                            tabIndex={0}
                            defaultValue=""
                            aria-required="true"
                            autoComplete="abc@xyz.com"
                          />
                        </fieldset>
                        <div className="button-submit">
                          <button
                            className="tf-btn btn-sm radius-3 btn-fill btn-icon animate-hover-btn"
                            type="submit"
                          >
                            Subscribe
                            <i className="icon icon-arrow1-top-left" />
                          </button>
                        </div>
                      </form>
                      <div className="tf-cur">
                        <div className="tf-currencies">
                          <CurrencySelect />
                        </div>
                        <div className="tf-languages">
                          <LanguageSelect
                            parentClassName={
                              "image-select center style-default type-languages"
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="footer-col footer-col-1 footer-col-block">
                    <div className="footer-heading footer-heading-desktop">
                      <h6>Help</h6>
                    </div>
                    <div className="footer-heading footer-heading-moblie">
                      <h6>Help</h6>
                    </div>
                    <ul className="footer-menu-list tf-collapse-content">
                      {footerLinks.map((link, index) => (
                        <li key={index}>
                          <Link href={link.href} className="footer-menu_item">
                            {link.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="footer-col footer-col-2 footer-col-block">
                    <div className="footer-heading footer-heading-desktop">
                      <h6>About us</h6>
                    </div>
                    <div className="footer-heading footer-heading-moblie">
                      <h6>About us</h6>
                    </div>
                    <ul className="footer-menu-list tf-collapse-content">
                      {aboutLinks.slice(0, 4).map((link, index) => (
                        <li key={index}>
                          <Link href={link.href} className="footer-menu_item">
                            {link.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="footer-col footer-col-3 footer-col-block">
                    <div className="footer-heading footer-heading-desktop">
                      <h6>Find us</h6>
                    </div>
                    <div className="footer-heading footer-heading-moblie">
                      <h6>Find us</h6>
                    </div>
                    <ul className="footer-menu-list tf-collapse-content">
                      <li>
                        <div className="footer-menu_item">
                          Find a location nearestyou.
                        </div>
                      </li>
                      <li>
                        <a href="#" className="footer-menu_item">
                          See Our Stores
                        </a>
                      </li>
                      <li>
                        <a href="#" className="footer-menu_item">
                          (08) 8942 1299
                        </a>
                      </li>
                      <li>
                        <a href="#" className="footer-menu_item">
                          hello@domain.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="footer-bottom-wrap d-flex gap-20 flex-wrap justify-content-between align-items-center">
                  <div className="footer-menu_item">
                    © {new Date().getFullYear()} Ecomus Store. All Rights
                    Reserved
                  </div>
                  <div className="tf-payment">
                    {paymentImages.map((image, index) => (
                      <Image
                        key={index}
                        src={image.src}
                        width={image.width}
                        height={image.height}
                        alt={image.alt}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
