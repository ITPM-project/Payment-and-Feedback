const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
    sid :{
        type : Number,
        required: true
    },
    m_name :{
        type: String,
        required: true
    },
    Email :{
        type: String,
        required: true
    },
    e_date :{
        type: String,
        required: true
    },
    message :{
        type: String,
        required: true
    }

})

const Feedback = mongoose.model("Feedback",FeedbackSchema);

module.exports = Feedback;