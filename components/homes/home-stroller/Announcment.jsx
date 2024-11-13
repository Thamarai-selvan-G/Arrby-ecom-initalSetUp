"use client";

import { useEffect } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Announcment() {
  useEffect(() => {
    var closeAnnouncement = function () {
      document
        .querySelectorAll(".close-announcement-bar")
        .forEach(function (btn) {
          btn.addEventListener("click", function (e) {
            e.preventDefault();
            var announcementBar = this.closest(".announcement-bar");
            var height = announcementBar.offsetHeight + "px";

            announcementBar.style.marginTop = `-${height}`;

            setTimeout(function () {
              announcementBar.style.display = "none";
              announcementBar.remove();
            }, 600); // Simulating fadeOut with a timeout
          });
        });
    };
    closeAnnouncement();
  }, []);

  return (
    <div className="announcement-bar bg_brown-2">
      <div className="container-full">
        <div className="row justify-content-center">
          <div className="col-xl-3 col-md-4 col-12 text-center wrap-announcement-bar-2">
            <Swiper
              className="swiper tf-sw-top_bar"
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              speed={1000}
              autoplay={{ delay: 2000 }}
              modules={[Navigation, Autoplay]}
              navigation={{
                prevEl: ".snbp102",
                nextEl: ".snbn102",
              }}
            >
              <SwiperSlide className="swiper-slide">
                <p className="noti-bar-text text-white fw-5">
                  Welcome to our store
                </p>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <p className="noti-bar-text text-white fw-5">
                  Fashion Frenzy: Up to 60% off on all styles
                </p>
              </SwiperSlide>
            </Swiper>
            <div className="navigation-topbar nav-next-topbar snbp102">
              <span className="icon icon-arrow-left" />
            </div>
            <div className="navigation-topbar nav-prev-topbar snbn102">
              <span className="icon icon-arrow-right" />
            </div>
          </div>
        </div>
        <span className="icon-close close-announcement-bar" />
      </div>
    </div>
  );
}
