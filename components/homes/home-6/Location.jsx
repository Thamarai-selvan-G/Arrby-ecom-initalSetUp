import React from "react";
import Image from "next/image";
export default function Location() {
  return (
    <section>
      <div className="container">
        <div className="flat-location">
          <div className="banner-map">
            <Image
              className="lazyload"
              data-src="/images/country/map-1.jpg"
              alt="map"
              src="/images/country/map-1.jpg"
              width={1600}
              height={747}
            />
          </div>
          <div className="content">
            <h3 className="heading wow fadeInUp" data-wow-delay="0s">
              Toronto Store
            </h3>
            <p className="subtext wow fadeInUp" data-wow-delay="0s">
              301 Front St W Toronto, Canada
              <br />
              support@ecomus.com
              <br />
              (08) 8942 1299
            </p>
            <p className="subtext wow fadeInUp" data-wow-delay="0s">
              Mon - Fri, 8:30am - 10:30pm
              <br />
              Saturday, 8:30am - 10:30pm
              <br />
              Sunday Closed
            </p>
            <a
              href="https://maps.app.goo.gl/RKWwwsLvWKtvTHNq8"
              target="_self"
              className="tf-btn btn-line collection-other-link fw-6 wow fadeInUp"
              data-wow-delay="0s"
            >
              Get Directions
              <i className="icon icon-arrow1-top-left" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
