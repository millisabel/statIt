import React from 'react';
import answer from "./answer.module.css";

const Answer = ({isAnswer, answerValue}) => {
    return (
        <div className={(answerValue ? answer.item_checked : null) + ' ' + answer.item}>
            <input className={answer.item__input}
                   id="answer"
                   type="checkbox"
                   onClick={isAnswer}/>
            <label className={answer.item__label}
                   htmlFor="answer">i want to get answer</label>
        </div>
    );
};
export default Answer;