import React from 'react'
import { useEffect, useState } from 'react'

export default function UseEffectExample() {
    let [state,setState] = useState({name:"Iffat",college:"GBC"})
    useEffect(()=>{
        console.log("first")
        return() => {
            console.log("second")
        }
    },[state.name])
  return (
    <div>
      <h2>useEffect() Example</h2>
      <p>Name: {state.name}</p>
      <p>College: {state.college}</p>
      <button onClick={(e)=>setState({name:"Nabila"})}>Update Name</button>
      <button onClick={(e)=>setState({college:"GBC Toronto"})}>Update College</button>
    </div>
  )
}
