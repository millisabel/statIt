import React from 'react';
import {Link} from "react-router-dom";
import back from "./GoBack.module.css";

const GoBack = (props) => {
    return (
        <div className={back.box}>
            {props.isShow ? <Link to='/info' className={back.link} onClick={props.onClick}/> : null}
        </div>
    );
};

export default GoBack;


