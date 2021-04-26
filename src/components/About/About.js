import React from 'react';
import about from "./about.module.css";
import Image from "../Image/Image";

const About = (props) => {
    return (
        <div className={about.container}>
            <div className={about.item}>
                <p>
                    <span className={about.title}>Name: </span>
                    <span>{props.businessName}</span>
                </p>
                <p>
                    <span className={about.title}>Address: </span>
                    <span>{props.businessAddress}</span>
                </p>
                <p>
                    <span className={about.title}>Ticket window: </span>
                    <span>{props.businessPoint}</span>
                </p>
            </div>
            <div className={about.item}>
                <Image
                    src = {`${props.logo}`}
                    name = {`${props.businessName}`}
                    alt = "logo"
                />
            </div>
        </div>
    );
};

export default About;