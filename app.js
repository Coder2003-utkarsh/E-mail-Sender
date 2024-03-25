const nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "da35062e364b49",
        pass: "61e9ae449af1f2"
    }
});

const message = {
    from: "utkarsh063.cse21@kipm.edu.in",
    to: "mvishesh450@gmail.com",
    subject: "Test Email",
    text: "This is a Testing E-mail."
}

transport.sendMail(message, (err, info) => {
    if (err) {
        console.log(err);
    }

    console.log(info);
})