import React, {useState} from 'react';
import comment from "./comment.module.css";
import TextareaAutosize from 'react-autosize-textarea';

const Comment = (props) => {
    const initComment = 'Feedback';
    const[userComment, setComment] = useState(props.comment);
    const[mess, setMess] = useState('');

    const handleOut = (e) => {
        setComment(e.target.value);
        if(e.target.value.length >=1 && e.target.value.length < 4){
            setMess(`minimum length 3 characters`);
            e.target.style.color='red';
        }
        else if(e.target.value.length === 200){
            e.target.style.color='inherit';
            setMess('maximum number of characters');
        }
        else if(!e.target.value.length){
            setMess('');
        }
        else{
            e.target.style.color='inherit';
            setMess(`${e.target.value.length} / 200`);
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