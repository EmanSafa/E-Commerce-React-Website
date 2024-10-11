import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserContext } from "../../Context/UserContext";
import newLogo2 from "../Assets/newLogo2.png";
import cart_icon from "../Assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { user } = useContext(UserContext);
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="navbar">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={newLogo2} alt="Shop logo" width={"150px"} />
          </Link>

          {/* Toggler and Login/Cart are now adjacent */}
          <div className="d-flex">
            <div className="nav-login-cart d-lg-none d-flex align-items-center">
              <Link to="/login">
                <button className="btn nav-login-button">Login</button>
              </Link>
              <Link to="/cart" className="nav-cart-icon">
                <img src={cart_icon} alt="Cart" />
                <div className="nav-cart-count">{getTotalCartItems() || 0}</div>
              </Link>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-2 ">
              <li className="nav-item " onClick={() => setMenu("shop")}>
                <Link className="nav-link " to="/">
                  Shop
                </Link>
              </li>
              <li className="nav-item" onClick={() => setMenu("mens")}>
                <Link className="nav-link" to="/mens">
                  Men
                </Link>
              </li>
              <li className="nav-item" onClick={() => setMenu("womens")}>
                <Link className="nav-link" to="/womens">
                  Women
                </Link>
              </li>
              <li className="nav-item" onClick={() => setMenu("kids")}>
                <Link className="nav-link" to="/kids">
                  Kids
                </Link>
              </li>
              {user && user.role === "admin" && (
                <li className="nav-item" onClick={() => setMenu("dashboard")}>
                  <Link className="nav-link" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
              )}
            </ul>

            {/* Desktop view login and cart icons */}
            <div className="nav-login-cart d-none d-lg-flex">
              <Link to="/login">
                <button className="btn nav-login-button">Login</button>
              </Link>
              <Link to="/cart" className="nav-cart-icon">
                <img src={cart_icon} alt="Cart" />
                <div className="nav-cart-count">{getTotalCartItems() || 0}</div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
