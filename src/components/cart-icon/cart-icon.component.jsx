import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { ToggleCartHidden } from "../../redux/cart/cart.actions"

const CartIcon = ({ ToggleCartHidden, hidden }) => (
    <div className="cart-icon" onClick={() => ToggleCartHidden(hidden)}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    ToggleCartHidden: value => dispatch(ToggleCartHidden(value))
})

const mapStateToProps = ({ cart: { hidden } }) => ({
    hidden
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);