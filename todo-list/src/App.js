import React from 'react';
import AppHeader from './components/AppHeader';
import SearchPannel from './components/SearchPannel';
import TodoList from './components/TodoList';
import ItemFilter from './components/ItemFilter';
import './App.css';


const App = () => { 
    const todos = [ { label: 'One', important: false, id : 1},
    {label:'Two', important: true, id : 2 }, 
    {label:'Three', important: true, id : 3} ];

    return (
        <div className='todo-app'>
         <AppHeader toDo={1} done={3} />

         <div className="top-panel d-flex">
         <SearchPannel />
         <ItemFilter/>
         </div>

         <TodoList todos= {todos}/>
     

        </div>
    )
}

export default App;