import { fragranceProducts } from "@/data/products";
import { useState } from "react";


export default function FragranceFilter() {
  const [filters, setFilters] = useState({
    mlValues: [],
    priceRange: [0, 100], // Minimum and maximum price
    isAvailable: null, // null = show all, true = in stock, false = out of stock
    brand: "",
    filterCategories: [],
  });

  const [filteredProducts, setFilteredProducts] = useState(fragranceProducts);

  // Function to handle filter changes
  const applyFilters = () => {
    let result = fragranceProducts;

    // Filter by mlValues
    if (filters.mlValues.length > 0) {
      result = result.filter((product) =>
        product.mlValues.some((ml) => filters.mlValues.includes(ml))
      );
    }

    // Filter by price range
    result = result.filter(
      (product) => product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    );

    // Filter by availability
    if (filters.isAvailable !== null) {
      result = result.filter((product) => product.isAvailable === filters.isAvailable);
    }

    // Filter by brand
    if (filters.brand) {
      result = result.filter((product) => product.brand === filters.brand);
    }

    // Filter by categories
    if (filters.filterCategories.length > 0) {
      result = result.filter((product) =>
        product.filterCategories.some((category) => filters.filterCategories.includes(category))
      );
    }

    setFilteredProducts(result);
  };

  return (
    <div>
      <h2>Filter Fragrance Products</h2>
      {/* Render Filter Controls */}
      <div>
        <label>
          Brand:
          <select
            onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
            value={filters.brand}
          >
            <option value="">All Brands</option>
            <option value="Ecomus">Ecomus</option>
            <option value="M&H">M&H</option>
            <option value="Luxe">Luxe</option>
            <option value="Comfy">Comfy</option>
          </select>
        </label>
        <label>
          Availability:
          <select
            onChange={(e) =>
              setFilters({ ...filters, isAvailable: e.target.value === "all" ? null : e.target.value === "true" })
            }
          >
            <option value="all">All</option>
            <option value="true">In Stock</option>
            <option value="false">Out of Stock</option>
          </select>
        </label>
        <label>
          Price Range:
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={filters.priceRange[1]}
            onChange={(e) =>
              setFilters({ ...filters, priceRange: [filters.priceRange[0], Number(e.target.value)] })
            }
          />
          <span>${filters.priceRange[1]}</span>
        </label>
      </div>

      <button onClick={applyFilters}>Apply Filters</button>

      {/* Render Filtered Products */}
      <div>
        <h3>Filtered Products</h3>
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <img src={product.imgSrc} alt={product.title} />
            <h4>{product.title}</h4>
            <p>Price: ${product.price}</p>
            <p>Brand: {product.brand}</p>
            <p>{product.isAvailable ? "In Stock" : "Out of Stock"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
