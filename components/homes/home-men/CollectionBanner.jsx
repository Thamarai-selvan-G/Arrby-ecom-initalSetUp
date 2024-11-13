import React from "react";
import Image from "next/image";
import Link from "next/link";
import CountdownComponent from "@/components/common/Countdown";
export default function CollectionBanner() {
  return (
    <section>
      <div className="container">
        <div className="tf-grid-layout md-col-2 tf-img-with-text style-5 bg_f5f6f0">
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
            <div className="sub-heading fw-7">GET YOUR FASHION FIX HERE</div>
            <div className="heading">60% Discount</div>
            <p className="description text_black-2">
              Shop our luxury silk button-up blouses made with ultra-soft,
              washable silk.
            </p>
            <div className="count-down">
              <div className="description">
                <strong>Hungry up ! </strong>Deals end in :
              </div>
              <div className="tf-countdown-v2">
                <div className="js-countdown">
                  <CountdownComponent labels="Days,Hours,Mins,Secs" />
                </div>
              </div>
            </div>
            <Link
              href={`/shop-collection-list`}
              className="tf-btn style-2 btn-fill rounded-full animate-hover-btn"
            >
              Shop Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
