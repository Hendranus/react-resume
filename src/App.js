import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 style={{color:'#ff0000', 
                backgroundColor: '#222', 
                border: 'solid #00FFff 2px', 
                borderTopLeftRadius: 5}}
              className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
