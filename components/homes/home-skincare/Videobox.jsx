import React from "react";

export default function Videobox() {
  return (
    <section className="flat-spacing-9">
      <div className="container">
        <div className="tf-grid-layout md-col-2 tf-img-video-text">
          <div className="content-wrap bg_orange radius-20">
            <div
              className="heading text-white wow fadeInUp"
              data-wow-delay="0s"
            >
              How to Use
            </div>
            <p className="text-white fs-16 wow fadeInUp" data-wow-delay="0s">
              EASY USE WITH 4 STEPS
            </p>
            <ul>
              <li>
                <div className="number text-white">1</div>
                <div className="text text-white">
                  Unscrew cap of 4EVERBTL™ and fill with water. Screw cap back
                  on.
                </div>
              </li>
              <li>
                <div className="number text-white">2</div>
                <div className="text text-white">
                  Peel-off one blister individual seal and place tablet in the
                  palm of your hand.
                </div>
              </li>
              <li>
                <div className="number text-white">3</div>
                <div className="text text-white">
                  Add 3-8 drops of water and mix until tablet is fully
                  dissolved.
                </div>
              </li>
              <li>
                <div className="number text-white">4</div>
                <div className="text text-white">
                  Apply on clean skin like any liquid serum!
                </div>
              </li>
            </ul>
          </div>
          <div className="video-wrap">
            <video
              className="radius-20"
              src="/images/slider/video-1.mp4"
              playsInline=""
              metadata=""
              controls=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
