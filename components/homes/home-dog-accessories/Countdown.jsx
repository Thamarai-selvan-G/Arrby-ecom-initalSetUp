import React from "react";
import Image from "next/image";
import Link from "next/link";
import CountdownComponent from "@/components/common/Countdown";
export default function Countdown() {
  return (
    <section className="flat-spacing-27 pt_0">
      <div className="container">
        <div className="tf-grid-layout gap-0 md-col-2 bg_f1f6e6 tf-img-with-text style-5">
          <div className="tf-image-wrap wow fadeInUp" data-wow-delay="0s">
            <Image
              className="lazyload"
              data-src="/images/collections/dog-9.jpg"
              alt="collection-img"
              src="/images/collections/dog-9.jpg"
              width={600}
              height={448}
            />
          </div>
          <div className="tf-content-wrap wow fadeInUp" data-wow-delay="0s">
            <div className="sub-heading fw-7">END OF SEASON SALE</div>
            <div className="heading">60% Discount</div>
            <p className="description text_black-2">
              Limited availability on remaining sizes - get your hands on one at
              an unbeatable price while you can.
            </p>
            <div className="count-down">
              <div className="description">
                <strong>Hungry up ! </strong>Deals end in :
              </div>
              <div className="tf-countdown-v2">
                <div className="js-countdown">
                  <CountdownComponent fullLabel={true} />
                </div>
              </div>
            </div>
            <Link
              href={`/shop-collection-list`}
              className="tf-btn style-2 btn-fill radius-3 animate-hover-btn"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
