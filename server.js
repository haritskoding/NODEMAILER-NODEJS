require("dotenv").config()
const nodemailer = require("nodemailer");

//STEP 1
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

let mailOptions = {
    from: "magurodev3@gmail.com",
    to: "areris981@gmail.com,magurodev3@gmail.com",
    subject: "Testing and testing",
    text: "IT Really worked",
    // attachments: [
    //     {filename:"picture.jpg",path:"./picture.jpg"}
    // ]
}

//STEP 3
transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
        console.log('Errors occurs', err)
    } else {
        console.log('Email sent !!!')
    }
});