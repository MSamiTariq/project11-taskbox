import React, {useState} from 'react';
import './button.css';

export default (props) => {
    const size = props.size;

    const [counter, setCounter] = useState(0);
    return(
        <div>
            {counter}
            <button  className = {["radius", size].join(" ")}
            onClick = {() => {
                props.onClick();
                setCounter(counter + 1);
            }}
            >{props.title}</button>
        </div>
    )
}