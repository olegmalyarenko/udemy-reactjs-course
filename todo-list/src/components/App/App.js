import React,{ Component} from 'react';
import AppHeader from '../AppHeader';
import SearchPannel from '../SearchPannel';
import TodoList from '../TodoList';
import ItemFilter from '../ItemFilter';
import AddButton from '../AddButton';
import './App.css';


export default class App extends Component { 

    maxId = 100;

    state = {
        
        todos : [ this.createTodoItem('Drink Coffe'),
        this.createTodoItem('Two'),
        this.createTodoItem('Three') ]

    }

    createTodoItem(label){
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++

        }
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

    addItem = (text) => {
        
        const newTask = this.createTodoItem(text);

        this.setState(({ todos }) => { 
            const newArr = [ ...todos, newTask]

            return {
                todos: newArr
            }

        })
    }
    
    onToggleImportant = (id) => {
        this.setState(({ todos }) => { 
            const index = todos.findIndex((el) => el.id === id );
            const oldItem = todos[index];
            const newItem = {...oldItem, important: !oldItem.important}
            const newArr = [ ...todos.slice(0, index), 
                newItem,
                ...todos.slice(index + 1)]
             return {
                 todos: newArr
             }
            })
    }
    
    onToggleDone = (id) => {
       this.setState(({ todos }) => { 
        const index = todos.findIndex((el) => el.id === id );
        const oldItem = todos[index];
        const newItem = {...oldItem, done: !oldItem.done}
        const newArr = [ ...todos.slice(0, index), 
            newItem,
            ...todos.slice(index + 1)]
         return {
             todos: newArr
         }
        })
    }
    
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
         onDeleted= {this.deliteItem}
         onToggleImportant= {this.onToggleImportant}
         onToggleDone = {this.onToggleDone}
         />

         <AddButton  addItem = {this.addItem} />
     

        </div>
    )
    } 
}

