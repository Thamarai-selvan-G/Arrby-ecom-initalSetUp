import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Banner2() {
  return (
    <section className="flat-spacing-15 pt_0">
      <div className="container">
        <div className="tf-grid-layout md-col-2 tf-img-with-text img-text-3">
          <div className="tf-image wow fadeInUp" data-wow-delay="0s">
            <div className="hover-img tf-image-wrap radius-10">
              <div className="img-style">
                <Image
                  className="lazyload"
                  data-src="/images/collections/paddle-boards-9.jpg"
                  alt="img-slider"
                  src="/images/collections/paddle-boards-9.jpg"
                  width={800}
                  height={622}
                />
              </div>
            </div>
          </div>
          <div className="tf-content-wrap wow fadeInUp" data-wow-delay="0s">
            <h2 className="heading fade-item fade-item-1 fw-6 text_blue-1 mt_0 mb_15">
              Quality, Durability, <br className="d-none d-xl-block" />
              Safety Focused.
            </h2>
            <p className="desc fade-item fade-item-2 fs-16">
              When you’re out there, you want gear you trust beneath your feet;
              gear that’s reliable, and fun. Since we launched in 2013, that’s
              been our mission. With paddles in our hands and adventure in our
              soul, we focus on top-quality manufacturing, design, and
              functionality.
            </p>
            <Link
              href={`/about-us`}
              className="tf-btn btn-md radius-3 fw-7 bg_blue-6 btn-fill btn-icon animate-hover-btn"
            >
              ABOUT US
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
