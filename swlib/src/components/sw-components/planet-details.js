import React from 'react';
import ItemDetails from '../item-details';
import Record from '../record';
import { SwapiServiceConsumer } from '../sw-contex';
import { PersonList } from './item-lists';

const PlanetDetails = ({ itemId }) => {
    return(
        <SwapiServiceConsumer>
         {
            ({getPlanet, getPlanetImage }) => {
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
            }
         }
        </SwapiServiceConsumer>
    );
    
};

export default PlanetDetails;