import React, { Component } from 'react';

import './PeoplePage.css';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service.js';

export default class PeoplePage extends Component {
    swapiService= new SwapiService();

    state = {
        selectedPerson: 3,
        hasError: false
    }

    onPersonSelected = (selectedPerson) => {
        this.setState({
            selectedPerson
        });
    }

    componentDidCatch() {
        console.log('componentDidCatch');
        this.setState({hasError: true})
      }

    render(){
        if (this.state.hasError) {
            return <ErrorIndicator />
        }
        return (
            <div className='row mb2'>
                    <div className="col-md-6"> 
                      <ItemList 
                        onItemsSelected= {this.onPersonSelected}
                        getData = {this.swapiService.getAllPeople}/>
                    </div>

                    <div className="col-md-6">
                      <PersonDetails personId = {this.state.selectedPerson} />
                    </div>   
            </div>
        )
    }
}