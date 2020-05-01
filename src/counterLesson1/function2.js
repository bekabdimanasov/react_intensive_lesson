import React, {useEffect, useState} from 'react';

export default function (props) {
    let [cnt, setCnt] = useState(props.min);

    useEffect(() => console.log(`HomeWork Second ${cnt}`));

    let increase = () => {
        cnt == props.max ? setCnt(props.max) : setCnt(cnt + 1);
    };

    let decrease = () => {
        cnt == props.min ? setCnt(props.min) : setCnt(cnt - 1);
    };

    let onChangeValue = (e) => {
        let value = e.target.value;
        setCnt(value);
    };

    return (
        <div>
            <button onClick={decrease}>-</button>
            <input type="text" defaultValue={cnt} onChange={ (e)=> onChangeValue(e) }/>
            <button onClick={increase}>+</button>
        </div>
    );
}