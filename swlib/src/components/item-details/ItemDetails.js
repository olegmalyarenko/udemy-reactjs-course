import React, { Component } from 'react';
import './ItemDetails.css';
import SwapiService from '../../services/swapi-service.js';
import Spinner from '../spinner';
import ErrorButton from '../error-button';


  

export default class ItemDetails extends Component {
    swapiService = new SwapiService(); 

    state = {
        item: null,
        image: null,
        loading: true
    };

    componentDidMount(){
        this.updateItem();

    }

    componentDidUpdate (prevProps){
      if (this.props.itemId !== prevProps.itemId){
        this.updateItem();
      }
    }

    updateItem(){
        
        const { itemId, getData, getImageUrl } = this.props;
        console.log('itemid', itemId);
        if (!itemId) {
            return;
        }
        getData(itemId)
        .then((item) => {
            this.setState({
            item,
            loading: false,
            image: getImageUrl(item)
            });
        });
    }

    render() {
        const { item, image } = this.state;
        if (!this.state.item) {
            return <span>Select person from the list</span>
        }

        if (this.state.loading) {

            return <Spinner />; 

        }
        
        const { name
        } = item;

        console.log('Рендер айтем', this.state.item);
        return (
            <div className="person-details card">

                <div className="card-img">
                <img className="person-image"
                src={image} 
                alt="character"></img>
                </div>

                <div className="card-body">
                  <h4>{name} {this.props.personId}</h4>
                  <ul className="list-group list-group-flush">
                    { 
                      React.Children.map(this.props.children, (child) => {
                      return React.cloneElement(child, { item });
                      })
                    }
                                  
                 </ul> 
                 <ErrorButton/>
                 </div>    

            </div>

        )
    }
}