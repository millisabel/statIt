import React from 'react';
import ReactStars from "react-rating-stars-component";
import thanks from "./Thanks.module.css";
import Image from "../Image/Image";
import {withRouter} from "react-router-dom";

import img1 from "../../assets/img/Eva.png";
import img2 from "../../assets/img/Silpo.png";
import img3 from "../../assets/img/ATB.svg";

const Thanks = (props) => {
    const img = () => {
        if(props.name === "Eva"){
            return img1;
        }
        if(props.name === "Silpo"){
            return img2;
        }
        if(props.name === "ATB"){
            return img3;
        }
    };

    return (
        <div className={thanks.box}>
            <h2 className={thanks.title}>Thank you for your review of our work!</h2>
            <div className={thanks.wrap}>
                <Image
                    src = {img()}
                    alt = "logo"
                />
            </div>
            <p className={thanks.text}>We will respect your wishes and comments and will notify you of the result</p>
            <p className={thanks.score}>your score</p>
            <ReactStars
                classNames={thanks.stars}
                count={props.location.state.rating}
                value={props.location.state.rating}
                size={35}
                edit={false}
                isHalf={true}
                activeColor="#FFBB1F"
            />
        </div>
    );
};

const ThanksWithRouter = withRouter(Thanks);
export default ThanksWithRouter;
