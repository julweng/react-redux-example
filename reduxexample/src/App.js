import React, { Component } from 'react';
import Projects from './components/projects';
import AddProject from './components/addProject';
import ToDo from './components/todo';
import uuid from 'uuid';
import axios from 'axios';

import './App.css';


import Posts from './components/posts';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      todos: []
    }
  }

  getToDos() {
    axios.get(`http://jsonplaceholder.typicode.com/todos`)
      .then(res => {
        this.setState({todos: res.data});
      })
  }

  getProjects() {
    this.setState({ projects: [
      { 
        id: uuid.v4(),
        title: 'Business Websites',
        category: 'Web Design'
      },
      {
        id: uuid.v4(),
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        id: uuid.v4(),
        title: 'Ecommerce Shopping cart',
        category: 'Web Development'
      }  
    ]})
  }

  componentDidMount() {
    this.getProjects();
    this.getToDos()
  }

  handleAddProject(project) {
    this.setState({
      projects: [...this.state.projects, ...project]
    });
  }

  handleDeleteProject(id) {
    this.setState({
      projects: [
        ...this.state.projects.filter(project => project.id !== id)]
    });
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
        <hr />
        <ToDo todos={this.state.todos}/>
        </div>
    );
  }
}

export default App;
