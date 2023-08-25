import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "../Notes";

function createNote(note){
  return(<Note 
    key={note.id}
    heading={note.heading}
    content={note.content}
  />);
}

export default function App() {
  return (
    <div>
      <Header />
      {Notes.map(createNote)}
      <Footer />
    </div>
  );
}
