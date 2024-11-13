import React from "react";
import Image from "next/image";
export default function Timelines() {
  return (
    <section className="flat-spacing-12">
      <div className="container">
        <div className="tf-timeline-wrap position-relative">
          <div className="tf-timeline-line" />
          <div className="tf-timeline-item z-2 position-relative">
            <div className="tf-timeline-inner d-flex align-items-center justify-content-between tf-timeline-content-end">
              <span className="tf-timeline-time">1980</span>
              <div className="tf-timeline-content">
                <div className="tf-timeline-label fw-7">PHASE 1</div>
                <h4 className="tf-timeline-title">
                  Inception and Brand Establishment
                </h4>
                <div className="tf-timeline-description">
                  Inception, in the context of brand establishment, refers to
                  the initial phase of creating and introducing a brand to the
                  market. It involves laying down the foundational elements that
                  will define the brand's identity, values, and positioning in
                  the minds of consumers.
                </div>
              </div>
              <div className="tf-timeline-image">
                <Image
                  className="lazyload"
                  data-=""
                  alt=""
                  src="/images/shop/file/timeline1.jpg"
                  width={800}
                  height={593}
                />
              </div>
            </div>
          </div>
          <div className="tf-timeline-item z-2 position-relative">
            <div className="tf-timeline-inner d-flex align-items-center justify-content-between">
              <span className="tf-timeline-time">2000</span>
              <div className="tf-timeline-content">
                <div className="tf-timeline-label fw-7">PHASE 2</div>
                <h4 className="tf-timeline-title">
                  Debut Collection and Market Entry
                </h4>
                <div className="tf-timeline-description">
                  Entering the market with a debut collection requires careful
                  planning, creativity, and perseverance. By following these
                  steps and staying true to your vision, you can increase your
                  chances of success in the fashion industry.
                </div>
              </div>
              <div className="tf-timeline-image">
                <Image
                  className="lazyload"
                  data-=""
                  alt=""
                  src="/images/shop/file/timeline2.jpg"
                  width={800}
                  height={593}
                />
              </div>
            </div>
          </div>
          <div className="tf-timeline-item z-2 position-relative">
            <div className="tf-timeline-inner d-flex align-items-center justify-content-between tf-timeline-content-end">
              <span className="tf-timeline-time">2010</span>
              <div className="tf-timeline-content">
                <div className="tf-timeline-label fw-7">PHASE 3</div>
                <h4 className="tf-timeline-title">Growth and Recognition</h4>
                <div className="tf-timeline-description">
                  During the Growth and Recognition phase of a brand's journey,
                  several key elements come into play to propel its expansion
                  and solidify its position in the market. Here's an outline of
                  what typically occurs during this phase
                </div>
              </div>
              <div className="tf-timeline-image">
                <Image
                  className="lazyload"
                  data-=""
                  alt=""
                  src="/images/shop/file/timeline3.jpg"
                  width={800}
                  height={593}
                />
              </div>
            </div>
          </div>
          <div className="tf-timeline-item z-2 position-relative">
            <div className="tf-timeline-inner d-flex align-items-center justify-content-between">
              <span className="tf-timeline-time">2024</span>
              <div className="tf-timeline-content">
                <div className="tf-timeline-label fw-7">PHASE 4</div>
                <h4 className="tf-timeline-title">Sustainable Initiatives</h4>
                <div className="tf-timeline-description">
                  Sustainable initiatives play a crucial role in the growth and
                  development of a brand, especially in today's environmentally
                  conscious and socially responsible market landscape. Here are
                  some examples of sustainable initiatives that brands may
                  undertake
                </div>
              </div>
              <div className="tf-timeline-image">
                <Image
                  className="lazyload"
                  data-=""
                  alt=""
                  src="/images/shop/file/timeline4.jpg"
                  width={800}
                  height={593}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
