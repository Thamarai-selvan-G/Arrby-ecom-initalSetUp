import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Faq1 from "@/components/othersPages/faq/Faq1";
import Faq2 from "@/components/othersPages/faq/Faq2";
import Faq3 from "@/components/othersPages/faq/Faq3";
import React from "react";
import Link from "next/link";
export const metadata = {
  title: "Faq 2 || Ecomus - Ultimate Nextjs Ecommerce Template",
  description: "Ecomus - Ultimate Nextjs Ecommerce Template",
};
export default function page() {
  return (
    <>
      <Header2 />
      <>
        {/* page-title */}
        <div className="tf-page-title style-2">
          <div className="container-full">
            <div className="heading text-center">FAQ 02</div>
          </div>
        </div>
        {/* /page-title */}
        {/* FAQ */}
        <section className="flat-spacing-11">
          <div className="container">
            <div className="tf-accordion-wrap d-flex justify-content-between">
              <div className="box">
                <div className="tf-accordion-link-list w-100 sticky-top radius-10 border-line">
                  <div className="tf-link-item">
                    <a
                      className="d-flex justify-content-between align-items-center line"
                      href="#shopping-information"
                    >
                      <h6 className="fw-5">Shopping Information</h6>
                      <div className="icon">
                        <i className="icon-arrow1-top-left" />
                      </div>
                    </a>
                  </div>
                  <div className="tf-link-item">
                    <a
                      className="d-flex justify-content-between align-items-center line"
                      href="#payment-information"
                    >
                      <h6 className="fw-5">Payment Information</h6>
                      <div className="icon">
                        <i className="icon-arrow1-top-left" />
                      </div>
                    </a>
                  </div>
                  <div className="tf-link-item">
                    <a
                      className="d-flex justify-content-between align-items-center line"
                      href="#order-returns"
                    >
                      <h6 className="fw-5">Order Returns</h6>
                      <div className="icon">
                        <i className="icon-arrow1-top-left" />
                      </div>
                    </a>
                  </div>
                  <div className="tf-link-item">
                    <Link
                      className="d-flex justify-content-between align-items-center"
                      href={`/contact-1`}
                    >
                      <h6 className="fw-5">Contact us</h6>
                      <div className="icon">
                        <i className="icon-arrow1-top-left" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="content">
                <Faq1 />
                <Faq2 />
                <Faq3 />
              </div>
            </div>
          </div>
        </section>
      </>

      <Footer1 />
    </>
  );
}
