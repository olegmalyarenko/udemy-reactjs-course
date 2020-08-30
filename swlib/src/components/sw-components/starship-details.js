import React from 'react';
import ItemDetails from '../item-details';
import Record from '../record';
import { SwapiServiceConsumer } from '../sw-contex';

const StarshipDetails = ({ itemId }) => {
    return(
    <SwapiServiceConsumer>
         {
            ({getStarship, getStarshipImage }) => {
              return (
              <ItemDetails
               itemId={itemId}
               getData={getStarship}
               getImageUrl={getStarshipImage}>

               <Record field="model" label="Model"/> 
               <Record field="length" label="Length"/>  
               <Record field="constInCredits" label="Const"/>
              </ItemDetails>
              )
            }
        }
       </SwapiServiceConsumer>      
    );
};

export default StarshipDetails;