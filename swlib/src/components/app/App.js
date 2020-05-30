import React,{ Component} from 'react';
import './App.css';
import Header from '../header/Header';
import RandomPlanet from '../random-planet';


export default class App extends Component {
    render() {
        return (
            <div>
            <Header/>
            <RandomPlanet/>
            
            </div>
        )
    } 
}


