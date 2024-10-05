import React, { useContext } from "react";
<<<<<<< HEAD
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";
=======
>>>>>>> origin/main
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
<<<<<<< HEAD
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
=======
>>>>>>> origin/main
const Product = () => {
    const {all_products} = useContext(ShopContext)
    const {productId} = useParams();
    const product = all_products.find((e)=>e.id === Number(productId));
    return(
        <div>
            <Breadcrum product = {product}/>
            <ProductDisplay product ={product}/>
<<<<<<< HEAD
            <DescriptionBox/>
            <RelatedProducts/>
=======
>>>>>>> origin/main
        </div>
    )
}
export default Product