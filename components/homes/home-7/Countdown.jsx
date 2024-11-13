import React from "react";
import Link from "next/link";
import CountdownComponent from "@/components/common/Countdown";
export default function Countdown() {
  return (
    <section className="flat-spacing-10 bg_grey-4">
      <div className="container">
        <div
          className="tf-grid-layout md-col-2 align-items-center flat-wrap-countdown wow fadeInUp"
          data-wow-delay="0s"
        >
          <div className="tf-content-wrap-v2">
            <h4 className="heading">One-Time Only</h4>
            <p className="description">
              Discover the versatility of denim with our collection of jeans,
              jackets
            </p>
            <Link
              href={`/shop-collection-list`}
              className="tf-btn btn-line fw-6"
            >
              Shop now
              <i className="icon icon-arrow1-top-left" />
            </Link>
          </div>
          <div className="tf-countdown-v2">
            <div className="js-countdown">
              <CountdownComponent fullLabel={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
