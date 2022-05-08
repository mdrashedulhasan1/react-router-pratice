import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                    <NavLink activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }}
                       to="/home">
                        Home
                    </NavLink>
                    <NavLink activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }} style={{ margin: '0 20px' }} to="/about">
                        About
                    </NavLink>
                    <NavLink activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }} to="/users">
                        Users
                    </NavLink>
                    <NavLink style={{ marginLeft: '20px' }} activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }} to="/posts">
                        All Post
                    </NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Header;