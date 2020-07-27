const sgMail = require('@sendgrid/mail');
const { getMaxListeners } = require('../models/task');


sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const sendWelcomeEmail = (email,name)=>{
    sgMail.send({
        to:email,
        from: {
            name:'Task Manager',
            email:'jainanmol5528@gmail.com'
        },
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}
const sendCancelledEmail = (email,name)=>{
    sgMail.send({
        to:email,
        from: {
            name:'Task Manager',
            email:'jainanmol5528@gmail.com'
        },
        subject: 'Sorry to see you leave!',
        text:`Goodbye ${name}. I hope to see you back sometime soon.`
    })
}
module.exports={
    sendWelcomeEmail,
    sendCancelledEmail
}