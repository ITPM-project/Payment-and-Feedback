import React, { useState, useEffect} from 'react';
import axios from "axios";
import {useHistory, useParams} from 'react-router-dom';


 function ViewPayment(){

  let history = useHistory();
  const {id} = useParams();
  const [users,setUsers]= useState({
    custormer_id: "",
    custormer_name: "",
    custormer_phone: "",
    card_num: "",
    amount: "",
    pay_method: "",
    date: "",
    cvc: ""
  });
    
  const{custormer_id, custormer_name, custormer_phone,card_num,amount, pay_method,date, cvc} = users;
  const onInputChange = e =>{
    setUsers({...users, [e.target.name]:e.target.value});
  };
    
     
       useEffect(() =>{
     loadUser();
  }, []);    

    /* const onSubmit = async e =>{
    e.preventDefault();

    await axios.put(`http://localhost:8070/payment/update/${id}`,users)
      history.push('/');

      }; */


      const loadUser = async () =>{

        const result = await axios.get(`http://localhost:8070/payment/get/${id}`);
        setUsers(result.data);
      };

    /* onSubmit={findData} */

    return(

      <div className="add_pay">
         
      <form> 
      <center><h1>VIEW PAYMENT</h1></center>

      {/*   <div className="kl-0">
                  <label for="id" className="form-label">Bill ID</label>
                  <input type="text" className="form-control"  placeholder="Update Bill ID" name="id" value ={id} onChange={(e)=>onInputChange(e)} readOnly required />
    </div> */}

         <div className="kl-01">
          <label for="custormer_id" className="form-label">Custormer name</label>
          <input type="text" className="form-control" placeholder="Update Bill ID" name="custormer_id" value={custormer_id} onChange={(e)=>onInputChange(e)} readOnly required  />
         </div>

         <div className="kl-1">
             <label for="custormer_name" className="form-label">custormer Name</label>
             <input type="text" className="form-control" id="custormer_name" placeholder="Enter custormer_name"  name="custormer_name" value ={custormer_name}  onChange={(e)=>onInputChange(e)} readOnly required />
         </div>

         <div className="kl-2">
             <label for="custormer_phone" className="form-label"> custormer_phone</label>
             <input type="text" className="form-control" id=" custormer_phone" placeholder="Enter  custormer_phone" name=" custormer_phone" value ={ custormer_phone}  onChange={(e)=>onInputChange(e)} readOnly required/>
         </div>

         <div className="kl-3">
             <label for="card_num" className="form-label">card_num</label>
             <input type="text" className="form-control" id="card_num" placeholder="Enter card_num" maxLength="16"  name="card_num" value ={card_num}  onChange={(e)=>onInputChange(e)} readOnly required/>
         </div>

         <div className="kl-4">
             <label for="amount" className="form-label">Amount (Rs :)</label>
             <input type="text" className="form-control" id="amount" placeholder="Enter Amount" name="amount" value ={amount}  onChange={(e)=>onInputChange(e)} readOnly required/>
         </div>

         <div className="kl-5">
             <label for="pay_method" className="form-label">Payment Method</label>
             <input type="text" className="form-control" id="pay_method" placeholder="Enter Payment Method" name="pay_method" value ={pay_method}  onChange={(e)=>onInputChange(e)} readOnly required/>
         </div>

         <div className="kl-6">
             <label for="date" className="form-label">Date</label>
             <input type="text" className="form-control" id="date" placeholder="Enter Date" name="date" value ={date}  onChange={(e)=>onInputChange(e)} readOnly required/>
         </div>

         <div className="kl-7">
             <label for=" cvc" className="form-label">cvv</label>
             <input type="text" className="form-control" id=" cvc" placeholder="Enter  cvc" name=" cvc" value ={ cvc}  onChange={(e)=>onInputChange(e)} readOnly required/>
             
         </div>
         <br></br>
         <button type="submit" className="btn btn-primary">Print Invoice</button><br></br>
                  <a href="/"><button type="submit" className="btn1 btn-primary">Cancel</button></a>
      </form>
  </div>


 
    
    );


}

export default  ViewPayment;