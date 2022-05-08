import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
const ViewPay = ()=>{
   const[payment, setPayment] = useState({
	custormer_id: "",
    custormer_name: "",
    custormer_phone: "",
	card_num: "",
	ser_obtain: "",
    amount: "",
    pay_method: "",
    date: "",
    month: "",
    year: "",
    cvc: ""
   })
   const {id} = useParams();
   useEffect(() =>{
	   loadUser();
   }, []);
   const loadUser = async() =>{
	   const res = await axios.get(`http://localhost:8070/payment/get/${id}`);
	   setPayment(res.data);
   }

    return(
        <div>
        <div className="fun">
        <span>Payment Management</span>
        </div>
       
 <div class="content" >
     <h2  align="center" > Payment Details </h2><br/>
     <table class="table table-primary ">
	
	 
		
	 <tr>
		<td><h3> Bill ID :</h3></td>
		<td><h3>{payment.custormer_id}</h3></td>
	</tr>
	
	<tr>
		<td><h3> Customer Name :</h3></td>
		<td><h3>{payment.custormer_name}</h3></td>
	</tr>

	<tr>
		<td><h3> Customer Phone Number :</h3></td>
		<td><h3>{payment.custormer_phone}</h3></td>
	</tr>
	
	<tr>
		<td> <h3>Card Number :</h3></td>
		<td><h3>****************</h3></td>
	</tr>
	
	<tr>
		<td> <h3>Amount:</h3></td>
		<td><h3>{payment.amount}</h3></td>
	</tr>
	<tr>
		<td> <h3>Payment Method :</h3></td>
		<td><h3>{payment.pay_method}</h3></td>
	</tr>
    <tr>
		<td> <h3> Card Expire Date :</h3></td>
		<td><h3>**********</h3></td>
	</tr>
    <tr>
		<td> <h3>cvv :</h3></td>
		<td><h3>*********</h3></td>
	</tr>
	</table>
	<tr>
	   <td>
           <br/><h5>If you need,</h5>
			    <br/>
				<Link className="update" to={`/update/${payment._id}`}> 
				<button type="submit" class="update btn btn-warning m-3"><h5><b>Edit Details</b></h5></button>
				</Link>
				
				

				<Link className="feedback_btn" to="/addst" >
				<button type="submit" class="cancel btn btn-success m-3"><h5><b>Add feedback</b></h5></button>
				</Link>

				<Link className="cancel" to="/"> 
				<button type="submit" class="cancel btn btn-danger m-3"><h5><b>Cancel</b></h5></button>
				</Link>
       </td> 
	</tr>	
	 
	 		 	
	

	
 </div>
</div>
    );
}

export default ViewPay;