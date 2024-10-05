import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import ContactUs from "./Components/ContactUs";
import AboutUs from "./Components/AboutUs";  // Import About Us Page
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Route for Home Page */}
          <Route path="/" element={<Shop />} />

          {/* Routes for Category Pages with Dynamic Banners */}
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />

          {/* Route for Individual Product Pages */}
          <Route path="/product/:productId" element={<Product />} />

          {/* Route for Cart Page */}
          <Route path="/cart" element={<Cart />} />

          {/* Route for Login/Signup Page */}
          <Route path="/login" element={<LoginSignup />} />

          {/* New Routes for Contact Us and About Us Pages */}
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        {/* Footer component at the bottom of the page */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
