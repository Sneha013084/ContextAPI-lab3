
// shows single todo with interactive controls for toggling and delete function

import { useContext } from "react";

import type {Todo} from "../types";
import  {TodoContext} from "../contexts/TodoContext"

//passed single todo props from todolist

interface TodoItemProps{

    todo : Todo;
}
export default function TodoItem ({todo} : TodoItemProps){
// access the context
const todoContext = useContext(TodoContext);

if(!todoContext) throw new Error ("item should be there in the TodoProvider")

  // actions possible

  const{ toggleTodo, deleteTodo} = todoContext;

  //return jsx with output of todoItem with interactive controls, input for a checkbox, show text and a button

  return(

    <li>
        <input type="checkbox" checked ={todo.completed} onChange={() =>toggleTodo(todo.id)}/>

        <span> {todo.text} </span>

        <button onClick={() => deleteTodo(todo.id)}> Delete </button>


    </li>
  );
}