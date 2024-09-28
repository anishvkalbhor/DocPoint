require('dotenv').config();
const client= require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const sendSMS = async (msg) => {

    let messageOptions = {
        from: process.env.TWILIO_PHONE_NUMBER,
        to: '+918097100920',
        body: msg
    }

    try {
        const message = await client.messages.create(messageOptions);
        console.log(`Message sent successfully with SID: ${message.sid}`);
    } catch (err) {
        console.error('Error sending message:', err.message);
        console.log('Failed to send message');
    }
}

// sendSMS("Hello from DOCPOINT!, Thank you for signing in. We are excited to have you on board. We are here to help you with any questions or concerns you may have. Thank you for choosing DOCPOINT!");
