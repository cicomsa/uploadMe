import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import UploadPage from './components/UploadPage';
import DisplayPage from './components/DisplayPage'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <main style={{marginTop:75}}>
          <Route exact path="/upload" component={UploadPage} />
          <Route exact path="/display/:id" component={DisplayPage} />
          <Route exact path="/" render={ () => <Redirect to="/upload" /> } />
          </main>
        </div>
      </Router>
    )
  }
}
export default App
