import React from 'react'
import ReactDom from 'react-dom'
const Greeting = () =>{
  return <h1> hello</h1>
}
ReactDom.render(<Greeting/>, document.getElementById('root'))