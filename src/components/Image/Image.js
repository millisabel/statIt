import React from 'react';

import image from  "./image.module.css";

const Image = ({src, alt}) => {
    return (
        <img
            src = {src}
            alt = {alt}
            className={`anim_show ${image.item}`}
        />
    );
};

export default Image;
