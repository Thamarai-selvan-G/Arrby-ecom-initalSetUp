"use client";
import { ProductCard } from "@/components/shopCards/ProductCard";
import { products1, products28 } from "@/data/products";
import { useEffect, useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const tabs = ["Men", "Women"];

export default function Products2() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [filtered, setFiltered] = useState(products28);
  useEffect(() => {
    if ("Women" == activeTab) {
      setFiltered([...products1]);
    } else {
      setFiltered([...products28]);
    }
  }, [activeTab]);
  return (
    <section className="flat-spacing-5">
      <div className="container">
        <div className="flat-title mb_1 px-0 align-items-md-start">
          <span
            className="title wow fadeInUp font-young-serif"
            data-wow-delay="0s"
          >
            Trending Now
          </span>
        </div>
        <div className="flat-animate-tab">
          <ul
            className="widget-tab-3 style-3 d-flex justify-content-center wow fadeInUp"
            data-wow-delay="0s"
          >
            {tabs.map((tab, index) => (
              <li
                onClick={() => setActiveTab(tab)}
                className="nav-tab-item"
                role="presentation"
                key={index}
              >
                <a className={activeTab === tab ? "active" : ""}>{tab}</a>
              </li>
            ))}
          </ul>
          <div className="tab-content">
            <div className="tab-pane hover-sw-nav active show">
              <Swiper
                loop={false}
                autoplay={false}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  320: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 4 },
                }}
                spaceBetween={30}
                slidesPerView={4}
                modules={[Pagination]}
                pagination={{ clickable: true, el: ".spd146" }}
              >
                {filtered.map((product, index) => (
                  <SwiperSlide key={index} className="swiper-slide">
                    <ProductCard product={product} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="sw-dots style-2 sw-pagination-product justify-content-center spd146"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
