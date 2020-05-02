import React, {useState} from 'react';
import HM1 from './hm/1-sample.js';
import HM2 from './hm/2-input.js';
import HM3 from './hm/3-lazy.js';
import HM4 from './hm/4-derived'

export default function (props) {
    let [someMin, setSomeMin] = useState(20)
    setTimeout(() => {
        setSomeMin(40);
    }, 2000)
    return(
        <div>
            <h2>Home Work First</h2>
            <HM1 min={0} max={10}/>
            <h2>Home Work Second</h2>
            <HM2 min={-20} max={50}/>
            <h2>Home Work Third</h2>
            <HM3 min={-20} max={50}/>
            <h2>Derrived input</h2>
            <HM4 min={someMin} max={50} key={someMin + ':' + 50}/>
        </div>
    );
}