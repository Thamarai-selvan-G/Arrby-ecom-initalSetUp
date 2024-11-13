"use client";
import { testimonials11 } from "@/data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
export default function Testimonials() {
  return (
    <section className="bg_grey-7 flat-spacing-18">
      <div className="container">
        <div className="wrap-carousel">
          <Swiper
            className="tf-sw-testimonial"
            slidesPerView={2} // data-preview
            spaceBetween={30} // default space
            loop={true}
            // pagination={{clickable:true, clickable: true, el: ".sw-pagination-testimonial" }} // data-pagination
            breakpoints={{
              1024: {
                slidesPerView: 2, // data-tablet
                spaceBetween: 30, // data-space-lg
              },
              768: {
                slidesPerView: 2, // data-mobile
                spaceBetween: 30, // data-space-md
              },
              0: {
                slidesPerView: 1, // data-mobile
                spaceBetween: 15, // data-space-md
              },
            }}
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".snbp153",
              nextEl: ".snbn153",
            }}
            pagination={{ clickable: true, el: ".spd149" }}
          >
            {testimonials11.map(
              ({
                id,
                imgSrc,
                rating,
                text,
                authorName,
                authorMeta,
                product,
              }) => (
                <SwiperSlide key={id}>
                  <div className="testimonial-item style-row">
                    <div className="image radius-5 o-hidden">
                      <Image
                        className="lazyload"
                        data-src={imgSrc}
                        alt=""
                        src={imgSrc}
                        width={488}
                        height={619}
                      />
                    </div>
                    <div className="content">
                      <div className="rating">
                        {[...Array(rating)].map((_, index) => (
                          <i key={index} className="icon-start" />
                        ))}
                      </div>
                      <div className="text">{text}</div>
                      <div className="author">
                        <div className="name">{authorName}</div>
                        <div className="metas">{authorMeta}</div>
                      </div>
                      <div className="product">
                        <div className="img-thumb radius-5 o-hidden">
                          <Image
                            className="lazyload"
                            data-src={product.imgSrc}
                            alt=""
                            src={product.imgSrc}
                            width={720}
                            height={1005}
                          />
                        </div>
                        <div className="content-wrap">
                          <div className="product-title">
                            <a href={product.link}>{product.title}</a>
                          </div>
                          <div className="price">{product.price}</div>
                        </div>
                        <a href={product.link}>
                          <i className="icon-arrow1-top-left" />
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            )}
            <div className="sw-dots style-2 sw-pagination-testimonial justify-content-center d-xl-none" />
          </Swiper>
          <div className="nav-sw disable-line nav-next-slider nav-next-testimonial lg snbp153">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw disable-line nav-prev-slider nav-prev-testimonial lg snbn153">
            <span className="icon icon-arrow-right" />
          </div>
          <div className="sw-dots style-2 sw-pagination-testimonial justify-content-center spd149" />
        </div>
      </div>
    </section>
  );
}
