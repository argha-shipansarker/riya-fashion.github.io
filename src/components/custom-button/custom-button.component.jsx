import React from "react"
import "./custom-button.styles.scss"

const CustomButton = ({ value, isGoogleSignIn, inverted, ...otherProps }) => (
    <button className={`${isGoogleSignIn ? "google-signin" : ""} ${inverted ? "inverted" : ""} custom-button`} {...otherProps}>
        {value}
    </button>
)

export default CustomButton;