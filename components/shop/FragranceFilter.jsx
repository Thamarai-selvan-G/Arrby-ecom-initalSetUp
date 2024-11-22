"use client";

import { useEffect, useState } from "react";
import Slider from "rc-slider";

const brands = [
 "Chanel",
  "Dior",
  "Yves Saint Laurent",
  "Tom Ford",
  "Giorgio Armani",
  "Creed",
  "Jean Paul Gaultier",
  "Viktor & Rolf",
  "Calvin Klein",
];
const availabilities = [
  { id: 1, isAvailable: true, text: "Available", count: 10 },
  { id: 2, isAvailable: false, text: "Out of Stock", count: 2 },
];
const sizes = [
  { id: "values-10ml", value: "10ML", defaultChecked: false },
  { id: "values-15ml", value: "15ML", defaultChecked: false },
  { id: "values-20ml", value: "20ML", defaultChecked: true },
  { id: "values-30ml", value: "30ML", defaultChecked: false },
  { id: "values-50ml", value: "50ML", defaultChecked: false },
  { id: "values-75ml", value: "75ML", defaultChecked: false },
  { id: "values-90ml", value: "90ML", defaultChecked: false },
  { id: "values-100ml", value: "100ML", defaultChecked: false },
];

export default function FragranceFilter({ setProducts, products }) {
  const [price, setPrice] = useState([0, 160]);
  const handlePrice = (value) => {
    setPrice(value);
  };

  const [selectedBrands, setSelectedBrands] = useState([]);
  const handleSelectBrand = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands((prev) => prev.filter((el) => el !== brand));
    } else {
      setSelectedBrands((prev) => [...prev, brand]);
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
      setSelectedSizes((prev) => prev.filter((el) => el !== sizeValue));
    } else {
      setSelectedSizes((prev) => [...prev, sizeValue]);
    }
  };

  useEffect(() => {
    let filteredArrays = [];

    // Filter by Price
    filteredArrays = [
      ...filteredArrays,
      products.filter((elm) => elm.price >= price[0] && elm.price <= price[1]),
    ];

    // Filter by Brands
    if (selectedBrands.length) {
      filteredArrays = [
        ...filteredArrays,
        products.filter((elm) => selectedBrands.includes(elm.brand)),
      ];
    }

    // Filter by Sizes
    if (selectedSizes.length) {
      filteredArrays = [
        ...filteredArrays,
        products.filter((elm) =>
          elm.sizes?.some((size) => selectedSizes.includes(size.value))
        ),
      ];
    }

    // Filter by Availability
    if (selectedAvailabilities.length) {
      filteredArrays = [
        ...filteredArrays,
        products.filter((elm) =>
          selectedAvailabilities
            .map((availability) => availability.isAvailable)
            .includes(elm.isAvailable)
        ),
      ];
    }

    // Find common items across all filters
    const commonItems = products.filter((item) =>
      filteredArrays.every((array) => array.includes(item))
    );

    setProducts(commonItems);
  }, [price, selectedBrands, selectedAvailabilities, selectedSizes, products]);

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
            {/* Availability */}
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
                                elm.isAvailable === availability.isAvailable
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

            {/* Price */}
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
                        <span>₹</span>
                        <span className="min-price">{price[0]}</span>
                      </div>
                      <span>-</span>
                      <div>
                        <span>₹</span>
                        <span className="max-price">{price[1]}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Brand */}
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
                          (
                          {products.filter((elm) => elm.brand === brand).length}
                          )
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Size */}
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
                        type="radio"
                        className="tf-check tf-check-size"
                        readOnly
                        checked={selectedSizes.includes(size.value)}
                      />
                      <label className="label">
                        <span>{size.value}</span>
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

            {/* Clear Filter */}
            <div className="mt-5"></div>
            <a
              className="tf-btn style-2 btn-fill rounded animate-hover-btn"
              onClick={clearFilter}
            >
              Clear Filter
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}
