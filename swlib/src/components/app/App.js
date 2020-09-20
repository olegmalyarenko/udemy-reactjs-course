import React,{ Component } from 'react';

import './App.css';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import { SwapiServiceProvider } from '../sw-contex';
import Row from '../row';
import {
 PersonList,
 PlanetList,
 StarshipList,
 PersonDetails,
 PlanetDetails,
 StarshipDetails

} from '../sw-components';
import SwapiService from '../../services/swapi-service.js';
export default class App extends Component {
  swapiService= new SwapiService();

    state = {
        showRandomPlanet: true,
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
              <RandomPlanet/>
              
               <Row 
               left={<PersonList/>} 
               right={ <PersonDetails itemId={1}/>}
               />

              <Row 
               left={<PlanetList/>} 
               right={<PlanetDetails itemId={3}/>}
               />

              <Row 
               left={<StarshipList/>} 
               right={ <StarshipDetails itemId={2}/> }
               />
            
               </SwapiServiceProvider>   
            </div>
        )
    } 
}


