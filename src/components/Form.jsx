import React from 'react'
import styles from "../styles.module.css"

const Form = () => {
  return (
    <div className={styles.todoform}>
      <form>
       <input className={styles.todoinput} type='text' placeholder='Add todo Item'></input>
       <button className={styles.todobutton} type='submit'>Add</button>
      </form>
    </div>
  )
}

export default Form
