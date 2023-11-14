import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import "../css/DetailsHome.css"
import detailhome from "../images/detailshome.jpg"
export default function Home() {

    const [users,setUsers] = useState([]);

    const {id}=useParams()

    useEffect(()=>{
       loadUsers();
    },[]);

    const loadUsers=async()=>{
        
        const result = await axios.get("http://localhost:8080/getdetails")
        setUsers(result.data)
    } 

    const deleteUser = async(id)=>{
      await axios.delete(`http://localhost:8080/deletedetails/${id}`)
      loadUsers()
    }
  return (
    <div className='main'>
    <div className='container'>
      <img src={detailhome} className='detailshome' alt="detailshome" />
    <div className='py-4'>
    <table class="table table-hover shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Id</th>
      <th scope="col">First_Name</th>
      <th scope="col">Last_Name</th>
      <th scope="col">StreetName</th>
      <th scope="col">Pincode</th>
      <th scope="col">City</th>
      <th scope="col">Mobile Number</th>
      <th scope="col">dob</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((user)=>(
            <tr>
            <th scope="row"></th>
            <td>{user.id}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.streetName}</td>
            <td>{user.pincode}</td>
            <td>{user.city}</td>
            <td>{user.mobileNumber}</td>
            <td>{user.dob}</td>
            <td>
              <div className='Action'>
                <Link  to={`/detailsview/${user.id}`}><button className='dview'>View</button></Link>
                <Link 
                to={`/edituser/${user.id}`}
                ><button className='dedit'>Edit</button></Link>
                
                <button className='ddelete'
                onClick={()=>deleteUser(user.id)}>Delete</button>
              </div>
            </td>
          </tr>
         

        ))
    }
   
  </tbody>
</table>
<Link to="/detailsadd"><button className='dadduser'>Add User</button></Link>
    </div>
    </div>
    </div>
  )
}
