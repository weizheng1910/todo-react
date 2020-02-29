import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';


import $ from 'jquery';
import Popper from 'popper.js'

import Board from './board'
import Form from './form'
import ToDoItem from './todoitem'
import { hot } from 'react-hot-loader';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      boards: [],
      input: ""
    }
  }

  renderInput(currentInput){
    console.log(currentInput)
    this.setState({input:currentInput})
  }

  addBoard(){
    this.state.boards.push(this.state.input)
    this.setState({boards: this.state.boards,input:""})
  }

  render() {

    const deleteBoard = (index) => {
      this.state.boards.splice(index,1)
      this.setState({boards:this.state.boards})
    }

    var boards = this.state.boards.map((board,index) => {
      return <Board name={board} index={index} deleteBoard={deleteBoard}/>
    })

    return (
      <div>
        <div className="btn-group dropdown p-0">
          <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Add New Task
          </button>
          <div className="dropdown-menu" style={{padding: 0 + 'px', margin: (0 + 'px') }}>
              <div className="d-flex justify-content-center ">
              <input style={{width: 210 + 'px',border: '0px solid'}}  type="text" onChange={(evt) => this.renderInput(evt.target.value)} value={this.state.input}/>
              <div>
              <button onClick={(evt) => {this.addBoard(this.state.input)}} >Add Board</button>
              </div>
              </div>
          </div>
        </div>
        <div className="d-flex justify-content-around">
          {boards}
        </div>
      </div>
    );
  }
}

export default hot(module)(App);

