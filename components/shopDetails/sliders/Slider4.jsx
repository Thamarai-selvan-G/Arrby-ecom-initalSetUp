"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const images = [
  {
    id: 1,
    src: "/images/shop/products/p-d1.png",
    alt: "",
    width: 770,
    height: 1075,
    dataValue: "beige",
  },
  {
    id: 2,
    src: "/images/shop/products/hmgoepprod.jpg",
    alt: "",
    width: 713,
    height: 1070,
    dataValue: "beige",
  },
  {
    id: 3,
    src: "/images/shop/products/preview_images/img-video-1.jpg",
    video: "/images/shop/products/preview_images/video-1.mp4",
    width: 713,
    height: 1070,
    type: "video",
    dataValue: "beige",
  },
  {
    id: 4,
    src: "/images/shop/products/hmgoepprod3.jpg",
    alt: "img-compare",
    width: 713,
    height: 1070,
    dataValue: "beige",
  },
  {
    id: 5,
    src: "/images/shop/products/hmgoepprod4.jpg",
    alt: "img-compare",
    width: 768,
    height: 1152,
    dataValue: "beige",
  },
  {
    id: 6,
    src: "/images/shop/products/hmgoepprod5.jpg",
    alt: "img-compare",
    width: 713,
    height: 1070,
    dataValue: "beige",
  },
  {
    id: 7,
    src: "/images/shop/products/hmgoepprod6.jpg",
    alt: "",
    width: 768,
    height: 1152,
    dataValue: "black",
  },
  {
    id: 8,
    src: "/images/shop/products/hmgoepprod7.jpg",
    alt: "",
    width: 713,
    height: 1070,
    dataValue: "black",
  },
  {
    id: 9,
    src: "/images/shop/products/hmgoepprod8.jpg",
    alt: "",
    width: 713,
    height: 1070,
    dataValue: "black",
  },
  {
    id: 10,
    src: "/images/shop/products/hmgoepprod9.jpg",
    alt: "",
    width: 768,
    height: 1152,
    dataValue: "black",
  },
  {
    id: 11,
    src: "/images/shop/products/hmgoepprod10.jpg",
    alt: "",
    width: 713,
    height: 1070,
    dataValue: "blue",
  },
  {
    id: 12,
    src: "/images/shop/products/hmgoepprod11.jpg",
    alt: "",
    width: 713,
    height: 1070,
    dataValue: "blue",
  },
  {
    id: 13,
    src: "/images/shop/products/hmgoepprod12.jpg",
    alt: "",
    width: 768,
    height: 1152,
    dataValue: "blue",
  },
  {
    id: 14,
    src: "/images/shop/products/hmgoepprod13.jpg",
    alt: "",
    width: 768,
    height: 1152,
    dataValue: "blue",
  },
  {
    id: 15,
    src: "/images/shop/products/hmgoepprod14.jpg",
    alt: "",
    width: 768,
    height: 1152,
    dataValue: "white",
  },
  {
    id: 16,
    src: "/images/shop/products/hmgoepprod15.jpg",
    alt: "",
    width: 768,
    height: 1152,
    dataValue: "white",
  },
  {
    id: 17,
    src: "/images/shop/products/hmgoepprod16.jpg",
    alt: "",
    width: 768,
    height: 1152,
    dataValue: "white",
  },
  {
    id: 18,
    src: "/images/shop/products/hmgoepprod17.jpg",
    alt: "",
    width: 768,
    height: 1152,
    dataValue: "white",
  },
];
export default function Slider4({
  currentColor = "Beige",
  handleColor = () => {},
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const swiperRef = useRef(null);
  useEffect(() => {
    const slideIndex =
      images.filter(
        (elm) => elm.dataValue.toLowerCase() == currentColor.toLowerCase()
      )[0].id - 1;
    swiperRef.current.slideTo(slideIndex);
  }, [currentColor]);
  return (
    <>
      <Swiper
        direction="vertical"
        spaceBetween={10}
        slidesPerView={6}
        className="tf-product-media-thumbs other-image-zoom"
        onSwiper={setThumbsSwiper}
        modules={[Thumbs]}
        breakpoints={{
          0: {
            direction: "horizontal",
          },
          1150: {
            direction: "vertical",
          },
        }}
      >
        {images.map((slide, index) => (
          <SwiperSlide key={index} className="stagger-item">
            {slide.video ? (
              <div className="item position-relative">
                <div className="wrap-btn-viewer style-video">
                  <div className="icon">
                    <i className="icon-play"></i>
                  </div>
                </div>
                <Image
                  className="lazyload"
                  data-src={slide.src}
                  alt=""
                  src={slide.src}
                  width="200"
                  height="250"
                />
              </div>
            ) : (
              <div className="item">
                <Image
                  className="lazyload"
                  data-src={slide.src}
                  alt={""}
                  src={slide.src} // Optional fallback for non-lazy loading
                  width={slide.width}
                  height={slide.height}
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <Gallery>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="tf-product-media-main"
          id="gallery-swiper-started"
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Thumbs, Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => {
            handleColor(images[swiper.activeIndex].dataValue);
          }}
        >
          {images.map((slide, index) => (
            <SwiperSlide key={index}>
              {slide.type == "video" ? (
                <div className="item">
                  <video
                    playsInline
                    autoPlay
                    muted
                    controls
                    loop
                    src="/images/shop/products/preview_images/video-1.mp4"
                  />
                </div>
              ) : (
                <Item
                  original={slide.src}
                  thumbnail={slide.src}
                  width={slide.width}
                  height={slide.height}
                >
                  {({ ref, open }) => (
                    <a
                      className="item"
                      data-pswp-width={slide.width}
                      data-pswp-height={slide.height}
                      onClick={open}
                    >
                      <Image
                        ref={ref}
                        className="tf-image-zoom lazyload"
                        data-zoom={slide.src}
                        data-src={slide.src}
                        alt=""
                        src={slide.src} // Optional fallback for non-lazy loading
                        width={slide.width}
                        height={slide.height}
                      />
                    </a>
                  )}
                </Item>
              )}
            </SwiperSlide>
          ))}

          {/* Navigation buttons */}
          <div className="swiper-button-next button-style-arrow thumbs-next"></div>
          <div className="swiper-button-prev button-style-arrow thumbs-prev"></div>
        </Swiper>{" "}
      </Gallery>
    </>
  );
}
