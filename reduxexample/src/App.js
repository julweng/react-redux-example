import React, { Component } from 'react';
import Projects from './components/projects';
import AddProject from './components/addProject';

import './App.css';


import Posts from './components/posts';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount() {
    this.setState({ projects: [
      {
        title: 'Business Websites',
        category: 'Web Design'
      },
      {
        title: 'Social App',
        category: 'Mobile Development'
      },
        {
        title: 'Ecommerce Shopping cart',
        category: 'Web Development'
      }  
    ]})
  }

  render() {
    return (
      <div className="App">
        <AddProject />
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
