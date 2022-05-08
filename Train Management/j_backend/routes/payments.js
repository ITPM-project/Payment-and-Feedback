const router = require("express").Router();
let Payment = require("../models/Payment");

router.route("/add").post((req,res)=>{

    const custormer_id = req.body.custormer_id;
    const custormer_name = req.body.custormer_name;
    const custormer_phone = req.body.custormer_phone;
    const card_num = Number(req.body.card_num);
    //const ser_obtain = req.body.ser_obtain;
    const amount = Number(req.body.amount);
    const pay_method = req.body.pay_method;
    const date = req.body.date;
    const month = req.body.month;
    const year = req.body.year;
    const cvc = req.body.cvc;
  

    const newPayment = new Payment({

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

    })

    newPayment.save().then(()=>{
        res.json("Custormer Added")
    }).catch((err)=>{
        console.log(err);
    })


})

router.route("/").get((req,res)=>{
    Payment.find().then((payments)=>{
        res.json(payments)
    }).catch((err)=>{
        console.log(err);
    })

})


router.route("/update/:id").put(async (req,res) => {
    let billId = req.params.id;
    const {custormer_id, custormer_name, custormer_phone, card_num, ser_obtain, amount, pay_method, date, month, year, cvc} = req.body;

    const updatePayment = {
        
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

    const update = await Payment.findByIdAndUpdate(billId, updatePayment)
    .then(() => {
        res.status(200).send({status: "Bill updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
   
})

/*
router.route("/delete/:id").delete(async (req,res) => {
    let billId = req.params.id;

    await Payment.findByIdAndDelete(billId)
    .then(() => {
        res.status(200).send({status: "Bill deleted"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with delete bill", error: err.message});
    })
})
*/

router.route("/delete/:id").delete((req,res)=>{

    let billId = req.params.id;

    Payment.findByIdAndDelete(billId).then(()=>{
        res.json("Delete Successfully");
    }).catch((err)=>{
        console.log(err);
    })

})




router.route("/get/:id").get(async (req,res) => {
    let billId = req.params.id;
    await Payment.findById(billId).then((payment) => {
        //res.status(200).send({status: "Bill fetched", payment})
        res.json(payment);
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with get bill", error: err.message});
    })
    
})


module.exports = router;