import React, { useEffect, useState } from 'react'
import style from './homecrud.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const EditUser = () => {

  let[name, setName] = useState()
  let[salary, setSalary] = useState()
  let[company, setCompany] = useState()

    let {index} = useParams()
    console.log(index)

    useEffect(()=>{
        axios.get(`http://localhost:3000/employees/${index}`)
        .then((response)=>{
            setName(response.data.name)
            setSalary(response.data.salary)
            setCompany(response.data.company)
        })
        .catch(()=>{
            console.log("Something went wromg")
        })
    },[])

    let nameData =(e)=>{
      setName(e.target.value)
    }

    let salData =(e)=>{
      setSalary(e.target.value)
    }

    let compData =(e)=>{
      setCompany(e.target.value)
    }

    let navigate = useNavigate()

    let formHandle=()=>{
      let payload = {name, salary, company}
      axios.put(`http://localhost:3000/employees/${index}`, payload)
      .then(()=>{
        console.log("Data Has been saved")
        })
        .catch(()=>{
          console.log("Something went wromg")
          })
          navigate('/users')
    }

  return (
    <div>
      <div id={style.myForm}>
      <form>
        <h1 id={style.update}>UPDATE USER</h1>

        <label>NAME</label>
        <input type="text" value={name} onChange={nameData}/>
        <br />

        <label>SALARY</label>
        <input type="number" value={salary} onChange={salData}/>
        <br />

        <label>COMPANY</label>
        <input type="text" value={company} onChange={compData}/>
        <br /><br />

        <button onClick={formHandle} >Update</button>
      </form>
    </div>
    </div>
  )
}

export default EditUser
