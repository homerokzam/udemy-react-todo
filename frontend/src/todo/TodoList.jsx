import React, { Component } from 'react'
import IconButton from '../template/IconButton';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(

      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th className='tableAction'>Ações</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
      
    )
  }

  renderRows() {
    console.log(this.list);
    const list = this.props.list || [];
    return list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
        <td>
          <IconButton style='success' icon='check' hide={todo.done} onClick={() => this.props.handleMarkAsDone(todo)} />
          <IconButton style='warning' icon='undo' hide={!todo.done} onClick={() => this.props.handleMarkAsPending(todo)} />
          <IconButton style='danger' icon='trash-o' hide={!todo.done} onClick={() => this.props.handleRemove(todo)} />
        </td>
      </tr>
    ));
  }
}

export default TodoList;