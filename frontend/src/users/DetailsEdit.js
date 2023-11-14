import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
export default function EditUser() {

  let navigate = useNavigate()
  
 

  const [user,setUser] = useState({
    id:0,
    first_name:"",
    last_name:"",
    streetName:"",
    pincode:0,
    city:"",
    mobileNumber:0,
    dob:""

  })

  const{
    id,
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
    useEffect(()=>{
        loadUser();
    },[]);

    const onSubmit=async(e)=>{
     e.preventDefault();
     await axios.put(`http://localhost:8080/updatedetails/${id}`,user)
     navigate("/home")
    }
    const loadUser=async()=>{
        const result = await axios.get(`http://localhost:8080/updatedetails/${id}`)
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
        <label htmlFor='first_name' 
        className='form-label'>
          first_name
        </label>
        <input type ="text" 
        className="form-control" 
        placeholder='Enter your first_name' 
        name='first_name'
        value={first_name}
        onChange={(e)=>onInputChange(e)}/>   
       </div>
       <div className='mb-3'>
        <label htmlFor='  last_name' className='form-label'>
        last_name
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
          placeholder='Enter your streetName' 
          name='streetName'
          value={streetName}
          onChange={(e)=>onInputChange(e)}/>   
       </div>
       <div className='mb-3'>
        <label htmlFor=' pincode' className='form-label'>
       pincode
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
       mobileNumber
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
       dob
        </label>
        <input type ="date" 
        className="form-control" 
        placeholder='Enter your dob'
         name='dob'
         value={dob}
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
