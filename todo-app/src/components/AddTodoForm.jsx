import { useState } from "react";

import "./AddTodoForm.css"

function AddTododForm({addTodo, loading}){
    const [text, setText] = useState("")

    const sumbitHandler = (e) =>{
        e.preventDefault()
        if(!text.trim()){
            return
        }
        addTodo(text.trim())
        setText("")
    }

    return(
        <>
        
        <form onSubmit={sumbitHandler} className="InputForm">
            <input type="text"
            placeholder="Add new task..............." 
            value={text}
            disabled = {loading}
            onChange={(e)=> setText(e.target.value)}
            />

            <button disabled={loading || !text.trim()}>Add</button>
            
        </form>
        
        
        </>
    );
}

export default AddTododForm