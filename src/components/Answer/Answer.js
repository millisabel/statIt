import React, {useState} from 'react';
import answer from "./answer.module.css";

const Answer = (props) => {
    const [isCheck, setClass] = useState('');

    const handleInput = (e) => {
        if(e.target.checked){
            setClass(`${answer.item_checked}`);
            return true;
        }
        setClass('');
        return false;
    };

    return (
        <div className={`${answer.item} ${isCheck}`}>
            <input className={answer.item__input} id="answer" type="checkbox" onClick={(e) => {props.isAnswer(handleInput(e))}}/>
            <label className={answer.item__label} htmlFor="answer">i want to get answer</label>
        </div>
    );
};

export default Answer;