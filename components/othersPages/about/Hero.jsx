import React from "react";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="tf-slideshow about-us-page position-relative">
      <div className="banner-wrapper">
        <Image
          className="lazyload"
          src="/images/slider/about-banner-01.jpg"
          data-=""
          alt="image-collection"
          width={2000}
          height={1262}
        />
        <div className="box-content text-center">
          <div className="container">
            <div className="text text-white">
              Empowering women to achieve <br className="d-xl-block d-none" />
              fitness goals with style
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
