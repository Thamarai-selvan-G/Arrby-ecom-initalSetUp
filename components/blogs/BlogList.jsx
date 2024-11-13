import React from "react";
import Image from "next/image";
import Link from "next/link";
import { articles, blogArticles7 } from "@/data/blogs";
export default function BlogList() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="blog-list-main">
              <div className="list-blog">
                {blogArticles7.map((article, index) => (
                  <div key={index} className="blog-article-item style-row">
                    <div className="article-thumb">
                      <Link href={`/blog-detail/${article.id}`}>
                        <Image
                          className="lazyload"
                          data-src={article.imgSrc}
                          alt={article.imgAlt}
                          src={article.imgSrc}
                          width={550}
                          height={354}
                        />
                      </Link>
                    </div>
                    <div className="article-content">
                      <div className="article-label">
                        <Link
                          href={`/blog-detail/${article.id}`}
                          className="tf-btn btn-sm radius-3 btn-fill animate-hover-btn"
                        >
                          {article.label}
                        </Link>
                      </div>
                      <div className="article-title">
                        <Link href={`/blog-detail/${article.id}`}>
                          {article.title}
                        </Link>
                      </div>
                      <div className="desc">{article.desc}</div>
                      <div className="article-btn">
                        <Link
                          href={`/blog-detail/${article.id}`}
                          className="tf-btn btn-line fw-6"
                        >
                          Read more
                          <i className="icon icon-arrow1-top-left" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
                <ul className="wg-pagination">
                  <li className="active">
                    <div className="pagination-item">1</div>
                  </li>
                  <li>
                    <a href="#" className="pagination-item animate-hover-btn">
                      2
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pagination-item animate-hover-btn">
                      3
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pagination-item animate-hover-btn">
                      <i className="icon-arrow-right" />
                    </a>
                  </li>
                </ul>
              </div>
              <aside className="tf-section-sidebar wrap-sidebar-mobile">
                <div className="sidebar-item sidebar-categories">
                  <div className="sidebar-title">Blog categories</div>
                  <div className="sidebar-content">
                    <ul>
                      <li>
                        <a href="#">
                          Accessories<span>(9)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Bag<span>(9)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Cookware &amp; Kitchen<span>(9)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Decor<span>(9)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Decorate<span>(9)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Denim<span>(9)</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sidebar-item sidebar-post">
                  <div className="sidebar-title">Recent Post</div>
                  <div className="sidebar-content">
                    <ul>
                      {articles.map((article) => (
                        <li key={article.id}>
                          <div className="blog-article-item style-sidebar">
                            <div className="article-thumb">
                              <Link href={`/blog-detail/${article.id}`}>
                                <Image
                                  alt={article.title}
                                  src={article.imgSrc}
                                  width={1100}
                                  height={707}
                                />
                              </Link>
                            </div>
                            <div className="article-content">
                              <div className="article-label">
                                <Link
                                  href={`/blog-detail/${article.id}`}
                                  className="tf-btn btn-sm radius-3 btn-fill animate-hover-btn"
                                >
                                  {article.label}
                                </Link>
                              </div>
                              <div className="article-title">
                                <Link href={`/blog-detail/${article.id}`}>
                                  {article.title}
                                </Link>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="sidebar-item sidebar-tags">
                  <div className="sidebar-title">Blog tags</div>
                  <div className="sidebar-content">
                    <ul className="tags-lists">
                      <li>
                        <a href="#" className="tags-item">
                          Bags
                        </a>
                      </li>
                      <li>
                        <a href="#" className="tags-item">
                          Fashion
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sidebar-item sidebar-instagram">
                  <div className="sidebar-title">Instagram</div>
                  <div className="sidebar-content">
                    <ul>
                      <li>
                        <Image
                          alt=""
                          src="/images/shop/file/img-1.jpg"
                          width={566}
                          height={566}
                        />
                      </li>
                      <li>
                        <Image
                          alt=""
                          src="/images/shop/file/img-2.jpg"
                          width={566}
                          height={566}
                        />
                      </li>
                      <li>
                        <Image
                          alt=""
                          src="/images/shop/file/img-3.jpg"
                          width={564}
                          height={566}
                        />
                      </li>
                      <li>
                        <Image
                          alt=""
                          src="/images/shop/file/img-4.jpg"
                          width={566}
                          height={566}
                        />
                      </li>
                      <li>
                        <Image
                          alt=""
                          src="/images/shop/file/img-5.jpg"
                          width={566}
                          height={566}
                        />
                      </li>
                      <li>
                        <Image
                          alt=""
                          src="/images/shop/file/img-6.png"
                          width={960}
                          height={862}
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-sidebar-mobile">
        <button
          data-bs-toggle="offcanvas"
          data-bs-target="#sidebarmobile"
          aria-controls="offcanvasRight"
        >
          <i className="icon-open" />
        </button>
      </div>
    </>
  );
}
