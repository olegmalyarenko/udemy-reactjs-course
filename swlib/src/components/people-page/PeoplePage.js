import React, { Component } from 'react';

import './PeoplePage.css';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import ErrorIndicator from '../error-indicator';
import Row from '../row';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service.js';

export default class PeoplePage extends Component {
    swapiService= new SwapiService();

    state = {
        selectedPerson: 3
        
    }

    onPersonSelected = (selectedPerson) => {
        this.setState({
            selectedPerson
        });
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
            <ErrorBoundry>
            <ItemDetails personId = {this.state.selectedPerson} />
            </ErrorBoundry>
        )
        return (
            
            <Row left={itemList} right={personDetails} />
            
        )
    }
}