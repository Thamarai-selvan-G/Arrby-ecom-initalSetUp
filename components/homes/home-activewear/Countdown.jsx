import React from "react";
import Image from "next/image";
import Link from "next/link";
import CountdownComponent from "@/components/common/Countdown";
export default function Countdown() {
  return (
    <section>
      <div className="container">
        <div className="tf-hero-image-liquid radius-10 o-hidden banner-countdown-v2">
          <Image
            className="lazyload"
            data-src="/images/slider/banner-countdown-2.png"
            alt="img-banner"
            loading="lazy"
            src="/images/slider/banner-countdown-2.png"
            width={2000}
            height={822}
          />
          <div className="box-content">
            <h2 className="heading font-young-serif">Bra Spotlight</h2>
            <p className="fs-14">Let's go from the top.</p>
            <div className="tf-countdown">
              <div className="js-countdown">
                {" "}
                <CountdownComponent fullLabel={true} />
              </div>
            </div>
            <Link
              href={`/shop-default`}
              className="tf-btn btn-fill btn-md animate-hover-btn radius-60"
            >
              Shop now - $129
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
