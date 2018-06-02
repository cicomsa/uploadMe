import React, { Component } from 'react';
import UploadPage from './components/UploadPage';
import DisplayPage from './components/DisplayPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="uploadImage">
          <UploadPage/>
        </div>
        <div className="displayImage">
          <DisplayPage/>
        </div>
      </div>
    );
  }
}

export default App;
