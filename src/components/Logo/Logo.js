import React from 'react';
import logo from './Logo.module.css';
import logoImg from './logo.svg';

const Logo = () => {
    return (
        <div className={logo.box}>
            <img className={logo.img} src={logoImg} alt="logotype"/>
            <h1 className={logo.title}>starIT</h1>
        </div>
    );
};

export default Logo;