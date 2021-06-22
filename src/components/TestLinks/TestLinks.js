import React from 'react';

import links from "./TestLinks.module.css";
import {Link} from "react-router-dom";

const TestLinks = () => {
    return (
        <ul className={links.list}>
            <li className={links.item}>
                <Link to="api/1/1">Continental Hotel 1</Link>
            </li>
            <li className={links.item}>
                <Link to="api/1/2">Continental Hotel 2</Link>
            </li>
            <li className={links.item}>
                <Link to="api/2/3">ATB 1</Link>
            </li>
            <li className={links.item}>
                <Link to="api/2/4">ATB 2</Link>
            </li>
            <li className={links.item}>
                <Link to="api/3/0">Silpo</Link>
            </li>
            <li className={links.item}>
                <Link to="api/4/0">Comfy</Link>
            </li>
            {/*<li className={links.item}>*/}
            {/*    <Link to="info/2/21">ошибка</Link>*/}
            {/*</li>*/}
        </ul>
    );
};

export default TestLinks;