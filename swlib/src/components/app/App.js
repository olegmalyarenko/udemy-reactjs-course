import React,{ Component } from 'react';
import './App.css';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import { SwapiServiceProvider } from '../sw-contex';
import { PeoplePage, StarshipPage, PlanetPage } from '../pages';

import SwapiService from '../../services/swapi-service.js';
export default class App extends Component {
  swapiService= new SwapiService();

    state = {
        hasError: false
    }

    

    componentDidCatch() {
      console.log('componentDidCatch');
      this.setState({hasError: true})
    }

    render() {
      if (this.state.hasError){
        return <ErrorIndicator/>
      }

        
      return (
            <div className="stardb-app">
              <SwapiServiceProvider value={this.swapiService}>
              <Header/>
              <RandomPlanet />
              
               <PeoplePage />

               <PlanetPage />
               <StarshipPage />


              
            
               </SwapiServiceProvider>   
            </div>
        )
    } 
}


