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

  componentWillMount() {
    this.getProjects();
  }

  componentDidMount() {
    this.getProjects();
    this.getToDos()
  }

  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects: projects});
  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(project => project.id === id);
    projects.splice(index, 1);
    this.setState({projects: projects});
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
