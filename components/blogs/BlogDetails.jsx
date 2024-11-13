import React from "react";
import Image from "next/image";
export default function BlogDetails({ blog }) {
  return (
    <> 
      <div className="blog-detail">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="blog-detail-main">
              
                <div className="blog-detail-main-heading">
                  <ul className="tags-lists justify-content-center">
                    <li>
                      <a href="#" className="tags-item">
                        ACCESSORIES
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tags-item">
                        BAGS
                      </a>
                    </li>
                  </ul>
                  <div className="title">{blog.title}</div>
                  <div className="meta">
                    by <span>admin</span> on <span>Oct 02</span>
                  </div>
                  <div className="image">
                    <Image
                      className="lazyload"
                      data-src="/images/blog/blog-detail.jpg"
                      alt=""
                      src="/images/blog/blog-detail.jpg"
                      width={1100}
                      height={707}
                    />
                  </div>
                </div>
                <blockquote>
                  <div className="icon">
                    <Image
                      alt=""
                      src="/images/item/quote.svg"
                      width={37}
                      height={25}
                    />
                  </div>
                  <div className="text">
                    Typography is the work of typesetters, compositors,
                    typographers, graphic designers, art directors, manga
                    artists, comic book artists, graffiti artists, and
                    now—anyone who arranges words, letters, numbers, and symbols
                    for publication, display, or distribution—from clerical
                    workers and newsletter writers to anyone self-publishing
                    materials.
                  </div>
                </blockquote>
                <div className="grid-image">
                  <div>
                    <Image
                      className="lazyload"
                      data-src="/images/blog/blog-detail-1.jpg"
                      alt=""
                      src="/images/blog/blog-detail-1.jpg"
                      width={705}
                      height={538}
                    />
                  </div>
                  <div>
                    <Image
                      className="lazyload"
                      data-src="/images/blog/blog-detail-2.jpg"
                      alt=""
                      src="/images/blog/blog-detail-2.jpg"
                      width={705}
                      height={538}
                    />
                  </div>
                </div>
                <div className="desc">
                  Pellentesque dapibus hendrerit tortor. Nam ipsum risus, rutrum
                  vitae, vestibulum eu, molestie vel, lacus. Sed libero.
                  Phasellus tempus. Etiam feugiat lorem non metus Maecenas
                  vestibulum mollis diam. Pellentesque auctor neque nec urna.
                  Pellentesque commodo eros a enim. Etiam sit amet orci eget
                  eros faucibus tincidunt. Vestibulum purus quam, scelerisque
                  ut, mollis sed, nonummy id, metus.In hac habitasse platea
                  dictumst. Etiam ultricies nisi vel augue. Pellentesque
                  egestas, neque sit amet convallis pulvinar, justo nulla
                  eleifend augue, ac auctor orci leo non est. Quisque rutrum.
                  Duis leo. <br />
                  <br />
                  <br />
                  Pellentesque dapibus hendrerit tortor. Nam ipsum risus, rutrum
                  vitae, vestibulum eu, molestie vel, lacus. Sed libero.
                  Phasellus tempus. Etiam feugiat lorem non metus. Morbi mattis
                  ullamcorper velit. Donec sodales sagittis magna. Curabitur a
                  felis in nunc fringilla tristique. Quisque malesuada placerat
                  nisl. Phasellus gravida semper nisi. <br />
                  <br />
                  <br />
                  Curabitur blandit mollis lacus. Phasellus nec sem in justo
                  pellentesque facilisis. Mauris turpis nunc, blandit et,
                  volutpat molestie, porta ut, ligula. Fusce ac felis sit amet
                  ligula pharetra condimentum. Integer tincidunt. <br />
                  <br />
                  <br />
                  Maecenas vestibulum mollis diam. Pellentesque auctor neque nec
                  urna. Pellentesque commodo eros a enim. Etiam sit amet orci
                  eget eros faucibus tincidunt. Vestibulum purus quam,
                  scelerisque ut, mollis sed, nonummy id, metus.In hac habitasse
                  platea dictumst. Etiam ultricies nisi vel augue. Pellentesque
                  egestas, neque sit amet convallis pulvinar, justo nulla
                  eleifend augue, ac auctor orci leo non est. Quisque rutrum.
                  Duis leo.
                </div>
                <div className="bot d-flex justify-content-between flex-wrap align-items-center">
                  <ul className="tags-lists">
                    <li>
                      <a href="#" className="tags-item">
                        <span>Accessories</span>
                      </a>
                    </li>
                  </ul>
                  <div className="d-flex align-items-center gap-20">
                    <p>Share:</p>
                    <ul className="tf-social-icon d-flex style-default">
                      <li>
                        <a
                          href="#"
                          className="box-icon round social-facebook border-line-black"
                        >
                          <i className="icon fs-14 icon-fb" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="box-icon round social-twiter border-line-black"
                        >
                          <i className="icon fs-12 icon-Icon-x" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="box-icon round social-instagram border-line-black"
                        >
                          <i className="icon fs-14 icon-instagram" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="box-icon round social-tiktok border-line-black"
                        >
                          <i className="icon fs-14 icon-tiktok" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="box-icon round social-pinterest border-line-black"
                        >
                          <i className="icon fs-14 icon-pinterest-1" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="tf-article-navigation">
                  <div className="item position-relative d-flex w-100 prev">
                    <a href="#" className="icon">
                      <i className="icon-arrow-left" />
                    </a>
                    <div className="inner">
                      <a href="#">PREVIOUS</a>
                      <h6>
                        <a href="#">
                          Fashionista editors reveal their designer
                        </a>
                      </h6>
                    </div>
                  </div>
                  <div className="item position-relative d-flex w-100 justify-content-end next">
                    <div className="inner text-end">
                      <a href="#">NEXT</a>
                      <h6>
                        <a href="#">
                          The next generation of leather alternatives
                        </a>
                      </h6>
                    </div>
                    <a href="#" className="icon">
                      <i className="icon-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-sidebar-mobile d-flex">
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
