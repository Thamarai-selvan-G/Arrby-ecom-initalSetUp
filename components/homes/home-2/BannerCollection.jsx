"use client";
import Image from "next/image";
import { slides } from "@/data/banner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Link from "next/link";

export default function BannerCollection() {
  return (
    <section className="flat-spacing-3 pt_0 line">
      <div className="container-full">
        <div className="wrap-carousel">
          <Swiper
            slidesPerView={2} // Adjust based on your requirements
            spaceBetween={30} // Adjust based on your requirements
            breakpoints={{
              768: { slidesPerView: 2 }, // Adjust based on your requirements
              0: { slidesPerView: 1 }, // Adjust based on your requirements
            }}
            loop={false} // Adjust based on your requirements
            autoplay={false} // Adjust based on your requirements    modules={[Navigation, Pagination]}
            modules={[Pagination]}
            pagination={{ clickable: true, el: ".spd111" }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="banner-gr-item text-center hover-img">
                  <div className="img-style">
                    <Link href={`/shop-default`}>
                      <Image
                        className="lazyload"
                        data-src={slide.imgSrc}
                        alt={slide.alt}
                        src={slide.imgSrc}
                        width="1000"
                        height="727"
                      />
                    </Link>
                  </div>
                  <div className="content">
                    <div className="title">
                      <Link href={`/shop-default`} className="link">
                        {slide.title}
                      </Link>
                    </div>
                    <p>{slide.description}</p>
                    <Link href={`/shop-default`} className="tf-btn btn-line">
                      Shop Collection
                      <i className="icon icon-arrow1-top-left" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="sw-dots style-2 sw-pagination-collection justify-content-center spd111" />
        </div>
      </div>
    </section>
  );
}
