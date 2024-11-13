import ProductCard20 from "@/components/shopCards/ProductCard20";
import { products39 } from "@/data/products";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Products() {
  return (
    <section className="flat-spacing-12 pt_0">
      <div className="container">
        <div className="row align-items-center flex-md-row-reverse">
          <div className="col-md-6">
            <div className="collection-item-v2 hover-img">
              <Link href={`/shop-collection-sub`} className="collection-inner">
                <div className="collection-image img-style">
                  <Image
                    className="lazyload"
                    data-src="/images/collections/sneaker-8.jpg"
                    alt="collection-img"
                    src="/images/collections/sneaker-8.jpg"
                    width={600}
                    height={805}
                  />
                </div>
                <div className="collection-content justify-content-end">
                  <div className="bottom wow fadeInUp" data-wow-delay="0s">
                    <h5 className="heading text-white fw-7">
                      SEASON COLLECTION
                    </h5>
                    <p className="subheading text-white">
                      Every piece is made to last beyond the season
                    </p>
                    <button className="tf-btn btn-line btn-line-light collection-other-link fw-6">
                      <span>SHOP COLLECTION</span>
                      <i className="icon icon-arrow1-top-left" />
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="tf-grid-layout tf-col-2 gap30 row-gap-10">
              {products39.map((product, i) => (
                <ProductCard20 product={product} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
