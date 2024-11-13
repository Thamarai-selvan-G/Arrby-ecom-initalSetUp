"use client";
import Drift from "drift-zoom";
const productImages = [
  {
    id: "image-color-brown",

    src: "/images/shop/products/hmgoepprod.jpg",
    width: 713,
    height: 1070,
  },
  {
    id: "image-color-light-purple",

    src: "/images/shop/products/hmgoepprod2.jpg",
    width: 713,
    height: 1070,
  },
  {
    id: "image-color-light-green",

    src: "/images/shop/products/hmgoepprod3.jpg",
    width: 713,
    height: 1070,
  },
  {
    id: "image-color-light-green",

    src: "/images/shop/products/hmgoepprod4.jpg",
    width: 768,
    height: 1152,
  },
];
import Image from "next/image";
import { useEffect } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";

export default function Gallery2() {
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
        {productImages.map((image, index) => (
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
                  className="radius-10 tf-image-zoom lazyload"
                  id={image.id}
                  data-zoom={image.src}
                  ref={ref}
                  alt=""
                  width={image.width}
                  height={image.height}
                  src={image.src} // Optional fallback for non-lazy loading
                />
              </a>
            )}
          </Item>
        ))}{" "}
      </Gallery>
    </>
  );
}
