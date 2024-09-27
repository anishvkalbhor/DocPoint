const { db } = require('../config/firebaseConfig');

class User {
  static async getAll() {
    const snapshot = await db.collection('users').get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  static async getById(id) {
    const doc = await db.collection('users').doc(id).get();
    return { id: doc.id, ...doc.data() };
  }

  static async create(data) {
    const docRef = await db.collection('users').add(data);
    return { id: docRef.id, ...data };
  }

  static async update(id, data) {
    await db.collection('users').doc(id).update(data);
    return { id, ...data };
  }

  static async delete(id) {
    await db.collection('users').doc(id).delete();
  }
}

module.exports = User;