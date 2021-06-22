import React from 'react';

// import image from  "./image.module.css";

const Image = ({src, alt}) => {

    return (
        <img
            // src = {img()}
            // alt = {alt}
            alt = {'Логотипы Миша обещает попозже'}
            className={`anim_show`}
        />
    );
};

export default Image;
