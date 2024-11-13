"use client";

import { testimonials13 } from "@/data/testimonials";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  return (
    <section
      className="flat-testimonial-bg-v2"
      style={{
        backgroundImage: "url(images/slider/image_bg_testimonials-tee.jpg)",
      }}
    >
      <div className="container-full slider-layout-right">
        <div className="row">
          <div className="col-xl-4">
            <div className="wrap-content-left">
              <div className="flat-title mb_1 flex-row px-0">
                <span
                  className="title text_white wow fadeInUp font-caprasimo"
                  data-wow-delay="0s"
                >
                  Hear from Our Happy Customers
                </span>
              </div>
              <div className="rating">
                <i className="text-14 icon-start" />
                <i className="text-14 icon-start" />
                <i className="text-14 icon-start" />
                <i className="text-14 icon-start" />
                <i className="text-14 icon-start" />
              </div>
              <p className="text_white">More than 1368 review on Ecomus</p>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="wrap-content-right">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  600: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                modules={[Navigation, Pagination]}
                navigation={{
                  prevEl: ".snbp296",
                  nextEl: ".snbn296",
                }}
                pagination={{ clickable: true, el: ".spd296" }}
                className="swiper tf-sw-testimonial sw-wrapper-right"
              >
                {testimonials13.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="testimonial-item style-column style-2 bg_white">
                      <div className="rating">
                        <i className="text-14 icon-start" />
                        <i className="text-14 icon-start" />
                        <i className="text-14 icon-start" />
                        <i className="text-14 icon-start" />
                        <i className="text-14 icon-start" />
                      </div>
                      <div className="heading font-caprasimo">
                        {testimonial.heading}
                      </div>
                      <div className="text">{testimonial.text}</div>
                      <div className="author">
                        <p className="font-caprasimo fw-6">
                          {testimonial.author}
                        </p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={17}
                          viewBox="0 0 16 17"
                          fill="none"
                        >
                          <path
                            d="M14.1451 5.91365V3.94321C14.1451 3.50033 13.9692 3.07559 13.656 2.76243C13.3429 2.44927 12.9181 2.27334 12.4753 2.27334H10.5466L9.17726 0.904043C8.86439 0.593028 8.44116 0.418457 8 0.418457C7.55884 0.418457 7.13561 0.593028 6.82274 0.904043L5.4952 2.27334H3.52475C3.08187 2.27334 2.65713 2.44927 2.34397 2.76243C2.03081 3.07559 1.85488 3.50033 1.85488 3.94321V5.91365L0.485586 7.2412C0.174571 7.55407 0 7.9773 0 8.41846C0 8.85961 0.174571 9.28284 0.485586 9.59572L1.85488 10.965V12.8937C1.85488 13.3366 2.03081 13.7613 2.34397 14.0745C2.65713 14.3876 3.08187 14.5636 3.52475 14.5636H5.4952L6.82274 15.9329C7.13561 16.2439 7.55884 16.4185 8 16.4185C8.44116 16.4185 8.86439 16.2439 9.17726 15.9329L10.5466 14.5636H12.4753C12.9181 14.5636 13.3429 14.3876 13.656 14.0745C13.9692 13.7613 14.1451 13.3366 14.1451 12.8937V10.965L15.5144 9.59572C15.8254 9.28284 16 8.85961 16 8.41846C16 7.9773 15.8254 7.55407 15.5144 7.2412L14.1451 5.91365Z"
                            fill="currentColor"
                          />
                          <path
                            d="M7.3738 10.5058C7.26392 10.5064 7.15499 10.4854 7.05326 10.4438C6.95154 10.4023 6.85901 10.341 6.781 10.2637L5.4952 9.01126C5.33797 8.85404 5.24965 8.6408 5.24965 8.41846C5.24965 8.19611 5.33797 7.98287 5.4952 7.82565C5.65242 7.66843 5.86565 7.58011 6.088 7.58011C6.31034 7.58011 6.52358 7.66843 6.6808 7.82565L7.3404 8.4936L9.2524 6.57325C9.40962 6.40717 9.62638 6.31035 9.85499 6.30409C10.0836 6.29782 10.3053 6.38263 10.4714 6.53985C10.6375 6.69707 10.7343 6.91383 10.7406 7.14244C10.7468 7.37105 10.662 7.59278 10.5048 7.75886L8 10.2637C7.91806 10.3452 7.8201 10.4088 7.71231 10.4504C7.60452 10.4921 7.48925 10.511 7.3738 10.5058Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="d-md-flex d-none box-sw-navigation">
                <div className="nav-sw line-white nav-next-slider nav-next-testimonial snbp296">
                  <span className="icon icon-arrow-left" />
                </div>
                <div className="nav-sw line-white nav-prev-slider nav-prev-testimonial snbn296">
                  <span className="icon icon-arrow-right" />
                </div>
              </div>
              <div className="d-md-none sw-dots dots-white style-2 sw-pagination-testimonial spd296" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
