import React, { useContext, useState } from "react";
import "./Navbar.css";
import newLogo2 from "../Assets/newLogo2.png";

import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="navbar">
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link to="/" style={{ textDecoration: "none" }}>
            Shop
          </Link>
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link to="/mens" style={{ textDecoration: "none" }}>
            Men
          </Link>
          {menu === "mens" && <hr />}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link to="/womens" style={{ textDecoration: "none" }}>
            Women
          </Link>
          {menu === "womens" && <hr />}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids" style={{ textDecoration: "none" }}>
            Kids
          </Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>
      <div className="nav-logo">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img src={newLogo2} alt="Shop logo" width={"250px"} />
        </Link>
      </div>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          {" "}
          {/* Changed to /cart */}
          <img src={cart_icon} alt="Cart" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems?.() || 0}</div>{" "}
        {/* Optional chaining */}
      </div>
    </div>
  );
};

export default Navbar;
