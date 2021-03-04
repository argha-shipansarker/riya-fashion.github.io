import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { ToggleCartHidden } from "../../redux/cart/cart.actions"

const CartIcon = ({ ToggleCartHidden, cartItmes }) => {
    const quantity = cartItmes.map(cartItem => cartItem.quantity);
    const total_item = quantity.reduce((sum, value) => sum + value, 0)
    return (
        <div className="cart-icon" onClick={ToggleCartHidden}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{total_item}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    ToggleCartHidden: () => dispatch(ToggleCartHidden())
})

const mapStateToProps = ({ cart: { cartItmes } }) => ({
    cartItmes
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);