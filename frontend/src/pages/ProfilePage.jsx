import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';

const db = getFirestore();
const auth = getAuth();



function MyComponent() {
  const [data, setData] = useState([]);
  const user = auth.currentUser;
  const userId = user.uid;

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, '{userId}'));
      const newData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setData(newData);
    };

    fetchData();
  }, [userId]);

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default MyComponent;