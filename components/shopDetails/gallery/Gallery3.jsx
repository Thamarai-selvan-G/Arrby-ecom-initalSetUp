"use client";
import Image from "next/image";
import { useEffect } from "react";
import Drift from "drift-zoom";
import { Gallery, Item } from "react-photoswipe-gallery";

const images = [
  {
    id: "",
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
    id: "values-black",
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
    id: "values-blue",
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
    id: "values-white",
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

export default function Gallery3() {
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
      <Gallery>
        <div className="mb_10">
          <Item
            original="/images/shop/products/p-d1.png"
            thumbnail="/images/shop/products/p-d1.png"
            width={713}
            height={1070}
          >
            {({ ref, open }) => (
              <a className="item" onClick={open}>
                <Image
                  ref={ref}
                  className="tf-image-zoom lazyload values-beige"
                  data-zoom="/images/shop/products/hmgoepprod31.jpg"
                  data-src="/images/shop/products/hmgoepprod31.jpg"
                  alt=""
                  src="/images/shop/products/hmgoepprod31.jpg"
                  width={713}
                  height={1070}
                />
              </a>
            )}
          </Item>
        </div>
        <div className="">
          <div
            className="d-grid grid-template-columns-2 gap-10"
            id="gallery-started"
          >
            {images.slice(1).map((image, index) => (
              <Item
                original={image.src}
                thumbnail={image.src}
                width={image.width}
                height={image.height}
                key={index}
              >
                {({ ref, open }) => (
                  <a className="item" onClick={open}>
                    <Image
                      className={`radius-10 tf-image-zoom lazyload ${image.id}`}
                      id={image.id}
                      ref={ref}
                      alt=""
                      data-zoom={image.src}
                      width={image.width}
                      height={image.height}
                      src={image.src} // Optional fallback for non-lazy loading
                    />
                  </a>
                )}
              </Item>
            ))}
          </div>
        </div>
      </Gallery>
    </>
  );
}
