import React from 'react';
import about from "./about.module.css";
import Image from "../Image/Image";

const About = ({businessName, businessAddress, businessPoint, logo}) => {
    return (
        <div className={about.container}>
            <div className={about.item}>
                <p>
                    <span className={about.title}>{businessName}</span>
                </p>
                <p>
                    <span className={about.title}>{businessAddress}</span>
                </p>
                <p>
                    <span className={about.title}>{businessPoint}</span>
                </p>
            </div>
            <div className={about.item}>
                <Image
                    src = {`${logo}`}
                    alt = "logo"
                />
            </div>
        </div>
    );
};

export default About;