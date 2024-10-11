import React, { useContext, useState } from "react";
// import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);
  const [sortedProducts, setSortedProducts] = useState(all_products);
  const [sortOption, setSortOption] = useState("default");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSortChange = (option) => {
    let sortedArray = [...all_products];
    switch (option) {
      case "price-asc":
        sortedArray.sort((a, b) => a.new_price - b.new_price);
        break;
      case "price-desc":
        sortedArray.sort((a, b) => b.new_price - a.new_price);
        break;
      default:
        sortedArray = all_products;
    }
    setSortedProducts(sortedArray);
    setSortOption(option);
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="shop-category">
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of {sortedProducts.length} products
        </p>
        <div className="shopcategory-sort">
          <span onClick={toggleDropdown}>
            Sort by <img src={dropdown_icon} alt="dropdown icon" />
          </span>
          {showDropdown && (
            <ul className="sort-options">
              <li onClick={() => handleSortChange("price-asc")}>
                Price: Low to High
              </li>
              <li onClick={() => handleSortChange("price-desc")}>
                Price: High to Low
              </li>
              <li onClick={() => handleSortChange("default")}>Default</li>
            </ul>
          )}
        </div>
      </div>
      <div className="shopcategory-products">
        {sortedProducts
          .filter((item) => props.category === item.category) // Filter products by category
          .map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;
