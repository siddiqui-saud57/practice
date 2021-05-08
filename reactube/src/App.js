import React from "react";
import './App.css';
import Todolist from "./Todolist";
import Header from "./Header";
import Footer from "./Footer";
import Createnote from "./Createnote";
import Note from "./Note";

const App = () => {
  const [addItem,setAddItem] = React.useState([]);

  const addNote = (note) =>{
    // alert("I am Clicked");
    setAddItem((prevData) => {
      return [...prevData,note]
    });
    console.log(note);
  }

  return (
    <div className="App">
   {/* <Todolist /> */}
   <Header />
   <Createnote passNote={addNote}/>
   {addItem.map((val,index) => {
     return <Note 
     key={index}
     id={index}
     title={val.title}
     content={val.content} />
   })}
   <Footer />
    </div>
  );
}

export default App;
