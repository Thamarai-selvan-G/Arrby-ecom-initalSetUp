import React from "react";
import Image from "next/image";
import Link from "next/link";
import CountdownComponent from "@/components/common/Countdown";
export default function Countdown() {
  return (
    <section className="flat-spacing-8 pb_0">
      <div className="container">
        <div className="tf-grid-layout gap-0 md-col-2 bg_primary tf-img-with-text style-5">
          <div className="tf-image-wrap wow fadeInUp" data-wow-delay="0s">
            <Image
              className="lazyload"
              data-src="/images/collections/collection-72.jpg"
              alt="collection-img"
              src="/images/collections/collection-72.jpg"
              width={800}
              height={598}
            />
          </div>
          <div className="tf-content-wrap wow fadeInUp" data-wow-delay="0s">
            <div className="sub-heading fw-7">ULTIMATE APPLE ACCESSORY.</div>
            <div className="heading">60% Discount</div>
            <p className="description text_black-2">
              Find the latest and greatest gadgets to enhance your electronic
              devices.
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
              className="tf-btn style-2 btn-fill rounded-full animate-hover-btn"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
