import React, { Component } from 'react';

class Title extends Component {
  render () {
    return (
      <div
        style=  {{
                    
                }}
        onClick={ this.props.handleClick }>{ this.props.children }</div>
    );
  }
};

export default Title;