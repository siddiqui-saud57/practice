import React from 'react';
import Button from '@material-ui/core/Button';
import "./Formstate.css";

const Formstate = () => {
    const [state, setState] = React.useState("")
    const [name,setName] = React.useState("")
    const Changename = (e) => {
      setState(e.target.value);
    }

    const onSubmit = () => {
  setName(state);
    }

    return (
       
        <div className="form">
            <div className="name">
            <h1>HELLO  {name}</h1>
            </div>
            <div className="ipnuts">
            <input type='text' placeholder=""  value = {state} onChange={Changename} />
            </div>
            <div className="btn">
            <Button onClick={onSubmit}>Click</Button>
            </div>
        </div>
    )
}

export default Formstate
