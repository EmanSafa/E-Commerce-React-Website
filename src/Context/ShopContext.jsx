// ShopContext.js
import React, { createContext, useState } from "react";
import all_products from "../Components/Assets/all_product"; // Ensure path is correct

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [products, setProducts] = useState(all_products);

  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const updateProduct = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  const deleteProduct = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  const contextValue = {
    all_products: products,
    addProduct,
    updateProduct,
    deleteProduct,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
