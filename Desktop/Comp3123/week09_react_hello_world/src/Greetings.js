import React, { Component } from 'react'

export default class Greetings extends Component {
  render() {
    return (
      <div style={{color:'red',backgroundColor:'yellow'}}>
        Greetings,{this.props.name}
      </div>
    )
  }
}
