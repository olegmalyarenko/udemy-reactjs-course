import React from 'react';
import ItemDetails from '../item-details';
import Record from '../record';
import { withSwapiService } from '../hoc-helpers';

const PlanetDetails = (props) => {
    
  return (
    <ItemDetails {...props}>
    <Record field="population" label="Population"/> 
    <Record field="rotationPeriod" label="Rotation Period"/>  
    <Record field="diametr" label="Diametr"/>
    </ItemDetails>
    );
          
};
const mapMethodsToProps = (swapiService) => {
  return {
      getData : swapiService.getPlanet,
      getImageUrl : swapiService.getPlanetImage
  }

};

export default withSwapiService(PlanetDetails, mapMethodsToProps);