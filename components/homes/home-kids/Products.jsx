"use client";

import ProductsCard21 from "@/components/shopCards/ProductsCard21";
import { products41 } from "@/data/products";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products() {
  return (
    <section className="flat-spacing-1 pb_0 flat-flash-sale">
      <div className="container">
        <div className="tf-flash-sale">
          <div className="heading-flash-sale">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={21}
              height={31}
              viewBox="0 0 21 31"
              fill="none"
            >
              <path
                d="M20.0916 11.5447C20.02 11.3956 19.9077 11.2698 19.7677 11.1817C19.6277 11.0936 19.4656 11.0469 19.3002 11.0469H13.6903L18.3286 1.77202C18.3954 1.63804 18.427 1.48925 18.4204 1.33968C18.4138 1.19011 18.3692 1.04468 18.2908 0.917131C18.1295 0.657911 17.8463 0.5 17.5424 0.5H6.99547C6.81673 0.500164 6.64228 0.5548 6.49538 0.656625C6.34848 0.75845 6.2361 0.902628 6.17322 1.06994L0.899757 15.1325C0.849964 15.2655 0.833013 15.4085 0.850345 15.5494C0.867677 15.6903 0.91878 15.8249 0.999308 15.9419C1.0803 16.0586 1.18832 16.154 1.31417 16.2199C1.44002 16.2858 1.57994 16.3203 1.72201 16.3204H7.62717L4.38446 29.4083C4.33605 29.603 4.35562 29.8084 4.43991 29.9904C4.52421 30.1724 4.66817 30.3201 4.84794 30.4091C5.02771 30.4978 5.23235 30.5225 5.42806 30.4791C5.62376 30.4357 5.7988 30.3269 5.92425 30.1705L19.9868 12.4751C20.0904 12.3458 20.1552 12.1898 20.1738 12.0251C20.1923 11.8604 20.1638 11.6939 20.0916 11.5447Z"
                fill="currentColor"
              />
            </svg>
            Flash sale
          </div>
          <Swiper
            spaceBetween={30}
            breakpoints={{
              1003: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 3,
              },
              480: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
            modules={[Pagination]}
            pagination={{ clickable: true, el: ".spd202" }}
          >
            {products41.map((product, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <ProductsCard21 product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="sw-dots style-2 sw-pagination-product justify-content-center spd202" />
        </div>
      </div>
    </section>
  );
}
