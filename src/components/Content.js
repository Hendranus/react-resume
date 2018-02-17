import React, { Component } from 'react';

let styleOjb = {color:'#ffff00', backgroundColor: '#222', border: 'solid #00FFff 2px', borderTopLeftRadius: 5}

class Content extends Component {
  render () {
    return (
        <div>
        {/* style={mediaStyle}>

            <div style={headStyle}>
                { this.props.head }
            </div>

            <a href="http://twitter.com/stubbornella" class="img">
                <img src="http://stubbornella.com/profile_image.jpg" alt="me" />
            </a> */}

            <div style={ styleOjb }>{ this.props.children }</div>
        </div>
    );
  }
};

export default Content;