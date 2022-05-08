import React, { useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import { useHistory } from 'react-router';
import { FaChevronCircleDown } from 'react-icons/fa';

export default function AddUserPayment(){

  let history = useHistory();

    const [card_holder_name, setCardHolderName] = useState("");
    const [card_num, setCardNo] = useState("");
    const [date, setDate] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [card_cvv, setCvv] = useState("");

    

    function sendData(e){
      e.preventDefault();
      

      const newUserPayment ={
        card_holder_name,
        card_num,
        date,
        month,
        year,
        card_cvv
      }

      
       axios.post("http://localhost:8070/usercard/upadd",newUserPayment).then(()=>{
        swal({

          title: "Success",
  
          text: "Card Added Successfully!",
  
          icon: "success",
  
          button: "OK"
  
        });
           
       }).catch((err)=>{
          alert(err)
       })

    }


    return(

      <div className="add_userpay">
        <form onSubmit={sendData}> 
           <center><h1><b>Add Payment </b></h1></center>

           <div className="gl-0">
                  <label for="card_holder_name" className="form-label">Card Holder</label>
                  <input type="text" className="form-control" id="card_holder_name" placeholder="Enter Card Holder Name" 
                  onChange={(e)=>{
                    setCardHolderName(e.target.value);
                  }}/>
              </div>
              
              <div className="gl-1">
                  <label for="card_num" className="form-label">Card Number</label>
                  <input type="text" className="form-control" id="card_num" placeholder="Enter Your Card Number" maxLength="12" pattern="[0-9]{5}[0-9]{7}"
                  onChange={(e)=>{
                    setCardNo(e.target.value);
                  }}/>
              </div>
              
              <div className="kl-6">

<label class="form-label1" >DD/MM/YY</label>
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
  <option value="2020">2020</option>
  <option value="2021">2021</option>
  <option value="2022">2022</option>
  <option value="2023">2023</option>
  <option value="2024">2024</option>
  <option value="2025">2025</option>
</select>
</div>
</div>
              


              

              <div className="gl-3">
                  <label for="card_cvv" className="form-label">Enter CVV</label>
                  <input type="password" className="form-control" id="card_cvv"  oninvalid="this.setCustomValidity('Please Enter Card CVV')" placeholder="Enter Card CVV" maxLength="3" pattern=""
                  onChange={(e)=>{
                    setCvv(e.target.value);
                  }}/>
              </div>

              <br></br>
                  <button type="submit" className="btn0 btn-primary">Add Pay</button>
           </form>
           <a href="#"><button type="submit" className="btn1 btn-primary">Cancel</button></a>


       </div>
        

  /*    <div class="row-fluid">
        <center>
      <form class="form-horizontal  mt-5  mb-5"style={{ background:"Grey",width:"35%"}}>
        <fieldset>
          <div id="legend">
            <legend class=" "style={{ color: "black" , fontSize:"50px"}}>Card Insert</legend>
          </div><br />
     
        
          <div class="control-group mt-5"style={{ color: "white" , fontSize:"20px"}}>
            <label class="control-label"  for="username">Card Holder's Name</label>
            <div class="controls">
              <input type="text" id="username" name="username" placeholder="" class="input-xlarge"style={{ color: "black" }}/>
            </div>
          </div>
     
          
          <div class="control-group mt-5"style={{ color: "white" , fontSize:"20px"}}>
            <label class="control-label" for="email">Card Number</label>
            <div class="controls">
              <input type="text" id="email" name="email" placeholder="" class="input-xlarge"style={{ color: "black" }}/>
            </div>
          </div>
     
        
         
     
          
          <div class="control-group mt-5"style={{ color: "white" , fontSize:"20px"}}>
            <label class="control-label"  for="password_confirm">Card CVV</label>
            <div class="controls">
              <input type="password" id="password_confirm" name="password_confirm" placeholder="" class="span2"style={{ color: "black" }}/>
            </div>
          </div>
     
          
          <div class="control-group mt-5"style={{ color: "white" , fontSize:"20px"}}>
            <div class="controls">
              <label class="checkbox mt-2" for="save_card">
                <input type="checkbox" id="save_card" value="option1"/>
                Save card on file?
              </label>
            </div>
          </div>
     
          
          <div class="control-group">
            <div class="controls">
              <button class="btn btn-success mt-5 mb-5"style={{ color: "white" , fontSize:"20px"}}>Pay Now</button>
            </div>
          </div>
     
        </fieldset>
      </form>
      </center>
    </div>    



<div className="gl-2">
                  <label for="card_exdate" className="form-label">Card Expire Date</label><br />
                  <input type="date" className="form-control" id="card_exdate" placeholder="Enter Date" required
                  onChange={(e)=>{
                    setCardEx(e.target.value);      
                  }}/> 
              </div>


*/
    )

}