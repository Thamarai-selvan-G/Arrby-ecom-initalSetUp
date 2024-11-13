"use client";
import Link from "next/link";
import { blogArticles4 } from "@/data/blogs";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
export default function RelatedBlogs() {
  return (
    <section className="mb_30">
      <div className="container">
        <div className="flat-title">
          <h5 className="">Related Articles</h5>
        </div>
        <div className="hover-sw-nav view-default hover-sw-5">
          <Swiper
            spaceBetween={30} // Corresponds to data-space
            slidesPerView={3} // Corresponds to data-preview
            breakpoints={{
              768: { slidesPerView: 3 }, // Corresponds to data-tablet
              640: { slidesPerView: 2 }, // Corresponds to data-mobile
              0: { slidesPerView: 1 }, // Corresponds to data-mobile
            }}
            className="swiper tf-sw-recent"
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".snbp101",
              nextEl: ".snbn101",
            }}
            pagination={{ clickable: true, el: ".spd101" }}
          >
            {blogArticles4.map((article, index) => (
              <SwiperSlide key={index}>
                <div className="blog-article-item">
                  <div className="article-thumb radius-10">
                    <Link href={`/blog-detail/${article.id}`}>
                      <Image
                        src={article.imgSrc}
                        alt={article.alt}
                        width={550}
                        height={354}
                        className="lazyload"
                      />
                    </Link>
                    <div className="article-label">
                      <Link
                        href={`/shop-collection-list`}
                        className="tf-btn style-2 btn-fill radius-3 animate-hover-btn"
                      >
                        Shop collection
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
          <div className="nav-sw nav-next-slider nav-next-recent box-icon w_46 round snbp101">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw nav-prev-slider nav-prev-recent box-icon w_46 round snbn101">
            <span className="icon icon-arrow-right" />
          </div>
          <div className="sw-dots d-flex style-2 sw-pagination-recent justify-content-center spd101" />
        </div>
      </div>
    </section>
  );
}
