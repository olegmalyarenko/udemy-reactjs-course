import React, { Component } from 'react';
import './ItemFilter.css';

export default class ItemFilter extends Component {

        
        render () {
                return (
                        <div className="btn-group">
                      <button type="button"
                              className="btn btn-info">All</button>
                      <button type="button"
                              className="btn btn-outline-secondary">Active</button>
                      <button type="button"
                              className="btn btn-outline-secondary">Done</button>
                    </div>
                  );
        }
}