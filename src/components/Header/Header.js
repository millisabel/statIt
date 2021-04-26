import React from 'react';
import header from "./header.module.css";
import Logo from "../Logo/Logo";

const Header = () => {
    return (
        <header className={header.box}>
            <Logo/>
        </header>
    );
};

export default Header;