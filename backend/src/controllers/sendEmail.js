const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
    const auth = nodemailer.createTransport({
        service: "gmail",
        secure : true,
        port : 465,
        auth: {
            user: "alisterfernandes1210@gmail.com",
            pass: "ohmf oxfu omob raeh"

        }
    });

    const receiver = {
        from : '"DOCPOINT" "alisterfernandes1210@gmail.com"',
        to : "alisterfernandes1210@gmail.com",
        subject : "Node Js Mail Testing!",
        text : "Hello this is a text mail!",
        noreply : true,
    };

    auth.sendMail(receiver, (error, emailResponse) => {
        if(error)
        throw error;
        console.log("success!");
        response.end();
    });
    
}
module.exports = sendEmail;

