import React,{ Component } from 'react';
import './App.css';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import { SwapiServiceProvider } from '../sw-contex';
import { PeoplePage, StarshipPage, PlanetPage, LoginPage, SecretPage } from '../pages';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SwapiService from '../../services/swapi-service.js';
import { StarshipDetails } from '../sw-components';
export default class App extends Component {
  swapiService= new SwapiService();

    state = {
        hasError: false,
        isLoggedIn: false
    }

    onLogin = () => {
      this.setState({
        isLoggedIn: true,
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
     
      const { isLoggedIn } = this.state;
        
      return (
            <div className="stardb-app">
              <SwapiServiceProvider value={this.swapiService}>
               <Router> 
                 <Header/>
                 <RandomPlanet />
                 <Route path="/" 
                 render={() => <h2>Welcome to StarDB</h2>}
                 exact={true}/>
                 <Route path="/people/:id?"  exact={true} component={PeoplePage} />
                 <Route path="/planets/" component={PlanetPage} />
                 <Route path="/starships"  exact component={StarshipPage} />
                 <Route path="/starships/:id"  
                  render={({ match }) => {
                    const { id } = match.params;
                    return <StarshipDetails itemId={id}/>}}
                    exact={true}/>
                 <Route path="/login" render={() => (
                   <LoginPage 
                   isLoggedIn={isLoggedIn}
                   onLogin={this.onLogin}/>
                 )} />

                  <Route path="/secret-page" render={() => (
                   <SecretPage isLoggedIn={isLoggedIn}/>
                 )} />

                </Router>
               </SwapiServiceProvider> 
                 
            </div>
        )
    } 
}


