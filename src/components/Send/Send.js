import React from 'react';
import {Link} from "react-router-dom";

import send from "./send.module.css";
import moment from 'moment';

const  requestURL = 'https://starit-api.herokuapp.com/api/feedback';

const Send = (props) => {
    let data = new FormData();

    function handleSubmit() {
        data.append('fbo_id', props.pointerId);
        data.append('date', moment().format('YYYY-MM-DD H:mm:ss'));
        data.append('stars', props.rating);
        data.append('comment', props.comment);
        data.append('reaction_needed', props.answer);

        sendRequest(requestURL, data)
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }

    function sendRequest(url, data){
        return fetch(url, {
            method: 'POST',
            body: data,
        }).then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.json();
        })
    }

    // const getImg = (arr) => {
    //     let newArr = [];
    //     for (let i = 0; i < arr.length; i++) {
    //         newArr.push(arr[i].data_url);
    //     }
    //     return newArr;
    // };

    return (
        <Link
            to={{
                pathname: "/api/thanks",
                state: {
                    rating: props.rating,
                    logo: props.logo,
                    name: props.name,
                },
            }}
            className={send.item}
            name="send"
            onClick={handleSubmit}
            disabled={props.disabled}
        >
            Send
            <svg xmlns="http://www.w3.org/2000/svg"
                 xmlnsXlink="http://www.w3.org/1999/xlink"
                 version="1.1"
                 x="0px"
                 y="0px"
                 width="535.5px"
                 height="535.5px"
                 viewBox="0 0 535.5 535.5"
                 className={send.img}
            >
                <g>
                    <g id="send">
                        <polygon points="0,497.25 535.5,267.75 0,38.25 0,216.75 382.5,267.75 0,318.75"/>
                    </g>
                    <g/>
                    <g/>
                    <g/>
                    <g/>
                    <g/>
                    <g/>
                    <g/>
                    <g/>
                    <g/>
                    <g/>
                    <g/>
                    <g/>
                    <g/>
                    <g/>
                    <g/>
                </g>
            </svg>
        </Link>
    );
};

export default Send;

