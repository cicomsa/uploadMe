import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import UploadImage from './components/UploadImage';
import DisplayImage from './components/DisplayImage'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <main style={{marginTop:75}}>
          <Route exact path="/upload" component={UploadImage} />
          <Route exact path="/display/:id" component={DisplayImage} />
          <Route exact path="/" render={ () => <Redirect to="/upload" /> } />
          </main>
        </div>
      </Router>
    )
  }
}
export default App
