"use client";
import Image from "next/image";
import { recentItems2 } from "@/data/categories";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
export default function Collections2() {
  return (
    <section className="flat-spacing-3 flat-banner-cls-kid pb_0">
      <div className="container">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            1024: { slidesPerView: 3, spaceBetween: 30 },

            576: { slidesPerView: 2, spaceBetween: 15 },
            0: { slidesPerView: 1.3, spaceBetween: 30 },
          }}
          pagination={{ clickable: true, clickable: true }}
          loop={true}
        >
          {recentItems2.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="collection-item-v2 hover-img">
                <Link
                  href={`/shop-collection-sub`}
                  className="collection-inner"
                >
                  <div className="collection-image radius-10 img-style">
                    <Image
                      className="lazyload"
                      src={item.imgSrc}
                      alt="collection-img"
                      width={600}
                      height={666}
                    />
                  </div>
                  <div className="collection-content">
                    <div className="top wow fadeInUp" data-wow-delay="0s">
                      <h5 className="heading text_white">{item.title}</h5>
                      <p className="subheading text_white">{item.price}</p>
                    </div>
                    <div className="bottom wow fadeInUp" data-wow-delay="0s">
                      <button className="tf-btn btn-line btn-line-light collection-other-link fw-6">
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
      </div>
    </section>
  );
}
