import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component"
import { connect } from "react-redux"
import { selectCartItems } from "../../redux/cart/cart.selectors"

const CartDropdown = ({ cartItmes }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItmes.map(cartItem => <CartItem cartItem={cartItem} key={cartItem.id} />)
                }
            </div>
            <CustomButton value="go to checkout" />
        </div>
    )
}

const mapStateToProps = state => {
    return ({
        cartItmes: selectCartItems(state)
    })
}

export default connect(mapStateToProps)(CartDropdown);