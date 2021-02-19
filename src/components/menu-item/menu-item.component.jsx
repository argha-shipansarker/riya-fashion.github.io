import React from 'react';
import "./menu-item.styles.scss"
import { withRouter } from 'react-router-dom'

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
    return (

        <div className={`menu-item ${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="content">
                <h1 className="tittle">{title.toUpperCase()}</h1>
                <span className="subtittle">Shop NOW</span>
            </div>
        </div>
    );
}

export default withRouter(MenuItem);