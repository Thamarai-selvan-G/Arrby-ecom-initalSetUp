import { marqueeItems } from "@/data/marquees";
import React from "react";

export default function Marquee() {
  return (
    <div className="tf-marquee bg_yellow-2">
      <div className="wrap-marquee">
        {marqueeItems.map((item, index) => (
          <div className="marquee-item" key={index}>
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={15}
                height={20}
                viewBox="0 0 15 20"
              >
                <path d="M14.5833 8H8.61742L9.94318 0L0 12H5.96591L4.64015 20L14.5833 8" />
              </svg>
            </div>
            <p className="text">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
