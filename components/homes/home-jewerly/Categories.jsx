import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Categories() {
  return (
    <section className="flat-spacing-18 wow fadeInUp" data-wow-delay="0s">
      <div className="container">
        <div className="tf-grid-layout-v2 flat-animate-tab">
          <ul className="widget-tab-4 rounded-0 scroll-snap" role="tablist">
            <li className="nav-tab-item" role="presentation">
              <div
                data-bs-target="#dresses"
                className="active nav-tab-link"
                data-bs-toggle="tab"
              >
                <span className="text fw-8 font-poppins">
                  EARRINGS<span className="count">5</span>
                </span>
                <Link
                  href={`/shop-collection-sub`}
                  className="icon icon-arrow1-top-left"
                />
              </div>
            </li>
            <li className="nav-tab-item" role="presentation">
              <div
                data-bs-target="#tops"
                className="nav-tab-link"
                data-bs-toggle="tab"
              >
                <span className="text fw-8 font-poppins">
                  RINGS<span className="count">5</span>
                </span>
                <Link
                  href={`/shop-collection-sub`}
                  className="icon icon-arrow1-top-left"
                ></Link>
              </div>
            </li>
            <li className="nav-tab-item" role="presentation">
              <div
                data-bs-target="#shirtsBlouses"
                className="nav-tab-link"
                data-bs-toggle="tab"
              >
                <span className="text fw-8 font-poppins">
                  NECKLACES<span className="count">5</span>
                </span>
                <Link
                  href={`/shop-collection-sub`}
                  className="icon icon-arrow1-top-left"
                ></Link>
              </div>
            </li>
            <li className="nav-tab-item" role="presentation">
              <div
                data-bs-target="#pants"
                className="nav-tab-link"
                data-bs-toggle="tab"
              >
                <span className="text fw-8 font-poppins">
                  BRACELETS<span className="count">5</span>
                </span>
                <Link
                  href={`/shop-collection-sub`}
                  className="icon icon-arrow1-top-left"
                ></Link>
              </div>
            </li>
            <li className="nav-tab-item" role="presentation">
              <div
                data-bs-target="#cardigans"
                className="nav-tab-link"
                data-bs-toggle="tab"
              >
                <span className="text fw-8 font-poppins">
                  WEDDING<span className="count">5</span>
                </span>
                <Link
                  href={`/shop-collection-sub`}
                  className="icon icon-arrow1-top-left"
                ></Link>
              </div>
            </li>
            <li className="nav-tab-item" role="presentation">
              <div
                data-bs-target="#blazers"
                className="nav-tab-link"
                data-bs-toggle="tab"
              >
                <span className="text fw-8 font-poppins">
                  MEN'S<span className="count">5</span>
                </span>
                <Link
                  href={`/shop-collection-sub`}
                  className="icon icon-arrow1-top-left"
                ></Link>
              </div>
            </li>
            <li className="nav-tab-item" role="presentation">
              <div
                data-bs-target="#overalls"
                className="nav-tab-link"
                data-bs-toggle="tab"
              >
                <span className="text fw-8 font-poppins">
                  BEST SELLERS<span className="count">5</span>
                </span>
                <Link
                  href={`/shop-collection-sub`}
                  className="icon icon-arrow1-top-left"
                ></Link>
              </div>
            </li>
            <li className="nav-tab-item" role="presentation">
              <Link href={`/shop-collection-sub`} className="nav-tab-link">
                <span className="text fw-8 font-poppins">SHOP ALL</span>
                <span className="icon icon-arrow1-top-left" />
              </Link>
            </li>
          </ul>
          <div className="scroll-process d-md-none" id="scroll-process">
            <div className="value-process" />
          </div>
          <div className="tab-content">
            <div className="tab-pane active show" id="dresses" role="tabpanel">
              <Link
                href={`/shop-collection-sub`}
                className="fullwidth o-hidden"
              >
                <Image
                  className="lazyload"
                  data-src="/images/collections/jewerly-1.jpg"
                  alt="image-shop"
                  src="/images/collections/jewerly-1.jpg"
                  width={720}
                  height={597}
                />
              </Link>
            </div>
            <div className="tab-pane" id="tops" role="tabpanel">
              <Link
                href={`/shop-collection-sub`}
                className="fullwidth o-hidden"
              >
                <Image
                  className="lazyload"
                  data-src="/images/collections/jewerly-2.jpg"
                  alt="image-shop"
                  src="/images/collections/jewerly-2.jpg"
                  width={720}
                  height={597}
                />
              </Link>
            </div>
            <div className="tab-pane" id="shirtsBlouses" role="tabpanel">
              <Link
                href={`/shop-collection-sub`}
                className="fullwidth o-hidden"
              >
                <Image
                  className="lazyload"
                  data-src="/images/collections/jewerly-3.jpg"
                  alt="image-shop"
                  src="/images/collections/jewerly-3.jpg"
                  width={720}
                  height={597}
                />
              </Link>
            </div>
            <div className="tab-pane" id="pants" role="tabpanel">
              <Link
                href={`/shop-collection-sub`}
                className="fullwidth o-hidden"
              >
                <Image
                  className="lazyload"
                  data-src="/images/collections/jewerly-4.jpg"
                  alt="image-shop"
                  src="/images/collections/jewerly-4.jpg"
                  width={720}
                  height={597}
                />
              </Link>
            </div>
            <div className="tab-pane" id="cardigans" role="tabpanel">
              <Link
                href={`/shop-collection-sub`}
                className="fullwidth o-hidden"
              >
                <Image
                  className="lazyload"
                  data-src="/images/collections/jewerly-5.jpg"
                  alt="image-shop"
                  src="/images/collections/jewerly-5.jpg"
                  width={720}
                  height={597}
                />
              </Link>
            </div>
            <div className="tab-pane" id="blazers" role="tabpanel">
              <Link
                href={`/shop-collection-sub`}
                className="fullwidth o-hidden"
              >
                <Image
                  className="lazyload"
                  data-src="/images/collections/jewerly-6.jpg"
                  alt="image-shop"
                  src="/images/collections/jewerly-6.jpg"
                  width={720}
                  height={597}
                />
              </Link>
            </div>
            <div className="tab-pane" id="overalls" role="tabpanel">
              <Link
                href={`/shop-collection-sub`}
                className="fullwidth o-hidden"
              >
                <Image
                  className="lazyload"
                  data-src="/images/collections/jewerly-7.jpg"
                  alt="image-shop"
                  src="/images/collections/jewerly-7.jpg"
                  width={720}
                  height={597}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
