import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

import Octicon, {getIconByName} from '@primer/octicons-react'
import $ from 'jquery';
import Popper from 'popper.js'

import Form from './form'
import ToDoItem from './todoitem'
import { hot } from 'react-hot-loader';

class Board extends React.Component {
  constructor(){
    super()
    this.state = {
      list: []
    }
  }

  render() {
    const callBack = (list) => {
      this.setState({list: list})
    }

    const deleteCallBack = (index) => {
      this.state.list.splice(index,1)
      this.setState({list: this.state.list})
    }

    const editCallBack = (task,index) => {
      this.state.list[index].todo = task
      this.setState({list: this.state.list})
    }

    return (
      <div className="card" style={{width: 30 + 'rem'}}>
        <div className="d-flex justify-content-between">
          <div>
            <h4>{this.props.name}</h4>
          </div>
          <div>
            <button onClick={(evt) => this.props.deleteBoard(this.props.index)}>
              <Octicon icon={getIconByName('x')} />
            </button>
          </div>
        </div>
        <ToDoItem list={this.state.list} editTask={editCallBack} deleteList={deleteCallBack}/>
        <Form transfer={callBack}/>
      </div>
    );
  }
}

export default Board


