import React,{ Component} from 'react';
import AppHeader from '../AppHeader';
import SearchPannel from '../SearchPannel';
import TodoList from '../TodoList';
import ItemFilter from '../ItemFilter';
import './App.css';


export default class App extends Component { 

    state = {
        todos : [ { label: 'One', important: false, id : 1},
        {label:'Two', important: true, id : 2 }, 
        {label:'Three', important: true, id : 3} ]

    }

    deliteItem = (id) => {
         this.setState(({ todos }) => {
         const index = todos.findIndex((el) => el.id === id );
         
         const newArr = [ ...todos.slice(0, index), 
            ...todos.slice(index + 1)]
         return {
             todos: newArr
         }

     })
    };

    
    
    render() {
    return (
        <div className='todo-app'>
         <AppHeader toDo={1} done={3} />

         <div className="top-panel d-flex">
         <SearchPannel />
         <ItemFilter/>
         </div>

         <TodoList 
         todos= {this.state.todos}
         onDeleted= {this.deliteItem}/>
     

        </div>
    )
    } 
}

