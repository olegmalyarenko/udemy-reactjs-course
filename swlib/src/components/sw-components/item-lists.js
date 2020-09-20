import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiService } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
      return (
          <Wrapped {...props}>
              {fn}
          </Wrapped>
      )
  }
};

const mapPersonMethodsToProps = (swapiService) => {
 return {
     getData: swapiService.getAllPeople
 };
}; 

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    };
   }; 

 const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    };
   }; 
      

const renderModelAndName = ({model, name}) => <span>{name} ({model})</span>;

const PersonList =  withSwapiService(
                      withData(
                        withChildFunction(ItemList,({ name }) => <span>{name}</span>)
                      ), mapPersonMethodsToProps);
const PlanetList =  withSwapiService(
                     withData(
                         withChildFunction(ItemList,({ name }) => <span>{name}</span>)
                     ), mapPlanetMethodsToProps);
const StarshipList =  withSwapiService(
                       withData(
                          withChildFunction(ItemList, renderModelAndName)
                       ), mapStarshipMethodsToProps);

export {
    PersonList,
    PlanetList,
    StarshipList
};