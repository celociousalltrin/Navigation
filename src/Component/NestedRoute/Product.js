import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Product = () => {
  return (
    <div>
        <h1>Product Page</h1>
        <>
        <Link to="/Home/Product/Men">Men</Link><br />
        <Link to="/Home/Product/Women">Women</Link>
        </>
        <Outlet />
    </div>
  )
}

export default Product