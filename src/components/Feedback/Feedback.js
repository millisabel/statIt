import React  from 'react';
import feedback from "../Feedback/feedback.module.css";
import Comment from "../Comment/Comment";
import Answer from "../Answer/Answer";
import ReactStars from "react-rating-stars-component";

const Feedback = (props) => {

    return (
        <div className={feedback.container}>
            <ReactStars
                classNames={feedback.stars}
                count={5}
                value={props.userRating}
                size={75}
                edit={true}
                isHalf={true}
                activeColor="#FFBB1F"
                onChange={(newValue)=>props.changeRating(newValue)}
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