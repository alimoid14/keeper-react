import React, {useState} from "react";

export default function InputNote(props){
    
    const [note, setNote] = useState({
        title:"",
        content:""
    })

    function handleChange(e){
        const {name, content} = e.target;
        
        setNote((prevNote)=>{
            return({
                ...prevNote,
                [name]: content
            })
        })
    }

    return(<div>
        <input name="title" type="text" onChange={handleChange} placeholder="Title" value={note.title}></input>
        <input name="content" type="text" onChange={handleChange} placeholder="Take a note..." value={note.content}></input>
        <span><button onClick={props.add}>Add</button></span>
    </div>);
}