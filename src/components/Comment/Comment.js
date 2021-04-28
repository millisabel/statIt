import React, {useState} from 'react';
import comment from "./comment.module.css";

const Comment = (props) => {
    const initComment = 'Feedback';
    const[userComment, setComment] = useState('');
    const[rowsLength, setRowsLength] = useState(1);
    const cols = 28;
    const max = 200;

    const handleOut = (e) => {
        setComment(e.target.value);
        return userComment;
    };

    const handleKeyDown = (e) => {
        if(e.keyCode === 46){
            setRowsLength(1);
            setComment('');
        }
        if (e.target.value.length % cols === 0 && e.target.value.length < max && e.target.value.length >= cols) {
            if(e.keyCode === 8){
                setRowsLength(rowsLength - 1);
            } else{
                setRowsLength(rowsLength + 1);
            }
        }
        return e.target.innerText;
    };

    return (
        <textarea
            title='max-length 200 char'
            placeholder={initComment}
            maxLength={max}
            cols={cols}
            rows={rowsLength}
            value={userComment}
            className={comment.item}
            onChange={(e) => props.onClick(handleOut(e))}
            onKeyDown = {(e) => props.onClick(handleKeyDown(e))}
        />
    );
};

export default Comment;