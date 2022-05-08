const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    

    custormer_id : {
        type : String,
        required: true
    },
    custormer_name : {
        type : String,
        required: true
    },
    custormer_phone : {
        type : String,
        required: true
    },
    card_num : {
        type : Number,
        required: true
    },
    
    amount: {
        type : Number,
        required: true
    },
    pay_method: {
        type : String,
        required: true
    },
    date: {
        type : String,
        required: true
    },
    month: {
        type : String,
        required: true
    },
    year: {
        type : String,
        required: true
    },
    cvc: {
        type : String,
        required: true
    }

   /* date: {

        type: Date,
        
        default: Date.now
        
        }*/


})

const Payment = mongoose.model("Payment",paymentSchema);

module.exports = Payment;