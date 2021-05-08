import React from 'react';
import "./Note.css";
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutline';

const Note = (props) => {
    return (
        <div className="note">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <DeleteOutlinedIcon className="deleteicon" />
        </div>
    )
}

export default Note
