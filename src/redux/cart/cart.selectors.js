import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItmes
)

export const selecCartItemsCount = createSelector(
    [selectCartItems],
    cartItmes => cartItmes.reduce((sum, cartItem) => sum + cartItem.quantity, 0)
)