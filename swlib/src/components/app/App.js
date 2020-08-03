import React,{ Component } from 'react';

import './App.css';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page';
import Row from '../row';

import ItemList from '../item-list';
import PersonDetails from '../person-details';
import SwapiService from '../../services/swapi-service.js';

export default class App extends Component {
  swapiService= new SwapiService();

    state = {
        showRandomPlanet: true,
        hasError: false
    }

    toggleRandomPlanet = () => {
        this.setState((state) => {
          return {
            showRandomPlanet: !state.showRandomPlanet
          }
        });
      };
    
     
    

    componentDidCatch() {
      console.log('componentDidCatch');
      this.setState({hasError: true})
    }

    render() {
      if (this.state.hasError){
        return <ErrorIndicator/>
      }

        const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> : null;

        return (
            <div className="stardb-app">
              <Header/>
              { planet }
              <div className="buttons row mb2 button-row">
                <button
                  className="toggle-planet btn btn-warning btn-lg"
                  onClick={this.toggleRandomPlanet}>
                  Toggle Random Planet
                </button>
                <ErrorButton/>
               </div>
               
               <PeoplePage />

               
            </div>
        )
    } 
}


