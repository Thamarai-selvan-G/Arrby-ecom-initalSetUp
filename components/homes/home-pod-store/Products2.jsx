"use client";

import { products26 } from "@/data/products";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { useContextElement } from "@/context/Context";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
export default function Products2() {
  const {
    setQuickViewItem,
    addProductToCart,
    isAddedToCartProducts,
    addToWishlist,
    isAddedtoWishlist,
    addToCompareItem,
    isAddedtoCompareItem,
  } = useContextElement();
  return (
    <section
      className="flat-spacing-21 flat-testimonial-bg"
      style={{ backgroundImage: "url(images/slider/pod-store-bg.jpg)" }}
    >
      <div className="container-full">
        <div className="flat-title">
          <span
            className="title fw-6 wow text-white fadeInUp"
            data-wow-delay="0s"
          >
            Halloween is coming
          </span>
          <p
            className="sub-title fs-14 text-white wow fadeInUp"
            data-wow-delay="0s"
          >
            Skip the pumpkin spice latte it’s Halloween time. Don’t miss
            spooktacular items
          </p>
        </div>
        <div className="container">
          <div className="wrap-carousel wrap-sw-2">
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              breakpoints={{
                1024: { slidesPerView: 4, spaceBetween: 30 },
                768: { slidesPerView: 3, spaceBetween: 15 },
                576: { slidesPerView: 3, spaceBetween: 15 },
                0: { slidesPerView: 2, spaceBetween: 15 },
              }}
              modules={[Navigation, Pagination]}
              navigation={{
                prevEl: ".snbp240",
                nextEl: ".snbn240",
              }}
              pagination={{ clickable: true, el: ".spd240" }}
              loop={true}
            >
              {products26.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="card-product">
                    <div className="card-product-wrapper">
                      <Link
                        href={`/product-detail/${item.id}`}
                        className="product-img"
                      >
                        <Image
                          className="lazyload img-product"
                          src={item.imgSrc}
                          alt="image-product"
                          width={360}
                          height={450}
                        />
                        <Image
                          className="lazyload img-hover"
                          src={item.imgHoverSrc}
                          alt="image-product"
                          width={360}
                          height={450}
                        />
                      </Link>
                      <div className="list-product-btn absolute-2">
                        <a
                          href="#shoppingCart"
                          data-bs-toggle="modal"
                          className="box-icon bg_white quick-add tf-btn-loading"
                          onClick={() => addProductToCart(item.id)}
                        >
                          <span className="icon icon-bag" />
                          <span className="tooltip">
                            {isAddedToCartProducts(item.id)
                              ? "Already Added"
                              : "Add to cart"}
                          </span>
                        </a>
                        <a
                          onClick={() => addToWishlist(item.id)}
                          className="box-icon bg_white wishlist btn-icon-action"
                        >
                          <span
                            className={`icon icon-heart ${
                              isAddedtoWishlist(item.id) ? "added" : ""
                            }`}
                          />
                          <span className="tooltip">
                            {isAddedtoWishlist(item.id)
                              ? "Already Wishlisted"
                              : "Add to Wishlist"}
                          </span>
                          <span className="icon icon-delete" />
                        </a>
                        <a
                          href="#compare"
                          data-bs-toggle="offcanvas"
                          onClick={() => addToCompareItem(item.id)}
                          aria-controls="offcanvasLeft"
                          className="box-icon bg_white compare btn-icon-action"
                        >
                          <span
                            className={`icon icon-compare ${
                              isAddedtoCompareItem(item.id) ? "added" : ""
                            }`}
                          />
                          <span className="tooltip">
                            {" "}
                            {isAddedtoCompareItem(item.id)
                              ? "Already Compared"
                              : "Add to Compare"}
                          </span>
                          <span className="icon icon-check" />
                        </a>
                        <a
                          href="#quick_view"
                          onClick={() => setQuickViewItem(item)}
                          data-bs-toggle="modal"
                          className="box-icon bg_white quickview tf-btn-loading"
                        >
                          <span className="icon icon-view" />
                          <span className="tooltip">Quick View</span>
                        </a>
                      </div>
                    </div>
                    <div className="card-product-info">
                      <Link
                        href={`/product-detail/${item.id}`}
                        className="title link text_white"
                      >
                        {item.title}
                      </Link>
                      <span className="price text_white">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="nav-sw style-not-line nav-next-slider nav-next-product box-icon w_46 round snbp240">
              <span className="icon icon-arrow-left" />
            </div>
            <div className="nav-sw style-not-line nav-prev-slider nav-prev-product box-icon w_46 round snbn240">
              <span className="icon icon-arrow-right" />
            </div>
            <div className="sw-dots style-2 dots-white sw-pagination-product justify-content-center spd240" />
          </div>
          <div className="wow fadeInUp text-center lg-mt-50 mt_37">
            <Link
              href={`/shop-collection-sub`}
              className="tf-btn btn-md btn-light-icon btn-icon radius-3 animate-hover-btn"
            >
              <span>Shop collection</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
