import React, { Component } from 'react';

class Portfolio extends Component {
  render () {
    return (
      <div
        style=  {{
                    
                }}
        onClick={ this.props.handleClick }>{ this.props.children }</div>
    );
  }
};

export default Portfolio;