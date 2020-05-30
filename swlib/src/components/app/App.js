import React,{ Component} from 'react';
import './App.css';
import Header from '../header/Header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list/ItemList';


export default class App extends Component {
    render() {
        return (
            <div>
            <Header/>
            <RandomPlanet/>
            <ItemList/>
            
            </div>
        )
    } 
}


