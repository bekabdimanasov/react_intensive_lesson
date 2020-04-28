import React from 'react';
import CounterClass from './counters/class.js';

export default function (props) {
    console.log(props);
    return(
        <div>
            <h2>Counter as class</h2>
            <CounterClass/>
        </div>
    );
}