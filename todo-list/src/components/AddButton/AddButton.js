import React, { Component } from 'react';
import './AddButton.css';

export default class AddButton extends Component {
    state = {
        label: ''
    }
    onLabelChange= (e) => {
      this.setState({
          label: e.target.value
      });
      console.log(this.state.label);

    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.label);

    }
    render() {
        const { addItem } = this.props;
        return (
            <form className='item-add-form d-flex'
                  onSubmit={this.onSubmit}>
            <input type="text" 
                   className="form-control"
                   onChange={this.onLabelChange}
                   placeholder="What needs to be done"/>     

            <button
            className='btn btn-outline-secondary' 
            >Add</button>
            </form>
        )
    }
}

