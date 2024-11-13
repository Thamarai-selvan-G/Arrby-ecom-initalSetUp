"use client";
import Image from "next/image";
import Link from "next/link";
import { collectionItems } from "@/data/categories";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

export default function Categories() {
  return (
    <section className="flat-spacing-11 pb-0">
      <div className="container">
        <div className="position-relative">
          <div className="flat-title flex-row justify-content-between px-0">
            <span className="title wow fadeInUp" data-wow-delay="0s">
              Shop by category.
            </span>
          </div>
          <div className="sw-pagination-wrapper">
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              breakpoints={{
                1200: { slidesPerView: 4 },
                992: { slidesPerView: 4 },
                768: { slidesPerView: 3 },
                0: { slidesPerView: 1 },
              }}
              loop={false}
              autoplay={false}
              className="tf-sw-collection"
              modules={[Pagination]}
              pagination={{ clickable: true, el: ".spd159" }}
            >
              {collectionItems.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="collection-item-v2 type-small hover-img">
                    <Link
                      href={`/shop-collection-sub`}
                      className="collection-inner"
                    >
                      <div className="collection-image img-style radius-10">
                        <Image
                          className="lazyload"
                          data-src={item.imgSrc}
                          alt={item.imgAlt}
                          src={item.imgSrc}
                          width={item.imgWidth}
                          height={item.imgHeight}
                        />
                      </div>
                      <div className="collection-content">
                        <div className="top">
                          <h5 className="heading fw-5">{item.title}</h5>
                          <p className="subheading">
                            <span>{item.itemCount}</span>
                          </p>
                        </div>
                        <div className="bottom">
                          <button className="tf-btn collection-title hover-icon btn-light rounded-full">
                            <span>Shop now</span>
                            <i className="icon icon-arrow1-top-left" />
                          </button>
                        </div>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="box-sw-navigation">
              <div className="sw-dots style-2 medium sw-pagination-collection justify-content-center spd159" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
