import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import InputNote from "./inputNote";

export default function App() {
  
  const [list, setList] = useState([]);
  
  function handleAdd(e){
    setList((prevList)=>{
      return([
        ...prevList,

      ])
    })
  }

  return (
    <div>
      <Header />
      {Notes.map((note)=>{
        return(<Note
          key={note.id}
          heading={note.heading}
          content={note.content}
        />)
      })}
      <div>
      <InputNote
         
        add={handleAdd}
      />
      
      </div>
      <Footer />
    </div>
  );
}
