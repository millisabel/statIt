import React, {useState, useEffect} from 'react';
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
        "logo": "/assets/Silpo.png",
        // "color": "255, 106, 0",
        "points": [
            {
                "id": 1,
                "address": "Odessa"
            },
            {
                "id": 2,
                "address": "Poltava"
            },
            {
                "id": 3,
                "address": "Kuiv"
            }
        ]
    },
    {
        "id": 2,
        "name": "ATB",
        "logo": "/assets/ATB.svg",
        "color": "37, 107, 177",
        "points": [
            {
                "id": 4,
                "address": "Lvov"
            },
            {
                "id": 5,
                "address": "Toretsk"
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
                "address": "Kramatorsk"
            },
            {
                "id": 7,
                "address": "Slavansk"
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
    const [comment, setComment] = useState(null);
    const [answer, setAnswer] = useState(null);
    const [rating, setRating] = useState(0);
    const [color, setColor] = useState(data[businessId].color);

    if(!color){
        setColor('130, 160, 220');
    }
    document.documentElement.style.setProperty('--rgb-dark-blue', color);


    const userComment = (newComment) => {
        setComment(newComment);
    };

    const userAnswer = (bool) => {
        setAnswer(bool);
    };

    const ratingChanged = (newRating) => {
        setRating(newRating);
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
                      userRating={rating}
                      changeRating={ratingChanged}
            />
            <Send
                businessId={businessId}
                pointerId={pointerId}
                rating={rating}
                comment={comment}
                answer={answer}
                logo={logo}
            />
        </div>
    );
};

const InfoWithRouter = withRouter(Info);
export default InfoWithRouter;
