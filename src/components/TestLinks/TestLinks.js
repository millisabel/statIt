import React from 'react';

import links from "./TestLinks.module.css";
import {Link} from "react-router-dom";

const TestLinks = () => {
    return (
        <ul className={links.list}>
            <li className={links.item}>
                <Link to="info/0/0">Silpo 1</Link>
            </li>
            <li className={links.item}>
                <Link to="info/0/1">Silpo 2</Link>
            </li>
            <li className={links.item}>
                <Link to="info/0/2">Silpo 3</Link>
            </li>
            <li className={links.item}>
                <Link to="info/1/0">ATB 1</Link>
            </li>
            <li className={links.item}>
                <Link to="info/1/1">ATB 1</Link>
            </li>
            <li className={links.item}>
                <Link to="info/2/0">Eva 1</Link>
            </li>
            <li className={links.item}>
                <Link to="info/2/1">Eva 2</Link>
            </li>
            {/*<li className={links.item}>*/}
            {/*    <Link to="info/2/21">ошибка</Link>*/}
            {/*</li>*/}
        </ul>
    );
};

export default TestLinks;