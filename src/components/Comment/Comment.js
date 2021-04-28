import React, {useState} from 'react';
import comment from "./comment.module.css";

const Comment = (props) => {
    const initComment = 'Feedback';
    const[userComment, setComment] = useState(initComment);

    const handleOut = (e) => {
        setComment(e.target.innerText);
        return userComment;
    };

    const handleClick = (e) => {
        if(e.target.innerText === initComment){
            setComment('');
        }
    };

    const handleBlur = (e) => {
        if(e.target.innerText === ''){
            setComment(initComment);
        }
        return e.target.innerText;
    };

    const handleKeyPress = (e) => {
        if(e.target.innerText.length > 10){
            e.preventDefault();
        }
    };


    return (
        <div
            className={`${comment.item} ${userComment === initComment? comment.item_center : null}`}
            contentEditable={true}
            onClick = {handleClick}
            onBlur={(e) => props.onClick(handleBlur(e))}
            onChange={(e) => props.onClick(handleOut(e))}
            onKeyPress={(e) => props.onClick(handleKeyPress(e))}
            suppressContentEditableWarning={true}
        >{userComment}</div>
    );
};

export default Comment;