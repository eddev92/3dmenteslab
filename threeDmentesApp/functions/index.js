  var config = {
    apiKey: "AIzaSyA3valHdAH00FqEG5BjqrQid6qfp2jlcOA",
    authDomain: "dmenteslab.firebaseapp.com",
    databaseURL: "https://dmenteslab.firebaseio.com",
    projectId: "dmenteslab",
    storageBucket: "dmenteslab.appspot.com",
    messagingSenderId: "823755930391"
  };
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase)
const nodemailer = require('nodemailer');
const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
const mailTransport = nodemailer.createTransport(`smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);

exports.sendContactMessage = functions.database.ref('/dmenteslab/alumnos/{pushKey}')
  .onWrite(event => {
  const snapshot = event.data;
// Only send email for new messages.
  if (snapshot.previous.val() || !snapshot.val().name) {
    return;
  }
  
  let val = snapshot.val();
  
  let mailOptions = {
    to: 'llanca872@gmail.com',
    subject: `Information Request from ${val.name}`,
    html: val.html
  };

 return mailTransport.sendMail(mailOptions, (error, info) => {
    if ( error) return console.log(error);
     console.log('Mail sent to: edwarllanca@hotmail.com');
  })

});