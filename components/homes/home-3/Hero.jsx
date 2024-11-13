"use client";
import Image from "next/image";
import { slides2 } from "@/data/heroslides";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="tf-slideshow slider-collection hover-sw-nav">
      <Swiper
        slidesPerView={3} // Adjust based on your requirements (data-preview attribute)
        spaceBetween={5} // Adjust based on your requirements (data-space attribute)
        centeredSlides={false} // Adjust based on your requirements (data-centered attribute)
        loop={false} // Adjust based on your requirements (data-loop attribute)
        speed={1000} // Adjust based on your requirements (data-speed attribute)
        autoplay={{
          delay: 2000, // Adjust based on your requirements (data-delay attribute)
        }}
        modules={[Autoplay, Navigation, Pagination]}
        pagination={{ clickable: true, el: ".spb4" }}
        navigation={{
          prevEl: ".snbp4",
          nextEl: ".snbn4",
        }}
        breakpoints={{
          768: { slidesPerView: 3 }, // Adjust based on your requirements (data-tablet attribute)
          0: { slidesPerView: 1 }, // Adjust based on your requirements (data-mobile attribute)
        }}
      >
        {slides2.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="collection-item hover-img">
              <div className="collection-inner">
                <Link href={slide.href} className="collection-image img-style">
                  <Image
                    alt={slide.alt}
                    src={slide.imgSrc}
                    width="631"
                    height="806"
                  />
                </Link>
                <div className="collection-content">
                  <Link
                    href={slide.href}
                    className="tf-btn hover-icon collection-title radius-3"
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
      <div className="nav-sw nav-next-slider navigation-next-slider box-icon w_46 round snbp4">
        <span className="icon icon-arrow-left" />
      </div>
      <div className="nav-sw nav-prev-slider navigation-prev-slider box-icon w_46 round snbn4">
        <span className="icon icon-arrow-right" />
      </div>
      <div className="sw-dots style-2 sw-pagination-slider justify-content-center spb4" />
    </section>
  );
}
