"use client";

import { useEffect, useState } from "react";
const filterColors = [
  { name: "Black", colorClass: "bg_black" },
  { name: "White", colorClass: "bg_white" },
  { name: "Grey", colorClass: "bg_grey" },
  { name: "Blue", colorClass: "bg_blue" },
  { name: "Red", colorClass: "bg_red" },
  { name: "Brown", colorClass: "bg_brown" },
  { name: "Pink", colorClass: "bg_pink" },
];
const brands = [
  "Nike",
  "Adidas",
  "Puma",
  "Reebok",
  "Converse",
  "New Balance",
  "Vans",
  "Under Armour",
  "Asics",
  "Skechers",
];
const availabilities = [
  { id: 1, isAvailable: true, text: "Available", count: 10 },
  { id: 2, isAvailable: false, text: "Out of Stock", count: 2 },
];
const sizes = [
      { id: "values-6", value: "6", defaultChecked: false },
      { id: "values-7", value: "7", defaultChecked: true },
      { id: "values-8", value: "8", defaultChecked: false },
      { id: "values-9", value: "9", defaultChecked: false },
      { id: "values-10", value: "10", defaultChecked: false },
    ];
import Slider from "rc-slider";
import Link from "next/link";

export default function FooterFilter({ setProducts, products, category }) {
  const [price, setPrice] = useState([0, 200]);
  const handlePrice = (value) => {
    setPrice(value);
  };
  const [selectedColors, setSelectedColors] = useState([]);
  const handleSelectColor = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors((pre) => [...pre.filter((el) => el != color)]);
    } else {
      setSelectedColors((pre) => [...pre, color]);
    }
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
  const handleSelectSizes = (sizeValue) => {
    if (selectedSizes.includes(sizeValue)) {
      setSelectedSizes((pre) => [...pre.filter((el) => el != sizeValue)]);
    } else {
      setSelectedSizes((pre) => [...pre, sizeValue]);
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
    if (selectedColors.length) {
      filteredArrays = [
        ...filteredArrays,
        [
          ...products.filter((elm) =>
            elm.colors
              ?.map((el2) => el2.name)
              .some((el3) => selectedColors.includes(el3))
          ),
        ],
      ];
    }

    // console.log(filteredByselectedColors, "filteredByselectedColors");
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
            elm.sizes?.some((size) => selectedSizes.includes(size.value))
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
    selectedColors,
    selectedBrands,
    selectedAvailabilities,
    selectedSizes,
    products,
  ]);
  const clearFilter = () => {
    setSelectedColors([]);
    setSelectedBrands([]);
    setSelectedAvailabilities([]);
    setSelectedSizes([]);
    setPrice([50, 200]);
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
                data-bs-target="#color"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="color"
              >
                <span>Color</span>
                <span className="icon icon-arrow-up" />
              </div>
              <div id="color" className="collapse show">
                <ul className="tf-filter-group filter-color current-scrollbar mb_36">
                  {filterColors.map((elm, i) => (
                    <li
                      key={i}
                      className="list-item d-flex gap-12 align-items-center"
                      onClick={() => handleSelectColor(elm.name)}
                    >
                      <input
                        type="checkbox"
                        name="color"
                        className={`tf-check-color ${elm.colorClass}`}
                        readOnly
                        checked={selectedColors.includes(elm.name)}
                      />
                      <label className="label">
                        <span>{elm.name}</span>&nbsp;
                        <span>
                          (
                          {
                            products.filter((el) =>
                              el.colors
                                ?.map((col) => col?.name)
                                ?.includes(elm.name)
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
                  {sizes.map((size) => (
                    <li
                      key={size.id}
                      onClick={() => handleSelectSizes(size.value)}
                      className="list-item d-flex gap-12 align-items-center"
                    >
                      <input
                        type="checkbox"
                        className="tf-check tf-check-size"
                        readOnly
                        checked={selectedSizes.includes(size.value)}
                      />
                      <label className="label">
                        <span>{size.value}</span>&nbsp;
                        <span>
                        (
                          {
                            products.filter((el) =>
                              el.sizes?.some((s) => s.value === size.value)
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
