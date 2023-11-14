import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link,useNavigate, useParams } from 'react-router-dom';
export default function CartEdit() {

  let navigate = useNavigate()
  
   

  const [user,setUser] = useState({
    id:0,
    productname:"",
    product_cost:"",
    productquantity:"",
  })

  const{id,productname,product_cost,productquantity}=user 

    const onInputChange=(e)=>{
      setUser({...user,[e.target.name]:e.target.value})

    }
    useEffect(()=>{
        loadUser();
    },[]);

    const onSubmit=async(e)=>{
     e.preventDefault();
     await axios.put(`http://localhost:8080/updatecart/${id}`,user)
     navigate("/carthome")
    }
    const loadUser=async()=>{
        const result = await axios.get(`http://localhost:8080/updatecart/${id}`)
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
        <label htmlFor='productname' 
        className='form-label'>
          productname
        </label>
        <input type ="text" 
        className="form-control" 
        placeholder='Enter your productname' 
        name='productname'
        value={productname}
        onChange={(e)=>onInputChange(e)}/>   
       </div>
       <div className='mb-3'>
        <label htmlFor='product_cost' className='form-label'>
        product_cost
        </label>
        <input type ="text"
         className="form-control"
          placeholder='Enter your  product_cost'
           name='product_cost'
           value={product_cost} onChange={(e)=>onInputChange(e)}/>   
       </div>
       <div className='mb-3'>
        <label htmlFor='productquantity' className='form-label'>
        productquantity
        </label>
        <input type ="text"
         className="form-control"
          placeholder='Enter your productquantity' 
          name='productquantity'
          value={productquantity}
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
