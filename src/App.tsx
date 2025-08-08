import { useContext } from 'react'
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { ThemeContext} from "./contexts/ThemeContext";
import { ThemeToggleButton } from "./components/ThemeToggleButton";
import "./App.css";

function App() {

  const  themeContext  = useContext(ThemeContext)

    if (!themeContext) {
    throw new Error("App must be used within ThemeProvider");
  }
       const { theme } = themeContext;
  return (
    <div className={theme ==="dark" ? "dark-theme" : "light-theme"}>
      <h1> Todo App </h1>
      <ThemeToggleButton />
      <TodoInput />
      <TodoList />
    </div>
  );
} 

export default App;
