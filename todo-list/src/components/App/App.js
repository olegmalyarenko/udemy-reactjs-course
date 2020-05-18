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

    toggleProperty(arr, id, propName ) {
                   
            const index = arr.findIndex((el) => el.id === id );
            const oldItem = arr[index];
            const newItem = {...oldItem, [propName]: !oldItem[propName]};
            return [ ...arr.slice(0, index), 
                newItem,
                ...arr.slice(index + 1)];
                

    }
    
    onToggleImportant = (id) => {
        this.setState(({ todos }) => { 
            return {
                todos: this.toggleProperty(todos, id, 'important')
            }

        })
        
    }
    
    onToggleDone = (id) => {
       this.setState(({ todos }) => { 
        return {
            todos: this.toggleProperty(todos, id, 'done')
        }
        })
    }
    
    render() {
        const { todos } = this.state;
        const doneCounter = todos
        .filter((el) => el.done).length;
         
        const todoCounter =  todos
        .filter((el) => el.done === false).length;
    return (
        <div className='todo-app'>
         <AppHeader toDo={todoCounter} done={doneCounter} />

         <div className="top-panel d-flex">
         <SearchPannel />
         <ItemFilter/>
         </div>

         <TodoList 
         todos= {todos}
         onDeleted= {this.deliteItem}
         onToggleImportant= {this.onToggleImportant}
         onToggleDone = {this.onToggleDone}
         />

         <AddButton  addItem = {this.addItem} />
     

        </div>
    )
    } 
}

