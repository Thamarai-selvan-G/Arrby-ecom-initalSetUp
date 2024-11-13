import React from "react";
import Image from "next/image";
import Link from "next/link";
import CountdownComponent from "@/components/common/Countdown";
export default function BannerCountdown() {
  return (
    <section className="tf-hero-image-liquid">
      <Image
        className="lazyload"
        data-src="/images/slider/banner-countdown.png"
        alt="img-banner"
        loading="lazy"
        src="/images/slider/banner-countdown.png"
        width={1800}
        height={775}
      />
      <div className="box-content">
        <div className="container wow fadeInUp" data-wow-delay="0s">
          <h2 className="heading">Last Chance Offers</h2>
          <p>Get Them Before They're Gone</p>
          <div className="tf-countdown">
            {/* style-rectangle */}
            <div className="js-countdown">
              <CountdownComponent fullLabel={true} />
            </div>
          </div>
          <Link
            href={`/shop-default`}
            className="tf-btn btn-fill btn-md animate-hover-btn radius-3"
          >
            Shop now - $129
          </Link>
        </div>
      </div>
    </section>
  );
}
