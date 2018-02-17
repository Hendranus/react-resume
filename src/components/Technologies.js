import React, { Component } from 'react';

class Technologies extends Component {
  render () {
    return (
      <div
        style=  {{
                    
                }}
        onClick={ this.props.handleClick }>{ this.props.children }</div>
    );
  }
};

export default Technologies;