"use client";

import ProductCard14 from "@/components/shopCards/ProductCard14";
import { products18 } from "@/data/products";
import { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const tabs = ["Best seller", "New arrivals", "On Sale"];
export default function Products() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [filtered, setFiltered] = useState(products18);
  useEffect(() => {
    setFiltered(
      [...products18].filter((el) => el.filterCategories.includes(activeTab))
    );
  }, [activeTab, products18]);
  return (
    <section className="flat-spacing-17">
      <div className="container">
        <div className="flat-animate-tab">
          <ul
            className="widget-tab-3 d-flex justify-content-center wow fadeInUp"
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
            <div
              className="tab-pane active show"
              id="bestSeller"
              role="tabpanel"
            >
              <div className="hover-sw-nav hover-sw-2">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={4}
                  breakpoints={{
                    768: { slidesPerView: 4, spaceBetween: 30 },
                    480: { slidesPerView: 3, spaceBetween: 15 },
                    0: { slidesPerView: 2, spaceBetween: 15 },
                  }}
                  modules={[Navigation, Pagination]}
                  navigation={{
                    prevEl: ".snbp209",
                    nextEl: ".snbn209",
                  }}
                  pagination={{ clickable: true, el: ".spd209" }}
                  className="swiper tf-sw-product-sell wrap-sw-over"
                >
                  {filtered.map((product, index) => (
                    <SwiperSlide key={index}>
                      <ProductCard14 product={product} />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="nav-sw nav-next-slider nav-next-product box-icon w_46 round snbp209">
                  <span className="icon icon-arrow-left" />
                </div>
                <div className="nav-sw nav-prev-slider nav-prev-product box-icon w_46 round snbn209">
                  <span className="icon icon-arrow-right" />
                </div>
                <div className="sw-dots style-2 sw-pagination-product justify-content-center spd209" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
