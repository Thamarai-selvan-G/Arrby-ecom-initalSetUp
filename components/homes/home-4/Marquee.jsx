import { marqueeItems2 } from "@/data/marquees";
import React from "react";

export default function Marquee() {
  return (
    <div className="tf-marquee marquee-sm bg_blue-3">
      <div className="wrap-marquee">
        {marqueeItems2.map((elm, i) => (
          <div key={i} className="marquee-item">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={7}
                height={6}
                viewBox="0 0 7 6"
                fill="none"
              >
                <path d="M3.5 0L6.53109 5.25H0.468911L3.5 0Z" fill="white" />
              </svg>
            </div>
            <p className="text text-white text-uppercase fw-6">{elm.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
