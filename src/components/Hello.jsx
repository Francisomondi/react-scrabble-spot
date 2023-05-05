import React from 'react'

const displayMessage =()=>{
    return <h2>This is the message we expect to display</h2>
}

const Hello = () => {
  return (
    <div><h1>the message is {displayMessage()}</h1></div>
  )
}

export default Hello