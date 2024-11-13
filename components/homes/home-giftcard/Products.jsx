"use client";
import Image from "next/image";
import { productSlides } from "@/data/products";
import { useContextElement } from "@/context/Context";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

export default function Products() {
  const {
    setQuickViewItem,
    setQuickAddItem,
    addToWishlist,
    isAddedtoWishlist,
    addToCompareItem,
    isAddedtoCompareItem,
  } = useContextElement();
  const {} = useContextElement();
  return (
    <section className="flat-spacing-9">
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <span className="title fw-6">Most popular cards</span>
        </div>
        <div className="wrap-carousel">
          <Swiper
            slidesPerView={4}
            breakpoints={{
              768: { slidesPerView: 4 },
              480: { slidesPerView: 3 },
              0: { slidesPerView: 2 },
            }}
            spaceBetween={30}
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".snbp178",
              nextEl: ".snbn178",
            }}
            pagination={{ clickable: true, el: ".spd178" }}
          >
            {productSlides.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="card-product radius-10 style-giftcard">
                  <div className="card-product-wrapper">
                    <Link href={`/product-giftcard`}>
                      <Image
                        className="lazyload img-product"
                        src={product.imgSrc}
                        alt={product.title}
                        width={533}
                        height={379}
                      />
                    </Link>
                    <div className="list-product-btn">
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
                        onClick={() => setQuickViewItem(product)}
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
                      href={`/product-giftcard`}
                      className="title link fw-6"
                    >
                      {product.title}
                    </Link>
                    <span className="price">${product.price.toFixed(2)}</span>
                    <div className="tf-product-btns">
                      <a
                        href="#quick_add"
                        onClick={() => setQuickAddItem(product.id)}
                        data-bs-toggle="modal"
                        className="fw-7 fs-12 text_primary w-100 d-flex justify-content-center"
                      >
                        Quick add
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="nav-sw nav-next-slider nav-next-product box-icon w_46 round snbp178">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw nav-prev-slider nav-prev-product box-icon w_46 round snbn178">
            <span className="icon icon-arrow-right" />
          </div>
          <div className="sw-dots style-2 sw-pagination-product justify-content-center spd178" />
        </div>
      </div>
    </section>
  );
}
