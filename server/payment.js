require("dotenv").config();
const express = require("express");
const Razorpay = require("razorpay");

const router = express.Router();

router.post("/orders", async (req, res) => {
  try {
    const { amount } = req.body; // Extracting the amount from the request body
    console.log("/****************************************/");
    console.log(amount);
    console.log("/****************************************/");
    if (!amount) {
      return res.status(400).send("Amount is required");
    }

    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const options = {
      amount: amount * 100, // Using the dynamic amount(in paise) received from the frontend
      currency: "INR",
      receipt: "receipt_order_74394", // You might want to modify this as needed
    };

    const order = await instance.orders.create(options);

    if (!order) {
      return res.status(500).send("Some error occurred");
    }

    res.json(order);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/success", async (req, res) => {
  console.log("Success => ", req.body);
  try {
    console.log("Hello 1");
    // getting the details back from our font-end
    const {
      orderCreationId,
      razorpayPaymentId,
      razorpayOrderId,
      razorpaySignature,
    } = req.body;

    console.log("Hello 2");

    // Checking the legistmecy of the payment using the signature provided by the vendor

    // Creating our own digest
    // The format should be like this:
    // digest = hmac_sha256(orderCreationId + "|" + razorpayPaymentId, secret);
    // const shasum = crypto.createHmac("sha256", "axaLnRgHuG2WHj8NIUH2GRwX");

    // shasum.update(`${orderCreationId}|${razorpayPaymentId}`);

    // const digest = shasum.digest("hex");

    // console.log("Hello 3");
    // // comaparing our digest with the actual signature
    // if (digest !== razorpaySignature)
    //   return res.status(400).json({ msg: "Transaction not legit!" });

    // THE PAYMENT IS LEGIT & VERIFIED
    // YOU CAN SAVE THE DETAILS IN YOUR DATABASE IF YOU WANT

    console.log("Hello 4");
    res.json({
      msg: "success",
      orderId: razorpayOrderId,
      paymentId: razorpayPaymentId,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
