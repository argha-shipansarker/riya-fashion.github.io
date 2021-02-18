import React, { Component } from 'react';
import "./directory.styles.scss"
import Sections from "./item-data"
import MenuItem from "../menu-item/menu-item.component"

class Dirctory extends Component {
    state = {
        sections: Sections,
    }
    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({ title, imageUrl, id, size }) => (
                    <MenuItem title={title} key={id} imageUrl={imageUrl} size={size} />
                ))}
            </div>
        );
    }
}

export default Dirctory;