import React from 'react';
import { Link } from 'react-router-dom';

function Nav(){
    return (
        <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/menu">Menu</a></li>
        </ul>
    );
}

export default Nav;