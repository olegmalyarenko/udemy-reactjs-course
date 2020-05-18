import React, { Component } from 'react';
import './AddButton.css';

export default class AddButton extends Component {
    render() {
        const { addItem } = this.props;
        return (
            <div className='item-add-form'>
            <button
            className='btn btn-outline-secondary' 
            onClick= {() =>   addItem('Hello fresh') }
            >Add</button>
            </div>
        )
    }
}

