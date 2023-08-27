import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import InputNote from "./inputNote";

export default function App() {
  
  const [list, setList] = useState([]);
  
  function handleAdd(inputNote){
    setList((prevList)=>{
      return([
        ...prevList,
        inputNote
      ])
    })
  }

  return (
    <div>
      <Header />
      {list.map((note, index)=>{
        return(<Note
          key={index}
          heading={note.title}
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
