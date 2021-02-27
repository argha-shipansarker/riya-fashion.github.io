import React from "react"
import "./custom-button.styles.scss"

const CustomButton = ({ value, isGoogleSignIn, ...otherProps }) => (
    <button className={`${isGoogleSignIn ? "google-signin" : ""} custom-button`} {...otherProps}>
        {value}
    </button>
)

export default CustomButton;