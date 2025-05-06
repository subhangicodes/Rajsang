// ProductDetail.js
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { food_list } from '../../assets/assets.js'; // Ensure this path is correct
import './ProductDeatil.css'

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  console.log("Product ID from URL:", id); // Debugging line

  // Find the product by ID
  const product = food_list.find((product) => product._id === id); // Use _id if that's how your products are structured

  console.log("Found Product:", product); // Debugging line

  // State for similar products
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    if (product) {
      // Find similar products based on category
      const similar = food_list.filter((item) => item.category === product.category && item._id !== product._id);
      setSimilarProducts(similar);
    }
  }, [product]);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.category}</p>
      <p>{product.description}</p>
      <p className='rs'>Rs.{product.price.toFixed(2)}</p>
      
      <h2>Similar Products</h2>
      <div className="similar-products">
        {similarProducts.length > 0 ? (
          similarProducts.map((similarProduct) => (
            <div key={similarProduct._id} className="similar-product">
              <h3>{similarProduct.name}</h3>
              <img src={similarProduct.image} alt={similarProduct.name} />
              <p className='rs'> Rs.{similarProduct.price.toFixed(2)}</p>
              <a href={`/product/${similarProduct._id}`}>View Details</a>
            </div>
          ))
        ) : (
          <p>No similar products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;