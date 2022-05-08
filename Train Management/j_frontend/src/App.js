import React from 'react';

import Header from './components/header';

import Footer from './components/footer';

import './CSS/header_footer.css';

import './CSS/payment.css';
import AddPayment from './components/AddPayment';
import AllPayment from './components/AllPayments';
import ViewPay from './components/viewpay';
import EditPayment from './components/EditPayments';
import ViewPayment from './components/ViewPayment';

import userpay from './components/AddUserPayment';

import User from './components/view';


 
import './CSS/FirstOne.css';


import './CSS/sahan.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import EditFeedback from './components/EditFeedback';
import AddFeedback from './components/AddFeedback';
import FeedbackList from './components/FeedbackList';



function App(props) {
  return (
    <Router>
    <div className="App">
       <Header/>
      
       <Switch>
       <Route path="/sview" exact component={FeedbackList}/>
        
        <Route path="/addst" exact component={AddFeedback}/>
       
        <Route path="/edits/:id" exact component={EditFeedback}/>
      
       <Route path="/add" exact component={AddPayment} />   
        <Route path="/payments" exact component={AllPayment} /> 
        <Route path="/viewpay/:id" exact component={ViewPay} /> 
        <Route path="/update/:id" exact component={EditPayment} />
        <Route path="/get/:id" exact component={ViewPayment} />   
        <Route path="/userpay" exact component={userpay} />  
        
        <Route exact path="/users/:id" component={User} />
        
        
        <Route path="/viewpay/:id" exact component={ViewPay} /> 

        
        

       </Switch>
       <Footer/>
       
    </div>
    </Router>
  );
}

export default App;
