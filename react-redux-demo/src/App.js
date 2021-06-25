import React from "react";
// import Parent from "./components/coms/Parent";
import TodoList from "./TodoList";
export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        {/* <Parent/> */}
        {/* {this.props.value}<br/>

        <button onClick={this.props.onIncrement}>增加</button>
        <button onClick={this.props.onDecrement}>减少</button> */}
        <TodoList/>
      </div>
    );
  }
}
