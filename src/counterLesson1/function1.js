import React, {useEffect, useState} from 'react';

export default function (props) {
    let [cnt, setCnt] = useState(props.min);

    useEffect(() => console.log(`HomeWork One ${cnt}`))

    let increase = () => {
        cnt == props.max ? setCnt(props.max) : setCnt(cnt + 1);
    };

    let decrease = () => {
        cnt == props.min ? setCnt(props.min) : setCnt(cnt - 1);
    };

    return (
        <div>
            <button onClick={decrease}>-</button>
            <strong>{cnt}</strong>
            <button onClick={increase}>+</button>
        </div>
    );
}