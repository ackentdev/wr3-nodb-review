import React, {Component} from 'react';
import axios from 'axios';
import './reset.css';
import './App.css';
import Header from './components/Header';
import List from './components/List';


class App extends Component {
  constructor(){
    super();
    this.state = {
      todos: []
    }
  }

  componentDidMount(){
    this.getTodos();
  };

  getTodos = () => {
    axios.get('/api/todos')
      .then( res => {
        this.setState({
          todos: res.data
        })
      }
    ).catch( err => console.log(err))
  };


  render(){
    console.log(this.state)
    return (
      <div >
        <Header/>
        <List todos={this.state.todos}/>
      </div>
  )};
};

export default App;
