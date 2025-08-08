import { useContext } from "react";

import { TodoContext } from "../contexts/TodoContext";
import { FilterContext } from "../contexts/FilterContext";
import FilterButtons from "./FilterButtons";
import TodoItem from "./TodoItem";

// to show all the Todos

export default function TodoList() {
  //get todo from the context

  const todoContext = useContext(TodoContext);
  const filterContext = useContext(FilterContext);

  if (!todoContext)
    throw new Error("TodoList must be used with in the TodoProvider");
  if (!filterContext)
    throw new Error("TodoList must be used with in the TodoProvider");

  const { todos } = todoContext;
  const { filter } = filterContext;
  // if no any todo, show no todos

  if (todos.length === 0) return <p> No todos</p>;

  //For filter
  // to keep todo - active or not completed
  const FilteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;

    // it shows completed todo
    if (filter === "completed") return todo.completed;

    // to keep all
    return true;
  });

  //return JSX with an ul - map function willloop through the array and renders each todo.

  return (
    <>
      <FilterButtons />
      <ul>
        {FilteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
}

// to show todos according to the current filter: consume filter from filter context
