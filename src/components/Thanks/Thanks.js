import React from 'react';
import ReactStars from "react-rating-stars-component";
import thanks from "./Thanks.module.css";
import Image from "../Image/Image";
import {withRouter} from "react-router-dom";

const Thanks = (props) => {
    return (
        <div className={thanks.box}>
            <h2 className={thanks.title}>Thank you for your review of our work!</h2>
            <div className={thanks.wrap}>
                <Image
                    src = {`${props.location.state.logo}`}
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
