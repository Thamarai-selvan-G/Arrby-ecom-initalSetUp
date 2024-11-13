"use client";
import Image from "next/image";
import { slides4 } from "@/data/categories";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Navigation } from "swiper/modules";
export default function Categories() {
  return (
    <section className="flat-spacing-4 flat-categorie">
      <div className="container">
        <div className="flat-title-v2">
          <div className="box-sw-navigation">
            <div className="nav-sw nav-next-slider nav-next-collection snbp206">
              <span className="icon icon-arrow-left" />
            </div>
            <div className="nav-sw nav-prev-slider nav-prev-collection snbn206">
              <span className="icon icon-arrow-right" />
            </div>
          </div>
          <span
            className="text-3 fw-7 text-uppercase title wow fadeInUp"
            data-wow-delay="0s"
          >
            SHOP BY CATEGORIES
          </span>
        </div>
        <div className="row">
          <div className="col-xl-9 col-lg-8 col-md-8">
            <Swiper
              spaceBetween={30}
              slidesPerView={3}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                },
                576: {
                  slidesPerView: 2,
                },
                0: {
                  slidesPerView: 1,
                },
              }}
              loop={false}
              autoplay={false}
              className="swiper tf-sw-collection"
              modules={[Navigation]}
              navigation={{
                prevEl: ".snbp206",
                nextEl: ".snbn206",
              }}
            >
              {slides4.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="collection-item style-left hover-img">
                    <div className="collection-inner">
                      <Link
                        href={`/shop-default`}
                        className="collection-image img-style"
                      >
                        <Image
                          className="lazyload"
                          data-src={slide.imgSrc}
                          alt={slide.imgAlt}
                          src={slide.imgSrc}
                          width={600}
                          height={721}
                        />
                      </Link>
                      <div className="collection-content">
                        <Link
                          href={`/shop-default`}
                          className="tf-btn collection-title hover-icon fs-15"
                        >
                          <span>{slide.title}</span>
                          <i className="icon icon-arrow1-top-left" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-4">
            <div className="discovery-new-item">
              <h5>Discovery all new items</h5>
              <Link href={`/shop-collection-list`}>
                <i className="icon-arrow1-top-left" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
