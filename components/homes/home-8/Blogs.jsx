"use client";
import Image from "next/image";
import { blogArticles } from "@/data/blogs";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

export default function Blogs() {
  return (
    <section className="flat-spacing-14">
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <span className="title">Blogs post</span>
        </div>
        <div className="hover-sw-nav view-default hover-sw-3">
          <Swiper
            slidesPerView={3}
            spaceBetween={15}
            breakpoints={{
              1200: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              0: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
            }}
            pagination={{ clickable: true, clickable: true, el: ".spbb1" }}
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".snbp133",
              nextEl: ".snbn133",
            }}
            className="tf-sw-recent"
          >
            {blogArticles.map((article, index) => (
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
                        alt="img-blog"
                        src={article.imgSrc}
                        width={article.imgWidth}
                        height={article.imgHeight}
                      />
                    </Link>
                    <div className="article-label">
                      <Link
                        href={`/blog-grid`}
                        className="tf-btn btn-sm btn-fill animate-hover-btn"
                      >
                        {article.labelText}
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
            <div className="sw-dots spbb1 style-2 sw-pagination-recent justify-content-center" />
          </Swiper>
          <div className="nav-sw nav-next-slider nav-next-recent box-icon w_46 round snbp133">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw nav-prev-slider nav-prev-recent box-icon w_46 round snbn133">
            <span className="icon icon-arrow-right" />
          </div>
        </div>
      </div>
    </section>
  );
}
