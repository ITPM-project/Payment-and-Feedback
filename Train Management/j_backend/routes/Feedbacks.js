const router = require("express").Router();
const { json } = require("body-parser");
let Feedback = require("../models/Feedback");



router.route("/addfeedback").post((req,res)=>{

    const sid= Number(req.body.sid);
    const m_name = req.body.m_name;
    const Email = req.body.Email;
    const e_date = req.body.e_date;
    const message = req.body.message;

    const newFeedback = new Feedback ({

        sid,
        m_name,
        Email,
        e_date,
        message
    })

    newFeedback.save().then(()=>{
        res.json("Feedback Added")
    }).catch((err)=>{
        console.log(err);
    })
})


router.route("/dis").get((req,res)=>{
    Feedback.find().then((Feedbacks)=>{
        res.json(Feedbacks)
    }).catch((err)=>{
        console.log(err)
    })

})


router.route("/up/:id").put(async (req,res) => {
    let SID = req.params.id;
    const {sid, m_name, Email, e_date, message} = req.body;

    const updateFeedback = {
        sid,
        m_name,
        Email,
        e_date,
        message
    }

    const update = await Feedback.findByIdAndUpdate(SID, updateFeedback)
    .then(() => {
        res.status(200).send({status: "Feedback Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating Feedback", error: err.message});
    })    
})

router.route("/remove/:id").delete( (req, res) => {
    let SID = req.params.id;

    Feedback.findByIdAndDelete(SID).then(() => {
        res.json("Feedback deleted");
    }).catch((err) => {
        console.log(err.message);
       
    })
})

router.route("/show/:id").get(async (req, res) => {
    let SID = req.params.id;
     await Feedback.findById(SID).then((feedback) => {
      
        //res.status(200).send({status: "Stock fetched", stock})
        res.json(feedback);
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with get feedback", error: err.message});
    })
})

module.exports = router;