import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import './RelatedProducts.css'; // Import CSS for styling
import data_product from "../Assets/new_collections.js"; // Import product data

// Create a separate ProductItem component to display individual product details
const ProductItem = ({ id, name, image, new_price, old_price }) => {
    return (
        <div className="product-item" key={id}>
            {/* Corrected Link syntax using backticks */}
            <Link to={`/product/${id}`} onClick={() => window.scrollTo(0, 0)}>
                <img src={image} alt={name} />
                <h3>{name}</h3>
                <p>New Price: ${new_price}</p>
                {old_price && <p className="old-price">Old Price: ${old_price}</p>}
            </Link>
        </div>
    );
};

const RelatedProducts = () => {
    return (
        <div className="relatedproducts">
            <h1>Related Products</h1>
            <hr />
            <div className="relatedproducts-item">
                {
                    data_product.map((item) => (
                        <ProductItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default RelatedProducts;
