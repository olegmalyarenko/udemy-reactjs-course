import React from 'react';
import AppHeader from './components/AppHeader';
import SearchPannel from './components/SearchPannel';
import TodoList from './components/TodoList';


const App = () => { 
    return (
        <div>
         <AppHeader />
         <SearchPannel />
         <TodoList />
     

        </div>
)
}

export default App;