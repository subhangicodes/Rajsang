// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { assets, food_list } from '../../assets/assets.js';
import './search.css';

// eslint-disable-next-line react/prop-types
const SearchProducts = ({ setSearch }) => {
  const [query, setQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProductImage, setSelectedProductImage] = useState(null);

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
    setSelectedProductImage(product.image);
  };

  return (
    <div className='search'>
      <div className='search-container'>
        <h2>Search Products</h2>
        <img onClick={() => setSearch(false)} src={assets.cross_icon} alt='' />
        <input
          type="text"
          placeholder=" Search for products..."
          value={query}
          onChange={handleSearchChange}
        />
        <div className='search-container-box'>
          <ul>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <li key={product.id} onClick={() => handleProductClick(product)}>
                  <strong>{product.name}</strong>
                </li>
              ))
            ) : (
              query && <p>No matching products found.</p>
            )}
          </ul>
        </div>
        {selectedProductImage && (
          <div className='product-image'>
            <img src={selectedProductImage} alt='Selected Product' />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchProducts;