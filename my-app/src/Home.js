// src/HomePage.js
import React, { useEffect, useState } from 'react';
import './Home.css';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((error) => {
        console.error('Error fetching data:', error);
        setProducts([]); // Set products to an empty array in case of an error
      });
  }, []);

  // Filter products based on the search query and price range
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const withinPriceRange =
      (!minPrice || product.price >= parseFloat(minPrice)) &&
      (!maxPrice || product.price <= parseFloat(maxPrice));

    return matchesSearch && withinPriceRange;
  });

  // Add a product to the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Calculate the total amount of the cart
  const cartTotal = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className="container">
      <h1>Welcome to My Home Page</h1>
      <div className="cart-summary">
        <p>Cart Count: {cart.length}</p>
        <p>Total Amount: ${cartTotal.toFixed(2)}</p>
      </div>

      <div className="search-container">
        <label htmlFor="search">Search Products:</label>
        <input
          type="text"
          id="search"
          placeholder="Enter product name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="filter-container">
        <label htmlFor="minPrice">Min Price:</label>
        <input
          type="number"
          id="minPrice"
          placeholder="Enter min price..."
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />

        <label htmlFor="maxPrice">Max Price:</label>
        <input
          type="number"
          id="maxPrice"
          placeholder="Enter max price..."
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <h2>Featured Products</h2>
      <ul className="product-list">
        {filteredProducts.map((product) => (
          <li key={product.id} className="product-card">
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
