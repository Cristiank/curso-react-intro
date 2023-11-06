import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    // const [todos, setTodos] = React.useState(defaultTodos);
    // const [todos, setTodos] = React.useState(parsedTodos);
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState(''); // colocamos los nombres de acuerdo a lo que necesitamos
    const [openModal, setOpenModal] = React.useState(false);


    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;

    const searchedTodos = todos.filter( (todo) => {
                            return todo.text.toLowerCase().includes(searchValue.toLowerCase());
                        })

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          text,
          completed:false,
        })
        saveTodos(newTodos);
    };

    const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
                                (todo) => todo.text === text
                            );
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    }

    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
                            (todo) => todo.text === text
                        );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }
    
    return (
      <TodoContext.Provider value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        addTodo,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
      }}>
        { children }
      </TodoContext.Provider>  
    );
}

{/* 
<TodoContext.Provider></TodoContext.Provider>
<TodoContext.Consumer></TodoContext.Consumer>
*/}

export { TodoContext, TodoProvider }