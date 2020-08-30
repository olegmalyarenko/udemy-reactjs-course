import React from 'react';
import ItemDetails from '../item-details';
import Record from '../record';
import { withSwapiService } from '../hoc-helpers';

const PlanetDetails = ({ itemId, swapiService }) => {
    const { getPlanet, getPlanetImage } = swapiService; 
              return (
              <ItemDetails
                itemId={itemId}
                getData={getPlanet}
                getImageUrl={getPlanetImage}>

                <Record field="population" label="Population"/> 
                <Record field="rotationPeriod" label="Rotation Period"/>  
                <Record field="diametr" label="Diametr"/>
              </ItemDetails>
              );
          
};

export default withSwapiService(PlanetDetails);