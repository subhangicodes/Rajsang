/* eslint-disable no-unused-vars */
// Search.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { assets, food_list } from '../../assets/assets.js'; // Ensure the path is correct
import './search.css';

// eslint-disable-next-line react/prop-types
const Search = ({ setCategory }) => {
  const [query, setQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    // Filter products based on query
    const filtered = food_list.filter(
      (product) =>
        product.name.toLowerCase().includes(value) ||
        product.category.toLowerCase().includes(value)
    );
    setFilteredProducts(filtered);
  };

  // Handle product click
  const handleProductClick = (product) => {
    console.log("Navigating to product:", product); // Debugging line
    setCategory(product.category); // Set the selected category
    navigate(`/product/${product._id}`); // Navigate to the product detail page
  };

  return (
    <div className="search">
      <div className="search-container">
        <h2>Search Products</h2>
        <img
          onClick={() => navigate('/')} // Close the search modal and navigate back to the home page
          src={assets.cross_icon}
          alt="Close"
        />
        <input
          type="text"
          placeholder=" Search for products..."
          value={query}
          onChange={handleSearchChange}
        />
        <div className="search-container-box">
          <ul>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <li key={product._id} onClick={() => handleProductClick(product)}>
                  <strong>{product.name}</strong>
                </li>
              ))
            ) : (
              query && <p>No matching products found.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Search;