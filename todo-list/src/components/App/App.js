import React,{ Component} from 'react';
import AppHeader from '../AppHeader';
import SearchPannel from '../SearchPannel';
import TodoList from '../TodoList';
import ItemFilter from '../ItemFilter';
import AddButton from '../AddButton';
import './App.css';
import MainHeader from '../MainHeader';
import Footer from '../Footer';

export default class App extends Component { 

    maxId = 100;

    state = {
        
        todos : [ this.createTodoItem('Drink Coffe'),
        this.createTodoItem('Two'),
        this.createTodoItem('Three') ],
        term :'',
        filter :''

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

    onSearchChange = (term) => {
        this.setState({ term });

    };
    
    onFilterChange = (filter) => {
        this.setState({ filter });

    };
    searchItem = (todos, term) => {

        
       if(term.length === 0) {
           return todos;
       } 

         return todos.filter((el) => {
            return el.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        } );
    };

    filterItem = (todos, filter) => {

        switch(filter) {
            case 'all' : return todos;

            
            case 'done': return todos.filter((el) =>  el.done);

            case 'active': return todos.filter((el) =>  !el.done);

            default : return todos;
        }

        
       
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
        const { todos, term, filter } = this.state;
        const doneCounter = todos.filter((el) => el.done).length;
        const todoCounter =  todos.filter((el) => el.done === false).length;
        const visible = this.searchItem(this.filterItem(todos, filter), term);
        
    return (
        <>
         <MainHeader/>
        <div className='todo-app'>
       
         <AppHeader toDo={todoCounter} done={doneCounter} />

         <div className="top-panel d-flex">
         <SearchPannel 
         onSearchChange={this.onSearchChange}
         />
         <ItemFilter 
         filter={filter}
         onFilterChange={this.onFilterChange}
         />
         </div>

         <TodoList 
         todos= {visible}
         onDeleted= {this.deliteItem}
         onToggleImportant= {this.onToggleImportant}
         onToggleDone = {this.onToggleDone}
         />

         <AddButton  addItem = {this.addItem} />
     

        </div>
        <Footer/>
        </>
    )
    } 
}

