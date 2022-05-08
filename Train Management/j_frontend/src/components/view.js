import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {Link,NavLink} from 'react-router-dom';
const User = ()=>{
   const[users, setUsers] = useState({
	   uid: "",
	   uname: "",
	   email:"",
	   password: "",
	   usertype: "",
	   phone: ""
   })
   const {id} = useParams();
   useEffect(() =>{
	   loadUser();
   }, []);
   const loadUser = async() =>{
	   const res = await axios.get(`http://localhost:8070/user/get/${id}`);
	   setUsers(res.data);
   }

    return(

                    <>
      
        <div>
        
                              
                        <div class="content" >
                            <h2  align="center" > User Details </h2><br/>
                            <table class="table">
                          
                          
                            
                          <tr>
                            <td><h3>User ID:</h3></td>
                            <td><h3>{users.uid}</h3></td>
                          </tr>
                          <tr>
                            <td><h3> User Name:</h3></td>
                            <td><h3>{users.uname}</h3></td>
                          </tr>
                          <tr>
                            <td><h3> Email:</h3></td>
                            <td><h3>{users.email}</h3></td>
                          </tr>
                          <tr>
                            <td><h3> Password:</h3></td>
                            <td><h3>********</h3></td>
                          </tr>
                          
                          <tr>
                            <td> <h3>Type:</h3></td>
                            <td><h3>{users.usertype}</h3></td>
                          </tr>
                          <tr>
                            <td> <h3>Phone Number:</h3></td>
                            <td><h3>{users.phone}</h3></td>
                          </tr>

                          <tr>
                            <td>
                                  <br/><h5>If you need,</h5>
                                  <br/>

                                  <Link to={"/List"}>   <button type="submit"  className="btn btn-danger">Back</button></Link>
                                <Link className="edit" to={`/Edit/${users._id}`}> 
                                <button type="submit"  className="btn btn-warning">Update</button>
                                </Link>
                                
                              </td> 
                          </tr>	
                          
                                
                          </table>

                          
                        </div>
                        </div>

                        </>
                            );
                        }

export default User;