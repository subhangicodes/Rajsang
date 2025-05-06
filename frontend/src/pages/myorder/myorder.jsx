/* eslint-disable no-unused-vars */
// MyOrders.jsx
import React, { useEffect, useState } from 'react';
import './myorder.css'; // Ensure you have a CSS file for styling
import { food_list,assets } from '../../assets/assets'; // Import the food list from assets.js


const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch all orders from the backend
        const response = await fetch('http://localhost:4000/api/myorder', {
          method: 'GET',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }

        const data = await response.json();
        console.log('Orders Data:', data); // Debugging: Log the response

        // Sort orders by createdAt in descending order
        const sortedOrders = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setOrders(sortedOrders);
      } catch (error) {
        console.error('Error fetching orders:', error);
        setError('Failed to load orders. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  // Get the last order (most recent one)
  const lastOrder = orders[0];
  console.log('Last Order:', lastOrder); // Debugging

  return (
    <div className="my-orders">
      <h1>My Order</h1>
      {lastOrder ? (
        <div className="order-item">
          <h2>Order ID: {lastOrder._id}</h2>
          <h3>Order Date: {new Date(lastOrder.createdAt).toLocaleDateString()}</h3>
          <h3 className='rs'>Total Amount: Rs.{lastOrder.totalAmount.toFixed(2)}</h3>
          <div className="order-details">
            {Array.isArray(lastOrder.items) && lastOrder.items.length > 0 ? (
              lastOrder.items.map((item, index) => {
                console.log('Item:', item); // Debugging
                console.log('Food List:', food_list); // Debugging

                // Find the product details from food_list
                const product = food_list.find((food) => food._id === String(item.productId));
                console.log('Matched Product:', product); // Debugging

                return (
                  <div key={index} className="order-product">
                    {product ? (
                      <>
                        <img
                          src={product.image} // Use the image property directly
                          alt={product.name}
                          className="product-image"
                        />
                        <p><strong> </strong> {product.name}</p>
                      </>
                    ) : (
                      <p>Product details not found</p>
                    )}
                    <p><strong>Quantity:</strong> {item.quantity}</p>
                    {/* <p><strong>Price:</strong> ${item.price.toFixed(2)}</p> */}
                  </div>
                );
              })
            ) : (
              <p>No items found for this order.</p>
            )}
          </div>
        </div>
      ) : (
        <p>No orders found.</p>
      )}
      
    </div>
    // 
  );
};

export default MyOrders;