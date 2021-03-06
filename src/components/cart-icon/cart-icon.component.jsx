import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { ToggleCartHidden } from "../../redux/cart/cart.actions"
import { selecCartItemsCount } from "../../redux/cart/cart.selectors"

const CartIcon = ({ ToggleCartHidden, total_item }) => {
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

const mapStateToProps = state => {
    return ({
        total_item: selecCartItemsCount(state)
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);