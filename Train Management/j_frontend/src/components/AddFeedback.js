import React, {useState} from "react"
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

export default function AddFeedback(){

let history= useHistory();

  const [sid, setSid] = useState("");
  const [m_name, setM_name] = useState("");
  const [Email, setS_email] = useState("");
  const [e_date, setE_date] = useState("");
  const [message, setMessage] = useState("");


  function sendData(e){
    e.preventDefault();
   
       
        const newFeedback ={

         
 	   sid,
     m_name,
     Email,
     e_date,
     message

        }

        axios.post("http://localhost:8070/feedback/addfeedback",newFeedback).then(()=>{
          alert("Feedback Added");
          history.push("/sview");
      }).catch((err)=>{
          alert(err)
      })
  }

    return(

      <div className="container">
        <h1> » Add Feedback</h1>

        <div>

<div className="container">
            <form onSubmit={sendData}>
              <div className="mb-3">
                <label for="sid" >Customer ID</label>
                <input type="text" className="form-control" id="sid" placeholder="Enter Customer ID" onChange={(e)=>{

                  setSid(e.target.value);
                }}/>

     
   </div>

   <div className="mb-3">
                <label for="m_name" >Customer Name</label>
                <input type="text" className="form-control" id="m_name" placeholder="Enter Customer Name" onChange={(e)=>{

                  setM_name(e.target.value);
                }}/>

    </div>


    <div className="mb-3">
                <label for="Email" >Email</label>
                <input type="text" className="form-control" id="Email" placeholder="Enter Email Address" onChange={(e)=>{

                  setS_email(e.target.value);
                }}/>

    </div>

    <div className="mb-3">
                <label for="e_date" > Date</label>
                <input type="date" className="form-control" id="e_date" placeholder="Enter Date" onChange={(e)=>{

                  setE_date(e.target.value);
                }}/>

    </div>

    <div className="mb-3">
                <label for="message" >Enter Message</label>
                <input type="text" className="form-control" id="message" placeholder="Enter Message " onChange={(e)=>{

                  setMessage(e.target.value);
                }}/>

    </div>



    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
   <button type="submit" class="btn btn-primary me-md-2">Add Feedback</button>
   <Link to= {"/sview"}>
      
   <button type="submit" class="btn btn-warning">Back</button>
   </Link>
   </div>
 </form>
</div>
        </div>
        </div>

    )
}
