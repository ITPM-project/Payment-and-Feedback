import React, { useState } from 'react';
import axios from "axios";
import swal from 'sweetalert';
import { useHistory } from 'react-router';

export default function AddPayment(){

  let history = useHistory();

    const [custormer_id, setcustormer_id] = useState("");
    const [custormer_name, setcustormer_name] = useState("");
    const [custormer_phone, setcustormer_phone,] = useState("");
    const [card_num, setNo] = useState("");
    //const [ser_obtain, setSO] = useState("");
    const [amount, setAmount] = useState("");
    const [pay_method, setMethod] = useState("");
    const [date, setDate] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [cvc, setcvc] = useState("");

    

    function sendData(e){
      e.preventDefault();
      

      const newPayment ={
        custormer_id,
        custormer_name,
        custormer_phone,
        card_num,
        //ser_obtain,
        amount,
        pay_method,
        date,
        month,
        year,
        cvc
      }

      
       axios.post("http://localhost:8070/payment/add",newPayment).then(()=>{
        swal({

          title: "Success",
  
          text: "Payment Added Successfully!",
  
          icon: "success",
  
          button: "OK"
  
        });
           history.push("/payments");
       }).catch((err)=>{
          alert(err)
       })

    }
   
    return(
      
      <div>
        
      <div className="fun">

       <span> Payment Management </span> 

      </div>
      
       
       <div className="add_pay">
         
           <form onSubmit={sendData}> 
           <center><h1>ADD PAYMENT</h1></center>

              <div className="kl-0">
                  <label for="custormer_id" className="form-label1">Bill ID</label>
                  <input type="text" className="form-control1" id="custormer_id" placeholder="Enter Bill ID" required
                  onChange={(e)=>{
                    setcustormer_id(e.target.value);
                  }}/>
              </div>
              
              <div className="kl-1">
                  <label for="custormer_name" className="form-label1"> Customer Name </label>
                  <input type="text" className="form-control1" id="custormer_name" placeholder="Enter Customer Name" required
                  onChange={(e)=>{
                    setcustormer_name(e.target.value);
                  }}/>
              </div>

              <div className="kl-2">
                  <label for="custormer_phone" className="form-label1">Phone Number</label>
                  <input type="text" className="form-control1" id="custormer_phone" oninvalid="this.setCustomValidity('Please Enter Your NIC')" placeholder="Enter Phone Number" maxLength="10" required
                  onChange={(e)=>{
                    setcustormer_phone(e.target.value);
                  }}/>
              </div>

              <div className="kl-3">
                  <label for="card_num" className="form-label1">Card Number</label>
                  <input type="text" className="form-control1" id="card_num" oninvalid="this.setCustomValidity('Please Enter Your Number')" placeholder="Enter Card Number" maxLength="16"  required
                  onChange={(e)=>{
                    setNo(e.target.value);
                  }}/>
              </div>

              <div className="kl-3.1">
                      

                        
                        
                        
              {/*    <label for="ser_obtain" className="form-label">Service Obtain</label>
                  <input type="text" className="form-control" id="ser_obtain" placeholder="Enter Service Obtain" required
                  onChange={(e)=>{
                    setSO(e.target.value);
                  }}/>       */}
              </div>

              <div className="kl-4">
                  <label for="amount" className="form-label1">Amount (Rs :)</label>
                  <input type="text" className="form-control1"  oninvalid="this.setCustomValidity('Please Enter Amount')"id="amount" placeholder="Enter Amount" required
                  onChange={(e)=>{
                    setAmount(e.target.value);
                  }}/>
              </div>

              <div className="kl-5">
                  <label for="pay_method" className="form-label1">Card Type</label>
                  <input type="text" className="form-control1" id="pay_method"  oninvalid="this.setCustomValidity('Please Enter Method')" placeholder="Enter Card Type" required
                  onChange={(e)=>{
                    setMethod(e.target.value);
                  }}/>
              </div>

              <div className="kl-6">

              <label class="form-label1" >Enter Card Expire</label>
            <div class="controls">
              <select class="span"  name="expiry_year" onChange={(e)=>{
                  setDate(e.target.value); }}>
              <option selected>Date</option>
                <option value="1/">1</option>
                <option value="2/">2</option>
                <option value="3/">3</option>
                <option value="4/">4</option>
                <option value="5/">5</option>
                <option value="6/">6</option>
                <option value="7/">7</option>
                <option value="8/">8</option>
                <option value="9/">9</option>
                <option value="10/">10</option>
                <option value="11/">11</option>
                <option value="12/">12</option>
                <option value="13/">13</option>
                <option value="14/">14</option>
                <option value="15/">15</option>
                <option value="16/">16</option>
                <option value="17/">17</option>
                <option value="18/">18</option>
                <option value="19/">19</option>
                <option value="20/">20</option>
                <option value="21/">21</option>
                <option value="22/">22</option>
                <option value="23/">23</option>
                <option value="24/">24</option>
                <option value="25/">25</option>
                <option value="26/">26</option>
                <option value="27/">27</option>
                <option value="28/">28</option>
                <option value="29/">29</option>
                <option value="30/">30</option>
                <option value="31/">31</option>
              </select>
              <select class="span" name="expiry_month" id="expiry_month" onChange={(e)=>{
                  setMonth(e.target.value); }}>
                <option selected>Month</option>
                <option value="01/">January</option>
                <option value="02/">February</option>
                <option value="03/">March</option>
                <option value="04/">April</option>
                <option value="05/">May</option>
                <option value="06/">June</option>
                <option value="07/">July</option>
                <option value="08/">Auguest</option>
                <option value="09/">September</option>
                <option value="10/">Octomber</option>
                <option value="11/">November</option>
                <option value="12/">December</option>
              </select>
              <select class="span" name="expiry_year" onChange={(e)=>{
                  setYear(e.target.value); }}>
              <option selected>Year</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
              </select>
           </div>


              
         {/*         <label for="date" className="form-label">Date</label>
                  <input type="text" className="form-control" id="date" placeholder="Enter Date" required
                  onChange={(e)=>{
                  setDate(e.target.value);      
                  }}/>    */}             
              </div>    

              <div className="kl-7">
                  <label for="cvc" className="form-label1">CVV</label>
                  <input type="password" className="form-control1" id="cvc" placeholder="Enter CVV" maxLength="3"required
                  onChange={(e)=>{
                    setcvc(e.target.value);
                  }}/>                                 
              </div> 
              <br></br>
                  <button type="submit" className="btn0 btn-primary">Add Payment</button><br></br>
           </form>
           <a href="/"><button type="submit" className="btn1 btn-primary">Cancel</button></a>
           
       </div>
      
       </div> 
      
  )

}