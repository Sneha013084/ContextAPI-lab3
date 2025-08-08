
// creating my first component - TodoInput for adding new todotasks

import {useState , useContext} from "react";
import {TodoContext} from "../contexts/TodoContext" ;

export default function TodoInput (){
    const [text, setText] = useState("");   // variable to store the input values

    const todoContext = useContext(TodoContext)  // variable to access the TodoProvider

    if(!todoContext) throw new Error ("TodoInput should be used with in the Todoprovider")

    // variable to extract addTodo function(Take the property named addTodo from the todoContext object and store it in a variable also named addTodo.)
    const {addTodo} = todoContext;

    const handleSubmit = (e:React.FormEvent) =>{
        e.preventDefault();   // prevent the browser to stops the reloading

        if(text.trim() ==="")
            return;

        //cleaned text added to todo list
        addTodo(text.trim());
        
        // reset the text box by clearing the text state

        setText ("");

    };

// return a JSX block - form and input together

return(
    <form onSubmit={handleSubmit}>
        <input  type="text" placeholder="Add a todo" value={text} onChange={(e) => setText(e.target.value)}/>

        <button type="submit">Add</button>

    </form>

);
}