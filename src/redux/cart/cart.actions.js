import { CartActionTypes } from "./cart.types";

export const ToggleCartHidden = value => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
    payload: !value
})
