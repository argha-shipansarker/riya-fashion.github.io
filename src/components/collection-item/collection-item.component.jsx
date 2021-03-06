import React from "react"
import "./collection-item.styles.scss"
import CustomButton from "../custom-button/custom-button.component"
import { connect } from "react-redux"
import { addItem } from "../../redux/cart/cart.actions"

const CollectionItem = ({ item, addItem, cartItmes }) => {
    const { imageUrl, name, price } = item;
    return (
        <div className="collection-item">
            <div
                className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton value="add to cart" inverted onClick={() => addItem(item)} />

        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

const mapStateToProps = ({ cart: { cartItmes } }) => ({
    cartItmes
})

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);