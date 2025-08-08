
import React, {createContext, useState} from "react";
import type {Todo, TodoContextType} from "../types";


// create a context undefined initially 

export const TodoContext = createContext <TodoContextType |undefined> (undefined);

//
export const TodoProvider: React.FC<{children:React.ReactNode}> =({children}) =>{

    const [todos, setTodos ] =useState<Todo[]> ([]);  //initialize the todo empty or from localstorage as needed

// function to update the todo function 

    const addTodo = (text: string) =>{
        const newTodo: Todo={
            id: Date.now(),
            text,
            completed: false,
        };
        setTodos (prev=> [...prev,newTodo]); 
    };


    // function for toggleTodo: to change the completion status of todo(when the user click button , will call the toggloeTodo)

    const toggleTodo = (id:string |number)=>{
         setTodos (prev => prev.map(todo =>todo.id ===id ? {...todo, completed : !todo.completed}: todo));
    };
     
    // function for deleteTodo = removes the todo matcxhes with trhe id

    const deleteTodo =(id: string|number) =>{
        setTodos (prev => prev.filter(todo =>todo.id !== id))
    };

    //function to edit the todos = updates the text by id

    const editTodo = (id: string|number , newText : string) =>{
        setTodos (prev => prev.map(todo => todo.id ==id ?{ ...todo, text :newText} :todo));
    };

    // to remove all the todo items - marked as completed(filter will keep an array of items that are not completed)

    const clearCompleted =() =>{
        setTodos( prev => prev.filter(todo => !todo.completed))
    };
   

    // setting up of all the children componets inside the provider// and passing all the values

    return (
        <TodoContext.Provider  value = {{
          todos,
          addTodo,
          toggleTodo,
          deleteTodo,
          editTodo,
          clearCompleted,
     }}>  {children}   </TodoContext.Provider>
    );

}


