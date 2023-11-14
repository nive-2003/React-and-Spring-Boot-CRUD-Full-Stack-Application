import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import detailsadd from "../images/detailsadd.jpg";
import "../css/DetailsHome.css"
export default function AddUser() {

  let navigate = useNavigate()

  const [user,setUser] = useState({
    id:0,
    first_name:"",
    last_name:"",
    streetName:"",
    streetName:"",
    pincode:0,
    city:"",
    mobileNumber:0,
    dob:""

  })

  const{id,
    first_name,
    last_name,
    streetName,
    pincode,
    city,
    mobileNumber,
    dob}=user

    const onInputChange=(e)=>{
      setUser({...user,[e.target.name]:e.target.value})

    }

    const onSubmit=async(e)=>{
     e.preventDefault();
     await axios.post("http://localhost:8080/savedetails",user)
     navigate("/detailshome")
    }
  return (
    <div className='container'>
      <img src={detailsadd} alt='detailsadd' className='detailsadd'/>
      <div className='row'>
      <div className='col-md-6 offset-md-3 border rounded p-4 mt-4 shadow'>
       <h2 className='text-center m-4'>Register User</h2>

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
        <label htmlFor='first_name' 
        className='form-label'>
          First Name
        </label>
        <input type ="text" 
        className="form-control" 
        placeholder='Enter your first_name' 
        name='first_name'
        value={first_name}
        onChange={(e)=>onInputChange(e)}/>   
       </div>
       <div className='mb-3'>
        <label htmlFor='last_name' className='form-label'>
        Last Name
        </label>
        <input type ="text"
         className="form-control"
          placeholder='Enter your  last_name'
           name='last_name'
           value={last_name} onChange={(e)=>onInputChange(e)}/>   
       </div>
       <div className='mb-3'>
        <label htmlFor='streetName' className='form-label'>
        streetName
        </label>
        <input type ="text"
         className="form-control"
          placeholder='Enter your  streetName'
           name='streetName'
           value={streetName} onChange={(e)=>onInputChange(e)}/>   
       </div>
       <div className='mb-3'>
        <label htmlFor=' pincode' className='form-label'>
       Pincode
        </label>
        <input type ="number" 
        className="form-control" 
        placeholder='Enter your pincode'
         name='pincode'
         value={pincode}
         onChange={(e)=>onInputChange(e)}/>   
       </div>

       <div className='mb-3'>
        <label htmlFor='city' className='form-label'>
       City
        </label>
        <input type ="text" 
        className="form-control" 
        placeholder='Enter your city' 
        name='city'
        value={city}
        onChange={(e)=>onInputChange(e)}/>   
       </div>
       <div className='mb-3'>
        <label htmlFor=' mobileNumber' className='form-label'>
       Mobile Number
        </label>
        <input type ="number" 
        className="form-control"
         placeholder='Enter your mobileNumber'
          name='mobileNumber'
          value={mobileNumber}
          onChange={(e)=>onInputChange(e)}/>   
       </div>
       <div className='mb-3'>
        <label htmlFor=' dob'
         className='form-label'>
       Date Of Birth
        </label>
        <input type ="date" 
        className="form-control" 
        placeholder='Enter your dob'
         name='dob'
         value={dob}
         onChange={(e)=>onInputChange(e)}/>   
       </div>
      
       <button type='submit' className='dsubbtn'>Submit</button>
       <button type='submit' className='dcanbtn'>Cancel</button>
       </form>
      </div>
      
      </div>
        
    </div>
  )
}
