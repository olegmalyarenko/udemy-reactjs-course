import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
    const items = ['Learn React 1', 'Find Job 2']
    return (
        <ul>
        <li>{items[0]}</li>
        <li>{items[1]}</li>
    </ul>  
    )
}

const AppHeader = () => {

    return (
      <h1>My Todo List</h1>
    )
}

const SearchPannel = () => {
    return (
        <input placeholder="search" />   
    )
}



const App = () => { 
    return (
        <div>
         <AppHeader />
         <SearchPannel />
         <TodoList />
     

        </div>
)
}

ReactDOM.render( <App />, document.getElementById('root'));