import React from "react";
import { useState } from "react";

function Clock({ name }) {

    let ptime = new Date().toLocaleTimeString();
    const [time, setTime] = useState(ptime);

    const updateTime = () => {
        ptime = new Date().toLocaleTimeString();
        setTime(ptime);
    };

    setInterval(updateTime, 1000);
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Welcome to home page </h2>
            <h1>{time} </h1>
        </div>
    );
}

export default Clock;