import React, {useEffect, useState} from 'react';
import clock from "./clock.module.css";

const Time = () => {
    let [time, setTime] = useState(new Date().toLocaleTimeString());
    let [date, setDate] = useState(new Date().toLocaleDateString());

    useEffect(() => {
        let timerID = setInterval(
            () => tick(),
            1000
        );
        return () => {
            clearInterval(timerID);
        }
    });

    const tick = () => {
        setTime(new Date().toLocaleTimeString());
        if(time === '00:00:00'){
            setDate(new Date().toLocaleDateString());
        }
    };
    return (
        <div className={clock.item}>
            <time>
                <span>{time}</span>
                <span>{date}</span>
            </time>
        </div>
    );
};

export default Time;