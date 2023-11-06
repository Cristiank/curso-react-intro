import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch() {
    // const [patito, setPatito] = React.useState(); // Es válido
    // const [state, setState] = React.useState(); // Es válido

    // Comento lo sgte xq el estado será manejado desde App.js
    // const [searchValue, setSearchValue] = React.useState(''); // colocamos los nombres de acuerdo a lo que necesitamos
    // console.log(`los usuarios buscan todos de ${searchValue}`)

    const {
        searchValue,
        setSearchValue,
    } = React.useContext(TodoContext);
    return (
        <input placeholder="Cortar cebolla"
                className="TodoSearch"
                value={searchValue}
                onChange={ (event) => {
                    // console.log(`escribiste en el TodoSearch`);
                    setSearchValue(event.target.value);
                    //console.log(event.target.value);
                }
                } />
    );
}

export { TodoSearch };