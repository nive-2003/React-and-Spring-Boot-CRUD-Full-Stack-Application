import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link,useNavigate, useParams } from 'react-router-dom';
export default function EditUser() {

  let navigate = useNavigate()
  
   

  const [user,setUser] = useState({
    id:0,
    email:"",
    password:"",
    mobile_Number:"",
    confirm_password:""

  })

  const{id,email,password,mobile_Number,confirm_password}=user 

    const onInputChange=(e)=>{
      setUser({...user,[e.target.name]:e.target.value})

    }
    useEffect(()=>{
        loadUser();
    },[]);

    const onSubmit=async(e)=>{
     e.preventDefault();
     await axios.put(`http://localhost:8080/updatelogin/${id}`,user)
     navigate("/loginhome")
    }
    const loadUser=async()=>{
        const result = await axios.get(`http://localhost:8080/updatelogin/${id}`)
        setUser(result.data)
      }
  return (
    <div className='container'>
      <div className='row'>
      <div className='col-md-6 offset-md-3 border rounded p-4 mt-4 shadow'>
       <h2 className='text-center m-4'>Edit User</h2>

       <form onSubmit={(e)=>onSubmit(e)}>
       <div className='mb-3'>
        <label htmlFor='Id' className='form-label'>
          Id
        </label>
        <input type ="number"
         className="form-control"
          placeholder='Enter ur id'
           name='id'
           value={id}
           onChange={(e)=>onInputChange(e)}/>   
       </div>
       <div className='mb-3'>
        <label htmlFor='email' 
        className='form-label'>
          email
        </label>
        <input type ="text" 
        className="form-control" 
        placeholder='Enter your email' 
        name='email'
        value={email}
        onChange={(e)=>onInputChange(e)}/>   
       </div>
       <div className='mb-3'>
        <label htmlFor='password' className='form-label'>
        password
        </label>
        <input type ="text"
         className="form-control"
          placeholder='Enter your  password'
           name='password'
           value={password} onChange={(e)=>onInputChange(e)}/>   
       </div>
       <div className='mb-3'>
        <label htmlFor='mobile_Number' className='form-label'>
        mobile_Number
        </label>
        <input type ="text"
         className="form-control"
          placeholder='Enter your mobile_Number' 
          name='mobile_Number'
          value={mobile_Number}
          onChange={(e)=>onInputChange(e)}/>   
       </div>
       <div className='mb-3'>
        <label htmlFor='confirm_password' className='form-label'>
       confirm_password
        </label>
        <input type ="number" 
        className="form-control" 
        placeholder='Enter your confirm_password'
         name='confirm_password'
         value={confirm_password}
         onChange={(e)=>onInputChange(e)}/>   
       </div>
      
       
       <button type='submit' className='btn btn-outline-primary'>Submit</button>
       <button type='submit' className='btn btn-outline-danger mx-3'>Cancel</button>
       </form>
      </div>
      
      </div>
        
    </div>
  )
}
