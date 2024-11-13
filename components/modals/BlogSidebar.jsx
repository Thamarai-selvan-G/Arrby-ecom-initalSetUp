import React from "react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts9 } from "@/data/blogs";
export default function BlogSidebar() {
  return (
    <div
      className="offcanvas offcanvas-end canvas-sidebar canvas-sidebar-blog"
      id="sidebarmobile"
    >
      <div className="canvas-wrapper">
        <div className="canvas-header">
          <span className="title">SIDEBAR</span>
          <span
            className="icon-close icon-close-popup"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="mb-canvas-content canvas-body">
          <aside className="tf-section-sidebar">
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
                  {blogPosts9.map((post) => (
                    <li key={post.id}>
                      <div className="blog-article-item style-sidebar">
                        <div className="article-thumb">
                          <Link href={`/blog-detail/${post.id}`}>
                            <Image
                              alt={post.title}
                              src={post.imgSrc}
                              width={1100}
                              height={707}
                            />
                          </Link>
                        </div>
                        <div className="article-content">
                          <div className="article-label">
                            <Link
                              href={`/blog-detail/${post.id}`}
                              className="tf-btn btn-sm radius-3 btn-fill animate-hover-btn"
                            >
                              {post.label}
                            </Link>
                          </div>
                          <div className="article-title">
                            <Link href={`/blog-detail/${post.id}`} className="">
                              {post.title}
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
  );
}
