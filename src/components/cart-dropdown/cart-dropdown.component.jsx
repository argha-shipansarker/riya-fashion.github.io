import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component"
import { connect } from "react-redux"

const CartDropdown = ({ cartItmes }) => {
    console.log(cartItmes);
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItmes.map(cartItem => <CartItem cartItem={cartItem} />)
                }
            </div>
            <CustomButton value="go to checkout" />
        </div>
    )
}

const mapStateToProps = ({ cart: { cartItmes } }) => ({
    cartItmes
})

export default connect(mapStateToProps)(CartDropdown);