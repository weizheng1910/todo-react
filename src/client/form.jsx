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
    if(this.state.input.length < 4 || this.state.input.contains){
      this.setState({validation:false})
    } else {
      this.state.list.push({
        todo: this.state.input,
        created: Date.now(),
      })
      this.setState({input: "", list: this.state.list, validation: true})
      this.props.transfer(this.state.list)
    }
  }

  deleteList(index){
    this.state.list.splice(index,1)
    this.setState({list: this.state.list})
  }

  render() {
    var errorAlert;
    if(!this.state.validation){
      errorAlert = "Please key in more than 4 letters"
    }
    
    return (
      <div>
        <input type="text" onChange={(evt) => this.getInput(evt.target.value)} value={this.state.input}/>
        <button type="button" onClick={(evt) => this.submitInput()}>Add Task</button>
        <div class="text-danger">{errorAlert}</div>
      </div>
    );
  }
}

export default Form