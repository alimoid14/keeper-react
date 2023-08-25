import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "../Notes";

export default function App() {
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
      <Footer />
    </div>
  );
}
