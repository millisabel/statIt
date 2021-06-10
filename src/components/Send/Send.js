import React from 'react';
import {Link} from "react-router-dom";

import send from "./send.module.css";

const Send = (props) => {

    function sendRequest(url, body){
        return fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify(body),
        }).then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.json();
        })
    }

    function handleSubmit() {

        const requestURL = 'https://jsonplaceholder.typicode.com/users';

        const data = {
            businessId: props.businessId,
            pointerId: props.pointerId,
            data: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
            rating: props.rating,
            comment: props.comment,
            answer: props.answer,
            img: getImg(props.img),
        };
        sendRequest(requestURL, data)
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }

    const getImg = (arr) => {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            newArr.push(arr[i].data_url);
        }
        return newArr;
    };

    return (
        <Link
            to={{
                pathname: "/info/thanks",
                state: {
                    rating: props.rating,
                    logo: props.logo,
                    name: props.name
                },
            }}
            className={send.item}
            name="send"
            onClick={handleSubmit}
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