import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Collection() {
  return (
    <>
      <div className="container">
        <div className="line" />
      </div>
      {/* Shop Collection */}
      <section className="flat-spacing-19">
        <div className="container">
          <div className="tf-grid-layout md-col-2 tf-img-with-text style-3">
            <div className="tf-content-wrap">
              <div>
                <div className="heading wow fadeInUp fw-6" data-wow-delay="0s">
                  Personalise Gift <br />
                  Card
                </div>
                <p className="description wow fadeInUp" data-wow-delay="0s">
                  Ecomus makes personalised eGifting easier than ever before!
                  <br />
                  Send any Ecomus eGift Card with a personal video or voice
                  <br />
                  message and a greeting card, and you can even customise our
                  <br />
                  Ecomus Smart eGift Card with your own photo!
                </p>
                <Link
                  href={`/shop-collection-list`}
                  className="tf-btn btn-outline-dark radius-3 link justify-content-center wow fadeInUp"
                  data-wow-delay="0s"
                >
                  Shop Collection
                </Link>
              </div>
            </div>
            <div className="tf-image-wrap">
              <Image
                className="lazyload"
                data-src="/images/collections/giftcard-6.jpg"
                alt="collection-img"
                src="/images/collections/giftcard-6.jpg"
                width={800}
                height={598}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
