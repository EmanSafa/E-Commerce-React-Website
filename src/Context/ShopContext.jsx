<<<<<<< HEAD
/*import React, { createContext } from "react";

import React, { createContext, useState } from 'react';

import all_products from '../Components/Assets/all_product'
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);
const getDefaultCart = () =>{
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;
      
    }
    return cart;
 }
const ShopContextProvider = (props) =>{
    const [cartItems,setCartItems] = useState(getDefaultCart());


    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }

    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo=all_product.find((product)=>product.id==Number(item))
                totalAmount += itemInfo.new_price  * cartItems[item];
            }
            return totalAmount;
        }
    }
      
   const getTotalCartItems=()=>{
    let totalItem=0;
    for(const item in cartItems)
    {
        if(cartItems[item]>0)
        {
            totalItem += cartItems[item];
        }
    }
  return totalItem;

   }

    const contextValue ={ getTotalCartItems ,getTotalCartAmount ,all_products,cartItems,addToCart,removeFromCart};

=======
import React, { createContext } from "react";
import all_products from '../Components/Assets/all_product'

export const ShopContext = createContext(null);

const ShopContextProvider = (props) =>{
    const contextValue ={all_products}
>>>>>>> origin/main
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
<<<<<<< HEAD
export default ShopContextProvider;*/
import React, { createContext, useState } from 'react';
import all_products from '../Components/Assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_products.length; index++) {
    cart[index] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_products.find((product) => product.id == Number(item));
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_products,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

=======
>>>>>>> origin/main
export default ShopContextProvider;