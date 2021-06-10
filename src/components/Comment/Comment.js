import React, {useState} from 'react';
import comment from "./comment.module.css";
import TextareaAutosize from 'react-autosize-textarea';

const Comment = (props) => {
    const initComment = 'Feedback';
    const[userComment, setComment] = useState(props.comment);
    const[mess, setMess] = useState('');

    const handleOut = (e) => {
        setComment(e.target.value);
        if(e.target.value.length === 200){
            setMess('maximum number of characters');
        }
        else if(!e.target.value.length){
            setMess('');
        }
        else{
            setMess('min 3 - max 200 characters');
        }
        return e.target.value;
    };

    return (
        <div className={comment.box}>
            <TextareaAutosize
                title='max-length 200 char'
                placeholder={initComment}
                maxLength={200}
                rows={1}
                value={userComment}
                className={comment.text}
                onChange={(e) => props.onClick(handleOut(e))}
            />
            <p className={comment.mess}>{mess}</p>
        </div>
    );
};

export default Comment;