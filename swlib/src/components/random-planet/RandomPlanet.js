import React,{ Component, Fragment} from 'react';
import './RandomPlanet.css';
import SwapiService from '../../services/swapi-service.js';
import Spinner from '../spinner/Spinner';

export default class RandomPlanet extends Component {
    swapiService = new SwapiService;
    state = {
        planet: {},
        loading: true
    }

    constructor() {
        super();
        this.updatePlanet(); 
    }

    onPlanetLoaded = (planet) => {
        this.setState({ planet,
        loading: false });

    }

    updatePlanet() {
        const id = Math.floor(Math.random()* 25 + 1);
        this.swapiService.getPlanet(id)
        .then(this.onPlanetLoaded)
    }

    

    render() {
        const { planet, loading } = this.state;

        const spinner = loading ? <Spinner /> : <PlanetView planet={planet}/>;
        

        return (
        <div className='random-planet d-flex jumbotron rounded'>
            {spinner}
                  
        </div>
        )  
    }
}

const PlanetView = ({planet}) => {
    const  { population, rotationPeriod, diameter, name, id} = planet;
    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}