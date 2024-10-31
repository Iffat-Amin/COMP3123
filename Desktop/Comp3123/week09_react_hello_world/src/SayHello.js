import React from 'react'

export default function SayHello({fname,lname}) {
    const myStyle ={
        color: 'pink',
        backgroundColor: 'blue'
    }
    // const name = "Iffat"
  return (
    // <h1>Hello {props.fname} {props.lname}</h1>
    <h1 style={myStyle}>Hello {fname} {lname}</h1>
  )
}
