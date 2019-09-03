import React, { Component } from 'react';


class TodoForm extends React.Component



    return (

    <div>
        <h4>{props.propsTodoForm}</h4>
        <form>
            <input onChange={props.propshandleChangeFunction} />
            <button type="submit" onClick={this.onChange}>Add todo</button>
        </form>
    </div>

)




export default TodoForm;