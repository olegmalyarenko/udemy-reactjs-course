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
              <SwapiServiceProvider value={this.swapiService}>
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


               <PersonDetails itemId={1}/>

               <StarshipDetails itemId={2}/>

               <PlanetDetails itemId={3}/>


               
               <PersonList/>
                
               <PlanetList/>
                
               <StarshipList/>
               </SwapiServiceProvider>   
            </div>
        )
    } 
}


