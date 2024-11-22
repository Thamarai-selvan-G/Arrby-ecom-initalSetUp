import { useEffect, useRef, useState } from "react";
import Drift from "drift-zoom";
import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Slider1ZoomOuter({ images = [] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const swiperRef = useRef(null);
  const driftInstances = useRef([]); // To store Drift instances

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(0); // Reset to the first image when images update
    }
  }, [images]);

  useEffect(() => {
    const initializeZoom = () => {
      // Destroy previous zoom instances before initializing new ones
      driftInstances.current.forEach((driftInstance) => driftInstance.destroy());
      driftInstances.current = [];

      const driftElements = document.querySelectorAll(".tf-image-zoom");
      const zoomPane = document.querySelector(".tf-zoom-main");

      driftElements.forEach((el) => {
        const driftInstance = new Drift(el, {
          zoomFactor: 2,
          paneContainer: zoomPane,
          inlinePane: false,
          handleTouch: false,
          hoverBoundingBox: true,
          containInline: true,
        });
        driftInstances.current.push(driftInstance); // Store the instance
      });
    };

    initializeZoom();

    const zoomElements = document.querySelectorAll(".tf-image-zoom");
    const handleMouseOver = (event) => {
      const parent = event.target.closest(".section-image-zoom");
      if (parent) parent.classList.add("zoom-active");
    };
    const handleMouseLeave = (event) => {
      const parent = event.target.closest(".section-image-zoom");
      if (parent) parent.classList.remove("zoom-active");
    };

    zoomElements.forEach((element) => {
      element.addEventListener("mouseover", handleMouseOver);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      // Cleanup event listeners and Drift instances
      zoomElements.forEach((element) => {
        element.removeEventListener("mouseover", handleMouseOver);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });

      driftInstances.current.forEach((driftInstance) => driftInstance.destroy());
    };
  }, [images]);

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
          0: { direction: "horizontal" },
          1150: { direction: "vertical" },
        }}
      >
        {images.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="item">
              <Image
                className="lazyload"
                src={slide.src}
                alt={slide.alt || ""}
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
          className="tf-product-media-main"
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Thumbs, Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {images.map((slide, index) => (
            <SwiperSlide key={index}>
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
                      className="tf-image-zoom lazyload"
                      data-zoom={slide.src}
                      ref={ref}
                      alt={slide.alt || ""}
                      width={slide.width}
                      height={slide.height}
                      src={slide.src}
                    />
                  </a>
                )}
              </Item>
            </SwiperSlide>
          ))}
          <div className="swiper-button-next button-style-arrow thumbs-next"></div>
          <div className="swiper-button-prev button-style-arrow thumbs-prev"></div>
        </Swiper>
      </Gallery>
    </>
  );
}
