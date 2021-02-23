import React from "react"
import "./custom-button.styles.scss"

const CustomButton = ({ ...otherProps }) => (
    <button className="custom-button" {...otherProps}>
        {otherProps.value}
    </button>
)

export default CustomButton;