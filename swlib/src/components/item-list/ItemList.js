import React, { Component } from 'react';
import "./ItemList.css";
import SwapiService from '../../services/swapi-service';
import { withData } from '../hoc-helpers';
 const ItemList = (props) => {

    const {data, onItemsSelected,children: renderLabel } = this.props;
    
    
     const items= data.map((item) => {
         const { id } = item;
         const label = renderLabel(item);
         return (
            <li className='list-group-item'
            key = {id}
            onClick={() => onItemsSelected(id)}>
               {label}
            </li> 
         );
     });
    
        
        return (
        <ul className='item-list list-group'>
           {items}
        </ul>
        )
    
}

 

const { getAllPeople } = new SwapiService();

export default withData(ItemList, getAllPeople );