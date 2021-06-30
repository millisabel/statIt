import React, {useState, useEffect} from 'react';
import {withRouter} from "react-router-dom";

import Send from "../Send/Send";
import Feedback from "../Feedback/Feedback";
import Time from "../Time/Time";
import About from "../About/About";
import info from "../Info/info.module.css";

const Info = (props) => {
    const businessId = props.match.params.businessId;
    const pointerId = props.match.params.pointerId;

    const businessURL='';
    const pointerURL='';
    // const businessURL=`https://starit-api.herokuapp.com/api/business/${businessId}`;
    // const pointerURL=`https://starit-api.herokuapp.com/api/fbo/${pointerId}`;

    const [business, setBusiness] = useState(null);
    const [address, setAddress] = useState(null);
    const [point, setPoint] = useState(null);
    const [logo, setLogo] = useState(null);
    const [userComment, setComment] = useState('');
    const [answer, setAnswer] = useState(false);
    const [rating, setRating] = useState(0);
    const [img, setImg] = useState([]);
    const [disabled, setDisabled] = useState(true);

    function sendRequest(url1, url2){
        return Promise.all([
            fetch(url1).then(value => value.json()),
            fetch(url2).then(value => value.json())
        ])
    }

    useEffect(() => {
        let error = (bool) => {
            return bool;
        };
        let loading = (bool) => {
            return bool;
        };
        loading(true);

        sendRequest(businessURL, pointerURL)
            .then(value => {
                loading(false);
                error(false);
                const business = value[0];
                const point = value[1];
                setBusiness(business[0].name);
                setLogo(business[0].logo);
                if(point[0]){
                    setAddress(point[0].object_address);
                    setPoint(point[0].object_name);
                }
            })
            .catch(err => {
                loading(false);
                error(true);
            });

    }, []);

    const setUserComment = (e) => {
        setComment(e.target.value);
        if(e.target.value.length >= 1 && e.target.value.length < 4){
            setDisabled(true);
        }
        else if(rating){
            setDisabled(false);
        }
    };

    const userAnswer = (e) => {
        setAnswer(e.target.checked);
    };

    const ratingChanged = (newRating) => {
        setRating(newRating);
        if(newRating && (userComment.length < 1 || userComment.length > 4 )){
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
        <div className={info.container}>
            <About
                businessName={business}
                businessAddress={address}
                businessPoint={point}
                logo={logo}
            />
            <Time/>
            <Feedback value=''
                      userComment={userComment}
                      setUserComment={setUserComment}
                      isAnswer={userAnswer}
                      answer={answer}
                      isImg={userImg}
                      userRating={rating}
                      changeRating={ratingChanged}
                      img={img}
            />
            <Send
                businessId={businessId}
                pointerId={pointerId}
                rating={rating}
                img={img}
                comment={userComment}
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
