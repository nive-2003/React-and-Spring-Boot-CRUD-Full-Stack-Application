import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import carthome from "../images/carthome.jpg"
import "../css/CartHome.css";
function CartHome() {
  const [users,setUsers] = useState([]);

  useEffect(()=>{
   loadUsers();
  },[]);

  const loadUsers = async()=>{
    const result = await axios.get("http://localhost:8080/getcart")
    setUsers(result.data);
  }

  const deleteUser = async(id)=>{
    await axios.delete(`http://localhost:8080/deletecart/${id}`)
    loadUsers()
  }

  return (
    <div>
      
      <table className="table">
       <img src={carthome} className='carthome' alt="logo"/> 
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Id</th>
      <th scope="col">Product Name</th>
      <th scope="col">Product Cost</th>
      <th scope="col">Product Quantity</th>
      <th scope="col">Actions</th>
    </tr>

  </thead>
  <tbody>
    {users.map((user,index) => (
      <tr>
     <th scope="row" key={index}>
      {/* {index} */}
     </th>
     <td>{user.id}</td>
     <td>{user.productname}</td>
     <td>{user.product_cost}</td>
     <td>{user.productquantity}</td>

      <Link to={`/cartview/${user.id}`} ><button className="cviewuser">
         View
       </button></Link>
     <td><Link className='cedit'
     to={`/cartedit/${user.id}`}>
     <button className="cedituser">Edit</button></Link></td>
     <td><button className='cdelete'
     onClick={()=>deleteUser(user.id)}
     >Delete</button></td>
      </tr>

    ))}
    
  
  </tbody>
</table>
<Link to="/cartadd"><button className='cadduser'>Add User</button></Link>

    </div>
   
  )
}

export default CartHome