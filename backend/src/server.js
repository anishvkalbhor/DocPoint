const app = require('./app');
const port = process.env.PORT || 3000;

// const sendEmail = require('./controllers/sendEmail');
// const sendMessage = require('./controllers/sendMessage');


app.get('/', (req, res) => {
  res.send('Hello, World! I am a server!');;
});

// app.get('/sendEmail', sendEmail)



const start = async () => {
  try {
    await app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Error starting the server:', error);
  }
};

start();

