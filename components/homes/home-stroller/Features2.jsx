import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Features2() {
  return (
    <section className="flat-spacing-23 pt_0">
      <div className="container">
        <div className="flat-tab-store flat-animate-tab">
          <ul className="widget-tab-2" role="tablist">
            <li className="nav-tab-item" role="presentation">
              <a href="#durability" className="active" data-bs-toggle="tab">
                Durability
              </a>
            </li>
            <li className="nav-tab-item" role="presentation">
              <a href="#innovation" data-bs-toggle="tab">
                Innovation
              </a>
            </li>
            <li className="nav-tab-item" role="presentation">
              <a href="#responsibility" data-bs-toggle="tab">
                Responsibility
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div
              className="tab-pane active show"
              id="durability"
              role="tabpanel"
            >
              <div className="widget-card-store bg_grey-10 radius-10 o-hidden type-2 align-items-center tf-grid-layout md-col-2">
                <div className="store-item-info">
                  <h5 className="store-heading">Unrivalled engineering</h5>
                  <div className="description">
                    <div>
                      Award-winning designs, engineered and tested to keep going
                      for
                    </div>
                    <div>generations.</div>
                  </div>
                  <Link
                    href={`/shop-default`}
                    className="tf-btn btn-fill style-2 radius-60 animate-hover-btn"
                  >
                    Discover more
                  </Link>
                </div>
                <div className="store-img">
                  <Image
                    className="lazyload"
                    data-src="/images/shop/store/ourstore-stroller.jpg"
                    alt="store-img"
                    src="/images/shop/store/ourstore-stroller.jpg"
                    width={720}
                    height={506}
                  />
                </div>
              </div>
            </div>
            <div className="tab-pane" id="innovation" role="tabpanel">
              <div className="widget-card-store bg_grey-10 radius-10 o-hidden type-2 align-items-center tf-grid-layout md-col-2">
                <div className="store-item-info">
                  <h5 className="store-heading">
                    Where Fresh Ideas
                    <br className="d-xl-block d-none" />
                    come to Life
                  </h5>
                  <div className="description">
                    <div>
                      Immerse yourself in a creative space where every step
                    </div>
                    <div>is an adventure of innovation.</div>
                  </div>
                  <Link
                    href={`/shop-default`}
                    className="tf-btn btn-fill style-2 radius-60 animate-hover-btn"
                  >
                    Discover more
                  </Link>
                </div>
                <div className="store-img">
                  <Image
                    className="lazyload"
                    data-src="/images/shop/store/ourstore-stroller2.jpg"
                    alt="store-img"
                    src="/images/shop/store/ourstore-stroller2.jpg"
                    width={720}
                    height={506}
                  />
                </div>
              </div>
            </div>
            <div className="tab-pane" id="responsibility" role="tabpanel">
              <div className="widget-card-store bg_grey-10 radius-10 o-hidden type-2 align-items-center tf-grid-layout md-col-2">
                <div className="store-item-info">
                  <h5 className="store-heading">
                    Shaping a Better
                    <br className="d-xl-block d-none" />
                    Tomorrow Together.
                  </h5>
                  <div className="description">
                    <div>
                      In a world where every action matters, let's embrace the
                    </div>
                    <div>power of responsibility</div>
                  </div>
                  <Link
                    href={`/shop-default`}
                    className="tf-btn btn-fill style-2 radius-60 animate-hover-btn"
                  >
                    Discover more
                  </Link>
                </div>
                <div className="store-img">
                  <Image
                    className="lazyload"
                    data-src="/images/shop/store/ourstore-stroller3.jpg"
                    alt="store-img"
                    src="/images/shop/store/ourstore-stroller3.jpg"
                    width={720}
                    height={506}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
