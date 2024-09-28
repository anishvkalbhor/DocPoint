const app = require('./app');
const port = process.env.PORT || 5173;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
