import React, { Component } from 'react';

class Link extends Component {
  render () {
    return (
      <div
        style=  {{
                    
                }}
        onClick={ this.props.handleClick }>{ this.props.data.name }</div>
    );
  }
};

export default Link;