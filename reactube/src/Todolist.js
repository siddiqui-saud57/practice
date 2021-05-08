import React from 'react'
import "./Todolist.css";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Item from "./Item";

const Todolist = () => {
    const [state, setstate] = React.useState("");
    const [Items,setItems] = React.useState([]);
    const Inputhandler = (e) => {
     setstate(e.target.value);
    }

    const Submithandler =() => {
        setItems((olditems) => {
            return [...olditems,state]
        })
        setstate("");
    }

    const deleteItems = (id) =>{
        console.log("deletedItems");
        setItems((oldItems) => {
            return oldItems.filter((arrElem,index) => {
                return index !== id;
            })
        })
    }
  
    return (
        <div className="main_div">
        <div className="center">
            <h1>TODO LIST</h1>
            <div className="input">
            <input type="text" placeholder="" onChange={Inputhandler} value={state} />
            <AddIcon onClick={Submithandler} className="plus"/>
            </div>
            <ol>
          {Items.map((item,index) => {
             return <Item key={index} id={index} item={item} onSelect={deleteItems}/>
          })}
            </ol>
        </div>            
        </div>
    )
}

export default Todolist
