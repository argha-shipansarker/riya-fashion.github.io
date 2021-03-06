import React from "react";
import "./cart-item.styles.scss";

const CartItem = ({ cartItem: { imageUrl, name, price, quantity } }) => {
    return (
        <div className="cart-item">
            <img src={imageUrl} alt="item" />
            <div className="information">
                <span>{name}</span>
                <span>{quantity} x ${price}</span>
            </div>
        </div>
    )
}

export default CartItem;