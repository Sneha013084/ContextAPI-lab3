import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TodoProvider } from './contexts/TodoContext.tsx'
import { FilterProvider } from './contexts/FilterContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FilterProvider>
    <TodoProvider>

         <App /> 

    </TodoProvider>
    </FilterProvider>
 
  </StrictMode>,
)
