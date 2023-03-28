// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handle(req: NextApiRequest, res: NextApiResponse) { 
// eslint-disable-next-line
const nodemailer = require('nodemailer');  
  const transporter = nodemailer.createTransport({
   service: 'gmail',
    auth: {
      user: 'vishal.greenbowl@gmail.com',
      pass: 'greenbowl23',
    },
    // secure: false,
  //   tls: {
  //     rejectUnauthorized: false
  // }
  })
  const mailData = {
    from: 'vishal.greenbowl@gmail.com',
    to: 'vishalacharya814@gmail.com',
    subject: `Message From greenbowl`,
    text: `${req.body.name} just registered with email ${req.body.email}`,
    html: `<p>${req.body.name} just registered with email ${req.body.email}</p>`
  }
  transporter.sendMail(mailData, function (err:any, info:any) {
    console.log(err);
    
    if(err){    
      res.status(500).json({msg: 'server error'})
    } else {      
      console.log(info);
      
      res.status(200).json({msg: 'success'})
    }
  })
  // res.status(200).json({msg: 'success'})
}