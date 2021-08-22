import React, {useState, useEffect} from 'react';
import Comment from "../Comment/Comment";
import Answer from "../Answer/Answer";
import AddFile from "../AddFile/AddFile";

import ReactStars from "react-rating-stars-component";

import feedback from "../Feedback/feedback.module.css";

const Feedback = (props) => {
    // console.log(props);
    return (
        <div className={feedback.container} data-testid="Feedback">
            <ReactStars
                classNames={feedback.stars}
                count={5}
                value={props.userRating}
                size={65}
                edit={true}
                activeColor="#FFBB1F"
                onChange={(newValue)=>props.changeRating(newValue)}
            />
            <AddFile
                img={props.img}
                onChange={(newValue)=>props.isImg(newValue)}
            />
            <Comment
                userComment = {props.userComment}
                setUserComment = {props.setUserComment}
            />
            <Answer
                isAnswer = {props.isAnswer}
                answerValue = {props.answer}
                userComment = {props.userComment}
                minComment={props.minComment}
            />
        </div>
    );
};

export default Feedback;