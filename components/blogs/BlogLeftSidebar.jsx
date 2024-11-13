import React from "react";
import Sidebar from "./Sidebar";
import Image from "next/image";
import Link from "next/link";
import { blogArticles6 } from "@/data/blogs";
import Pagination2 from "../common/Pagination2";
export default function BlogLeftSidebar() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="blog-sidebar-main">
            <Sidebar />
            <div className="list-blog">
              <div className="row">
                {blogArticles6.map((article, index) => (
                  <div key={index} className={article.colClass}>
                    <div className="blog-article-item">
                      <div className="article-thumb">
                        <Link href={`/blog-detail/${article.id}`}>
                          <Image
                            className="lazyload"
                            data-src={article.imgSrc}
                            alt={article.imgAlt}
                            src={article.imgSrc}
                            width={1100}
                            height={707}
                          />
                        </Link>
                        <div className="article-label">
                          <Link
                            href={`/blog-detail/${article.id}`}
                            className="tf-btn btn-sm radius-3 btn-fill animate-hover-btn"
                          >
                            {article.label}
                          </Link>
                        </div>
                      </div>
                      <div className="article-content">
                        <div className="article-title">
                          <Link href={`/blog-detail/${article.id}`}>
                            {article.title}
                          </Link>
                        </div>
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
                  </div>
                ))}
              </div>
              <ul className="wg-pagination">
                <Pagination2 />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
