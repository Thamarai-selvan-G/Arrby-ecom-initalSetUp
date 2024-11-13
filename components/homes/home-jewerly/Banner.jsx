import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Banner() {
  return (
    <section className="banner-collection-men-wrap">
      <Link href={`/shop-collection-sub`} className="img-wrap">
        <Image
          className="lazyload"
          data-src="/images/slider/jewerly-4.jpg"
          alt="fashion-slideshow"
          src="/images/slider/jewerly-4.jpg"
          width={1800}
          height={735}
        />
      </Link>
      <div className="box-content">
        <div className="container">
          <Link href={`/shop-collection-sub`} className="card-box">
            <h3 className="subheading font-poppins fw-7">
              SALE UP TO 30% OFF. USE CODE SAUVS
            </h3>
            <h3 className="heading font-poppins fw-8">SUMMER APPROVED</h3>
            <p className="text">Lounge in style with</p>
            <div className="wow fadeInUp" data-wow-delay="0s">
              <button className="font-poppins fw-7 tf-btn style-2 btn-fill rounded-0 animate-hover-btn">
                <span>SHOP COLLECTIONS</span>
              </button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
