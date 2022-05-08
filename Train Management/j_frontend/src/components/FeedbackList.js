import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from 'sweetalert';


 


const FeedbackList = () => {
  const [users, setUser] = useState([]);
  const[searchTerm, setsearchTerm] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8070/feedback/dis");
    setUser(result.data.reverse());
  };

  const deleteFeedback = async id => {
    await axios.delete(`http://localhost:8070/Feedback/remove/${id}`);
    swal({

      title: "Success",

      text: "Delete Successfully !!",

      icon: "success",

      button: "OK"

    });
    loadUsers();
  };


    
 // };
    return(

      
     <main id="site-main"> 
     
        <div className="container-list">
                   
        <h2 className="h2-user-list"><u> Feedback List </u></h2>
            <div className="box-nav d-flex justify-between">
                <Link className="btn btn-secondary" to={'/dashboard'}>Back TO Home</Link>
               <Link  className="btn btn-primary" to={'/addst'}>
                     <b> Add Feedback </b>
                </Link>

              </div>
              <div   className="search">
              
              <div className=" col-lg-3 mt-2 mb-2 mr-1">
                <input
                className="form-control"
                type="search"
                placeholder="search here"
                name="searchTerm"
              // onChange={this.handleTextSearch}

              onChange={(e)=>{

                setsearchTerm(e.target.value);
   
           }}
                
                
                />
                
              </div>
           </div>   

                <br></br>
                
               <form>
                   <table className="table">
                       <thead className="thead-dark">
                           <tr>
                               
                               <th>Customer ID</th>
                               <th>CustomerName</th>
                               <th>Email</th>
                               <th>Date</th>
                               <th>Message</th>
                               <th>Actions</th>

                            </tr>
                        </thead>
                        <tbody className="tbody">
                        {users.filter(val =>{

                                  if(searchTerm === ""){

                                      return val;

                                  } else if(

                                      val.sid.toLowerCase().includes(searchTerm.toLowerCase())||
                                      val.m_name.toLowerCase().includes(searchTerm.toLowerCase())
                                     
                                      

                                  ){

                                      return val;

                                  }

                                  })
                                                          
                        
                        
                         .map((user, index) => (
                               <tr>
                               
                                <td>{user.sid}</td>
                                <td>{user.m_name}</td>
                                <td>{user.Email}</td>
                                <td>{user.e_date}</td>
                                <td>{user.message}</td>
                                <td>
                                     

                                   <Link class="btn btn-success m-2"  to={`/edits/${user._id}` }>
                                   <b> Edit </b>

                                     
                                  
                                       
                                     </Link>
                                       

                                     
                                     <Link class="btn btn-danger" onClick={() => deleteFeedback(user._id)}>
                                     <b> delete </b>
                                     </Link>
                               
                                     
                                    
                                      
                                </td>
                            </tr>
                              ))}
                        </tbody>
                    </table>
                </form>       

        
        </div>
     </main>   
    )
}

export default FeedbackList;