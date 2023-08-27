import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import InputNote from "./InputNote";

function App() {
  const [list, setList] = useState([]);
  
  function handleAdd(noteItem){
    setList(prevList => {
      return [...prevList, noteItem];
    });
  }

  function deleteNote(id){
    setList(prevList => {
      prevList.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />
      <InputNote add={handleAdd} /> 
      {list.map((noteItem, index)=>{
        return(
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;