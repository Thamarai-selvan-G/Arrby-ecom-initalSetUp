import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Faq1 from "@/components/othersPages/faq/Faq1";
import Faq2 from "@/components/othersPages/faq/Faq2";
import Faq3 from "@/components/othersPages/faq/Faq3";
import React from "react";
import Link from "next/link";
export const metadata = {
  title: "Faq 1 || Ecomus - Ultimate Nextjs Ecommerce Template",
  description: "Ecomus - Ultimate Nextjs Ecommerce Template",
};
export default function page() {
  return (
    <>
      <Header2 />
      <>
        <div className="tf-page-title style-2">
          <div className="container-full">
            <div className="heading text-center">FAQ 01</div>
          </div>
        </div>
        {/* /page-title */}
        {/* FAQ */}
        <section className="flat-spacing-11">
          <div className="container">
            <div className="tf-accordion-wrap d-flex justify-content-between">
              <div className="content">
                <Faq1 />
                <Faq2 />
                <Faq3 />
              </div>
              <div className="box tf-other-content radius-10 bg_grey-8">
                <h5 className="mb_20">Have a question</h5>
                <p className="text_black-2 mb_40">
                  If you have an issue or question that requires immediate
                  assistance, you can click the button below to chat live with a
                  Customer Service representative.
                  <br />
                  <br />
                  Please allow 06 - 12 business days from the time your package
                  arrives back to us for a refund to be issued.
                </p>
                <div className="d-flex gap-20 align-items-center">
                  <Link
                    href={`/contact-1`}
                    className="tf-btn radius-3 btn-fill animate-hover-btn justify-content-center"
                  >
                    Contact us
                  </Link>
                  <Link href={`/contact-2`} className="tf-btn btn-line">
                    Live chat
                    <i className="icon icon-arrow1-top-left" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>

      <Footer1 />
    </>
  );
}
