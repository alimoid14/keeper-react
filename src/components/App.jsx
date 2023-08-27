import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import InputNote from "./InputNote";

export default function App() {
  
  const [list, setList] = useState([]);
  
  function handleAdd(note){
    setList((prevList)=>{
      return([
        ...prevList,
        note
      ])
    })
  }

  return (
    <div>
      <Header />
      
      <InputNote
         
        add={handleAdd}
      /> 
      
      <div>
      {list.map((note, index)=>{
        return(<Note
          key={index}
          heading={note.title}
          content={note.content}
        />)
      })}
      </div>
      
      <Footer />
      
    </div>
  );
}
