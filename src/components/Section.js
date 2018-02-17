import React, { Component } from 'react';

class Section extends Component {
  render () {
    return (
      <div
        style=  {{
                    
                }}
        onClick={ this.props.handleClick }>{ this.props.data.title }</div>
    );
  }
};

export default Section;