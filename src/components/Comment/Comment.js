import React, {useState, useEffect} from 'react';
import comment from "./comment.module.css";
import TextareaAutosize from 'react-autosize-textarea';

const Comment = ({userComment, setUserComment}) => {
    const placeholder = 'Feedback';
    const title = 'max-length 200 char';
    const [mess, setMess] = useState('');

    useEffect(() => {
        if (userComment&&userComment.length >= 1 && userComment.length < 4) {
            setMess(`min 3 / max 200 characters`);
        } else if (userComment&&userComment.length === 200) {
            setMess('maximum number of characters');
        } else if (userComment&&!userComment.length) {
            setMess('');
        } else if (userComment&&userComment.length >= 4 && userComment.length < 200){
            setMess(`${userComment.length} / 200`);
        }
    });

    return (
        <div className={comment.box}>
            <TextareaAutosize
                title={title}
                placeholder={placeholder}
                maxLength={200}
                rows={1}
                value={userComment}
                className={comment.text + ' ' + (userComment&&userComment.length < 4 ? comment.text__warning : '')}
                onChange={setUserComment}
            />
            <p className={comment.mess} data-testid="mess">{mess}</p>
        </div>
    );
};

export default Comment;