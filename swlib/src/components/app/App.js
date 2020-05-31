import React,{ Component } from 'react';
import './App.css';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';


export default class App extends Component {

    state = {
        selectedPerson: null,
        showRandomPlanet: true,
    }

    toggleRandomPlanet = () => {
        this.setState((state) => {
          return {
            showRandomPlanet: !state.showRandomPlanet
          }
        });
      };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    }

    render() {
        const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> : null;

        return (
            <div className="stardb-app">
              <Header/>
              { planet }
              <button
                className="toggle-planet btn btn-warning btn-lg"
                onClick={this.toggleRandomPlanet}>
                Toggle Random Planet
               </button>
               <div className='row mb2'>
                    <div className="col-md-6"> 
                      <ItemList OnItemsSelected= {this.onPersonSelected}/>
                    </div>

                    <div className="col-md-6">
                      <PersonDetails personId = {this.state.selectedPerson} />
                    </div>   
                 </div>
            
            </div>
        )
    } 
}


