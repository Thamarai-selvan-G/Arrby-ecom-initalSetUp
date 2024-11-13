"use client";

import { products36 } from "@/data/products";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useContextElement } from "@/context/Context";
import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";
export default function Products2() {
  const { setQuickViewItem } = useContextElement();
  const {
    setQuickAddItem,
    addToWishlist,
    isAddedtoWishlist,
    addToCompareItem,
    isAddedtoCompareItem,
  } = useContextElement();
  return (
    <section className="flat-spacing-23">
      <div className="container">
        <div className="flat-title">
          <span className="title wow fadeInUp" data-wow-delay="0s">
            <svg
              style={{
                display: "inline-block",
                marginInlineEnd: 18,
                position: "relative",
                top: "-2px",
              }}
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={36}
              viewBox="0 0 40 36"
              fill="none"
            >
              <path
                d="M0.625077 11.2933C0.625077 5.40273 5.3821 0.62763 11.25 0.62763C13.8526 0.62763 16.2349 1.56833 18.0812 3.1285C19.191 4.06622 20.8088 4.06622 21.9186 3.1285C23.765 1.56833 26.1472 0.62763 28.7498 0.62763C34.6178 0.62763 39.3747 5.40273 39.3747 11.2933V10.9796C39.3747 21.323 26.8436 30.6522 21.9369 33.9086C21.3624 34.2901 20.6887 34.4935 19.9998 34.4935C19.311 34.4935 18.6373 34.2901 18.0628 33.9086C13.1562 30.6521 0.625077 21.3231 0.625077 10.9795"
                fill="#FF6464"
              />
              <path
                d="M6.18139 10.2694C6.18046 10.2013 6.17944 10.1332 6.17944 10.0651C6.17944 10.1331 6.18046 10.2013 6.18139 10.2694C6.23007 6.31285 8.16249 2.8123 11.1204 0.629277C5.35686 0.698526 0.698046 5.37379 0.626796 11.1591C0.770311 21.4308 13.1846 30.671 18.0629 33.9085C18.6374 34.29 19.311 34.4935 19.9999 34.4935C20.6888 34.4935 21.3625 34.29 21.937 33.9085C22.0903 33.8068 22.2431 33.7044 22.3955 33.6012C15.9039 28.7186 6.31585 19.8916 6.18139 10.2694Z"
                fill="#D2555A"
              />
              <path
                d="M39.9999 10.9796C39.9997 10.9508 39.9975 10.9221 39.9934 10.8936C39.9929 10.8902 39.9931 10.8866 39.9926 10.8833C39.777 4.84529 34.8165 0 28.7499 0C26.1063 0 23.5373 0.940543 21.5161 2.64839C21.0921 3.0079 20.555 3.20513 20 3.20515C19.445 3.20516 18.9079 3.00795 18.4839 2.64847C16.4628 0.940622 13.8937 7.83813e-05 11.2501 7.83813e-05C5.18343 7.83813e-05 0.222968 4.84529 0.00742186 10.8833C0.00687499 10.8867 0.00710936 10.8903 0.00664061 10.8937C0.00240416 10.9221 0.000185034 10.9508 0 10.9796V11.2933C0 11.3197 0.0021875 11.3456 0.00531249 11.3711C0.00570311 11.374 0.00554686 11.3771 0.00593749 11.38C0.312031 21.7702 12.4581 30.9411 17.7182 34.432C18.3948 34.8819 19.1884 35.1219 20 35.122C20.8116 35.1218 21.6052 34.8818 22.2818 34.432C27.5418 30.9411 39.688 21.7702 39.9941 11.38C39.9945 11.3771 39.9943 11.374 39.9947 11.3711C39.998 11.3453 39.9998 11.3193 40 11.2933L39.9999 10.9796ZM21.5923 33.3851C21.1202 33.6991 20.5664 33.8666 20 33.8666C19.4336 33.8666 18.8798 33.6991 18.4077 33.3851C16.1155 31.8638 11.7103 28.7092 7.96123 24.6738C3.57077 19.948 1.31453 15.4032 1.25187 11.1614V11.1503L1.25172 11.1318C1.33797 5.67094 5.78999 1.25526 11.2501 1.25526C13.5997 1.25526 15.8828 2.09111 17.6788 3.60878C18.328 4.15917 19.1503 4.46111 20 4.46111C20.8498 4.46111 21.6721 4.15917 22.3213 3.60878C24.1174 2.09111 26.4004 1.25534 28.7499 1.25534C34.2103 1.25534 38.6624 5.67149 38.7484 11.1326L38.7481 11.1505V11.1628C38.6851 15.4043 36.4288 19.9486 32.0388 24.6739C28.2897 28.7092 23.8845 31.8637 21.5923 33.3851ZM15.8497 4.54398C15.8086 4.61537 15.754 4.67793 15.6888 4.7281C15.6237 4.77828 15.5494 4.81508 15.4701 4.8364C15.3908 4.85773 15.308 4.86316 15.2266 4.85238C15.1452 4.84161 15.0668 4.81484 14.9957 4.77361C13.8568 4.11367 12.565 3.76589 11.25 3.76515C11.1679 3.76516 11.0866 3.74894 11.0108 3.71741C10.9349 3.68588 10.866 3.63966 10.808 3.58139C10.7499 3.52312 10.7039 3.45395 10.6725 3.37782C10.6411 3.30168 10.6249 3.22008 10.6249 3.13768C10.6249 3.05528 10.6411 2.97368 10.6725 2.89754C10.7039 2.82141 10.7499 2.75223 10.808 2.69397C10.866 2.6357 10.9349 2.58948 11.0108 2.55795C11.0866 2.52642 11.1679 2.5102 11.25 2.51021C12.7814 2.51021 14.2928 2.91715 15.6209 3.68696C15.692 3.72815 15.7543 3.78298 15.8043 3.84835C15.8543 3.91371 15.8909 3.98832 15.9122 4.0679C15.9334 4.14749 15.9388 4.2305 15.9281 4.31219C15.9174 4.39387 15.8907 4.47264 15.8497 4.54398ZM34.4604 6.12008C34.2958 6.12029 34.1379 6.05517 34.021 5.93892C33.3971 5.31992 32.6826 4.82098 31.8971 4.45599C31.8226 4.42139 31.7556 4.37239 31.7 4.31179C31.6444 4.2512 31.6012 4.1802 31.5729 4.10284C31.5446 4.02548 31.5318 3.94329 31.5351 3.86095C31.5385 3.77861 31.5579 3.69775 31.5924 3.62297C31.6269 3.54816 31.6757 3.4809 31.736 3.42504C31.7964 3.36917 31.8671 3.3258 31.9442 3.29739C32.0213 3.26899 32.1032 3.25611 32.1852 3.25949C32.2672 3.26288 32.3478 3.28246 32.4223 3.31711C33.3393 3.74319 34.1729 4.32502 34.8998 5.04637C34.9582 5.1043 35.0046 5.1732 35.0365 5.24915C35.0683 5.3251 35.085 5.4066 35.0854 5.489C35.0859 5.5714 35.0702 5.65309 35.0392 5.7294C35.0082 5.80571 34.9626 5.87515 34.9049 5.93374C34.8468 5.99289 34.7776 6.03982 34.7013 6.07182C34.625 6.10381 34.5431 6.12022 34.4604 6.12008ZM37.4974 11.1471V11.1682C37.4617 13.2383 36.8305 15.4369 35.6211 17.7027C35.5827 17.776 35.5302 17.8408 35.4667 17.8936C35.4031 17.9464 35.3298 17.9861 35.251 18.0103C35.1722 18.0345 35.0893 18.0429 35.0072 18.0348C34.9252 18.0268 34.8455 18.0025 34.7728 17.9634C34.7001 17.9243 34.6358 17.8712 34.5837 17.8071C34.5316 17.7429 34.4926 17.6691 34.469 17.5898C34.4454 17.5105 34.4377 17.4272 34.4462 17.3449C34.4548 17.2626 34.4796 17.1828 34.519 17.1101C35.6314 15.0256 36.2129 13.0227 36.2471 11.1569C36.2259 9.9504 35.9313 8.80517 35.3715 7.75287C35.3328 7.68019 35.3088 7.60056 35.3008 7.51855C35.2928 7.43654 35.3009 7.35375 35.3248 7.2749C35.3486 7.19606 35.3877 7.1227 35.4398 7.05902C35.492 6.99534 35.556 6.94259 35.6284 6.90377C35.7009 6.86496 35.7802 6.84084 35.8619 6.83279C35.9436 6.82475 36.026 6.83294 36.1046 6.85689C36.1831 6.88084 36.2562 6.92009 36.3196 6.97239C36.3831 7.02469 36.4356 7.08902 36.4743 7.16171C37.1211 8.37721 37.4749 9.75536 37.4974 11.1471Z"
                fill="black"
              />
            </svg>
            Our Favorite Socks
          </span>
        </div>
        <div className="wrap-carousel wrap-sw-2">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            breakpoints={{
              1024: { slidesPerView: 4, spaceBetween: 30 },
              768: { slidesPerView: 3, spaceBetween: 30 },
              640: { slidesPerView: 3, spaceBetween: 15 },
              0: { slidesPerView: 2, spaceBetween: 15 },
            }}
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".snbp275",
              nextEl: ".snbn275",
            }}
            pagination={{ clickable: true, el: ".spd275" }}
          >
            {products36.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="card-product">
                  <div className="card-product-wrapper rounded-0">
                    <Link
                      href={`/product-detail/${product.id}`}
                      className="product-img"
                    >
                      <Image
                        className="lazyload img-product"
                        data-src={product.imgSrc}
                        alt="image-product"
                        src={product.imgSrc}
                        width={360}
                        height={360}
                      />
                      <Image
                        className="lazyload img-hover"
                        data-src={product.imgHoverSrc}
                        alt="image-product"
                        src={product.imgHoverSrc}
                        width={360}
                        height={450}
                      />
                    </Link>
                    <div className="list-product-btn absolute-2">
                      <a
                        href="#quick_add"
                        onClick={() => setQuickAddItem(product.id)}
                        data-bs-toggle="modal"
                        className="box-icon bg_white quick-add tf-btn-loading"
                      >
                        <span className="icon icon-bag" />
                        <span className="tooltip">Quick Add</span>
                      </a>
                      <a
                        onClick={() => addToWishlist(product.id)}
                        className="box-icon bg_white wishlist btn-icon-action"
                      >
                        <span
                          className={`icon icon-heart ${
                            isAddedtoWishlist(product.id) ? "added" : ""
                          }`}
                        />
                        <span className="tooltip">
                          {isAddedtoWishlist(product.id)
                            ? "Already Wishlisted"
                            : "Add to Wishlist"}
                        </span>
                        <span className="icon icon-delete" />
                      </a>
                      <a
                        href="#compare"
                        data-bs-toggle="offcanvas"
                        aria-controls="offcanvasLeft"
                        onClick={() => addToCompareItem(product.id)}
                        className="box-icon bg_white compare btn-icon-action"
                      >
                        <span
                          className={`icon icon-compare ${
                            isAddedtoCompareItem(product.id) ? "added" : ""
                          }`}
                        />
                        <span className="tooltip">
                          {" "}
                          {isAddedtoCompareItem(product.id)
                            ? "Already Compared"
                            : "Add to Compare"}
                        </span>
                        <span className="icon icon-check" />
                      </a>
                      <a
                        href="#quick_view"
                        onClick={() => setQuickViewItem(product)}
                        data-bs-toggle="modal"
                        className="box-icon bg_white quickview tf-btn-loading"
                      >
                        <span className="icon icon-view" />
                        <span className="tooltip">Quick View</span>
                      </a>
                    </div>
                  </div>
                  <div className="card-product-info">
                    <Link
                      href={`/product-detail/${product.id}`}
                      className="title link"
                    >
                      {product.title}
                    </Link>
                    <span className="price">${product.price.toFixed(2)}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="nav-sw nav-next-slider nav-next-sell-1 box-icon w_46 round snbp275">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw nav-prev-slider nav-prev-sell-1 box-icon w_46 round snbn275">
            <span className="icon icon-arrow-right" />
          </div>
          <div className="sw-dots style-2 sw-pagination-sell-1 justify-content-center spd275" />
        </div>
      </div>
    </section>
  );
}
