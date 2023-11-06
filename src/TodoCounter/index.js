import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';
/*
// const estilos = {
//     fontSize: '24px',
//     textAlign: 'right',
//     margin: 0,
//     padding: '48px',
// }

// function TodoCounter({ total, completed }) {
//     return (
//         <h1 style={estilos}>
//             Has completado {completed} de {total} ToDos
//         </h1>
//     );
// }

// function TodoCounter({ total, completed }) {
//     return (
//         <h1 style={{
//             fontSize: '24px',
//             textAlign: 'center',
//             margin: 0,
//             padding: '48px',
//         }}>
//             Has completado {completed} de {total} ToDos
//         </h1>
//     );
// }
*/
function TodoCounter() {
    const {
        completedTodos,
        totalTodos,
    } = React.useContext(TodoContext);
    return (
        <h1 className='TodoCounter'>
            Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> ToDos
        </h1>
    );
}

export { TodoCounter };