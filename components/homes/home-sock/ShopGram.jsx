"use client";
import { products37 } from "@/data/products";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { useContextElement } from "@/context/Context";
export default function ShopGram() {
  const { setQuickAddItem } = useContextElement();
  return (
    <section className="flat-spacing-12">
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <span className="title">
            <svg
              style={{
                display: "inline-block",
                marginInlineEnd: 18,
                position: "relative",
                top: "-2px",
              }}
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={40}
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M26.6 39.3334H13.4C7.46664 39.3334 2.66664 34.5334 2.66664 28.6V11.4C2.66664 5.46664 7.46664 0.666641 13.4 0.666641H26.6C32.5334 0.666641 37.3334 5.46664 37.3334 11.4V28.6C37.3334 34.5334 32.5334 39.3334 26.6 39.3334Z"
                fill="#FFE100"
              />
              <path
                d="M2.66664 28.6V11.4C2.66664 5.46664 7.46664 0.666641 13.4 0.666641H11.4C5.46664 0.666641 0.666641 5.46664 0.666641 11.4V28.6C0.666641 34.5334 5.46664 39.3334 11.4 39.3334H13.4C7.46664 39.3334 2.66664 34.5334 2.66664 28.6Z"
                fill="white"
              />
              <path
                d="M28.6 0.666641H26.6C32.5334 0.666641 37.3334 5.46664 37.3334 11.4V28.6C37.3334 34.5334 32.5334 39.3334 26.6 39.3334H28.6C34.5334 39.3334 39.3334 34.5334 39.3334 28.6V11.4C39.3334 5.46664 34.5334 0.666641 28.6 0.666641Z"
                fill="#FFA800"
              />
              <path
                d="M4.66664 28.6V11.4C4.66664 7.66664 7.66664 4.66664 11.4 4.66664H26.6C30.3334 4.66664 33.3334 7.66664 33.3334 11.4V28.6C33.3334 32.3334 30.3334 35.3334 26.6 35.3334H11.4C7.66664 35.3334 4.66664 32.3334 4.66664 28.6Z"
                fill="#FDCC00"
              />
              <path
                d="M28.6 4.66664H26.6C30.3334 4.66664 33.3334 7.66664 33.3334 11.4V28.6C33.3334 32.3334 30.3334 35.3334 26.6 35.3334H28.6C32.3334 35.3334 35.3334 32.3334 35.3334 28.6V11.4C35.3334 7.66664 32.3334 4.66664 28.6 4.66664Z"
                fill="#FFA800"
              />
              <path
                d="M20 30C14.4666 30 10 25.5334 10 20C10 14.4666 14.4666 10 20 10C25.5334 10 30 14.4666 30 20C30 25.5334 25.5334 30 20 30Z"
                fill="#FFE100"
              />
              <path
                d="M24.6666 20C24.6666 16.3334 22.1333 13.3334 19 13.3334C15.8667 13.3334 13.3334 16.3334 13.3334 20C13.3334 23.6666 15.8667 26.6666 19 26.6666C22.1333 26.6666 24.6666 23.6666 24.6666 20Z"
                fill="#63D3FD"
              />
              <path
                d="M20 13.3334H19.4666C22.4 13.6 24.6666 16.4667 24.6666 20C24.6666 23.5333 22.4 26.3334 19.4666 26.6666H20C23.6666 26.6666 26.6666 23.6666 26.6666 20C26.6666 16.3334 23.6666 13.3334 20 13.3334Z"
                fill="#3DB9F9"
              />
              <path
                d="M28.6 40H11.4C5.13336 40 0 34.8666 0 28.6V18.6666C0 18.2666 0.266641 18 0.666641 18C1.06664 18 1.33328 18.2666 1.33328 18.6666V28.6C1.33328 34.1334 5.86664 38.6666 11.3999 38.6666H28.5999C34.1333 38.6666 38.6666 34.1333 38.6666 28.6V11.4C38.6666 5.86664 34.1332 1.33336 28.5999 1.33336H11.4C5.86664 1.33336 1.33336 5.86672 1.33336 11.4V13.3334C1.33336 13.7334 1.06672 14 0.666719 14C0.266719 14 0 13.7334 0 13.3334V11.4C0 5.13336 5.13336 0 11.4 0H28.6C34.8666 0 40 5.13336 40 11.4V28.6C40 34.8666 34.8666 40 28.6 40Z"
                fill="black"
              />
              <path
                d="M1.33336 16C1.33336 15.6 1.06672 15.3334 0.666719 15.3334C0.266719 15.3334 0 15.6 0 16C0 16.4 0.266641 16.6666 0.666641 16.6666C1.06664 16.6666 1.33336 16.4 1.33336 16ZM20 30.6666C14.1334 30.6666 9.33336 25.8666 9.33336 20C9.33336 14.1334 14.1334 9.33336 20 9.33336C25.8666 9.33336 30.6666 14.1334 30.6666 20C30.6666 25.8666 25.8666 30.6666 20 30.6666ZM20 10.6666C14.8666 10.6666 10.6666 14.8666 10.6666 20C10.6666 25.1334 14.8666 29.3334 20 29.3334C25.1334 29.3334 29.3334 25.1334 29.3334 20C29.3334 14.8666 25.1334 10.6666 20 10.6666Z"
                fill="black"
              />
              <path
                d="M20 27.3334C15.9334 27.3334 12.6666 24.0667 12.6666 20C12.6666 15.9333 15.9333 12.6666 20 12.6666C24.0667 12.6666 27.3334 15.9333 27.3334 20C27.3334 24.0667 24.0666 27.3334 20 27.3334ZM20 14C16.6666 14 14 16.6666 14 20C14 23.3334 16.6666 26 20 26C23.3334 26 26 23.3334 26 20C26 16.6666 23.3334 14 20 14ZM32.6666 9.33336C32.6666 8.2 31.8 7.33336 30.6666 7.33336C29.5333 7.33336 28.6666 8.2 28.6666 9.33336C28.6666 10.4667 29.5333 11.3334 30.6666 11.3334C31.8 11.3334 32.6666 10.4666 32.6666 9.33336Z"
                fill="black"
              />
              <path
                d="M28.6 36H11.4C7.33336 36 4 32.6666 4 28.6V11.4C4 7.33336 7.33336 4 11.4 4H28.6C32.6666 4 36 7.33336 36 11.4V28.6C36 32.6666 32.6666 36 28.6 36ZM11.4 5.33336C8.06664 5.33336 5.33336 8.06672 5.33336 11.4V28.6C5.33336 31.9334 8.06672 34.6666 11.4 34.6666H28.6C31.9334 34.6666 34.6666 31.9333 34.6666 28.6V11.4C34.6666 8.06664 31.9333 5.33336 28.6 5.33336H11.4Z"
                fill="black"
              />
            </svg>
            Our Socks On You
          </span>
        </div>
        <div className="wrap-carousel wrap-shop-gram">
          <Swiper
            className="swiper tf-sw-shop-gallery"
            slidesPerView={5}
            breakpoints={{
              768: { slidesPerView: 5 },
              480: { slidesPerView: 3 },
              0: { slidesPerView: 2 },
            }}
            spaceBetween={7}
            modules={[Pagination]}
            pagination={{ clickable: true, el: ".spd276" }}
          >
            {products37.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="gallery-item rounded-0 hover-img wow fadeInUp"
                  data-wow-delay={item.wowDelay}
                >
                  <div className="img-style">
                    <Image
                      className="lazyload img-hover"
                      data-src={item.imgSrc}
                      alt="image-gallery"
                      src={item.imgSrc}
                      width={400}
                      height={400}
                    />
                  </div>
                  {item.quickAdd ? (
                    <a
                      href="#quick_add"
                      onClick={() => setQuickAddItem(item.id)}
                      data-bs-toggle="modal"
                      className="box-icon"
                    >
                      <span className="icon icon-bag" />
                      <span className="tooltip">Quick Add</span>
                    </a>
                  ) : (
                    <Link
                      href={`/product-detail/${item.id}`}
                      className="box-icon"
                    >
                      <span className="icon icon-bag" />
                      <span className="tooltip">{item.tooltip}</span>
                    </Link>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="sw-dots sw-pagination-gallery justify-content-center spd276" />
        </div>
      </div>
    </section>
  );
}
