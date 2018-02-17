import React, { Component } from 'react';

class Footer extends Component {
  render () {
    return (
      <div
        style=  {{
                    
                }}
        onClick={ this.props.handleClick }>{ this.props.children }</div>
    );
  }
};

export default Footer;