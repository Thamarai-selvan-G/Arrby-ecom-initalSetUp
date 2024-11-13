"use client";
import Image from "next/image";
import Drift from "drift-zoom";
import { useEffect, useRef, useState } from "react";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Gallery, Item } from "react-photoswipe-gallery";

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
    src: "/images/shop/products/hmgoepprod2.jpg",
    alt: "img-compare",
    width: 713,
    height: 1070,
    dataValue: "beige",
  },
  {
    id: 4,
    src: "/images/shop/products/preview_images/img-3d-1.jpg",
    modelSrc: "/images/shop/products/preview_images/dance-bag_3d.glb",
    alt: "img-compare",
    width: 713,
    height: 1070,
    dataValue: "beige",
    is3D: true,
    isModel: true,
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

export default function Slider5({
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
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Dynamically import @google/model-viewer
      import("@google/model-viewer").then(() => {
        // Module is imported, you can use model-viewer functionality here
      });
    }
  }, []);
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
  }, []); // Empty dependency array to run only once on mount

  return (
    <>
      <Swiper
        direction="vertical"
        spaceBetween={10}
        slidesPerView={7.1}
        className="swiper tf-product-media-thumbs other-image-zoom"
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
          <SwiperSlide className="swiper-slide" key={index}>
            <div className={`item ${slide.is3D ? "position-relative" : ""}`}>
              {slide.is3D && (
                <div className="wrap-btn-viewer">
                  <i className="icon-btn3d"></i>
                </div>
              )}
              <Image
                className="lazyload"
                data-src={slide.src}
                alt={""}
                src={slide.src}
                width={slide.width}
                height={slide.height}
              />
            </div>
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
          className="swiper tf-product-media-main"
          id="gallery-swiper-started"
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Thumbs, Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => {
            handleColor(images[swiper.activeIndex].dataValue);
          }}
        >
          {images.map((slide, index) =>
            slide.isModel ? (
              <SwiperSlide className="swiper-slide" key={index}>
                <div className="item">
                  <div className="tf-model-viewer">
                    <model-viewer
                      reveal="auto"
                      toggleable="true"
                      data-model-id="36168614805808"
                      src={slide.modelSrc}
                      camera-controls="true"
                      data-shopify-feature="1.12"
                      alt={""}
                      poster={slide.src}
                      className="tf-model-viewer-ui disabled"
                      tabindex="1"
                      data-js-focus-visible=""
                      ar-status="not-presenting"
                    ></model-viewer>
                    {/* <div className="tf-model-viewer-ui-button">
                    <div className="wrap-btn-viewer">
                      <i className="icon-btn3d"></i>
                    </div>
                  </div> */}
                  </div>
                </div>
              </SwiperSlide>
            ) : (
              <SwiperSlide className="swiper-slide" key={index}>
                <Item
                  original={slide.src}
                  thumbnail={slide.src}
                  width={slide.width}
                  height={slide.height}
                >
                  {({ ref, open }) => (
                    <a onClick={open} className="item">
                      <Image
                        ref={ref}
                        className="tf-image-zoom lazyload"
                        data-zoom={slide.src}
                        data-src={slide.src}
                        alt=""
                        src={slide.src}
                        width={slide.width}
                        height={slide.height}
                      />
                    </a>
                  )}
                </Item>
              </SwiperSlide>
            )
          )}
          <div className="swiper-button-next button-style-arrow thumbs-next"></div>
          <div className="swiper-button-prev button-style-arrow thumbs-prev"></div>
        </Swiper>{" "}
      </Gallery>
    </>
  );
}
