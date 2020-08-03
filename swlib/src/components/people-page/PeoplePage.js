import React, { Component } from 'react';

import './PeoplePage.css';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';
import Row from '../row';
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
        const itemList = (
            <ItemList 
            onItemsSelected= {this.onPersonSelected}
            getData = {this.swapiService.getAllPeople}>
              {(i) => (
          `${i.name} (${i.birthYear})`
        )}

           </ItemList>    
        )  

        const personDetails = (
            <PersonDetails personId = {this.state.selectedPerson} />
        )
        return (
            <Row left={itemList} right={personDetails} />
           
        )
    }
}