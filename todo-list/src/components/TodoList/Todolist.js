import React from 'react';
import TodoListItem from '../TodoListItem';
import './TodoList.css'

const TodoList = ( {todos}) => {

    const elem = todos.map((item) => {
        const {id , ...itemProps } = item // вторая переменная это все что не относится к первой
        return (
            <li key = {id} className="list-group-item">
                <TodoListItem {...itemProps} />

            </li>
        )
    })
   
    return (
        <ul className="list-group todo-list" >
          { elem }
        </ul>  
    )
}

export default TodoList;