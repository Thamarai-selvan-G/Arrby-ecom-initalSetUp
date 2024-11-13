import React from "react";
import Image from "next/image";
import { galleryImages } from "@/data/categories";
export default function Collections3() {
  return (
    <section className="flat-spacing-11">
      <div className="container">
        <div className="flat-title">
          <span className="title wow fadeInUp" data-wow-delay="0s">
            Photos from our #ecocase
          </span>
        </div>
        <div className="masonry-layout-v5 wow fadeInUp" data-wow-delay="0s">
          {galleryImages.map((image) => (
            <div key={image.id} className={`${image.id} tf-gallery-image`}>
              <Image
                className="lazyload"
                data-src={image.src}
                alt={image.alt}
                src={image.src}
                width={image.width}
                height={image.height}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
