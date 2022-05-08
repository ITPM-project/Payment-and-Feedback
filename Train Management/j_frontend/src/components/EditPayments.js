import React, { useState, useEffect } from 'react';
import axios from "axios";
import {useHistory, useParams} from 'react-router-dom';

import swal from 'sweetalert';



function EditPayment() {


 let history = useHistory();
 const {id} = useParams(); 
 const [users,setUsers]= useState({
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
 });
   
 const{custormer_id, custormer_name, custormer_phone,card_num,ser_obtain,amount, pay_method,date,month,year,cvc} = users;
 const onInputChange = e =>{
   setUsers({...users, [e.target.name]:e.target.value});
 };
   
    
      useEffect(() =>{
    loadUser();
 }, []);    

   const onSubmit = async e =>{
   e.preventDefault();

   await axios.put(`http://localhost:8070/payment/update/${id}`,users)
   swal({

    title: "Success",

    text: "Payment Update Successfully!",

    icon: "success",

    button: "OK"

  });
     history.push('/payments');

     };


     const loadUser = async () =>{

       const result = await axios.get(`http://localhost:8070/payment/get/${id}`);
       setUsers(result.data);
     };

/*
  

  function EditPayment(props) {
  let id = props.match.params.id;

  const [data, setData] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:8070/payment/${id}`).then((res) => {
      setData(res.data);
      console.log(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  },[])

  const onInputChange = e => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };



  function onSubmit() {

    axios.put(`http://localhost:8070/payment/update/${id}`, data).then(()=>{
      alert("Updated successfully"); 
    }).catch((err) => {
      console.log(err);
    })
    window.location.replace('/');
  };
*/

  return (

    <div>

      <div className="fun">

      <span>Payment Management</span>

      </div>

    <div className="add_pay">

    <form onSubmit={e => onSubmit(e)}>
        <center><h1>UPDATE PAYMENT</h1></center>

      {/*  <div className="kl-0">
          <label for="id" className="form-label">Bill ID</label>
          <input type="text" className="form-control" placeholder="Update Bill ID" name="id" value={id} onChange={(e)=>onInputChange(e)} readOnly required  />
        </div> */}

        <div className="kl-0">
          <label for="custormer_id" className="form-label1">Bill ID</label>
          <input type="text" className="form-control1" placeholder="Update Bill ID" name="custormer_id" value={custormer_id} onChange={(e)=>onInputChange(e)} readOnly required  />
        </div>

        <div className="kl-1">
          <label for="custormer_name" className="form-label1">Change Customer Name</label>
          <input type="text" className="form-control1" id="custormer_name" placeholder="Enter Custormer Name" name="Custormer name" value={custormer_name}  onChange={(e)=>onInputChange(e)} required  />
        </div>

        <div className="kl-3">
          <label for="card_num" className="form-label1">Change Card Number</label>
          <input type="text" className="form-control1" id="card_num" placeholder="Enter Card Number" maxLength="16"  name="card_num"  value={card_num}  onChange={(e)=>onInputChange(e)} required  />
        </div>

        <div className="kl-2">
          <label for="custormer_phone" className="form-label1"> Edit Phone Number</label>
          <input type="text" className="form-control1" id="custormer_phone" placeholder="Enter custormer Phone No" maxLength="10"  name="custormer_phone" value={custormer_phone}  onChange={(e)=>onInputChange(e)} required  />
        </div>

       

        

      {/*    <label for="ser_obtain" className="form-label">Service Obtainr</label>
          <input type="text" className="form-control" id="ser_obtain" placeholder="Enter Service Obtain"  name="ser_obtain"  value={ser_obtain}  onChange={(e)=>onInputChange(e)} required  />      */}
        

        <div className="kl-4">
          <label for="amount" className="form-label1">Amount (Rs :)</label>
          <input type="text" className="form-control1" id="amount" placeholder="Enter Amount" name="amount" value={amount}  onChange={(e)=>onInputChange(e)} required  />
        </div>

        <div className="kl-5">
          <label for="pay_method" className="form-label1">Card Type</label>
          <input type="text" className="form-control1" id="pay_method" placeholder="Enter Card type" name="pay_method"  value={pay_method}  onChange={(e)=>onInputChange(e)} required  />
        </div>

        <div className="kl-6">

        <label class="form-label1" >Edit Date </label>
            <div class="controls">
              <select class="span" id="date" name="date" value={date} onChange={(e)=>onInputChange(e)} required>
              <option selected>select Date</option>
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
              <select class="span" id="month" name="month" value={month} onChange={(e)=>onInputChange(e)} required>
                <option selected>select Month</option>
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
              <select class="span" id="year" name="year" value={year} onChange={(e)=>onInputChange(e)} required>
              <option selected>select Year</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </select>

          </div>
              


      {/*    <label for="date" className="form-label">Date</label>
          <input type="text" className="form-control" id="date" placeholder="Enter Date" name="date" value={date}  onChange={(e)=>onInputChange(e)} required />      */}
        </div>

        <div className="kl-7">
          <label for="cvc" className="form-label1">Edit CVV</label>
          <input type="text" className="form-control1" id="cvc" placeholder="Enter CVV" name="cvc"  value={cvc}  onChange={(e)=>onInputChange(e)} required />

        </div>
        <br></br>
        <button type="submit" className="btn0 btn-primary">Update Payment</button><br></br>
      </form>
      <a href="/payments"><button type="submit" className="btn1 btn-primary">Cancel</button></a>
    </div>

</div>


  );


}

export default EditPayment;