import React, { Component } from 'react';

class Heading extends Component {
  render () {
    return (
      <div
        style=  {{
                    
                }}
        onClick={ this.props.handleClick }>{ this.props.data.name }</div>
    );
  }
};

export default Heading;