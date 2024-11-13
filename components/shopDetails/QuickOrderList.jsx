"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const products = [
  {
    imgSrc: "/images/shop/products/hmgoepprod.jpg",
    title: "Beige / S",
    priceOnSale: 10.0,
    price: 8.0,
    total: 0.0,
  },
  {
    imgSrc: "/images/shop/products/hmgoepprod2.jpg",
    title: "Beige / S",
    priceOnSale: null,
    price: 8.0,
    total: 0.0,
  },
  {
    imgSrc: "/images/shop/products/hmgoepprod3.jpg",
    title: "Beige / S",
    priceOnSale: null,
    price: 8.0,
    total: 0.0,
  },
  {
    imgSrc: "/images/shop/products/hmgoepprod4.jpg",
    title: "Beige / S",
    priceOnSale: 10.0,
    price: 8.0,
    total: 0.0,
  },
  {
    imgSrc: "/images/shop/products/hmgoepprod5.jpg",
    title: "Beige / S",
    priceOnSale: null,
    price: 8.0,
    total: 0.0,
  },
  {
    imgSrc: "/images/shop/products/hmgoepprod6.jpg",
    title: "Beige / S",
    priceOnSale: null,
    price: 8.0,
    total: 0.0,
  },
  {
    imgSrc: "/images/shop/products/hmgoepprod7.jpg",
    title: "Beige / S",
    priceOnSale: 10.0,
    price: 8.0,
    total: 0.0,
  },
  {
    imgSrc: "/images/shop/products/hmgoepprod8.jpg",
    title: "Beige / S",
    priceOnSale: null,
    price: 8.0,
    total: 0.0,
  },
  {
    imgSrc: "/images/shop/products/hmgoepprod9.jpg",
    title: "Beige / S",
    priceOnSale: null,
    price: 8.0,
    total: 0.0,
  },
  {
    imgSrc: "/images/shop/products/hmgoepprod10.jpg",
    title: "Beige / S",
    priceOnSale: 10.0,
    price: 8.0,
    total: 0.0,
  },
  {
    imgSrc: "/images/shop/products/hmgoepprod11.jpg",
    title: "Beige / S",
    priceOnSale: null,
    price: 8.0,
    total: 0.0,
  },
  {
    imgSrc: "/images/shop/products/hmgoepprod12.jpg",
    title: "Beige / S",
    priceOnSale: null,
    price: 8.0,
    total: 0.0,
  },
];

export default function QuickOrderList() {
  const [currentProducts, setCurrentProducts] = useState([
    ...products.map((el) => ({ ...el, quantity: 1 })),
  ]);
  const handleQuantityChange = (index, quantity) => {
    if (quantity > 1) {
      const items = [...currentProducts];
      const item = items[index];
      item.quantity = quantity;
      items[index] = item;
      setCurrentProducts(items);
    }
  };
  return (
    <section className="flat-spacing-22">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tf-quick-order-list-template">
              <div className="tf-qol-head">
                <div className="d-md-block d-none">
                  <p className="text-start">Variant</p>
                </div>
                <div className="d-md-block d-none">
                  <p className="text-start">Quantity</p>
                </div>
                <div className="d-md-block d-none">
                  <p className="text-end">Price</p>
                </div>
                <div className="d-md-block d-none">
                  <p className="text-end">Variant total</p>
                </div>
                <div className="d-md-none d-block">
                  <p className="">Variants</p>
                </div>
              </div>
              <div className="tf-qol-content">
                <div className="quick-order-list-container">
                  <table className="tf-quick-order-list-table w-100">
                    <tbody>
                      {currentProducts.map((product, index) => (
                        <tr key={index} className="tf-variant-item">
                          <td className="tf-variant-item-inner">
                            <div className="tf-variant-inner">
                              <div className="tf-variant-item-media">
                                <div className="tf-variant-item-image-container">
                                  <Image
                                    alt=""
                                    src={product.imgSrc}
                                    width={713}
                                    height={1070}
                                  />
                                </div>
                                <span className="tf-variant-title">
                                  {product.title}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="tf-variant-item-quantity">
                            <div className="tf-variant-inner">
                              <div className="wg-quantity small">
                                <span
                                  className="btn-quantity minus-btn"
                                  onClick={() =>
                                    handleQuantityChange(
                                      index,
                                      product.quantity - 1
                                    )
                                  }
                                >
                                  -
                                </span>
                                <input
                                  type="text"
                                  name="number"
                                  onChange={(e) =>
                                    handleQuantityChange(
                                      index,
                                      e.target.value / 1
                                    )
                                  }
                                  value={product.quantity}
                                />
                                <span
                                  className="btn-quantity plus-btn"
                                  onClick={() =>
                                    handleQuantityChange(
                                      index,
                                      product.quantity + 1
                                    )
                                  }
                                >
                                  +
                                </span>
                              </div>
                            </div>
                          </td>
                          <td
                            className="tf-variant-item-price"
                            qol-data-title="Price"
                          >
                            <div className="tf-variant-inner">
                              <div className="tf-price-list">
                                {product.priceOnSale && (
                                  <div className="price-on-sale">
                                    ${product.priceOnSale.toFixed(2)}
                                  </div>
                                )}
                                {product.price && (
                                  <div className="compare-at-price">
                                    ${product.price.toFixed(2)}
                                  </div>
                                )}
                              </div>
                            </div>
                          </td>
                          <td
                            className="tf-variant-item-total"
                            qol-data-title="Variant total"
                          >
                            <div className="tf-variant-inner">
                              <div className="tf-price-list">
                                <div className="price fw-6">
                                  $
                                  {(product.price * product.quantity).toFixed(
                                    2
                                  )}
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="tf-quick-order-list-total">
                  <div className="tf-total-wrap">
                    <div className="tf-viewcart">
                      <Link
                        href={`/view-cart`}
                        className="tf-btn btn-fill animate-hover-btn flex-shrink-0"
                      >
                        View Cart
                      </Link>
                    </div>
                    <div className="tf-total-item">
                      <div className="tf-total-item-inner">
                        <div className="tf-qol-text">
                          {currentProducts.reduce(
                            (total, product) => total + product.quantity,
                            0
                          )}
                        </div>
                        <p>Total items</p>
                      </div>
                    </div>
                    <div />
                    <div className="tf-total-price">
                      <div className="tf-totals-variant-total">
                        <div className="price fw-6">
                          $
                          {currentProducts
                            .reduce(
                              (total, product) =>
                                total + product.price * product.quantity,
                              0
                            )
                            .toFixed(2)}
                        </div>
                        <p>Product subtotal</p>
                      </div>
                      <p>
                        Taxes and <a href="#">shipping</a> calculated at
                        checkout
                      </p>
                    </div>
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
