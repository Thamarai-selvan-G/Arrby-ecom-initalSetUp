"use client";

import ProductCard18 from "@/components/shopCards/ProductCard18";
import { products25 } from "@/data/products";
import { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const tabs = ["Best seller", "New arrivals", "On Sale"];
export default function Products() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [filtered, setFiltered] = useState(products25);
  useEffect(() => {
    setFiltered(
      [...products25].filter((el) => el.filterCategories.includes(activeTab))
    );
  }, [activeTab, products25]);
  return (
    <section className="flat-spacing-26">
      <div className="container">
        <div className="flat-tab-store flat-animate-tab overflow-unset">
          <ul
            className="widget-tab-3 d-flex justify-content-center flex-wrap wow fadeInUp"
            data-wow-delay="0s"
            role="tablist"
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
              <div className="wrap-carousel">
                <Swiper
                  slidesPerView={4}
                  breakpoints={{
                    1000: { slidesPerView: 4 },
                    768: { slidesPerView: 3 },
                    576: { slidesPerView: 2 },
                    0: { slidesPerView: 1 },
                  }}
                  spaceBetween={30}
                  modules={[Navigation, Pagination]}
                  navigation={{
                    prevEl: ".snbp239",
                    nextEl: ".snbn239",
                  }}
                  pagination={{ clickable: true, el: ".spd239" }}
                  className="swiper tf-sw-product-sell-1"
                >
                  {filtered.map((product, index) => (
                    <SwiperSlide key={index}>
                      <ProductCard18 product={product} />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="nav-sw nav-next-slider nav-next-sell-1 box-icon w_46 round snbp239">
                  <span className="icon icon-arrow-left" />
                </div>
                <div className="nav-sw nav-prev-slider nav-prev-sell-1 box-icon w_46 round snbn239">
                  <span className="icon icon-arrow-right" />
                </div>
                <div className="sw-dots style-2 sw-pagination-sell-1 justify-content-center spd239" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
