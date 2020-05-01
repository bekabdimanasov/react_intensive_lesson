import React, {useEffect, useState} from 'react';

export default function (props) {
    let [cnt, setCnt] = useState(null);

    useEffect(() => console.log(`HomeWork Third ${cnt}`))

    let increase = () => {
        cnt != props.max ? setCnt(cnt + 1) : setCnt(props.max);
    };

    let decrease = () => {
        cnt != props.min ? setCnt(cnt - 1) : setCnt(props.min);
    };

    let onChangeValue = (event) => {
        let e = event.target.value;
        if (typeof (e)  != "number") {
            setCnt(null);
        } else {
            setCnt(e);
        }
    };

    return (
        <div>
            <button onClick={decrease}>-</button>
            <input type="text" value={cnt} onChange={ event =>  onChangeValue(event) }/>
            <button onClick={increase}>+</button>
        </div>
    );
}