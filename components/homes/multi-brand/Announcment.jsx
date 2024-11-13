"use client";

import { useEffect } from "react";

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
    <div className="announcement-bar bg_dark">
      <div className="wrap-announcement-bar">
        <div className="box-sw-announcement-bar">
          <div className="announcement-bar-item">
            <p>FREE SHIPPING AND RETURNS</p>
          </div>
          <div className="announcement-bar-item">
            <p>NEW SEASON, NEW STYLES: FASHION SALE YOU CAN'T MISS</p>
          </div>
          <div className="announcement-bar-item">
            <p>LIMITED TIME OFFER: FASHION SALE YOU CAN'T RESIST</p>
          </div>
          <div className="announcement-bar-item">
            <p>FREE SHIPPING AND RETURNS</p>
          </div>
          <div className="announcement-bar-item">
            <p>NEW SEASON, NEW STYLES: FASHION SALE YOU CAN'T MISS</p>
          </div>
          <div className="announcement-bar-item">
            <p>LIMITED TIME OFFER: FASHION SALE YOU CAN'T RESIST</p>
          </div>
          <div className="announcement-bar-item">
            <p>FREE SHIPPING AND RETURNS</p>
          </div>
          <div className="announcement-bar-item">
            <p>NEW SEASON, NEW STYLES: FASHION SALE YOU CAN'T MISS</p>
          </div>
          <div className="announcement-bar-item">
            <p>LIMITED TIME OFFER: FASHION SALE YOU CAN'T RESIST</p>
          </div>
          <div className="announcement-bar-item">
            <p>FREE SHIPPING AND RETURNS</p>
          </div>
          <div className="announcement-bar-item">
            <p>NEW SEASON, NEW STYLES: FASHION SALE YOU CAN'T MISS</p>
          </div>
          <div className="announcement-bar-item">
            <p>LIMITED TIME OFFER: FASHION SALE YOU CAN'T RESIST</p>
          </div>
          <div className="announcement-bar-item">
            <p>FREE SHIPPING AND RETURNS</p>
          </div>
          <div className="announcement-bar-item">
            <p>NEW SEASON, NEW STYLES: FASHION SALE YOU CAN'T MISS</p>
          </div>
          <div className="announcement-bar-item">
            <p>LIMITED TIME OFFER: FASHION SALE YOU CAN'T RESIST</p>
          </div>
        </div>
      </div>
      <span className="icon-close close-announcement-bar" />
    </div>
  );
}
