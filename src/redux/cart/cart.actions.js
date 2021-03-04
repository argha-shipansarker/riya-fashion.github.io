import { CartActionTypes } from "./cart.types";

export const ToggleCartHidden = value => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
})

export const addItem = item => ({
    type: CartActionTypes.ADD_ITMES,
    payload: item
})
