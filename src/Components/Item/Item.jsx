<<<<<<< HEAD
/*import React from "react";
=======
import React from "react";
>>>>>>> origin/main
import "./Item.css";
import { Link } from "react-router-dom";
const Item = (props) => {
  return (
    <div className="item">
<<<<<<< HEAD
      <Link to={/product/${props.id}}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /> </Link>
=======
      <Link to={`/product/${props.id}`}><img src={props.image} alt="" /> </Link>
>>>>>>> origin/main
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">${props.new_price}</div>
        <div className="item-price-old">${props.old_price}</div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Item;*/
import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`} onClick={() => window.scrollTo(0, 0)}>
        <img src={props.image} alt={props.name} />
        <h3>{props.name}</h3>
      </Link>
      <div className="item-prices">
        <div className="item-price-new">${props.new_price}</div>
        {props.old_price && <div className="item-price-old">${props.old_price}</div>}
      </div>
    </div>
  );
};

=======
>>>>>>> origin/main
export default Item;
