 import React, {useState,useEffect} from "react"
import axios from "axios";
import { useHistory,useParams } from "react-router-dom";


export default function EditFeedback(){
//EditFeedback
  let history = useHistory();
  const {id} = useParams();
  const [users,setUsers] = useState({
    sid:"",                  
    m_name:"",
    Email:"",
    e_date:"",
    message:""

  })


  
const{sid, m_name, Email, e_date,message}=users;
const onInputChange = e =>{
  setUsers({...users,[e.target.name]:e.target.value});
};
  useEffect(()=> {
    loadUser();
  },[]);
  const onSubmit= async e=>{
    e.preventDefault();
    // setErrors(validation(values));         a
    await axios.put(`http://localhost:8070/feedback/up/${id}`, users)
    //`http://localhost:8070/feedback/up/${id}`   
    history.push("/sview");
    //    history.push("/sview"); 
  };
  
  
  const loadUser = async ()=> {
      const result =await axios.get(`http://localhost:8070/feedback/show/${id}`);
      //`http://localhost:8070/stock/push/${id}`           
      setUsers(result.data);
    };



    return(
      <div className="container">
        <h1>» Edit Feedback Form</h1>


        <div className="container">
            <form onSubmit={e => onSubmit(e)}>

    
              <div className="mb-3">
                <label for="sid">Customer ID</label>
                <input type="text" className="form-control" id="sid" placeholder="Customer ID" name="s_id" value ={sid} onChange={(e)=> onInputChange(e)
                }/>

     
   </div>

   <div className="mb-3">
                <label for="m_name" >Customer Name</label>
                <input type="text" className="form-control" id="m_name" placeholder="Enter Customer Name" name="m_name" value ={m_name} onChange={(e)=> onInputChange(e)
                }/>

    </div>


    <div className="mb-3">
                <label for="Email" >Email</label>
                <input type="text" className="form-control" id="Email" placeholder="Enter Email Address" name="Email" value ={Email} onChange={(e)=> onInputChange(e)
                }/>

    </div>

    <div className="mb-3">
                <label for=" e_date" > Date</label>
                <input type="text" className="form-control" id=" e_date" placeholder="Enter Date" name=" e_date" value ={e_date} onChange={(e)=> onInputChange(e)
                }/>

    </div>
    



 <div className="mb-3">
                <label for="m_name" >Edit Message</label>
                <input type="text" className="form-control" id="message" placeholder="Enter Enter Message" name="message" value ={message} onChange={(e)=> onInputChange(e)
                }/>

    </div>
     


    
   <button type="submit" class="btn btn-primary">Update Details</button>
 </form>
</div>
</div>
    )
}