"use client";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

import Image from "next/image";
export default function SkinChange() {
  return (
    <section className="flat-spacing-3 pb_0">
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <span className="title">Before and after use our products</span>
          <p className="sub-title">
            Witness the transformative power of our skincare solutions as they
            unveil a radiant new you
          </p>
        </div>
        <div
          id="image-compare"
          className="wow fadeInUp"
          data-wow-delay="0s"
          style={{ position: "relative" }}
        >
          <span
            style={{
              position: "absolute",
              bottom: "1rem",
              zIndex: 12,
              left: "1rem",
              background: "rgba(0, 0, 0, 0.33)",
              color: "white",
              borderRadius: 3,
              padding: "0.5rem 0.75rem",
              fontSize: "0.85rem",
            }}
          >
            Before
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "1rem",
              zIndex: 12,
              right: "1rem",
              background: "rgba(0, 0, 0, 0.33)",
              color: "white",
              borderRadius: 3,
              padding: "0.5rem 0.75rem",
              fontSize: "0.85rem",
            }}
          >
            After
          </span>
          {/* <Image
            className="lazyload"
            data-src="/images/shop/file/skincare_before.jpg"
            alt=""
            src="/images/shop/file/skincare_before.jpg"
            width={750}
            height={407}
          />
          <Image
            className="lazyload"
            data-src="/images/shop/file/skincare_after.jpg"
            alt=""
            src="/images/shop/file/skincare_after.jpg"
            width={750}
            height={407}
          /> */}
          <ReactCompareSlider
            itemOne={
              <ReactCompareSliderImage
                src="/images/shop/file/skincare_before.jpg"
                srcSet="/images/shop/file/skincare_before.jpg"
                alt="Image one"
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src="/images/shop/file/skincare_after.jpg"
                srcSet="/images/shop/file/skincare_after.jpg"
                alt="Image two"
              />
            }
          />
        </div>
      </div>
    </section>
  );
}
