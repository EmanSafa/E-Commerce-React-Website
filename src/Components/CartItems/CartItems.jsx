/*import React, { useContext } from "react";
import './CartItems.css';
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.image} alt="" className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                                <p>${e.new_price * cartItems[e.id]} </p>
                                <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>SubTotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>Enter your Promocode If You Have</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;*/

/*import React, { useContext } from "react";
import './CartItems.css';
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

    // Check if all_product and cartItems are defined and are arrays/objects
    if (!all_product || !Array.isArray(all_product)) {
        return <p>Error loading products.</p>;
    }

    if (!cartItems || typeof cartItems !== 'object') {
        return <p>Error loading cart items.</p>;
    }

    const cartItemElements = all_product.map((product) => {
        // Only render products that are in the cart
        if (cartItems[product.id] > 0) {
            return (
                <div key={product.id}>
                    <div className="cartitems-format cartitems-format-main">
                        <img src={product.image} alt={product.name} className='carticon-product-icon' />
                        <p>{product.name}</p>
                        <p>${product.new_price}</p>
                        <button className="cartitems-quantity">{cartItems[product.id]}</button>
                        <p>${(product.new_price * cartItems[product.id]).toFixed(2)}</p>
                        <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(product.id) }} alt="Remove" />
                    </div>
                    <hr />
                </div>
            );
        }
        return null;
    });

    // If there are no items in the cart, show a message
    if (cartItemElements.length === 0) {
        return (
            <div className="cartitems">
                <p>Your cart is empty.</p>
            </div>
        );
    }

    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {cartItemElements}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>SubTotal</p>
                            <p>${getTotalCartAmount().toFixed(2)}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount().toFixed(2)}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>Enter your Promocode If You Have</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;*/
 
import React, { useContext } from "react";
import './CartItems.css';
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
    const { getTotalCartAmount, all_products, cartItems, removeFromCart } = useContext(ShopContext);

    // Log cart items and products to ensure they are available
    console.log("All Products: ", all_products);
    console.log("Cart Items: ", cartItems);

    if (!all_products || !Array.isArray(all_products)) {
        return <p>Error loading products.</p>;
    }

    if (!cartItems || typeof cartItems !== 'object') {
        return <p>Error loading cart items.</p>;
    }

    // Render only products that are in the cart (cartItems[product.id] > 0)
    const cartItemElements = all_products.map((product) => {
        if (cartItems[product.id] > 0) {
            return (
                <div key={product.id}>
                    <div className="cartitems-format cartitems-format-main">
                        <img src={product.image} alt={product.name} className='carticon-product-icon' />
                        <p>{product.name}</p>
                        <p>${product.new_price.toFixed(2)}</p>
                        <button className="cartitems-quantity">{cartItems[product.id]}</button>
                        <p>${(product.new_price * cartItems[product.id]).toFixed(2)}</p>
                        <img className='cartitems-remove-icon' src={remove_icon} onClick={() => removeFromCart(product.id)} alt="Remove" />
                    </div>
                    <hr />
                </div>
            );
        }
        return null;
    });

    // If no items are in the cart, display a message
    if (cartItemElements.length === 0) {
        return (
            <div className="cartitems">
                <p>Your cart is empty.</p>
            </div>
        );
    }

    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {cartItemElements}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>SubTotal</p>
                            <p>${getTotalCartAmount().toFixed(2)}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount().toFixed(2)}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>Enter your Promocode If You Have</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;