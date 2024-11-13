"use client";

import { blogArticles2 } from "@/data/blogs";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
export default function Blog() {
  return (
    <section className="flat-spacing-14">
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <span className="title fw-6">Blogs post</span>
        </div>
        <div className="hover-sw-nav hover-sw-4 view-default">
          <Swiper
            className="swiper tf-sw-recent"
            slidesPerView={3}
            spaceBetween={15}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 3, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".snbp172",
              nextEl: ".snbn172",
            }}
            pagination={{ clickable: true, el: ".spd172" }}
          >
            {blogArticles2.map((article, index) => (
              <SwiperSlide key={index}>
                <div
                  className="blog-article-item wow fadeInUp"
                  data-wow-delay={article.delay}
                >
                  <div className="article-thumb rounded-0">
                    <Link href={`/blog-detail/${article.id}`}>
                      <Image
                        className="lazyload"
                        data-src={article.imgSrc}
                        alt="img-blog"
                        src={article.imgSrc}
                        width={550}
                        height={354}
                      />
                    </Link>
                    <div className="article-label">
                      <Link
                        href={`/blog-detail/${article.id}`}
                        className="animate-hover-btn btn-icon btn-sm radius-3 tf-btn text-capitalize"
                      >
                        {article.label}
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
                        {article.readMoreText}
                        <i className="icon icon-arrow1-top-left" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="nav-sw nav-next-slider nav-next-recent box-icon w_46 round snbp172">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw nav-prev-slider nav-prev-recent box-icon w_46 round snbn172">
            <span className="icon icon-arrow-right" />
          </div>
          <div className="sw-dots style-2 sw-pagination-recent justify-content-center spd172" />
        </div>
      </div>
    </section>
  );
}
