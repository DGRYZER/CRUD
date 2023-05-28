import React, { useState } from 'react'
import style from './homecrud.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateUser = () => {

  let[name, setName] = useState()
  let[salary, setSalary] = useState()
  let[company, setCompany] = useState()

  let namedata = (e)=>{
    setName(e.target.value)
  }

  let saldata = (e)=>{
    setSalary(e.target.value)
  }

  let compdata = (e)=>{
    setCompany(e.target.value)
  }

  let navigate = useNavigate()

  let formhandle=(e)=>{
    e.preventDefault()
    let payload = {name, salary, company}
    axios.post("http://localhost:3000/employees", payload)    /* Send the data to the backend */ 
    .then(()=>{
      console.log("Data Has been saved")
    })
    .catch(()=>{
      console.log("Data has not been saved")
    })
    navigate('/users')
  }

  return (
    <div id={style.myForm}>
      <form>
        <label>NAME</label>
        <input type="text" placeholder='Enter Full Name' value={name} onChange={namedata}/>
        <br />

        <label>SALARY</label>
        <input type="number" placeholder='Enter the amount in number' value={salary} onChange={saldata}/>
        <br />

        <label>COMPANY</label>
        <input type="text" placeholder='Enter Company Name' value={company} onChange={compdata}/>
        <br /><br />

        <button onClick={formhandle}>Submit</button>
      </form>
    </div>
  )
}

export default CreateUser
