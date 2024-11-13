import React from "react";
import Link from "next/link";
export default function Banner() {
  return (
    <section
      className="banner-collection-men-wrap banner-parallax"
      style={{
        backgroundImage: "url(images/slider/tee-banner-collection.jpg)",
      }}
    >
      <div className="box-content">
        <div className="container">
          <Link
            href={`/shop-collection-sub`}
            className="card-box text-md-start text-center rounded-0 banner-glass-content"
          >
            <h3 className="heading font-caprasimo">Big Sur Collection</h3>
            <p className="text">
              Introducing the Crafted Collection, an exquisite expansion of our
              renowned Crafted Heavyweight t-shirt range
            </p>
            <div className="wow fadeInUp" data-wow-delay="0s">
              <button className="tf-btn style-2 btn-fill animate-hover-btn font-caprasimo text-uppercase letter-2">
                <span>Shop Now</span>
              </button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
