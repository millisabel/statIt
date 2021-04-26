import React from 'react';

// import image from  "./image.module.css";

import img1 from "../../assets/img/Eva.png";
import img2 from "../../assets/img/Silpo.png";
import img3 from "../../assets/img/ATB.svg";

const Image = ({src, name,  alt}) => {
    const img = () => {
        if(name === "Eva"){
            return img1;
        }
        if(name === "Silpo"){
            return img2;
        }
        if(name === "ATB"){
            return img3;
        }
    };

    return (
        <img
            src = {img()}
            alt = {alt}
            className={`anim_show`}
        />
    );
};

export default Image;
