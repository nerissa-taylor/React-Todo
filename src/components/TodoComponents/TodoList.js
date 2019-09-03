// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
// your components will all go in this `component` directory.
// feel free to change this component.js
import React, { Component } from 'react';
import Todo from './Todo';
import App from '../../App';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        console.log("TodoList", props)
    }
    render() {
        console.log('TodoList', this.props)
        return (
            <div>
                {this.props.todos.map(todo => <Todo key={todo.id} todo={todo} />)}


                <input onChange={props.propshandleInputChange} />
                <button type="submit" onClick={props.propshandleChangeFunction}>Clear All</button>

            </div>
        )
    }

}
export default TodoList;