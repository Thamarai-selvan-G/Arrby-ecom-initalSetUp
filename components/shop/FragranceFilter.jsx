"use client";

import { useEffect, useState } from "react";
const brands = [
  "Chanel",
  "Dior",
  "Yves Saint Laurent",
  "Tom Ford",
  "Giorgio Armani",
  "Creed",
  "Jean Paul Gaultier",
  "Viktor & Rolf",
  "Marc Jacobs",
  "Hermès",
  "Gucci",
];
const availabilities = [
  { id: 1, isAvailable: true, text: "Available", count: 10 },
  { id: 2, isAvailable: false, text: "Out of Stock", count: 2 },
];
const sizes = [
  "10ML",
  "15ML",
  "20ML",
  "25ML",
  "30ML",
  "50ML",
  "75ML",
  "90ML",
  "100ML",
];
import Slider from "rc-slider";
import Link from "next/link";

export default function FragranceFilter({ setProducts, products, category }) {
  const [price, setPrice] = useState([0, 160]);
  const handlePrice = (value) => {
    setPrice(value);
  };
  const [selectedBrands, setSelectedBrands] = useState([]);
  const handleSelectBrand = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands((pre) => [...pre.filter((el) => el != brand)]);
    } else {
      setSelectedBrands((pre) => [...pre, brand]);
    }
  };
  const [selectedAvailabilities, setSelectedAvailabilities] = useState([]);
  const handleSelectAvailabilities = (availability) => {
    if (
      selectedAvailabilities.some(
        (el) => el.isAvailable === availability.isAvailable
      )
    ) {
      setSelectedAvailabilities((prev) =>
        prev.filter((el) => el.isAvailable !== availability.isAvailable)
      );
    } else {
      setSelectedAvailabilities((prev) => [...prev, availability]);
    }
  };

  const [selectedSizes, setSelectedSizes] = useState([]);
  const handleSelectSizes = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes((pre) => [...pre.filter((el) => el != size)]);
    } else {
      setSelectedSizes((pre) => [...pre, size]);
    }
  };

  useEffect(() => {
    let filteredArrays = [];

    filteredArrays = [
      ...filteredArrays,
      [
        ...products.filter(
          (elm) => elm.price >= price[0] && elm.price <= price[1]
        ),
      ],
    ];
    // console.log(filteredByPrice, "filteredByPrice");
    if (selectedBrands.length) {
      filteredArrays = [
        ...filteredArrays,
        [...products.filter((elm) => selectedBrands.includes(elm.brand))],
      ];
    }

    // console.log(filteredByselectedBrands, "filteredByselectedBrands");
    if (selectedSizes.length) {
      filteredArrays = [
        ...filteredArrays,
        [
          ...products.filter((elm) =>
            elm.sizes?.some((elm2) => selectedSizes.includes(elm2))
          ),
        ],
      ];
    }

    // console.log(filteredByselectedSizes);
    if (selectedAvailabilities.length) {
      filteredArrays = [
        ...filteredArrays,
        [
          ...products.filter((elm) =>
            selectedAvailabilities
              .map((availability) => availability.isAvailable)
              .includes(elm.isAvailable)
          ),
        ],
      ];
    }

    const commonItems = products.filter((item) =>
      filteredArrays.every((array) => array.includes(item))
    );
    setProducts(commonItems);
  }, [
    price,
    selectedBrands,
    selectedAvailabilities,
    selectedSizes,
    products,
  ]);
  const clearFilter = () => {
    setSelectedBrands([]);
    setSelectedAvailabilities([]);
    setSelectedSizes([]);
    setPrice([15, 180]);
  };
  return (
    <div className="offcanvas offcanvas-start canvas-filter" id="filterShop">
      <div className="canvas-wrapper">
        <header className="canvas-header">
          <div className="filter-icon">
            <span className="icon icon-filter" />
            <span>Filter</span>
          </div>
          <span
            className="icon-close icon-close-popup"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </header>
        <div className="canvas-body">
          <form
            onSubmit={(e) => e.preventDefault()}
            action="#"
            id="facet-filter-form"
            className="facet-filter-form"
          >
            <div className="widget-facet">
              <div
                className="facet-title"
                data-bs-target="#availability"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="availability"
              >
                <span>Availability</span>
                <span className="icon icon-arrow-up" />
              </div>
              <div id="availability" className="collapse show">
                <ul className="tf-filter-group current-scrollbar mb_36">
                  {availabilities.map((availability) => (
                    <li
                      key={availability.id}
                      className="list-item d-flex gap-12 align-items-center"
                      onClick={() => handleSelectAvailabilities(availability)}
                    >
                      <input
                        type="radio"
                        className="tf-check"
                        readOnly
                        checked={selectedAvailabilities.includes(availability)}
                      />
                      <label className="label">
                        <span>{availability.text}</span>&nbsp;
                        <span>
                          (
                          {
                            products.filter(
                              (elm) =>
                                elm.isAvailable == availability.isAvailable
                            ).length
                          }
                          )
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="widget-facet wrap-price">
              <div
                className="facet-title"
                data-bs-target="#price"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="price"
              >
                <span>Price</span>
                <span className="icon icon-arrow-up" />
              </div>
              <div id="price" className="collapse show">
                <div className="widget-price filter-price">
                  <Slider
                    formatLabel={() => ``}
                    range
                    max={180}
                    min={15}
                    defaultValue={price}
                    onChange={(value) => handlePrice(value)}
                    id="slider"
                  />
                  <div className="box-title-price">
                    <span className="title-price">Price :</span>
                    <div className="caption-price">
                      <div>
                        <span>$</span>
                        <span className="min-price">{price[0]}</span>
                      </div>
                      <span>-</span>
                      <div>
                        <span>$</span>
                        <span className="max-price">{price[1]}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="widget-facet">
              <div
                className="facet-title"
                data-bs-target="#brand"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="brand"
              >
                <span>Brand</span>
                <span className="icon icon-arrow-up" />
              </div>
              <div id="brand" className="collapse show">
                <ul className="tf-filter-group current-scrollbar mb_36">
                  {brands.map((brand) => (
                    <li
                      key={brand}
                      className="list-item d-flex gap-12 align-items-center"
                      onClick={() => handleSelectBrand(brand)}
                    >
                      <input
                        type="radio"
                        className="tf-check"
                        readOnly
                        checked={selectedBrands.includes(brand)}
                      />
                      <label className="label">
                        <span>{brand}</span>&nbsp;
                        <span>
                          ({products.filter((elm) => elm.brand == brand).length}
                          )
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="widget-facet">
              <div
                className="facet-title"
                data-bs-target="#size"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="size"
              >
                <span>Size</span>
                <span className="icon icon-arrow-up" />
              </div>
              <div id="size" className="collapse show">
                <ul className="tf-filter-group current-scrollbar">
                  {sizes.map((elm, i) => (
                    <li
                      key={i}
                      onClick={() => handleSelectSizes(elm)}
                      className="list-item d-flex gap-12 align-items-center"
                    >
                      <input
                        type="radio"
                        className="tf-check tf-check-size"
                        readOnly
                        checked={selectedSizes.includes(elm)}
                      />
                      <label className="label">
                        <span>{elm}</span>&nbsp;
                        <span>
                          (
                          {
                            products.filter((el) => el.sizes?.includes(elm))
                              .length
                          }
                          )
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </form>
          <div className="mt-5"></div>
          <a
            className="tf-btn style-2 btn-fill rounded animate-hover-btn"
            onClick={clearFilter}
          >
            Clear Filter
          </a>
        </div>
      </div>
    </div>
  );
}
