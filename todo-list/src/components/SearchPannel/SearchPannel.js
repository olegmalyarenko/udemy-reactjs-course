import React, { Component } from 'react';
import './SearchPannel.css'

export default class SearchPannel extends Component  {
    state = {
        term:''
    }

    onSearch = (e) => {
        this.setState({
            term: e.target.value
        });
       
        this.props.onSearchChange(e.target.value);
        
    }

    render(){

    return (
        <input placeholder="search"
        type="text"
        className="form-control search-input"
        onChange={this.onSearch}   
        value={this.state.term}
                   
                   
                   />   
    )
}  
}

