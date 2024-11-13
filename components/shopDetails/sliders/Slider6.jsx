"use client";

import { useEffect, useState } from "react";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Drift from "drift-zoom";
import { Gallery, Item } from "react-photoswipe-gallery";
const images = [
  {
    id: 1,
    src: "/images/shop/products/hmgoepprod24.jpg",
    alt: "",
    width: 713,
    height: 891,
  },
  {
    id: 2,
    src: "/images/shop/products/hmgoepprod25.jpg",
    alt: "",
    width: 713,
    height: 891,
  },
  {
    id: 3,
    src: "/images/shop/products/hmgoepprod26.jpg",
    alt: "",
    width: 713,
    height: 891,
  },
  {
    id: 4,
    src: "/images/shop/products/hmgoepprod27.jpg",
    alt: "",
    width: 713,
    height: 891,
  },
  {
    id: 5,
    src: "/images/shop/products/hmgoepprod28.jpg",
    alt: "",
    width: 713,
    height: 891,
  },
  {
    id: 6,
    src: "/images/shop/products/hmgoepprod29.jpg",
    alt: "",
    width: 713,
    height: 891,
  },
  {
    id: 7,
    src: "/images/shop/products/hmgoepprod30.jpg",
    alt: "",
    width: 713,
    height: 891,
  },
];

const products = [
  {
    href: "/images/shop/products/hmgoepprod24.jpg",
    dataPswpWidth: "770px",
    dataPswpHeight: "1075px",
    imgSrc: "/images/shop/products/hmgoepprod24.jpg",
    imgAlt: "",
    imgZoom: "/images/shop/products/hmgoepprod24.jpg",
    imgWidth: 713,
    imgHeight: 891,
  },
  {
    href: "/images/shop/products/hmgoepprod25.jpg",
    dataPswpWidth: "770px",
    dataPswpHeight: "1075px",
    imgSrc: "/images/shop/products/hmgoepprod25.jpg",
    imgAlt: "",
    imgZoom: "/images/shop/products/hmgoepprod25.jpg",
    imgWidth: 713,
    imgHeight: 891,
  },
  {
    href: "/images/shop/products/hmgoepprod26.jpg",
    dataPswpWidth: "770px",
    dataPswpHeight: "1075px",
    imgSrc: "/images/shop/products/hmgoepprod26.jpg",
    imgAlt: "",
    imgZoom: "/images/shop/products/hmgoepprod2.jpg",
    imgWidth: 713,
    imgHeight: 1070,
  },
  {
    href: "/images/shop/products/hmgoepprod27.jpg",
    dataPswpWidth: "770px",
    dataPswpHeight: "1075px",
    imgSrc: "/images/shop/products/hmgoepprod27.jpg",
    imgAlt: "",
    imgZoom: "/images/shop/products/hmgoepprod27.jpg",
    imgWidth: 713,
    imgHeight: 891,
  },
  {
    href: "/images/shop/products/hmgoepprod28.jpg",
    dataPswpWidth: "770px",
    dataPswpHeight: "1075px",
    imgSrc: "/images/shop/products/hmgoepprod28.jpg",
    imgAlt: "",
    imgZoom: "/images/shop/products/hmgoepprod28.jpg",
    imgWidth: 713,
    imgHeight: 891,
  },
  {
    href: "/images/shop/products/hmgoepprod29.jpg",
    dataPswpWidth: "770px",
    dataPswpHeight: "1075px",
    imgSrc: "/images/shop/products/hmgoepprod29.jpg",
    imgAlt: "",
    imgZoom: "/images/shop/products/hmgoepprod29.jpg",
    imgWidth: 713,
    imgHeight: 891,
  },
  {
    href: "/images/shop/products/hmgoepprod30.jpg",
    dataPswpWidth: "770px",
    dataPswpHeight: "1075px",
    imgSrc: "/images/shop/products/hmgoepprod30.jpg",
    imgAlt: "",
    imgZoom: "/images/shop/products/hmgoepprod30.jpg",
    imgWidth: 713,
    imgHeight: 891,
  },
];

export default function Slider6() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  useEffect(() => {
    // Function to initialize Drift
    const imageZoom = () => {
      const driftAll = document.querySelectorAll(".tf-image-zoom");
      const pane = document.querySelector(".tf-zoom-main");

      driftAll.forEach((el) => {
        new Drift(el, {
          zoomFactor: 2,
          paneContainer: pane,
          inlinePane: false,
          handleTouch: false,
          hoverBoundingBox: true,
          containInline: true,
        });
      });
    };

    // Call the function
    imageZoom();
    const zoomElements = document.querySelectorAll(".tf-image-zoom");

    const handleMouseOver = (event) => {
      const parent = event.target.closest(".section-image-zoom");
      if (parent) {
        parent.classList.add("zoom-active");
      }
    };

    const handleMouseLeave = (event) => {
      const parent = event.target.closest(".section-image-zoom");
      if (parent) {
        parent.classList.remove("zoom-active");
      }
    };

    zoomElements.forEach((element) => {
      element.addEventListener("mouseover", handleMouseOver);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    // Cleanup event listeners on component unmount
    return () => {
      zoomElements.forEach((element) => {
        element.removeEventListener("mouseover", handleMouseOver);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);
  return (
    <>
      <>
        <Swiper
          className="swiper tf-product-media-thumbs other-image-zoom"
          direction="vertical"
          onSwiper={setThumbsSwiper}
          modules={[Thumbs]}
          spaceBetween={10}
          slidesPerView={5}
          breakpoints={{
            0: {
              direction: "horizontal",
            },
            1150: {
              direction: "vertical",
            },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide className="swiper-slide stagger-item" key={index}>
              <div className="item">
                <Image
                  className="lazyload"
                  data-src={image.src}
                  alt={image.alt}
                  src={image.src}
                  width={image.width}
                  height={image.height}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Gallery>
          <Swiper
            className="swiper tf-product-media-main"
            id="gallery-swiper-started"
            thumbs={{ swiper: thumbsSwiper }}
            modules={[Thumbs, Navigation]}
          >
            {products.map((product, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <Item
                  original={product.imgSrc}
                  thumbnail={product.imgSrc}
                  width={product.imgWidth}
                  height={product.imgHeight}
                >
                  {({ ref, open }) => (
                    <a className="item" onClick={open}>
                      <Image
                        className="tf-image-zoom lazyload"
                        ref={ref}
                        data-zoom={product.imgZoom}
                        data-src={product.imgSrc}
                        alt={product.imgAlt}
                        src={product.imgSrc}
                        width={product.imgWidth}
                        height={product.imgHeight}
                      />
                    </a>
                  )}
                </Item>
              </SwiperSlide>
            ))}

            <div className="swiper-button-next button-style-arrow thumbs-next" />
            <div className="swiper-button-prev button-style-arrow thumbs-prev" />
          </Swiper>{" "}
        </Gallery>
      </>
    </>
  );
}
