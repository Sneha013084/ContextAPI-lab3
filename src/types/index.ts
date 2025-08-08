

// interface for - shape of single todo item(one row in the list)
export interface  Todo {
   id: number;
   text: string;
   completed: boolean;
}

// shape of entire context object - provide through context

export interface TodoContextType {

    todos : Todo[];
    addTodo : (text:string) => void;
    toggleTodo: (id:string | number) => void;
    deleteTodo: (id: string | number) => void;
    editTodo: (id: string | number, newText:string) => void;
    clearCompleted:() =>void;
}
