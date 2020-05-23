import React,{ Component} from 'react';
import './RandomPlanet.css';
import SwapiService from '../../services/swapi-service.js';

export default class RandomPlanet extends Component {
    swapiService = new SwapiService;
    state = {
        planet: {}
    }

    constructor() {
        super();
        this.updatePlanet(); 
    }

    onPlanetLoaded = (planet) => {
        this.setState({ planet });

    }

    updatePlanet() {
        const id = Math.floor(Math.random()* 25 + 1);
        this.swapiService.getPlanet(id)
        .then(this.onPlanetLoaded)
    }

    

    render() {
        const { planet: { population, rotationPeriod, diameter, name, id} } = this.state;

        return (
        <div className='random-planet d-flex jumbotron rounded'>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="pic" />

            <div>
                <h3  className= 'title'>{name}</h3>
                <ul className= 'list-group list-group-flush'>
                    <li className='list-group-item'>
                        <span className='term'>Population</span>
                        <span>{population}</span>
                    </li>

                    <li className='list-group-item'>
                        <span className='term'>Rotaton period</span>
                        <span>{rotationPeriod}</span>
                    </li>

                    <li className='list-group-item'>
                        <span className='term'>Diameter</span>
                        <span>{diameter}</span>
                    </li>

                </ul>
            </div>
        </div>
        )  
    }
}