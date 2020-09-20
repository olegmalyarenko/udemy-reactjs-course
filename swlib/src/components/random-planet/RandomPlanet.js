import React,{ Component } from 'react';
import './RandomPlanet.css';
import SwapiService from '../../services/swapi-service.js';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import PropTypes from 'prop-types';

export default class RandomPlanet extends Component {
    static defaultProps = {
        updateInterval : 5000
    };

    static propTypes = {
        updateInterval: PropTypes.number
    }

    swapiService = new SwapiService();
    state = {
        planet: {},
        loading: true,
        error: false
    }

    componentDidMount () {
        const { updateInterval } = this.props;
        this.updatePlanet(); 
        this.interval = setInterval( this.updatePlanet,updateInterval);
    }

    componentWillMount (){
        console.log('компонент удалился')
        clearInterval(this.interval);
    }

    onPlanetLoaded = (planet) => {
        this.setState({ planet,
        loading: false });

    }
    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });

    }
    updatePlanet = () => {
        const id = Math.floor(Math.random()* 17 + 3);
        this.swapiService.getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError);
    }
    
    

    render() {
        const { planet, loading, error } = this.state;

        const hasData = !(loading || error);
        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <PlanetView planet={planet}/> : null;
        

        return (
        <div className='random-planet d-flex jumbotron rounded'>
            {errorMessage}
            {spinner}
            {content}   
                
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