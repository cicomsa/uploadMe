import React, { Component } from 'react';
import './App.css';
import UploadPage from './components/UploadPage';
import DisplayPage from './components/DisplayPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="upload">
          <UploadPage/>
        </div>
        <div className="display">
          <DisplayPage/>
        </div>
      </div>
    );
  }
}

export default App;
