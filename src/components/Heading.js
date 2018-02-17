import React, { Component } from 'react';
import { getStyle } from '../utils/style'

class Heading extends Component {
  render () {
    return (
      <div
        style=  { Object.assign( getStyle({ 
                    background: { color: 'blue', brighten: 0.05 }, 
                    text: { color: 'gold' }, 
                    corners: { cornersMatrix: '0110', size: 10 } }),
                  { minHeight: 250, margin: 10, padding: 10, boxShadow: '2px 2px 2px #111111' } ) }
        onClick={ this.props.handleClick }>
          <h3>{ this.props.data.name }</h3>
      </div>
    );
  }
};
export default Heading;