import axios from 'axios'
import React,{ useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import loginpg from '../images/loginpg.jpg';
import "../css/AddUser.css";
// import '../pages/Signup.css';
import adduser from "../images/adduser.jpg"
function AddUser() {

    let navigate = useNavigate()

    const [user,setUser] = useState({
        id:"",
        email:"",
        password:"",
        mobile_Number:"",
        confirm_password:""
    })

  const{id,email,password,mobile_Number,confirm_password}=user 

 const onInputChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
 }

const onSubmit=async (e)=>{
  e.preventDefault();
 await axios.post("http://localhost:8080/savelogin",user)
 navigate("/loginhome")
}

  return (
    <div className='container'>
      <img src={adduser} alt='adduser' className='bg-img'/>
      <img src={loginpg} className='app-logo' alt="logo"/>


        <div className='col-md-6 border rounded p-5 app-logo shadow'>
          <h2 className='text-center m-4'>Register User</h2> 
          <form onSubmit={(e)=>onSubmit(e)}>
          <div className='mb-3'>
            <label htmlFor='Name' className='form-label'>
                Id
            </label>
            <input
            type={"number"}
            className='form-control'
            placeholder='Enter your id'
            name='id'
            value={id}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='Email' className='form-label'>
                Email
            </label>
            <input
            type={"text"}
            className='form-control'
            placeholder='Enter your email'
            name='email'
            value={email}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='password' className='form-label'>
                Password
            </label>
            <input
            type={"text"}
            className='form-control'
            placeholder='Enter your password'
            name='password'
            value={password}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='mobile_Number' className='form-label'>
            Mobile Number
            </label>
            <input
            type={"number"}
            className='form-control'
            placeholder='Enter your Mobile Number'
            name='mobile_Number'
            value={mobile_Number}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='confirm_password' className='form-label'>
            Confirm Password
            </label>
            <input
            type={"text"}
            className='form-control'
            placeholder='Enter your Confirm Password'
            name='confirm_password'
            value={confirm_password}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          
          <button type="submit" className='submit'>Submit</button>
          <Link  to="/loginhome"><button className='cancel'>Cancel</button></Link>
          </form> 
        </div>
    </div>
  )
}

export default AddUser