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
import AboutUs from "./Components/AboutUs"; // Import About Us Page
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kid_banner from "./Components/Assets/banner_kids.png";
import ShopContextProvider from "./Context/ShopContext"; // Import your context provider
import Dashboard from "./Dashboard/AppClass";
import Checkout from "./CheckOut/CheckOut";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ShopContextProvider>
          {/* Wrap the Navbar and Routes with the context provider */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route
              path="/mens"
              element={<ShopCategory banner={men_banner} category="men" />}
            />
            <Route
              path="/womens"
              element={<ShopCategory banner={women_banner} category="women" />}
            />
            <Route
              path="/kids"
              element={<ShopCategory banner={kid_banner} category="kid" />}
            />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginSignup />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </ShopContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
