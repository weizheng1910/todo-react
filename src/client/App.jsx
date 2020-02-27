import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

import { hot } from 'react-hot-loader';

class Form extends React.Component {
  constructor(){
    super();
    this.state = {
      input: "",
      list:[],
      validation: true
    }
  }

  getInput(currentInput){
    console.log(currentInput)
    this.setState({input: currentInput})
  }

  submitInput(){
    if (this.state.input.length < 4 || this.state.input.contains){
      this.setState({validation:false})
    } else {
      this.state.list.push(this.state.input)   
      this.setState({input: "", list: this.state.list, validation: true})
    }
  }

  deleteList(index){
    this.state.list.splice(index,1)
    this.setState({list: this.state.list})
  }

  render() {
    var list = this.state.list.map((item,index) => { 
      return <tr>
        <td>{index + 1}. {item}</td>
        <td><Moment format="YYYY-MM-DD HH:mm">{Date.now()}</Moment></td>
        <td><button type="button" onClick={(evt) => this.deleteList(index)}>Delete Task</button></td>
        </tr>
    })

    var errorAlert;

    if(!this.state.validation){
      errorAlert = "Please key in more than 4 letters"
    }
    
    return (
      <div>
        <table class="table">
          <thead>
            <tr>
              <th>Task </th>
              <th>Time Created</th>
              <th>Delete?</th>
            </tr>
          </thead>
          <tbody>
            {list}
          </tbody>
        </table>
        <input type="text" onChange={(evt) => this.getInput(evt.target.value)} value={this.state.input}/>
        <span class="text-warning">{errorAlert}</span>
        <button type="button" onClick={(evt) => this.submitInput()}>Submit To Do</button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Form/>
      </div>
    );
  }
}

export default hot(module)(App);

