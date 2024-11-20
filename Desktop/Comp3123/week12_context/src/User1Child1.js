import React, { Component } from 'react';
import UserContext from './UserContext';

export default class User1Child1 extends Component {
  // Assign contextType to UserContext
  static contextType = UserContext;

  constructor(props) {
    super(props)
    this.state = {
        ...this.context
    }
  }
  componentDidMount() {
    const userCtx = this.context;
    console.log(userCtx); // Log the context object
  }

  handleChange = (e) => {
    e.preventDefault(); // Prevent default behavior
    this.context.fnm = 'GBC'; // Modify the context object
    console.log(this.context); // Log the updated context
  };

  render() {
    return (
      <div>
        <h2>User1Child1--Child1</h2>
        <p>User Context: {JSON.stringify(this.context)}</p>
        <button onClick={this.context?.sayHello}>Call Hello Context</button>
        <button onClick={this.handleChange}>Change First Name</button>
      </div>
    );
  }
}

