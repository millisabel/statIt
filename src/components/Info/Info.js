import React, {useState} from 'react';
import {withRouter} from "react-router-dom";

import Send from "../Send/Send";
import Feedback from "../Feedback/Feedback";
import Time from "../Time/Time";
import About from "../About/About";
import info from "../Info/info.module.css";

const data = [
    {
        "id": 1,
        "name": "Silpo",
        "logo": "assets/Silpo",
        "color": "255, 106, 0",
        "points": [
            {
                "id": 1,
                "address": "Odessa, Str.Bulgakov, 11"
            },
            {
                "id": 2,
                "address": "Poltava, Str.Bulgakov, 11"
            },
            {
                "id": 3,
                "address": "Kuiv, Str.Bulgakov, 11"
            }
        ]
    },
    {
        "id": 2,
        "name": "ATB",
        "logo": "./assets/ATB.svg",
        "color": "37, 107, 177",
        "points": [
            {
                "id": 4,
                "address": "Lvov, Str.Bulgakov, 11"
            },
            {
                "id": 5,
                "address": "Toretsk, Str.Bulgakov, 11"
            }
        ]
    },
    {
        "id": 3,
        "name": "Eva",
        "logo": "/assets/Eva.png",
        "color": "115, 192, 66",
        "points": [
            {
                "id": 6,
                "address": "Kramatorsk, Str.Bulgakov, 11"
            },
            {
                "id": 7,
                "address": "Slavansk, Str.Bulgakov, 11"
            }
        ]
    }
];

const Info = (props) => {
    const businessId = props.match.params.businessId;
    const pointerId = props.match.params.pointerId;
    const business = data[businessId].name;
    const logo = data[businessId].logo;
    const address = data[businessId].points[pointerId].address;
    const point = data[businessId].points[pointerId].id;
    const [comment, setComment] = useState('');
    const [answer, setAnswer] = useState(null);
    const [rating, setRating] = useState(0);
    const [color, setColor] = useState(data[businessId].color);
    const [img, setImg] = useState([]);
    const [disabled, setDisabled] = useState(true);

    if(!color){
        setColor('130, 160, 220');
    }

    document.documentElement.style.setProperty('--rgb-dark-blue', color);

    const userComment = (newComment) => {
        setComment(newComment);
        if(newComment.length >= 1 && newComment.length < 4){
            setDisabled(true);
        }
        else if(rating){
            setDisabled(false);
        }
    };

    const userAnswer = (bool) => {
        setAnswer(bool);
    };

    const ratingChanged = (newRating) => {
        setRating(newRating);
        if(newRating && (comment.length < 1 || comment.length > 4 )){
            setDisabled(false);
        }
        else{
            setDisabled(true);
        }
    };

    const userImg = (newImg) => {
        setImg(newImg);
    };

    return (
        <div className={info.container} defaultValue={color}>
            <About
                businessName={business}
                businessAddress={address}
                businessPoint={point}
                logo={logo}
            />
            <Time/>
            <Feedback value=''
                      comment={comment}
                      onClick={userComment}
                      isAnswer={userAnswer}
                      isImg={userImg}
                      userRating={rating}
                      changeRating={ratingChanged}
            />
            <Send
                businessId={businessId}
                pointerId={pointerId}
                rating={rating}
                img={img}
                comment={comment}
                answer={answer}
                logo={logo}
                name={business}
                disabled={disabled}
            />
            <div>

            </div>
        </div>
    );
};

const InfoWithRouter = withRouter(Info);
export default InfoWithRouter;
