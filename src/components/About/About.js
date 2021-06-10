import React from 'react';
import about from "./about.module.css";
import Image from "../Image/Image";

const About = (props) => {
    return (
        <div className={about.container}>
            <div className={about.item}>
                <p>
                    {/*<span className={about.title}>Name: </span>*/}
                    <span className={about.title}>{props.businessName}</span>
                </p>
                <p>
                    {/*<span className={about.title}>Address: </span>*/}
                    <span className={about.title}>{props.businessAddress}</span>
                </p>
                <p>
                    {/*<span className={about.title}>Ticket window: </span>*/}
                    <span className={about.title}>ticket № {props.businessPoint}</span>
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