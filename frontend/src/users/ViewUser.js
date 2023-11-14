import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../css/AddUser.css";
import viewuser from "../images/viewuser.jpg";
function ViewUser() {
    const { id } = useParams();
    const [user,setUser] = useState({
        id:"",
        email:"",
        password:"",
        mobile_Number:"",
        confirm_password:""
    })

    useEffect(() => {
        loadUser();
      }, []);

      const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/getbyid/${id}`);
        setUser(result.data);
      };
  return (
    <div className='lcontainer'>
      <img src={viewuser} alt="viewuser" className="llview"/>
        <div className='row'>
    <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
      <h2 className='text-center m-4'>User Details</h2> 
      <div className='card'>
       <div className='card-header'>
       Details of user id : {user.id}
        <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
               <b>Id:</b> 
               {user.id}
            </li>

            <li className='list-group-item'>
               <b>Email:</b> 
               {user.email}
            </li>

            <li className='list-group-item'>
               <b>Password:</b> 
               {user.password}
            </li>

            <li className='list-group-item'>
               <b>mobile_Number:</b> 
               {user.mobile_Number}
            </li>

            <li className='list-group-item'>
               <b>confirm_password:</b> 
               {user.confirm_password}
            </li>
        </ul>
      </div> 
      </div>
      <Link className='btn btn-primary my-2' to={"/loginhome"}>
        Back to Home
      </Link>
      </div>
      </div>
      </div>
  )
}

export default ViewUser