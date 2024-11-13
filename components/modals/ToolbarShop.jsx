import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function ToolbarShop() {
  return (
    <div
      className="offcanvas offcanvas-start canvas-mb toolbar-shop-mobile"
      id="toolbarShopmb"
    >
      <span
        className="icon-close icon-close-popup"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
      <div className="mb-canvas-content">
        <div className="mb-body">
          <ul className="nav-ul-mb" id="wrapper-menu-navigation">
            <li className="nav-mb-item">
              <Link
                href={`/shop-default`}
                className="tf-category-link mb-menu-link"
              >
                <div className="image">
                  <Image
                    alt=""
                    src="/images/shop/cate/cate1.jpg"
                    width={40}
                    height={48}
                  />
                </div>
                <span>Accessories</span>
              </Link>
            </li>
            <li className="nav-mb-item">
              <Link
                href={`/shop-default`}
                className="tf-category-link mb-menu-link"
              >
                <div className="image">
                  <Image
                    alt=""
                    src="/images/shop/cate/cate2.jpg"
                    width={40}
                    height={48}
                  />
                </div>
                <span>Dog</span>
              </Link>
            </li>
            <li className="nav-mb-item">
              <Link
                href={`/shop-default`}
                className="tf-category-link mb-menu-link"
              >
                <div className="image">
                  <Image
                    alt=""
                    src="/images/shop/cate/cate3.jpg"
                    width={40}
                    height={43}
                  />
                </div>
                <span>Grocery</span>
              </Link>
            </li>
            <li className="nav-mb-item">
              <Link
                href={`/shop-default`}
                className="tf-category-link mb-menu-link"
              >
                <div className="image">
                  <Image
                    alt=""
                    src="/images/shop/cate/cate4.png"
                    width={40}
                    height={48}
                  />
                </div>
                <span>Handbag</span>
              </Link>
            </li>
            <li className="nav-mb-item">
              <a
                href="#cate-menu-one"
                className="tf-category-link has-children collapsed mb-menu-link"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="cate-menu-one"
              >
                <div className="image">
                  <Image
                    alt=""
                    src="/images/shop/cate/cate5.jpg"
                    width={40}
                    height={48}
                  />
                </div>
                <span>Fashion</span>
                <span className="btn-open-sub" />
              </a>
              <div id="cate-menu-one" className="collapse list-cate">
                <ul className="sub-nav-menu" id="cate-menu-navigation">
                  <li>
                    <a
                      href="#cate-shop-one"
                      className="tf-category-link has-children sub-nav-link collapsed"
                      data-bs-toggle="collapse"
                      aria-expanded="true"
                      aria-controls="cate-shop-one"
                    >
                      <div className="image">
                        <Image
                          alt=""
                          src="/images/shop/cate/cate6.jpg"
                          width={40}
                          height={49}
                        />
                      </div>
                      <span>Mens</span>
                      <span className="btn-open-sub" />
                    </a>
                    <div id="cate-shop-one" className="collapse">
                      <ul className="sub-nav-menu sub-menu-level-2">
                        <li>
                          <Link
                            href={`/shop-default`}
                            className="tf-category-link sub-nav-link"
                          >
                            <div className="image">
                              <Image
                                alt=""
                                src="/images/shop/cate/cate1.jpg"
                                width={40}
                                height={48}
                              />
                            </div>
                            <span>Accessories</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={`/shop-default`}
                            className="tf-category-link sub-nav-link"
                          >
                            <div className="image">
                              <Image
                                alt=""
                                src="/images/shop/cate/cate8.jpg"
                                width={40}
                                height={48}
                              />
                            </div>
                            <span>Shoes</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a
                      href="#cate-shop-two"
                      className="tf-category-link has-children sub-nav-link collapsed"
                      data-bs-toggle="collapse"
                      aria-expanded="true"
                      aria-controls="cate-shop-two"
                    >
                      <div className="image">
                        <Image
                          alt=""
                          src="/images/shop/cate/cate9.jpg"
                          width={40}
                          height={49}
                        />
                      </div>
                      <span>Womens</span>
                      <span className="btn-open-sub" />
                    </a>
                    <div id="cate-shop-two" className="collapse">
                      <ul className="sub-nav-menu sub-menu-level-2">
                        <li>
                          <Link
                            href={`/shop-default`}
                            className="tf-category-link sub-nav-link"
                          >
                            <div className="image">
                              <Image
                                alt=""
                                src="/images/shop/cate/cate4.png"
                                width={40}
                                height={48}
                              />
                            </div>
                            <span>Handbag</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={`/shop-default`}
                            className="tf-category-link sub-nav-link"
                          >
                            <div className="image">
                              <Image
                                alt=""
                                src="/images/shop/cate/cate7.jpg"
                                width={40}
                                height={41}
                              />
                            </div>
                            <span>Tee</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-mb-item">
              <a
                href="#cate-menu-two"
                className="tf-category-link has-children collapsed mb-menu-link"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="cate-menu-two"
              >
                <div className="image">
                  <Image
                    alt=""
                    src="/images/shop/cate/cate6.jpg"
                    width={40}
                    height={49}
                  />
                </div>
                <span>Men</span>
                <span className="btn-open-sub" />
              </a>
              <div id="cate-menu-two" className="collapse list-cate">
                <ul className="sub-nav-menu" id="cate-menu-navigation1">
                  <li>
                    <Link
                      href={`/shop-default`}
                      className="tf-category-link sub-nav-link"
                    >
                      <div className="image">
                        <Image
                          alt=""
                          src="/images/shop/cate/cate1.jpg"
                          width={40}
                          height={48}
                        />
                      </div>
                      <span>Accessories</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/shop-default`}
                      className="tf-category-link sub-nav-link"
                    >
                      <div className="image">
                        <Image
                          alt=""
                          src="/images/shop/cate/cate8.jpg"
                          width={40}
                          height={48}
                        />
                      </div>
                      <span>Shoes</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-mb-item">
              <Link
                href={`/shop-default`}
                className="tf-category-link mb-menu-link"
              >
                <div className="image">
                  <Image
                    alt=""
                    src="/images/shop/cate/cate7.jpg"
                    width={40}
                    height={41}
                  />
                </div>
                <span>Tee</span>
              </Link>
            </li>
            <li className="nav-mb-item">
              <Link
                href={`/shop-default`}
                className="tf-category-link mb-menu-link"
              >
                <div className="image">
                  <Image
                    alt=""
                    src="/images/shop/cate/cate8.jpg"
                    width={40}
                    height={48}
                  />
                </div>
                <span>Shoes</span>
              </Link>
            </li>
            <li className="nav-mb-item">
              <a
                href="#cate-menu-three"
                className="tf-category-link has-children collapsed mb-menu-link"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="cate-menu-three"
              >
                <div className="image">
                  <Image
                    alt=""
                    src="/images/shop/cate/cate9.jpg"
                    width={40}
                    height={49}
                  />
                </div>
                <span>Women</span>
                <span className="btn-open-sub" />
              </a>
              <div id="cate-menu-three" className="collapse list-cate">
                <ul className="sub-nav-menu" id="cate-menu-navigation2">
                  <li>
                    <Link
                      href={`/shop-default`}
                      className="tf-category-link sub-nav-link"
                    >
                      <div className="image">
                        <Image
                          alt=""
                          src="/images/shop/cate/cate4.png"
                          width={40}
                          height={48}
                        />
                      </div>
                      <span>Handbag</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/shop-default`}
                      className="tf-category-link sub-nav-link"
                    >
                      <div className="image">
                        <Image
                          alt=""
                          src="/images/shop/cate/cate7.jpg"
                          width={40}
                          height={41}
                        />
                      </div>
                      <span>Tee</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="mb-bottom">
          <Link href={`/shop-default`} className="tf-btn fw-5 btn-line">
            View all collection
            <i className="icon icon-arrow1-top-left" />
          </Link>
        </div>
      </div>
    </div>
  );
}
