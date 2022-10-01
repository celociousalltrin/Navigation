import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <h1>Home Page</h1>
        <div>
      <Link to="/Home/Product">Product</Link> <br />
      <Link to="/Home/ProductList">ProductList</Link>  <br />
      <Link to="/Home/ProductDetails">ProductDetails</Link>
        </div>
        <Outlet />
    </div>
  )
}

export default Home