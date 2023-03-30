import React from 'react';
import './App.css';
import { Component } from 'react';
import General from './components/General'
import Education from './components/Education'
import Experience from './components/Experience'

class App extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div>
        <General />
        <Experience />
        <Education />
      </div>
  )
}


}

export default App;
