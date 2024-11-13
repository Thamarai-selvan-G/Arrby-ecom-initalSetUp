import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Banner() {
  return (
    <section className="banner-collection-men-wrap">
      <Link href={`/shop-collection-sub`} className="img-wrap">
        <Image
          className="lazyload"
          data-src="/images/slider/men_hero1.jpg"
          alt="fashion-slideshow"
          src="/images/slider/men_hero1.jpg"
          width={2000}
          height={817}
        />
      </Link>
      <div className="box-content">
        <div className="container">
          <Link href={`/shop-collection-sub`} className="card-box">
            <h3 className="subheading">GET YOUR FASHION FIX HERE</h3>
            <h3 className="heading">Spring Collections</h3>
            <p className="text">
              Shop our luxury silk button-up blouses made with ultra-soft,
              washable silk.
            </p>
            <div className="wow fadeInUp" data-wow-delay="0s">
              <button className="tf-btn style-2 btn-fill rounded-full animate-hover-btn">
                <span>Shop Collection</span>
              </button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
