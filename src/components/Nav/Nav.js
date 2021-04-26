import React from 'react';
import {NavLink} from "react-router-dom";
import nav from "./Nav.module.css";

const Nav = () => {
    return (
        <nav className={nav.box}>
            <NavLink  to="/statics" activeClassName={nav.active} className={nav.item}>statics</NavLink>
            <NavLink to="/info" activeClassName={nav.active} className={nav.item}>info</NavLink>
            <NavLink to="/profile" activeClassName={nav.active} className={nav.item}>profile</NavLink>
        </nav>
    );
};

export default Nav;