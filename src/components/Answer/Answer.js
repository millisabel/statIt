import React from 'react';
import answer from "./answer.module.css";

const Answer = ({userComment, minComment, isAnswer, answerValue}) => {

    const isComment = () => {
        return !(userComment && userComment.length > minComment);

    };

    return (
        <div className={(answerValue ? answer.item_checked : null) + ' ' + answer.item} >
            <input className={answer.item__input}
                   id="answer"
                   type="checkbox"
                   onClick={isAnswer}
                   disabled={isComment()}
            />
            <label className={answer.item__label}
                   htmlFor="answer">i want to get answer</label>
        </div>
    );
};
export default Answer;