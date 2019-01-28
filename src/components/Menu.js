import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    const activeStyle = {
        color: 'green'
    };

    return (
        <div>
            <ul>
                <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
                <li><NavLink exact to="/categories" activeStyle={activeStyle}>Categories</NavLink></li>
                <li><NavLink exact to="/brands" activeStyle={activeStyle}>Brands</NavLink></li>
            </ul>
        </div>
    )
}

export default Menu;