import React, { Component } from 'react';

class Page extends Component {
  render () {
    return (
      <div style={{ left: -15 }}>
          <div class="bevel tr"></div>
          <div class="content">{ this.props.children }</div>
          <div class="bevel bl"></div>
      </div>
    )
  };
}

export default Page;