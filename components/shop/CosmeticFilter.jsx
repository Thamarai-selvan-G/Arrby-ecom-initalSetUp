"use client";

import { useEffect, useState } from "react";
import Slider from "rc-slider";

const categories = [
  { id: 1, name: "Skincare" },
  { id: 2, name: "Makeup" },
  { id: 3, name: "Foundation" },
  { id: 4, name: "Serum" },
  { id: 5, name: "Moisturizer" },
  { id: 6, name: "Lipstick" },
  { id: 7, name: "Eyeshadow" },
  { id: 8, name: "Concealer" },
  { id: 9, name: "Blush" },
  { id: 10, name: "Bronzer" },
  { id: 11, name: "Mascara" },
];

const brands = [
  "L'Oréal",
  "Maybelline",
  "Estée Lauder",
  "Clinique",
  "Fenty Beauty",
  "Charlotte Tilbury",
  "Urban Decay",
  "Tarte",
  "NARS",
  "Benefit",
  "Too Faced",
  "Shiseido",
];

const availabilities = [
  { id: 1, isAvailable: true, text: "Available", count: 10 },
  { id: 2, isAvailable: false, text: "Out of Stock", count: 2 },
];

export default function CosmeticFilter({ setProducts, products, category }) {
  const [price, setPrice] = useState([10, 100]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedAvailabilities, setSelectedAvailabilities] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handlePrice = (value) => {
    setPrice(value);
  };

  const handleSelectBrand = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands((prev) => prev.filter((el) => el !== brand));
    } else {
      setSelectedBrands((prev) => [...prev, brand]);
    }
  };

  const handleSelectAvailability = (availability) => {
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

  const handleSelectCategory = (categoryName) => {
    if (selectedCategories.includes(categoryName)) {
      setSelectedCategories((prev) => prev.filter((el) => el !== categoryName));
    } else {
      setSelectedCategories((prev) => [...prev, categoryName]);
    }
  };

  // Add the getCategoryCount function
  const getCategoryCount = (categoryName) => {
    return products.filter((product) =>
      product.categories.includes(categoryName)
    ).length;
  };

  useEffect(() => {
    let filteredProducts = products;

    // Filter by price
    filteredProducts = filteredProducts.filter(
      (product) => product.price >= price[0] && product.price <= price[1]
    );

    // Filter by selected brands
    if (selectedBrands.length) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedBrands.includes(product.brand)
      );
    }

    // Filter by selected categories
    if (selectedCategories.length) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedCategories.some((category) =>
          product.categories.includes(category)
        )
      );
    }

    // Filter by selected availability
    if (selectedAvailabilities.length) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedAvailabilities.some(
          (availability) => product.isAvailable === availability.isAvailable
        )
      );
    }

    setProducts(filteredProducts);
  }, [
    price,
    selectedBrands,
    selectedCategories,
    selectedAvailabilities,
    products,
  ]);

  const clearFilter = () => {
    setSelectedBrands([]);
    setSelectedAvailabilities([]);
    setSelectedCategories([]);
    setPrice([10, 100]);
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
          {/* Categories Filter */}
          <div className="widget-facet wd-categories">
            <div
              className="facet-title"
              data-bs-target="#categories"
              data-bs-toggle="collapse"
              aria-expanded="true"
              aria-controls="categories"
            >
              <span>Product Categories</span>
              <span className="icon icon-arrow-up" />
            </div>
            <div id="categories" className="collapse show">
              <ul className="list-categoris current-scrollbar mb_36">
                {categories.map((category) => (
                  <li key={category.id} className="cate-item">
                    <label>
                      {/* Checkbox for each category */}
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category.name)}
                        onChange={() => handleSelectCategory(category.name)} // Call the handler when checkbox is toggled
                      />
                      <span>{category.name}</span>
                      {/* Show product count next to the category name */}
                      <span>
                        ({getCategoryCount(category.name)}{" "}
                        {/* Call function to get product count */})
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Availability Filter */}
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
                    onClick={() => handleSelectAvailability(availability)}
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
                            (elm) => elm.isAvailable == availability.isAvailable
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

          {/* Price Filter */}
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
                  max={100}
                  min={0}
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

          <div className="clear-filter">
            <a
              className="tf-btn style-2 btn-fill rounded animate-hover-btn"
              onClick={clearFilter}
            >
              Clear Filter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
