import React from "react";
import "./cart-item.styles.scss";

const CartItem = ({ cartItem: { imageUrl, name, price, quantity } }) => {
    console.log(name, quantity);
    return (
        <div className="cart-item">
            <div
                className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="information">
                <span>{name}</span> <br />
                <span>{quantity}</span>
                <span> x {price}</span>
            </div>
        </div>
    )
}

export default CartItem;