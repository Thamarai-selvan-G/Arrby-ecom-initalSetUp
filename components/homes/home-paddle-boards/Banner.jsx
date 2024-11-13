import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Banner() {
  return (
    <section className="flat-spacing-10">
      <div className="container">
        <div className="tf-banner-collection text-center">
          <Image
            className="lazyload radius-10"
            data-src="/images/collections/banner-collection-2.jpg"
            alt="img-banner"
            loading="lazy"
            src="/images/collections/banner-collection-2.jpg"
            width={1400}
            height={325}
          />
          <div className="box-content w-100">
            <div className="container wow fadeInUp" data-wow-delay="0s">
              <h2 className="heading fw-6 text_white">
                Find the Perfect Paddle Board!
              </h2>
              <p className="text_white">Need help choosing?</p>
              <Link
                href={`/shop-collection-list`}
                className="tf-btn btn-line btn-line-light collection-other-link fw-6"
              >
                <span>Take The Quiz</span>
                <i className="icon icon-arrow1-top-left" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
