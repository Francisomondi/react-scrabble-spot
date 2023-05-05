import {React,useState} from 'react'

const Account = ({name,lastname}) => {

  const[counter, setCounter]= useState(0)

    const handleClick=()=>{
        setCounter(counter+1)
    }
    const handleDecrement=()=>{
      setCounter(counter-1)
  }
   
  return (
    <div>
      <h2>this is the profile page of {name} {lastname} of age: {counter}</h2>

      <button onClick={handleClick}>Increment age</button>
      <button onClick={handleDecrement}>decrement age</button>
    </div>
  )
}

export default Account
