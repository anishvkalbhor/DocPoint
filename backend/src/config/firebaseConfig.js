const admin = require('firebase-admin');
const serviceAccount = require('../firebase-adminsdk.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://docpoint-9356a-default-rtdb.firebaseio.com/"
});

const db = admin.firestore();
module.exports = { admin, db };
