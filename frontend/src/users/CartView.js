import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../css/CartAdd.css";
import cartview from "../images/cartview.jpg"
function CartView() {
    const { id } = useParams();
    const [user,setUser] = useState({
        id:"",
        productname:"",
        product_cost:"",
        productquantity:"",
    })

    useEffect(() => {
        loadUser();
      }, []);

      const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/getcartdata/${id}`);
        setUser(result.data);
      };
  return (
    <div className='container'>
      <img src={cartview} className='cartview' alt="logo"/>
        <div className='row'>
    <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
      <h2 className='text-center m-4'>Product Details</h2> 
      <div className='card'>
       <div className='card-header'>
       Details of product id : {user.id}
        <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
               <b>Id:</b> 
               {user.id}
            </li>

            <li className='list-group-item'>
               <b>Product Name:</b> 
               {user.productname}
            </li>

            <li className='list-group-item'>
               <b>Product Cost:</b> 
               {user.product_cost}
            </li>

            <li className='list-group-item'>
               <b>Product Quantity:</b> 
               {user.productquantity}
            </li>

        </ul>
      </div> 
      </div>
      <Link className='btn btn-primary my-2' to={"/carthome"}>
        Back to Home
      </Link>
      </div>
      </div>
      </div>
  )
}

export default CartView