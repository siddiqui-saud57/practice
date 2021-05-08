import React from 'react';
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import "./Createnote.css";
const Createnote = (props) => {
    const [note,setNote] = React.useState({
        title:"",
        content:"",
    })
    const InputEvent = (event) => {
    //   const value = event.target.value;
    //   const name = event.target.name;

      const {name,value} = event.target;
        setNote((prevdata) => {
            return {
                ...prevdata,
              [name] : value,
            }
        });
        console.log(note);
    };
    const addEvent = () => {
        props.passNote(note);
    }
    return (
        <div className="main_note">
            <input value={note.title} name="title" type="text" onChange={InputEvent} placeholder="Title" autocomplete="off"/>
            <textarea rows="" value={note.content} name="content" column="" onChange={InputEvent} placeholder="write a note.."></textarea>
            <Button onClick={addEvent}>
                <AddIcon className="plus_sign" />
            </Button>
        </div>
    )


}

export default Createnote
