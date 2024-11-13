"use client";
import CountdownComponent from "@/components/common/Countdown";
import { useContextElement } from "@/context/Context";
import { products47 } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products() {
  const { setQuickViewItem } = useContextElement();
  const {
    setQuickAddItem,
    addToWishlist,
    isAddedtoWishlist,
    addToCompareItem,
    isAddedtoCompareItem,
  } = useContextElement();
  return (
    <section className="flat-spacing-8">
      <div className="container">
        <div className="flat-title flex-row justify-content-center px-0">
          <span className="title fw-6 wow fadeInUp" data-wow-delay="0s">
            Deals Of The Day
          </span>
        </div>
        <Swiper
          className="swiper tf-sw-product-sell"
          modules={[Pagination]} // Include pagination module
          slidesPerView={3} // Equivalent to data-preview
          spaceBetween={30} // Equivalent to data-space-lg
          pagination={{
            clickable: true,
            el: ".p1spd",
          }}
          breakpoints={{
            1000: {
              slidesPerView: 3, // Equivalent to data-tablet
              spaceBetween: 30, // Equivalent to data-space-md
            },
            768: {
              slidesPerView: 2, // Equivalent to data-tablet
              spaceBetween: 15, // Equivalent to data-space-md
            },
            0: {
              slidesPerView: 1, // Equivalent to data-mobile
            },
          }}
        >
          {products47.map((product, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <div className="card-product style-8 border-0 bg_grey-14 lg">
                <div className="card-product-wrapper">
                  <Link
                    href={`/product-detail/${product.id}`}
                    className="product-img"
                  >
                    <Image
                      className="lazyload img-product"
                      data-src={product.imgSrc}
                      alt="image-product"
                      src={product.imgSrc}
                      width={533}
                      height={497}
                    />
                    <Image
                      className="lazyload img-hover"
                      data-src={product.imgHoverSrc}
                      alt="image-product"
                      src={product.imgHoverSrc}
                      width={533}
                      height={497}
                    />
                  </Link>
                  <div className="list-product-btn absolute-2">
                    <a
                      href="#quick_add"
                      data-bs-toggle="modal"
                      onClick={() => setQuickAddItem(product.id)}
                      className="box-icon bg_white quick-add tf-btn-loading"
                    >
                      <span className="icon icon-bag" />
                      <span className="tooltip">Quick Add</span>
                    </a>
                    <a
                      onClick={() => addToWishlist(product.id)}
                      className="box-icon bg_white wishlist btn-icon-action"
                    >
                      <span
                        className={`icon icon-heart ${
                          isAddedtoWishlist(product.id) ? "added" : ""
                        }`}
                      />
                      <span className="tooltip">
                        {" "}
                        {isAddedtoWishlist(product.id)
                          ? "Already Wishlisted"
                          : "Add to Wishlist"}
                      </span>
                      <span className="icon icon-delete" />
                    </a>
                    <a
                      href="#compare"
                      data-bs-toggle="offcanvas"
                      onClick={() => addToCompareItem(product.id)}
                      aria-controls="offcanvasLeft"
                      className="box-icon bg_white compare btn-icon-action"
                    >
                      <span
                        className={`icon icon-compare ${
                          isAddedtoCompareItem(product.id) ? "added" : ""
                        }`}
                      />
                      <span className="tooltip">
                        {" "}
                        {isAddedtoCompareItem(product.id)
                          ? "Already Compared"
                          : "Add to Compare"}
                      </span>
                      <span className="icon icon-check" />
                    </a>
                    <a
                      href="#quick_view"
                      data-bs-toggle="modal"
                      onClick={() => setQuickViewItem(product)}
                      className="box-icon bg_white quickview tf-btn-loading"
                    >
                      <span className="icon icon-view" />
                      <span className="tooltip">Quick View</span>
                    </a>
                  </div>
                  {product.salePercentage && (
                    <div className="on-sale-wrap text-end">
                      <div className="on-sale-item">{`${product.salePercentage}%`}</div>
                    </div>
                  )}
                </div>
                <div className="card-product-info">
                  <Link
                    href={`/product-detail//${product.id}`}
                    className="title link fw-6"
                  >
                    {product.title}
                  </Link>
                  <span className="price">
                    {product.oldPrice > 0 && (
                      <span className="old-price text_primary">{`$${product.oldPrice.toFixed(
                        2
                      )}`}</span>
                    )}
                    <span className="new-price">{`$${product.price.toFixed(
                      2
                    )}`}</span>
                  </span>
                  <div className="pr-stock">
                    <div className="pr-stock-status d-flex justify-content-between align-items-center">
                      <div className="pr-stock-available">
                        <span className="pr-stock-label fs-12 fw-6">
                          Available:
                        </span>
                        <span className="pr-stock-value fs-12 fw-6">
                          {product.available}
                        </span>
                      </div>
                      <div className="pr-stock-sold">
                        <span className="pr-stock-label fs-12 fw-6">Sold:</span>
                        <span className="pr-stock-value fs-12 fw-6">
                          {product.sold}
                        </span>
                      </div>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: `${
                            (product.available /
                              (product.available + product.sold)) *
                            100
                          }%`,
                        }}
                        aria-valuenow={product.available}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  <div className="count-down">
                    <div className="tf-countdown-v2">
                      <div className="js-countdown" data->
                        <CountdownComponent labels="Days,Hours,Mins,Secs" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="sw-dots style-2 sw-pagination-product justify-content-center p1spd" />
        </Swiper>
      </div>
    </section>
  );
}
