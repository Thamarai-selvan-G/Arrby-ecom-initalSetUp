import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Categories() {
  return (
    <section className="flat-spacing-12 wow fadeInUp" data-wow-delay="0s">
      <div className="container">
        <div className="tf-grid-layout-v2 flat-animate-tab">
          <ul className="widget-tab-4 scroll-snap" role="tablist">
            <li className="nav-tab-item" role="presentation">
              <div
                data-bs-target="#dresses"
                className="active nav-tab-link"
                data-bs-toggle="tab"
              >
                <span className="text">
                  Dresses<span className="count">31</span>
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
                <span className="text">
                  Tops<span className="count">14</span>
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
                <span className="text">
                  Shirts Blouses<span className="count">31</span>
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
                <span className="text">
                  Pants<span className="count">9</span>
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
                <span className="text">
                  Cardigans<span className="count">23</span>
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
                <span className="text">
                  Blazers<span className="count">9</span>
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
                <span className="text">
                  Overalls<span className="count">23</span>
                </span>
                <Link
                  href={`/shop-collection-sub`}
                  className="icon icon-arrow1-top-left"
                ></Link>
              </div>
            </li>
          </ul>
          <div className="scroll-process d-md-none" id="scroll-process">
            <div className="value-process" />
          </div>
          <div className="tab-content">
            <div className="tab-pane active show" id="dresses" role="tabpanel">
              <Link
                href={`/shop-collection-sub`}
                className="fullwidth radius-10 o-hidden"
              >
                <Image
                  className="lazyload"
                  data-src="/images/collections/collection-49.jpg"
                  alt="image-shop"
                  src="/images/collections/collection-49.jpg"
                  width={720}
                  height={597}
                />
              </Link>
            </div>
            <div className="tab-pane" id="tops" role="tabpanel">
              <Link
                href={`/shop-collection-sub`}
                className="fullwidth radius-10 o-hidden"
              >
                <Image
                  className="lazyload"
                  data-src="/images/collections/collection-50.jpg"
                  alt="image-shop"
                  src="/images/collections/collection-50.jpg"
                  width={720}
                  height={597}
                />
              </Link>
            </div>
            <div className="tab-pane" id="shirtsBlouses" role="tabpanel">
              <Link
                href={`/shop-collection-sub`}
                className="fullwidth radius-10 o-hidden"
              >
                <Image
                  className="lazyload"
                  data-src="/images/collections/collection-51.jpg"
                  alt="image-shop"
                  src="/images/collections/collection-51.jpg"
                  width={720}
                  height={597}
                />
              </Link>
            </div>
            <div className="tab-pane" id="pants" role="tabpanel">
              <Link
                href={`/shop-collection-sub`}
                className="fullwidth radius-10 o-hidden"
              >
                <Image
                  className="lazyload"
                  data-src="/images/collections/collection-52.jpg"
                  alt="image-shop"
                  src="/images/collections/collection-52.jpg"
                  width={720}
                  height={597}
                />
              </Link>
            </div>
            <div className="tab-pane" id="cardigans" role="tabpanel">
              <Link
                href={`/shop-collection-sub`}
                className="fullwidth radius-10 o-hidden"
              >
                <Image
                  className="lazyload"
                  data-src="/images/collections/collection-53.jpg"
                  alt="image-shop"
                  src="/images/collections/collection-53.jpg"
                  width={720}
                  height={597}
                />
              </Link>
            </div>
            <div className="tab-pane" id="blazers" role="tabpanel">
              <Link
                href={`/shop-collection-sub`}
                className="fullwidth radius-10 o-hidden"
              >
                <Image
                  className="lazyload"
                  data-src="/images/collections/collection-54.jpg"
                  alt="image-shop"
                  src="/images/collections/collection-54.jpg"
                  width={720}
                  height={597}
                />
              </Link>
            </div>
            <div className="tab-pane" id="overalls" role="tabpanel">
              <Link
                href={`/shop-collection-sub`}
                className="fullwidth radius-10 o-hidden"
              >
                <Image
                  className="lazyload"
                  data-src="/images/collections/collection-55.jpg"
                  alt="image-shop"
                  src="/images/collections/collection-55.jpg"
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
