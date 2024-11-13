"use client";

import { blogArticles3 } from "@/data/blogs";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
export default function Blogs() {
  return (
    <section className="flat-spacing-14">
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <span className="title">Blogs post</span>
        </div>
        <div className="hover-sw-nav view-default hover-sw-3">
          <Swiper
            className="swiper tf-sw-product-sell"
            slidesPerView={3}
            spaceBetween={30}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              0: { slidesPerView: 1 },
            }}
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".snbp157",
              nextEl: ".snbn157",
            }}
            pagination={{ clickable: true, el: ".spd157" }}
          >
            {blogArticles3.map((article, index) => (
              <SwiperSlide key={index}>
                <div
                  className="blog-article-item wow fadeInUp"
                  data-wow-delay={article.delay}
                >
                  <div className="article-thumb h-460 rounded-0">
                    <Link href={`/blog-detail/${article.id}`}>
                      <Image
                        className="lazyload"
                        data-src={article.imgSrc}
                        alt={article.alt}
                        src={article.imgSrc}
                        width={550}
                        height={354}
                      />
                    </Link>
                    <div className="article-label">
                      <Link
                        href={`/blog-grid`}
                        className="tf-btn btn-sm animate-hover-btn"
                      >
                        Accessories
                      </Link>
                    </div>
                  </div>
                  <div className="article-content">
                    <div className="article-title">
                      <Link href={`/blog-detail/${article.id}`}>
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
          </Swiper>
          <div className="nav-sw nav-next-slider nav-next-product box-icon w_46 round snbp157">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw nav-prev-slider nav-prev-product box-icon w_46 round snbn157">
            <span className="icon icon-arrow-right" />
          </div>
          <div className="sw-dots style-2 sw-pagination-product justify-content-center spd157" />
        </div>
      </div>
    </section>
  );
}
