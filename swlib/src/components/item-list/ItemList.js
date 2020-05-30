import React, { Component } from 'react';
import "./ItemList.css";
import Spinner from '../spinner';
import SwapiService from '../../services/swapi-service.js';

export default class ItemList extends Component {
    swapiService = new SwapiService() 

    state = {
        peopleList: null

    };

    componentDidMount(){
        this.swapiService
         .getAllPeople()
         .then( (peopleList) => {
             this.setState({
             peopleList
         })
        })

    }

    render() {
        const { peopleList } = this.state;

        if ( !peopleList) {
            return <Spinner/>
        }
        return (
        <ul className='item-list list-group'>
            <li className='list-group-item'>
                Luke Skywolker
            </li>
            <li className='list-group-item'> 
               Darth Vader
            </li>
            <li className='list-group-item'> 
               R2 D2
            </li>
        </ul>
        )
    }
}