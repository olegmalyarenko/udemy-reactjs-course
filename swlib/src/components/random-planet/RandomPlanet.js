import React,{ Component} from 'react';
import './RandomPlanet.css';
import SwapiService from '../../services/swapi-service.js';

export default class RandomPlanet extends Component {
    swapiService = new SwapiService;
    state = {
        id: null,
        name: null,
        population: null,
        rotationPeriod: null,
        diameter: null
    }

    constructor() {
        super();
        this.updatePlanet(); 
    }

    updatePlanet() {
        const id = Math.floor(Math.random()* 25 + 1);
        this.swapiService.getPlanet(id)
        .then((planet) => {
            console.log(planet);
            this.setState({
                id,
                name: planet.name,
                population: planet.population,
                rotationPeriod: planet.rotation_period,
                diameter: planet.diameter

            })

        })
    }

    render() {
        const { population, rotationPeriod, diameter, name, id } = this.state;

        return (
        <div className='d-flex jumbotron rounded'>
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