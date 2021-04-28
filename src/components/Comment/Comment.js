import React, {useState} from 'react';
import comment from "./comment.module.css";
import TextareaAutosize from 'react-autosize-textarea';

const Comment = (props) => {
    const initComment = 'Feedback';
    const[userComment, setComment] = useState('');

    const handleOut = (e) => {
        setComment(e.target.value);
        return userComment;
    };

    return (
        <TextareaAutosize
            title='max-length 200 char'
            placeholder={initComment}
            maxLength={200}
            rows={1}
            value={userComment}
            className={comment.item}
            onChange={(e) => props.onClick(handleOut(e))}
        />
    );
};

export default Comment;