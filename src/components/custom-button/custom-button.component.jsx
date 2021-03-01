import React from "react"
import "./custom-button.styles.scss"

const CustomButton = ({ value, isGoogleSignIn, googleSignIn, ...otherProps }) => (
    <button className={`${isGoogleSignIn ? "google-signin" : ""} custom-button`} {...otherProps} onClick={googleSignIn}>
        {value}
    </button>
)

export default CustomButton;