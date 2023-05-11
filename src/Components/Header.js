import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {" "}
      <ul className="flex justify-around items-center fixed top-0 left-0 w-screen bg-white py-[20px] z-10  ">
        <Link to="/shop" className="text-black">
          Shop
        </Link>
        <Link to="/dashboard" className="text-black">
          Dashboard
        </Link>
        <Link className="text-black" to="/orders">
          Orders
        </Link>
        <Link className="text-black" to="/products">
          Products
        </Link>
        <Link className="text-black" to="/customers">
          Customers
        </Link>
      </ul>
    </div>
  );
};

export default Header;
