import React  from 'react';
import Comment from "../Comment/Comment";
import Answer from "../Answer/Answer";
import AddFile from "../AddFile/AddFile";

import ReactStars from "react-rating-stars-component";

import feedback from "../Feedback/feedback.module.css";

const Feedback = (props) => {
    return (
        <div className={feedback.container}>
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
                onChange={(newValue)=>props.isImg(newValue)}
            />
            <Comment
                comment = {props.comment}
                onClick = {props.onClick}
            />
            <Answer
                isAnswer = {props.isAnswer}
            />
        </div>
    );
};

export default Feedback;