import React from "react";
import Image from "next/image";
import Link from "next/link";
import { collectionCircles } from "@/data/categories";
export default function Categories() {
  return (
    <section className="flat-spacing-20">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tf-categories-wrap">
              <div className="tf-categories-container">
                {collectionCircles.map((item) => (
                  <div
                    key={item.id}
                    className="collection-item-circle hover-img position-relative"
                  >
                    <Link
                      href={item.href}
                      className="collection-image img-style"
                    >
                      <Image
                        className="lazyload"
                        data-src={item.imgSrc}
                        alt={item.alt}
                        src={item.imgSrc}
                        width={item.width}
                        height={item.height}
                      />
                    </Link>
                    {item.hasSale && (
                      <div
                        className="has-saleoff-wrap "
                        style={{ position: "absolute", top: 0 }}
                      >
                        <div className="sale-off fw-5">{item.saleText}</div>
                      </div>
                    )}
                    <div className="collection-content text-center">
                      <Link href={item.href} className="link title fw-6">
                        {item.title}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className="tf-shopall-wrap">
                <div className="collection-item-circle tf-shopall">
                  <Link
                    href={`/shop-collection-sub`}
                    className="collection-image img-style tf-shopall-icon"
                  >
                    <i className="icon icon-arrow1-top-left" />
                  </Link>
                  <div className="collection-content text-center">
                    <Link
                      href={`/shop-collection-sub`}
                      className="link title fw-6"
                    >
                      Shop all
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
