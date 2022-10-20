const User = require('../models/user');
const nodemailer = require('nodemailer');

exports.addUser = async (req, res) => {
    try {
      const user = new User();
  
      user.name = req.body.name
      user.email = req.body.email
      user.phone = req.body.phone
      user.message = req.body.message;
  
      const newUser = await user.save();


      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL, // generated ethereal user
          pass: process.env.APP_PW, // generated ethereal password
        },
      });
      

      let info = await transporter.sendMail({
        from: req.body.email, // sender address
        to: "deepakkumarn086747@gmail.com", // list of receivers
        subject: "Hiring Process", // Subject line
        //   text: "Hello world?", // plain text body
        html: `<p>${newUser}</p>`, // html body
      });

      req.flash('success','Your details sent successfully to deepak mail')
      return res.redirect('/')
      // return req.flash('success','Successfull Detail Upload')
    } catch (error) {
        return req.flash('error','Detail Not Sent')
    }
  };