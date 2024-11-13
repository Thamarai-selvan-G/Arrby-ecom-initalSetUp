"use client";

import { blogArticles4 } from "@/data/blogs";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
export default function Blogs() {
  return (
    <section className="flat-spacing-14 pb-0">
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <span className="title">Blogs post</span>
        </div>
        <div className="hover-sw-nav view-default hover-sw-3">
          <Swiper
            className="swiper tf-sw-recent"
            slidesPerView={3}
            breakpoints={{
              900: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              576: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
            spaceBetween={30}
            loop={false}
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".snbp220",
              nextEl: ".snbn220",
            }}
            pagination={{ clickable: true, el: ".spd220" }}
          >
            <div className="swiper-wrapper">
              {blogArticles4.map((article, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="blog-article-item wow fadeInUp"
                    data-wow-delay={article.delay}
                  >
                    <div className="article-thumb h-460">
                      <Link href={`/blog-detail/${article.id}`}>
                        <Image
                          className="lazyload"
                          data-src={article.imgSrc}
                          alt={article.alt}
                          src={article.imgSrc}
                          width={550}
                          height={article.imgSrc.includes("354") ? 354 : 529}
                        />
                      </Link>
                      <div className="article-label">
                        <Link
                          href={`/blog-detail/${article.id}`}
                          className={article.btnClass}
                        >
                          {article.btnText}
                        </Link>
                      </div>
                    </div>
                    <div className="article-content">
                      <div className="article-title">
                        <Link href={`/blog-detail/${article.id}`} className="">
                          {article.title}
                        </Link>
                      </div>
                      <div className="article-btn">
                        <Link
                          href={`/blog-detail/${article.id}`}
                          className="tf-btn btn-line fw-6"
                        >
                          Read more
                          <i className="icon icon-arrow1-top-left" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
          <div className="nav-sw nav-next-slider nav-next-recent box-icon w_46 round snbp220">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw nav-prev-slider nav-prev-recent box-icon w_46 round snbn220">
            <span className="icon icon-arrow-right" />
          </div>
          <div className="sw-dots style-2 sw-pagination-recent justify-content-center spd220" />
        </div>
      </div>
    </section>
  );
}
