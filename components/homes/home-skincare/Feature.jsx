"use client";
import Image from "next/image";
import Link from "next/link";
export default function Feature() {
  return (
    <section className="flat-spacing-9">
      <div className="container">
        <div className="flat-tab-store flat-animate-tab overflow-unset">
          <ul
            className="widget-tab-3 d-flex justify-content-center flex-wrap"
            role="tablist"
          >
            <li className="nav-tab-item" role="presentation">
              <a href="#organic" className="active" data-bs-toggle="tab">
                Organic Ingredients
              </a>
            </li>
            <li className="nav-tab-item" role="presentation">
              <a href="#cruelty" data-bs-toggle="tab">
                Cruelty-Free
              </a>
            </li>
            <li className="nav-tab-item" role="presentation">
              <a href="#sustainable" data-bs-toggle="tab">
                Sustainable
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane active show" id="organic" role="tabpanel">
              <div className="widget-card-store radius-20 overflow-hidden type-1 align-items-center tf-grid-layout md-col-2">
                <div className="store-img">
                  <Image
                    className="lazyload"
                    data-src="/images/shop/store/ourstore4.jpg"
                    alt="store-img"
                    src="/images/shop/store/ourstore4.jpg"
                    width={720}
                    height={539}
                  />
                </div>
                <div className="store-item-info text-center">
                  <h5 className="store-heading text-white">
                    Organic Ingredients
                  </h5>
                  <div className="description">
                    <p className="text-white">
                      Use certified organic ingredients to assure consumers that
                      the product is free from synthetic <br />
                      pesticides and fertilizers.
                    </p>
                  </div>
                  <div className="wow fadeInUp" data-wow-delay="0s">
                    <Link
                      href={`/shop-collection-list`}
                      className="tf-btn btn-md btn-light-icon btn-icon radius-3 animate-hover-btn"
                    >
                      <span>Shop collection</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="cruelty" role="tabpanel">
              <div className="widget-card-store radius-20 overflow-hidden type-1 align-items-center tf-grid-layout md-col-2">
                <div className="store-img">
                  <Image
                    className="lazyload"
                    data-src="/images/shop/store/ourstore5.jpg"
                    alt="store-img"
                    src="/images/shop/store/ourstore5.jpg"
                    width={720}
                    height={539}
                  />
                </div>
                <div className="store-item-info text-center">
                  <h5 className="store-heading text-white">
                    Our Verified Cruelty-Free
                  </h5>
                  <div className="description">
                    <p className="text-white">
                      Get full-size, verified cruelty-free and vegan products in
                      every box! We work directly with <br />
                      brands to bring you huge discounts.
                    </p>
                  </div>
                  <div className="wow fadeInUp" data-wow-delay="0s">
                    <Link
                      href={`/shop-collection-list`}
                      className="tf-btn btn-md btn-light-icon btn-icon radius-3 animate-hover-btn"
                    >
                      <span>Shop collection</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="sustainable" role="tabpanel">
              <div className="widget-card-store radius-20 overflow-hidden type-1 align-items-center tf-grid-layout md-col-2">
                <div className="store-img">
                  <Image
                    className="lazyload"
                    data-src="/images/shop/store/ourstore6.jpg"
                    alt="store-img"
                    src="/images/shop/store/ourstore6.jpg"
                    width={720}
                    height={539}
                  />
                </div>
                <div className="store-item-info text-center">
                  <h5 className="store-heading text-white">
                    Sustainable expansion
                  </h5>
                  <div className="description">
                    <p className="text-white">
                      With steadily increasing demand, the authors suggest that
                      a major opportunity exists for <br />
                      environmentally and socially sustainable expansion
                    </p>
                  </div>
                  <div className="wow fadeInUp" data-wow-delay="0s">
                    <Link
                      href={`/shop-collection-list`}
                      className="tf-btn btn-md btn-light-icon btn-icon radius-3 animate-hover-btn"
                    >
                      <span>Shop collection</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
