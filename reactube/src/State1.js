import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import "./State1.css";

const State1 = () => {
    const [name,Setname] = useState(0);
    return (
        <div className="states">
        <div className="state1">
            <h1 className="number">{name}</h1>
        <Button className="btn" onClick={() => { Setname(name + 1)}}>Click Me</Button>
        </div>
        </div>
    )
}

export default State1
