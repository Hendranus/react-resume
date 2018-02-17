import React, { Component } from 'react';

class Button extends Component {
  render () {
    return (
      <div
        style=  {{
                    color:'#fff',
                    textAlign:'center',
                    backgroundColor:'#68a0cf',
                    borderTopLeftRadius: 5,
                    borderBottomRightRadius: 5,
                    borderWidth: 2,
                    borderColor: '#000',
                    maxWidth: 350,
                    minWidth: 100,
                    maxHeight: 100,
                    minHeight: 20,
                    padding: 5
                }}
        onClick={ this.props.handleClick }>{ this.props.children }</div>
    );
  }
};

export default Button;