import React, {Component} from 'react';
import TodoList from './components/TodoComponents/TodoList';
import Todo from "./components/TodoComponents/Todo";
import TodoForm from './components/TodoComponents/TodoForm';
import { runInThisContext } from 'vm';
const todo = [{
  task: 'Organize Garage',
id: 1528817077286,
completed: false
},
{
task: 'Bake Cookies',
id: 1528817084358,
completed: false
}
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    constructor(){
      super();
      this.state = {
        todos: todo,
      };
    }
  
  this.onClick = this.onClick.bind(this);
  this.onSubmit= this.onSubmit.bind.this;
  onClick(event){
    this.setState({
      task:"New todo",
      id:Date.now(),
      completed:false
    });
  }
    onChange(event){
      console.log(event.target.value)
    }
  }
    handleDoubleClickEvent = () => alert("double click event")
    handleInputChange = event => {
      this.setState({ todo: event.target.value });
    }
  
    onSubmit(event){
      event.prevent.Default();
      console.log(event.target.value);
    }


    render() {

      return (

        <div className="App">
       
          <h2>Welcome to your Todo App!</h2>
  
          
    

                return (
             
              <TodoList todos={this.state.todos} />
          
           

            <button type="submit" onMouseEnter={this.onMouseEnter}>Clear Completed</button>
         
        </div>
      );
    }
  

  export default App;
