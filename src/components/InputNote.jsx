import React, {useState} from "react";

function InputNote(props){
    const [note, setNote] = useState({
        title:"",
        content:""
    });

    function handleChange(e){
        const {name, value} = e.target;
        
        setNote((prevNote)=>{
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function onAdd(e){
        props.add(note);
        setNote({
            title: "",
            content: ""
        });
        e.preventDefault();
    }

    return(
        <div>
            <form>
                <input 
                name="title" 
                onChange={handleChange} 
                placeholder="Title" 
                value={note.title}     
                />
                <textarea
                name="content" 
                rows="3" 
                onChange={handleChange} 
                placeholder="Take a note..." 
                value={note.content}
                />
                <button onClick={onAdd}>Add</button>
            </form>
        </div>
    );
}

export default InputNote;   