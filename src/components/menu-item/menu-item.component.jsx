import React from 'react';
import "./menu-item.styles.scss"

const MenuItem = ({ title, imageUrl, size }) => {
    return (
        <div className={`menu-item ${size}`}>
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="content">
                <h1 className="tittle">{title.toUpperCase()}</h1>
                <span className="subtittle">Shop NOW</span>
            </div>
        </div>
    );
}

export default MenuItem;