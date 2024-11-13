import React from "react";
import Image from "next/image";
import Link from "next/link";
import { collectionItems5 } from "@/data/categories";
export default function Categories() {
  return (
    <section className="flat-spacing-8">
      <div className="container-full">
        <div className="masonry-layout">
          {collectionItems5.map((item, index) => (
            <div
              className={`${item.itemClass} collection-item large hover-img wow fadeInUp`}
              data-wow-delay={item.wowDelay}
              key={index}
            >
              <div className="collection-inner">
                <Link
                  href={
                    item.title === "Women"
                      ? `/shop-women`
                      : item.title === "Men"
                      ? `/home-men`
                      : `/shop-default`
                  }
                  className="collection-image img-style rounded-0"
                >
                  <Image
                    className="lazyload"
                    data-src={item.imgSrc}
                    alt={item.imgAlt}
                    src={item.imgSrc}
                    width={item.width}
                    height={item.height}
                  />
                </Link>
                <div className="collection-content">
                  <Link
                    href={
                      item.title === "Women"
                        ? `/shop-women`
                        : item.title === "Men"
                        ? `/home-men`
                        : `/shop-default`
                    }
                    className="tf-btn collection-title hover-icon"
                  >
                    <span>{item.title}</span>
                    <i className="icon icon-arrow1-top-left" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
