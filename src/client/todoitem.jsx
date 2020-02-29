import React from 'react';
import moment from 'moment'
import { hot } from 'react-hot-loader';
import Octicon, {getIconByName} from '@primer/octicons-react'

class ToDoItem extends React.Component {
  constructor() {
    super()
    this.state = {
      editInput: ""
    }
  }

  renderInput(currentInput){
    console.log(currentInput)
    this.setState({editInput: currentInput})
  }

  render() {
    let list = this.props.list.map((elem,index) => {
      return <tr>
        <td style={{padding: 15 + 'px'}} width="40%">
          <div className="d-flex justify-content-between">
            <div>
             {elem.todo}
            </div>
              <div>
                <div className="btn-group dropleft p-0">
                  <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <Octicon icon={getIconByName('pencil')} />
                  </button>
                  <div className="dropdown-menu" style={{padding: 0 + 'px', margin: (0 + 'px') }}>
                      <div className="d-flex justify-content-center ">
                      <input width="600" style={{width: 210 + 'px',border: '0px solid'}}  type="text" onChange={(evt) => this.renderInput(evt.target.value)} value={this.state.editInput}/>
                      <div>
                      <button className="btn btn-primary" onClick={(evt) => {this.props.editTask(this.state.editInput,index)}} >Edit</button>
                      </div>
                      </div>
                  </div>
                </div>
                <div>
                  <button onClick={(evt)=> this.props.deleteList(index)}>
                    <Octicon icon={getIconByName('x')} />
                  </button>
                </div>
              </div>
          </div>
        </td>
        <td>{moment(elem.created).format('LLL')}</td>
      </tr>
    })

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Task </th>
              <th>Time Created</th>
            </tr>
          </thead>
          <tbody>
            {list}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ToDoItem