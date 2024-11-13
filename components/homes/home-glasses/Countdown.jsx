import CountdownComponent from "@/components/common/Countdown";
import React from "react";

export default function Countdown() {
  return (
    <section className="flat-spacing-10 bg_dark">
      <div className="container">
        <div className="tf-grid-layout md-col-2 align-items-center flat-wrap-countdown countdown-black">
          <div className="tf-content-wrap-v2 wow fadeInUp" data-wow-delay="0s">
            <h4 className="heading">One-Time Only</h4>
            <p className="description">
              Special Offers You Can't Miss: These deals won't last forever!
            </p>
          </div>
          <div
            className="tf-countdown-v2 justify-content-end wow fadeInUp"
            data-wow-delay="0s"
          >
            <div className="js-countdown">
              <CountdownComponent labels="Days,Hours,Mins,Secs" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
